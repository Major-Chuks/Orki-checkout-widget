import React, { useEffect, useState } from 'react';

interface CheckoutModalProps {
  checkoutUrl: string;
  onClose: () => void;
  onSuccess?: (event: unknown) => void;
  onError?: (error: unknown) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  checkoutUrl,
  onClose,
  onSuccess,
  onError,
}) => {
  const [iframeLoading, setIframeLoading] = useState(true);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Listen for postMessage from hosted checkout page
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'ORKI_PAYMENT_SUCCESS' || data.event === 'payment.success') {
        onSuccess?.(data.payload || data);
        onClose();
      } else if (data.type === 'ORKI_PAYMENT_ERROR' || data.event === 'payment.error') {
        onError?.(data.payload || data);
      } else if (data.type === 'ORKI_PAYMENT_CANCEL' || data.type === 'ORKI_CLOSE') {
        onClose();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onClose, onSuccess, onError]);

  return (
    <div className="orki-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="orki-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Header */}
        <div className="orki-modal-header">
          <div className="orki-modal-brand">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Orki Secure Checkout</span>
          </div>

          <button
            type="button"
            className="orki-modal-close"
            onClick={onClose}
            aria-label="Close checkout"
          >
            &times;
          </button>
        </div>

        {/* Modal Body / Iframe */}
        <div className="orki-modal-body">
          {iframeLoading && (
            <div className="orki-modal-loading">
              <div className="orki-spinner" />
              <span>Loading secure payment...</span>
            </div>
          )}

          <iframe
            src={checkoutUrl}
            className="orki-modal-iframe"
            title="Orki Checkout"
            allow="payment; camera; clipboard-write"
            onLoad={() => setIframeLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
