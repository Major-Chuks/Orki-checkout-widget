import React from 'react';
export type DisplayMode = 'iframe' | 'new-tab';
export interface CheckoutMetadata {
    orderId?: string;
    customerReference?: string;
    customerEmail?: string;
    customerName?: string;
    [key: string]: unknown;
}
export interface ChargeData {
    charge_token: string;
    paylink_id: string;
    amount: string;
    price_denomination?: string;
    price_denomination_id?: string;
    status: string;
    amount_paid?: string;
    chain?: string | null;
    tx_hash?: string | null;
    metadata?: CheckoutMetadata;
    checkout_url: string;
    expires_at?: string;
    paid_at?: string | null;
    created_at?: string;
}
export interface ChargeApiResponse {
    msg: string;
    data: ChargeData;
    success: boolean;
    code: number;
}
export interface CheckoutConfig {
    /** The unique paylink ID from Orki */
    paylinkId: string;
    /** Amount to charge (optional if preset on paylink) */
    amount?: string;
    /** Redirect URL after payment completion on hosted checkout */
    redirectUrl?: string;
    redirect_url?: string;
    /** Custom merchant metadata attached to the charge */
    metadata?: CheckoutMetadata;
    /** API Base URL (defaults to "https://api.orki.io") */
    apiUrl?: string;
    /** Visual Styling */
    primaryColor?: string;
    buttonTextColor?: string;
    buttonText?: string;
    className?: string;
    style?: React.CSSProperties;
    /** Display Behavior */
    display?: DisplayMode;
    /** Callbacks (Optional) */
    onStartPayment?: () => void;
    onChargeCreated?: (charge: ChargeData) => void;
    onSuccess?: (event: unknown) => void;
    onError?: (error: unknown) => void;
    onClose?: () => void;
}
