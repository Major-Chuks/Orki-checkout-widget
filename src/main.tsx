import { createRoot } from 'react-dom/client';
import CheckoutWidget from './CheckoutWidget';
import CheckoutModal from './CheckoutModal';
import { CheckoutConfig, DisplayMode, ChargeData, ChargeApiResponse } from './types';
import './CheckoutWidget.css';

import { ensureStylesInjected } from './injectStyles';

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
