import CheckoutWidget from './CheckoutWidget';
import CheckoutModal from './CheckoutModal';
import { CheckoutConfig, DisplayMode, ChargeData, ChargeApiResponse } from './types';
import './CheckoutWidget.css';
declare function mount(element: HTMLElement | string, config: CheckoutConfig): void;
/**
 * Direct programmatic trigger to open checkout without mounting a button
 * Usage: window.orkiCheckout.open({ paylinkId: '...', ... })
 */
declare function openCheckout(config: CheckoutConfig): void;
declare const orkiCheckout: typeof mount & {
    open: typeof openCheckout;
    mount: typeof mount;
};
export { CheckoutWidget, CheckoutModal, orkiCheckout };
export type { CheckoutConfig, DisplayMode, ChargeData, ChargeApiResponse };
export default orkiCheckout;
