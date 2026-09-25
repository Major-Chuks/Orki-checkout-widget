import React from 'react';
interface CheckoutModalProps {
    checkoutUrl: string;
    onClose: () => void;
    onSuccess?: (event: unknown) => void;
    onError?: (error: unknown) => void;
}
export declare const CheckoutModal: React.FC<CheckoutModalProps>;
export default CheckoutModal;
