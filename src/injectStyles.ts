/* ─── Auto-injected styles for Orki Checkout Widget ────────────────────────── */

export const WIDGET_CSS = `/* ─── Orki Checkout Widget Styles ────────────────────────────────────────── */

.orki-pay-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 50px;
  padding: 0 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: opacity 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.orki-pay-btn:hover:not(:disabled) {
  opacity: 0.92;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(120, 63, 228, 0.22);
}

.orki-pay-btn:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}

.orki-pay-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

/* Spinner */
.orki-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: orki-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes orki-spin {
  to {
    transform: rotate(360deg);
  }
}

/* Inline Error message */
.orki-inline-error {
  margin-top: 6px;
  font-size: 12px;
  color: #ef4444;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
  text-align: center;
}

/* ─── Modal Overlay ───────────────────────────────────────────────────────── */

.orki-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  animation: orki-fade-in 0.2s ease-out;
  box-sizing: border-box;
}

@keyframes orki-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.orki-modal-container {
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 90vh;
  max-height: 720px;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  animation: orki-scale-up 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;
}

@keyframes orki-scale-up {
  from {
    transform: scale(0.96);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.orki-modal-header {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  background: #f8fafd;
  border-bottom: 1px solid #edf0f7;
  flex-shrink: 0;
}

.orki-modal-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: #334155;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
  letter-spacing: -0.01em;
}

.orki-modal-brand svg {
  color: #783fe4;
}

.orki-modal-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #64748b;
  cursor: pointer;
  transition: all 0.15s ease;
  font-size: 20px;
  line-height: 1;
  padding: 0;
}

.orki-modal-close:hover {
  background: #e2e8f0;
  color: #0f172a;
}

.orki-modal-body {
  position: relative;
  flex: 1;
  width: 100%;
  height: calc(100% - 52px);
  background: #ffffff;
}

.orki-modal-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.orki-modal-loading {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #ffffff;
  z-index: 5;
  color: #64748b;
  font-size: 13.5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
}

.orki-modal-loading .orki-spinner {
  width: 26px;
  height: 26px;
  border-width: 2.5px;
  border-color: #e2e8f0;
  border-top-color: #783fe4;
}

@media (max-width: 520px) {
  .orki-modal-backdrop {
    padding: 0;
  }
  .orki-modal-container {
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    border-radius: 0;
  }
}
`;

export function ensureStylesInjected(): void {
  if (typeof document === 'undefined') return;
  const styleId = 'orki-checkout-widget-styles';
  if (!document.getElementById(styleId)) {
    const styleEl = document.createElement('style');
    styleEl.id = styleId;
    styleEl.textContent = WIDGET_CSS;
    document.head.appendChild(styleEl);
  }
}

// Auto-run on module load if in browser
if (typeof document !== 'undefined') {
  ensureStylesInjected();
}
