import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CheckoutConfig, ChargeApiResponse } from './types';
import CheckoutModal from './CheckoutModal';
import { ErrorAlertIcon, ErrorCloseIcon } from './icons';
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
  display = 'new-tab',
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
  const popupRef = useRef<Window | null>(null);

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
      } else if (display === 'popup') {
        const width = 460;
        const height = 720;
        const left = Math.max(0, Math.round(window.screenX + (window.outerWidth - width) / 2));
        const top = Math.max(0, Math.round(window.screenY + (window.outerHeight - height) / 2));

        const popup = window.open(
          checkoutUrl,
          'OrkiCheckout',
          `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
        );

        if (!popup || popup.closed || typeof popup.closed === 'undefined') {
          // Fallback to new-tab if browser blocked popup window
          window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
        } else {
          popupRef.current = popup;
          popup.focus();

          const checkClosedInterval = setInterval(() => {
            if (popup.closed) {
              clearInterval(checkClosedInterval);
              popupRef.current = null;
              onClose?.();
              onModalClose?.();
            }
          }, 1000);
        }

        setIsLoading(false);
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

  const handleCloseModal = useCallback(() => {
    setActiveCheckoutUrl(null);
    if (popupRef.current && !popupRef.current.closed) {
      popupRef.current.close();
      popupRef.current = null;
    }
    // User aborted the checkout session; generate a fresh key for next time
    idempotencyKeyRef.current = generateIdempotencyKey();
    onClose?.();
    onModalClose?.();
  }, [onClose, onModalClose]);

  const handlePaymentSuccess = useCallback((event: unknown) => {
    if (popupRef.current && !popupRef.current.closed) {
      popupRef.current.close();
      popupRef.current = null;
    }
    // Payment complete; rotate key for future orders
    idempotencyKeyRef.current = generateIdempotencyKey();
    onSuccess?.(event);
  }, [onSuccess]);

  // Listen for postMessage from hosted checkout page (supports popup postMessage)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'ORKI_PAYMENT_SUCCESS' || data.event === 'payment.success') {
        handlePaymentSuccess(data.payload || data);
      } else if (data.type === 'ORKI_PAYMENT_ERROR' || data.event === 'payment.error') {
        onError?.(data.payload || data);
      } else if (data.type === 'ORKI_PAYMENT_CANCEL' || data.type === 'ORKI_CLOSE') {
        handleCloseModal();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handlePaymentSuccess, handleCloseModal, onError]);

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
    <div className="orki-checkout-container">
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
        <div className="orki-inline-error" role="alert">
          <ErrorAlertIcon className="orki-error-icon" aria-hidden="true" />
          <span className="orki-error-text">{errorMsg}</span>
          <button
            type="button"
            className="orki-error-dismiss"
            onClick={() => setErrorMsg(null)}
            aria-label="Dismiss error"
          >
            <ErrorCloseIcon className="orki-error-close-icon" aria-hidden="true" />
          </button>
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
    </div>
  );
};

export default CheckoutWidget;
