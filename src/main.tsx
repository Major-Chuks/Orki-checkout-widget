import { createRoot } from 'react-dom/client';
import CheckoutWidget from './CheckoutWidget';
import CheckoutModal from './CheckoutModal';
import { CheckoutConfig, DisplayMode, ChargeData, ChargeApiResponse } from './types';
import './CheckoutWidget.css';

const WIDGET_CSS = "/* ─── Orki Checkout Widget Styles ────────────────────────────────────────── */\n\n.orki-pay-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  height: 50px;\n  padding: 0 24px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.2;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);\n  transition: opacity 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;\n  user-select: none;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n\n.orki-pay-btn:hover:not(:disabled) {\n  opacity: 0.92;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(120, 63, 228, 0.22);\n}\n\n.orki-pay-btn:active:not(:disabled) {\n  transform: translateY(1px);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n}\n\n.orki-pay-btn:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n\n/* Spinner */\n.orki-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: currentColor;\n  border-radius: 50%;\n  animation: orki-spin 0.7s linear infinite;\n  display: inline-block;\n  flex-shrink: 0;\n}\n\n@keyframes orki-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n/* Inline Error message */\n.orki-inline-error {\n  margin-top: 6px;\n  font-size: 12px;\n  color: #ef4444;\n  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;\n  text-align: center;\n}\n\n/* ─── Modal Overlay ───────────────────────────────────────────────────────── */\n\n.orki-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  z-index: 999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  animation: orki-fade-in 0.2s ease-out;\n  box-sizing: border-box;\n}\n\n@keyframes orki-fade-in {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.orki-modal-container {\n  position: relative;\n  width: 100%;\n  max-width: 480px;\n  height: 90vh;\n  max-height: 720px;\n  background: #ffffff;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);\n  display: flex;\n  flex-direction: column;\n  animation: orki-scale-up 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n  box-sizing: border-box;\n}\n\n@keyframes orki-scale-up {\n  from {\n    transform: scale(0.96);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.orki-modal-header {\n  height: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 18px;\n  background: #f8fafd;\n  border-bottom: 1px solid #edf0f7;\n  flex-shrink: 0;\n}\n\n.orki-modal-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: #334155;\n  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;\n  letter-spacing: -0.01em;\n}\n\n.orki-modal-brand svg {\n  color: #783fe4;\n}\n\n.orki-modal-close {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: 8px;\n  color: #64748b;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  font-size: 20px;\n  line-height: 1;\n  padding: 0;\n}\n\n.orki-modal-close:hover {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n\n.orki-modal-body {\n  position: relative;\n  flex: 1;\n  width: 100%;\n  height: calc(100% - 52px);\n  background: #ffffff;\n}\n\n.orki-modal-iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  display: block;\n}\n\n.orki-modal-loading {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  background: #ffffff;\n  z-index: 5;\n  color: #64748b;\n  font-size: 13.5px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;\n}\n\n.orki-modal-loading .orki-spinner {\n  width: 26px;\n  height: 26px;\n  border-width: 2.5px;\n  border-color: #e2e8f0;\n  border-top-color: #783fe4;\n}\n\n@media (max-width: 520px) {\n  .orki-modal-backdrop {\n    padding: 0;\n  }\n  .orki-modal-container {\n    max-width: 100%;\n    height: 100%;\n    max-height: 100%;\n    border-radius: 0;\n  }\n}\n";

function ensureStylesInjected() {
  if (typeof document === 'undefined') return;
  const styleId = 'orki-checkout-widget-styles';
  if (!document.getElementById(styleId)) {
    const styleEl = document.createElement('style');
    styleEl.id = styleId;
    styleEl.textContent = WIDGET_CSS;
    document.head.appendChild(styleEl);
  }
}

// ─── Vanilla JS API ───────────────────────────────────────────────────────────

function mount(element: HTMLElement | string, config: CheckoutConfig): void {
  ensureStylesInjected();
  const targetElement = typeof element === 'string' ? document.getElementById(element) : element;

  if (!targetElement) {
    console.error('[OrkiCheckout] Mount target element not found:', element);
    return;
  }

  const root = createRoot(targetElement);
  root.render(<CheckoutWidget {...config} />);
}

/**
 * Direct programmatic trigger to open checkout without mounting a button
 * Usage: window.orkiCheckout.open({ paylinkId: '...', ... })
 */
function openCheckout(config: CheckoutConfig): void {
  ensureStylesInjected();
  const container = document.createElement('div');
  container.id = `orki-checkout-portal-${Date.now()}`;
  document.body.appendChild(container);

  const root = createRoot(container);
  const handleClose = () => {
    config.onClose?.();
    setTimeout(() => {
      root.unmount();
      container.remove();
    }, 100);
  };

  root.render(<CheckoutWidget {...config} autoOpen onModalClose={handleClose} />);
}

const orkiCheckout = Object.assign(mount, {
  open: openCheckout,
  mount,
});

// Expose on window for Vanilla JS / script tag usage
if (typeof window !== 'undefined') {
  (window as unknown as Record<string, unknown>).orkiCheckout = orkiCheckout;
  (window as unknown as Record<string, unknown>).checkoutWidget = orkiCheckout;
}

// ─── React Exports ────────────────────────────────────────────────────────────

export { CheckoutWidget, CheckoutModal, orkiCheckout };
export type { CheckoutConfig, DisplayMode, ChargeData, ChargeApiResponse };
export default orkiCheckout;
