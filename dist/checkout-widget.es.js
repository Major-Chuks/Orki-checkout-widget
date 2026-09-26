import { jsx as o, jsxs as c, Fragment as R } from "react/jsx-runtime";
import { createRoot as z } from "react-dom/client";
import A, { useState as k, useEffect as _ } from "react";
const E = ({
  checkoutUrl: t,
  onClose: e,
  onSuccess: i,
  onError: a
}) => {
  const [d, f] = k(!0);
  return _(() => {
    const s = (p) => {
      p.key === "Escape" && e();
    };
    return window.addEventListener("keydown", s), () => window.removeEventListener("keydown", s);
  }, [e]), _(() => {
    const s = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = s;
    };
  }, []), _(() => {
    const s = (p) => {
      const r = p.data;
      !r || typeof r != "object" || (r.type === "ORKI_PAYMENT_SUCCESS" || r.event === "payment.success" ? (i == null || i(r.payload || r), e()) : r.type === "ORKI_PAYMENT_ERROR" || r.event === "payment.error" ? a == null || a(r.payload || r) : (r.type === "ORKI_PAYMENT_CANCEL" || r.type === "ORKI_CLOSE") && e());
    };
    return window.addEventListener("message", s), () => window.removeEventListener("message", s);
  }, [e, i, a]), /* @__PURE__ */ o("div", { className: "orki-modal-backdrop", onClick: e, role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ c("div", { className: "orki-modal-container", onClick: (s) => s.stopPropagation(), children: [
    /* @__PURE__ */ c("div", { className: "orki-modal-header", children: [
      /* @__PURE__ */ c("div", { className: "orki-modal-brand", children: [
        /* @__PURE__ */ c(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              /* @__PURE__ */ o("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
              /* @__PURE__ */ o("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
            ]
          }
        ),
        /* @__PURE__ */ o("span", { children: "Orki Secure Checkout" })
      ] }),
      /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: "orki-modal-close",
          onClick: e,
          "aria-label": "Close checkout",
          children: "×"
        }
      )
    ] }),
    /* @__PURE__ */ c("div", { className: "orki-modal-body", children: [
      d && /* @__PURE__ */ c("div", { className: "orki-modal-loading", children: [
        /* @__PURE__ */ o("div", { className: "orki-spinner" }),
        /* @__PURE__ */ o("span", { children: "Loading secure payment..." })
      ] }),
      /* @__PURE__ */ o(
        "iframe",
        {
          src: t,
          className: "orki-modal-iframe",
          title: "Orki Checkout",
          allow: "payment; camera; clipboard-write",
          onLoad: () => f(!1)
        }
      )
    ] })
  ] }) });
}, P = `/* ─── Orki Checkout Widget Styles ────────────────────────────────────────── */

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
function x() {
  if (typeof document > "u") return;
  const t = "orki-checkout-widget-styles";
  if (!document.getElementById(t)) {
    const e = document.createElement("style");
    e.id = t, e.textContent = P, document.head.appendChild(e);
  }
}
typeof document < "u" && x();
const W = !0, Y = async (t, e = "5.00", i) => {
  await new Promise((f) => setTimeout(f, 900));
  const a = `chg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`, d = `https://orki-payment-widget.vercel.app/pay/${a}`;
  return {
    msg: "Charge created successfully.",
    data: {
      charge_token: a,
      paylink_id: t,
      amount: (parseFloat(e || "5.00") || 5).toFixed(8),
      price_denomination: "fiat",
      price_denomination_id: "01kf0etgd9tgvw372wwkw7rzk6",
      status: "pending",
      amount_paid: "0.00000000",
      chain: null,
      tx_hash: null,
      metadata: i || {
        orderId: "ORD-DEMO",
        customerReference: "cust-demo"
      },
      checkout_url: d,
      expires_at: new Date(Date.now() + 30 * 60 * 1e3).toISOString(),
      paid_at: null,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    },
    success: !0,
    code: 200
  };
};
const j = ({
  paylinkId: t,
  amount: e,
  redirectUrl: i,
  redirect_url: a,
  metadata: d,
  apiUrl: f = "https://api.orki.io",
  primaryColor: s = "#783FE4",
  buttonTextColor: p = "#FFFFFF",
  buttonText: r = "Pay Now",
  className: K = "",
  style: B = {},
  display: T = "iframe",
  onStartPayment: g,
  onChargeCreated: y,
  onSuccess: O,
  onError: l,
  onClose: b,
  autoOpen: w = !1,
  onModalClose: v
}) => {
  x();
  const [C, m] = k(!1), [u, M] = k(null), [I, N] = k(null), G = i || a, U = async () => {
    var F;
    if (!t) {
      const n = new Error("[OrkiCheckout] paylinkId is required");
      console.error(n), l == null || l(n);
      return;
    }
    m(!0), N(null), g == null || g();
    try {
      let n;
      if (W && (console.log("[OrkiCheckout] [MOCK MODE] Simulating charge creation for paylink:", t), n = await Y(t, e, d)), !n.success || !((F = n.data) != null && F.checkout_url))
        throw new Error(n.msg || "Invalid charge response from server");
      y == null || y(n.data);
      const h = n.data.checkout_url;
      T === "new-tab" ? (window.open(h, "_blank", "noopener,noreferrer"), m(!1)) : (M(h), m(!1));
    } catch (n) {
      console.error("[OrkiCheckout] Failed to create charge:", n);
      const h = n instanceof Error ? n.message : "Failed to start payment";
      N(h), m(!1), l == null || l(n);
    }
  };
  A.useEffect(() => {
    w && U();
  }, [w]);
  const S = () => {
    M(null), b == null || b(), v == null || v();
  };
  if (w)
    return u ? /* @__PURE__ */ o(
      E,
      {
        checkoutUrl: u,
        onClose: S,
        onSuccess: O,
        onError: l
      }
    ) : null;
  const $ = r || (e ? `Pay $${e}` : "Pay Now");
  return /* @__PURE__ */ c(R, { children: [
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: `orki-pay-btn ${K}`,
        style: {
          backgroundColor: s,
          color: p,
          ...B
        },
        onClick: U,
        disabled: C,
        children: C ? /* @__PURE__ */ c(R, { children: [
          /* @__PURE__ */ o("span", { className: "orki-spinner" }),
          /* @__PURE__ */ o("span", { children: "Processing..." })
        ] }) : $
      }
    ),
    I && /* @__PURE__ */ o("div", { className: "orki-inline-error", title: I, children: I }),
    u && /* @__PURE__ */ o(
      E,
      {
        checkoutUrl: u,
        onClose: S,
        onSuccess: O,
        onError: l
      }
    )
  ] });
};
function L(t, e) {
  x();
  const i = typeof t == "string" ? document.getElementById(t) : t;
  if (!i) {
    console.error("[OrkiCheckout] Mount target element not found:", t);
    return;
  }
  z(i).render(/* @__PURE__ */ o(j, { ...e }));
}
function q(t) {
  x();
  const e = document.createElement("div");
  e.id = `orki-checkout-portal-${Date.now()}`, document.body.appendChild(e);
  const i = z(e), a = () => {
    var d;
    (d = t.onClose) == null || d.call(t), setTimeout(() => {
      i.unmount(), e.remove();
    }, 100);
  };
  i.render(/* @__PURE__ */ o(j, { ...t, autoOpen: !0, onModalClose: a }));
}
const D = Object.assign(L, {
  open: q,
  mount: L
});
typeof window < "u" && (window.orkiCheckout = D, window.checkoutWidget = D);
export {
  E as CheckoutModal,
  j as CheckoutWidget,
  D as default,
  D as orkiCheckout
};
