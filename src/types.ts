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

  /** Custom merchant metadata attached to the charge */
  metadata?: CheckoutMetadata;

  /** Visual Styling */
  primaryColor?: string;       // Button background color (default #783FE4)
  buttonTextColor?: string;    // Button text color (default #FFFFFF)
  buttonText?: string;         // Button label (default "Pay Now")
  className?: string;          // Custom merchant CSS class
  style?: React.CSSProperties; // Inline styles

  /** Display Behavior */
  display?: DisplayMode;       // 'iframe' (default) or 'new-tab'

  /** Callbacks (Optional) */
  onStartPayment?: () => void;
  onChargeCreated?: (charge: ChargeData) => void;
  onSuccess?: (event: unknown) => void;
  onError?: (error: unknown) => void;
  onClose?: () => void;
}
