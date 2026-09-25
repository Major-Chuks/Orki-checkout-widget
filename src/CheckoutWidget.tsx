import React, { useState } from 'react';
import { CheckoutConfig, ChargeApiResponse } from './types';
import CheckoutModal from './CheckoutModal';
import './CheckoutWidget.css';

interface InternalWidgetProps extends CheckoutConfig {
  autoOpen?: boolean;
  onModalClose?: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// MOCK MODE TOGGLE
// Set USE_MOCK to false when the backend /api/v1/charges endpoint goes live.
// ─────────────────────────────────────────────────────────────────────────────
const USE_MOCK = true;

// Simulate backend charge creation with realistic latency
const simulateMockCharge = async (
  paylinkId: string,
  amount: string = '5.00',
  metadata?: Record<string, unknown>
): Promise<ChargeApiResponse> => {
  // Simulate 900ms realistic network latency
  await new Promise((resolve) => setTimeout(resolve, 900));

  const chargeToken = `chg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const checkoutUrl = `https://orki-payment-widget.vercel.app/pay/${chargeToken}`;

  return {
    msg: 'Charge created successfully.',
    data: {
      charge_token: chargeToken,
      paylink_id: paylinkId,
      amount: (parseFloat(amount || '5.00') || 5).toFixed(8),
      price_denomination: 'fiat',
      price_denomination_id: '01kf0etgd9tgvw372wwkw7rzk6',
      status: 'pending',
      amount_paid: '0.00000000',
      chain: null,
      tx_hash: null,
      metadata: metadata || {
        orderId: 'ORD-DEMO',
        customerReference: 'cust-demo'
      },
      checkout_url: checkoutUrl,
      expires_at: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
      paid_at: null,
      created_at: new Date().toISOString(),
    },
    success: true,
    code: 200,
  };
};

// Generate RFC4122 v4 UUID
function generateIdempotencyKey(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const CheckoutWidget: React.FC<InternalWidgetProps> = ({
  paylinkId,
  amount,
  redirectUrl,
  redirect_url,
  metadata,
  apiUrl = 'https://api.orki.io',
  primaryColor = '#783FE4',
  buttonTextColor = '#FFFFFF',
  buttonText = 'Pay Now',
  className = '',
  style = {},
  display = 'iframe',
  onStartPayment,
  onChargeCreated,
  onSuccess,
  onError,
  onClose,
  autoOpen = false,
  onModalClose,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeCheckoutUrl, setActiveCheckoutUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const finalRedirectUrl = redirectUrl || redirect_url;

  const handleInitiatePayment = async () => {
    if (!paylinkId) {
      const err = new Error('[OrkiCheckout] paylinkId is required');
      console.error(err);
      onError?.(err);
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    onStartPayment?.();

    try {
      let resData: ChargeApiResponse;

      if (USE_MOCK) {
        console.log('[OrkiCheckout] [MOCK MODE] Simulating charge creation for paylink:', paylinkId);
        resData = await simulateMockCharge(paylinkId, amount, metadata);
      } else {
        // Live API call (executes when USE_MOCK is set to false)
        const idempotencyKey = generateIdempotencyKey();
        const endpoint = `${apiUrl.replace(/\/+$/, '')}/api/v1/charges`;

        const payload: Record<string, unknown> = {
          paylink_id: paylinkId,
        };

        if (amount && amount.trim() !== '') {
          payload.amount = amount;
        }

        if (finalRedirectUrl && finalRedirectUrl.trim() !== '') {
          payload.redirect_url = finalRedirectUrl;
        }

        if (metadata && typeof metadata === 'object' && Object.keys(metadata).length > 0) {
          payload.metadata = metadata;
        }

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Idempotency-Key': idempotencyKey,
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errJson = await response.json().catch(() => null);
          const message = errJson?.msg || errJson?.message || `Request failed with status ${response.status}`;
          throw new Error(message);
        }

        resData = await response.json();
      }

      if (!resData.success || !resData.data?.checkout_url) {
        throw new Error(resData.msg || 'Invalid charge response from server');
      }

      onChargeCreated?.(resData.data);

      const checkoutUrl = resData.data.checkout_url;

      if (display === 'new-tab') {
        window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
        setIsLoading(false);
      } else {
        // default iframe modal
        setActiveCheckoutUrl(checkoutUrl);
        setIsLoading(false);
      }
    } catch (err: unknown) {
      console.error('[OrkiCheckout] Failed to create charge:', err);
      const message = err instanceof Error ? err.message : 'Failed to start payment';
      setErrorMsg(message);
      setIsLoading(false);
      onError?.(err);
    }
  };

  // If autoOpen is set (e.g. programmatic window.orkiCheckout.open()), trigger immediately
  React.useEffect(() => {
    if (autoOpen) {
      handleInitiatePayment();
    }
  }, [autoOpen]);

  const handleCloseModal = () => {
    setActiveCheckoutUrl(null);
    onClose?.();
    onModalClose?.();
  };

  // If autoOpen is active, only render the modal (no button)
  if (autoOpen) {
    return activeCheckoutUrl ? (
      <CheckoutModal
        checkoutUrl={activeCheckoutUrl}
        onClose={handleCloseModal}
        onSuccess={onSuccess}
        onError={onError}
      />
    ) : null;
  }

  const label = buttonText || (amount ? `Pay $${amount}` : 'Pay Now');

  return (
    <>
      <button
        type="button"
        className={`orki-pay-btn ${className}`}
        style={{
          backgroundColor: primaryColor,
          color: buttonTextColor,
          ...style,
        }}
        onClick={handleInitiatePayment}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className="orki-spinner" />
            <span>Processing...</span>
          </>
        ) : (
          label
        )}
      </button>

      {errorMsg && (
        <div className="orki-inline-error" title={errorMsg}>
          {errorMsg}
        </div>
      )}

      {activeCheckoutUrl && (
        <CheckoutModal
          checkoutUrl={activeCheckoutUrl}
          onClose={handleCloseModal}
          onSuccess={onSuccess}
          onError={onError}
        />
      )}
    </>
  );
};

export default CheckoutWidget;
