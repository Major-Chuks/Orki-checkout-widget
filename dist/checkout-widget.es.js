import { jsx as o, jsxs as l, Fragment as K } from "react/jsx-runtime";
import { createRoot as $ } from "react-dom/client";
import { useState as v, useEffect as k, useRef as H } from "react";
const P = ({
  checkoutUrl: t,
  onClose: e,
  onSuccess: i,
  onError: r
}) => {
  const [c, N] = v(!0);
  return k(() => {
    const a = (m) => {
      m.key === "Escape" && e();
    };
    return window.addEventListener("keydown", a), () => window.removeEventListener("keydown", a);
  }, [e]), k(() => {
    const a = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = a;
    };
  }, []), k(() => {
    const a = (m) => {
      const n = m.data;
      !n || typeof n != "object" || (n.type === "ORKI_PAYMENT_SUCCESS" || n.event === "payment.success" ? (i == null || i(n.payload || n), e()) : n.type === "ORKI_PAYMENT_ERROR" || n.event === "payment.error" ? r == null || r(n.payload || n) : (n.type === "ORKI_PAYMENT_CANCEL" || n.type === "ORKI_CLOSE") && e());
    };
    return window.addEventListener("message", a), () => window.removeEventListener("message", a);
  }, [e, i, r]), /* @__PURE__ */ o("div", { className: "orki-modal-backdrop", onClick: e, role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ l("div", { className: "orki-modal-container", onClick: (a) => a.stopPropagation(), children: [
    /* @__PURE__ */ l("div", { className: "orki-modal-header", children: [
      /* @__PURE__ */ l("div", { className: "orki-modal-brand", children: [
        /* @__PURE__ */ l(
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
    /* @__PURE__ */ l("div", { className: "orki-modal-body", children: [
      c && /* @__PURE__ */ l("div", { className: "orki-modal-loading", children: [
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
          onLoad: () => N(!1)
        }
      )
    ] })
  ] }) });
}, V = `/* ─── Orki Checkout Widget Styles ────────────────────────────────────────── */

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
function I() {
  if (typeof document > "u") return;
  const t = "orki-checkout-widget-styles";
  if (!document.getElementById(t)) {
    const e = document.createElement("style");
    e.id = t, e.textContent = V, document.head.appendChild(e);
  }
}
typeof document < "u" && I();
function x() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
const Q = "https://sandbox-api.orki.io", W = ({
  paylinkId: t,
  amount: e,
  redirectUrl: i,
  metadata: r,
  primaryColor: c = "#783FE4",
  buttonTextColor: N = "#FFFFFF",
  buttonText: a = "Pay Now",
  className: m = "",
  style: n = {},
  display: Y = "iframe",
  onStartPayment: j,
  onChargeCreated: O,
  onSuccess: R,
  onError: d,
  onClose: C,
  autoOpen: L = !1,
  onModalClose: _
}) => {
  I();
  const [M, y] = v(!1), [b, S] = v(null), [F, U] = v(null), u = H(x());
  k(() => {
    u.current = x();
  }, [t, e, r]);
  const E = async () => {
    var g;
    if (!t) {
      const s = new Error("[OrkiCheckout] paylinkId is required");
      console.error(s), d == null || d(s);
      return;
    }
    y(!0), U(null), j == null || j();
    try {
      const s = `${Q}/api/v1/charges`, p = {
        paylink_id: t
      };
      e && e.trim() !== "" && (p.amount = e), i && i.trim() !== "" && (p.redirect_url = i), r && typeof r == "object" && Object.keys(r).length > 0 && (p.metadata = r);
      const w = await fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Idempotency-Key": u.current
        },
        body: JSON.stringify(p)
      });
      if (!w.ok) {
        const f = await w.json().catch(() => null), G = (f == null ? void 0 : f.msg) || (f == null ? void 0 : f.message) || `Request failed with status ${w.status}`;
        throw new Error(G);
      }
      const h = await w.json();
      if (!h.success || !((g = h.data) != null && g.checkout_url))
        throw new Error(h.msg || "Invalid charge response from server");
      O == null || O(h.data);
      const B = h.data.checkout_url;
      Y === "new-tab" ? (window.open(B, "_blank", "noopener,noreferrer"), y(!1), u.current = x()) : (S(B), y(!1));
    } catch (s) {
      console.error("[OrkiCheckout] Failed to create charge:", s);
      const p = s instanceof Error ? s.message : "Failed to start payment";
      U(p), y(!1), d == null || d(s);
    }
  };
  k(() => {
    L && E();
  }, [L]);
  const z = () => {
    S(null), u.current = x(), C == null || C(), _ == null || _();
  }, A = (g) => {
    u.current = x(), R == null || R(g);
  };
  if (L)
    return b ? /* @__PURE__ */ o(
      P,
      {
        checkoutUrl: b,
        onClose: z,
        onSuccess: A,
        onError: d
      }
    ) : null;
  const q = a || (e ? `Pay $${e}` : "Pay Now");
  return /* @__PURE__ */ l(K, { children: [
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: `orki-pay-btn ${m}`,
        style: {
          backgroundColor: c,
          color: N,
          ...n
        },
        onClick: E,
        disabled: M,
        children: M ? /* @__PURE__ */ l(K, { children: [
          /* @__PURE__ */ o("span", { className: "orki-spinner" }),
          /* @__PURE__ */ o("span", { children: "Processing..." })
        ] }) : q
      }
    ),
    F && /* @__PURE__ */ o("div", { className: "orki-inline-error", title: F, children: F }),
    b && /* @__PURE__ */ o(
      P,
      {
        checkoutUrl: b,
        onClose: z,
        onSuccess: A,
        onError: d
      }
    )
  ] });
};
function T(t, e) {
  I();
  const i = typeof t == "string" ? document.getElementById(t) : t;
  if (!i) {
    console.error("[OrkiCheckout] Mount target element not found:", t);
    return;
  }
  $(i).render(/* @__PURE__ */ o(W, { ...e }));
}
function X(t) {
  I();
  const e = document.createElement("div");
  e.id = `orki-checkout-portal-${Date.now()}`, document.body.appendChild(e);
  const i = $(e), r = () => {
    var c;
    (c = t.onClose) == null || c.call(t), setTimeout(() => {
      i.unmount(), e.remove();
    }, 100);
  };
  i.render(/* @__PURE__ */ o(W, { ...t, autoOpen: !0, onModalClose: r }));
}
const D = Object.assign(T, {
  open: X,
  mount: T
});
typeof window < "u" && (window.orkiCheckout = D, window.checkoutWidget = D);
export {
  P as CheckoutModal,
  W as CheckoutWidget,
  D as default,
  D as orkiCheckout
};
