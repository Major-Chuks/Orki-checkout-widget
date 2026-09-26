import React, { useState, useRef, useEffect } from 'react';
import { CheckoutConfig, ChargeApiResponse } from './types';
import CheckoutModal from './CheckoutModal';
import './CheckoutWidget.css';
import { ensureStylesInjected } from './injectStyles';

interface InternalWidgetProps extends CheckoutConfig {
  autoOpen?: boolean;
  onModalClose?: () => void;
}

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

const API_BASE_URL = 'https://sandbox-api.orki.io';

export const CheckoutWidget: React.FC<InternalWidgetProps> = ({
  paylinkId,
  amount,
  redirectUrl,
  metadata,
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
  ensureStylesInjected();
  const [isLoading, setIsLoading] = useState(false);
  const [activeCheckoutUrl, setActiveCheckoutUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Persistent idempotency key across retries for the current checkout session
  const idempotencyKeyRef = useRef<string>(generateIdempotencyKey());

  // Reset idempotency key when order parameters change (new purchase intent)
  useEffect(() => {
    idempotencyKeyRef.current = generateIdempotencyKey();
  }, [paylinkId, amount, metadata]);

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
      const endpoint = `${API_BASE_URL}/api/v1/charges`;

      const payload: Record<string, unknown> = {
        paylink_id: paylinkId,
      };

      if (amount && amount.trim() !== '') {
        payload.amount = amount;
      }

      if (redirectUrl && redirectUrl.trim() !== '') {
        payload.redirect_url = redirectUrl;
      }

      if (metadata && typeof metadata === 'object' && Object.keys(metadata).length > 0) {
        payload.metadata = metadata;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Idempotency-Key': idempotencyKeyRef.current,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => null);
        const message = errJson?.msg || errJson?.message || `Request failed with status ${response.status}`;
        throw new Error(message);
      }

      const resData: ChargeApiResponse = await response.json();

      if (!resData.success || !resData.data?.checkout_url) {
        throw new Error(resData.msg || 'Invalid charge response from server');
      }

      onChargeCreated?.(resData.data);

      const checkoutUrl = resData.data.checkout_url;

      if (display === 'new-tab') {
        window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
        setIsLoading(false);
        // Reset key for future orders after opening in new tab
        idempotencyKeyRef.current = generateIdempotencyKey();
      } else {
        // default iframe modal
        setActiveCheckoutUrl(checkoutUrl);
        setIsLoading(false);
      }
    } catch (err: unknown) {
      // NOTE: We deliberately do NOT rotate the idempotency key here so retry clicks reuse the same key!
      console.error('[OrkiCheckout] Failed to create charge:', err);
      const message = err instanceof Error ? err.message : 'Failed to start payment';
      setErrorMsg(message);
      setIsLoading(false);
      onError?.(err);
    }
  };

  // If autoOpen is set (e.g. programmatic window.orkiCheckout.open()), trigger immediately
  useEffect(() => {
    if (autoOpen) {
      handleInitiatePayment();
    }
  }, [autoOpen]);

  const handleCloseModal = () => {
    setActiveCheckoutUrl(null);
    // User aborted the checkout session; generate a fresh key for next time
    idempotencyKeyRef.current = generateIdempotencyKey();
    onClose?.();
    onModalClose?.();
  };

  const handlePaymentSuccess = (event: unknown) => {
    // Payment complete; rotate key for future orders
    idempotencyKeyRef.current = generateIdempotencyKey();
    onSuccess?.(event);
  };

  // If autoOpen is active, only render the modal (no button)
  if (autoOpen) {
    return activeCheckoutUrl ? (
      <CheckoutModal
        checkoutUrl={activeCheckoutUrl}
        onClose={handleCloseModal}
        onSuccess={handlePaymentSuccess}
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
          onSuccess={handlePaymentSuccess}
          onError={onError}
        />
      )}
    </>
  );
};

export default CheckoutWidget;
