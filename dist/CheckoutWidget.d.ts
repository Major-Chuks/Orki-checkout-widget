import React from 'react';
import { CheckoutConfig } from './types';
import './CheckoutWidget.css';
interface InternalWidgetProps extends CheckoutConfig {
    autoOpen?: boolean;
    onModalClose?: () => void;
}
export declare const CheckoutWidget: React.FC<InternalWidgetProps>;
export default CheckoutWidget;
