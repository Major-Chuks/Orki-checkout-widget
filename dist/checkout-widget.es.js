import { jsx as r, jsxs as h, Fragment as re } from "react/jsx-runtime";
import { createRoot as Z } from "react-dom/client";
import { useState as C, useEffect as w, useRef as P, useCallback as H } from "react";
const q = ({
  checkoutUrl: t,
  onClose: e,
  onSuccess: i,
  onError: o
}) => {
  const [x, A] = C(!0);
  return w(() => {
    const f = (v) => {
      v.key === "Escape" && e();
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [e]), w(() => {
    const f = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = f;
    };
  }, []), w(() => {
    const f = (v) => {
      const s = v.data;
      !s || typeof s != "object" || (s.type === "ORKI_PAYMENT_SUCCESS" || s.event === "payment.success" ? (i == null || i(s.payload || s), e()) : s.type === "ORKI_PAYMENT_ERROR" || s.event === "payment.error" ? o == null || o(s.payload || s) : (s.type === "ORKI_PAYMENT_CANCEL" || s.type === "ORKI_CLOSE") && e());
    };
    return window.addEventListener("message", f), () => window.removeEventListener("message", f);
  }, [e, i, o]), /* @__PURE__ */ r("div", { className: "orki-modal-backdrop", onClick: e, role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ h("div", { className: "orki-modal-container", onClick: (f) => f.stopPropagation(), children: [
    /* @__PURE__ */ h("div", { className: "orki-modal-header", children: [
      /* @__PURE__ */ h("div", { className: "orki-modal-brand", children: [
        /* @__PURE__ */ h(
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
              /* @__PURE__ */ r("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
              /* @__PURE__ */ r("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
            ]
          }
        ),
        /* @__PURE__ */ r("span", { children: "Orki Secure Checkout" })
      ] }),
      /* @__PURE__ */ r(
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
    /* @__PURE__ */ h("div", { className: "orki-modal-body", children: [
      x && /* @__PURE__ */ h("div", { className: "orki-modal-loading", children: [
        /* @__PURE__ */ r("div", { className: "orki-spinner" }),
        /* @__PURE__ */ r("span", { children: "Loading secure payment..." })
      ] }),
      /* @__PURE__ */ r(
        "iframe",
        {
          src: t,
          className: "orki-modal-iframe",
          title: "Orki Checkout",
          allow: "payment; camera; clipboard-write",
          onLoad: () => A(!1)
        }
      )
    ] })
  ] }) });
}, ie = ({
  size: t = 12,
  width: e,
  height: i,
  ...o
}) => /* @__PURE__ */ h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: e ?? t,
    height: i ?? t,
    viewBox: "0 0 12 12",
    fill: "none",
    ...o,
    children: [
      /* @__PURE__ */ r(
        "path",
        {
          d: "M6 11C8.75 11 11 8.75 11 6C11 3.25 8.75 1 6 1C3.25 1 1 3.25 1 6C1 8.75 3.25 11 6 11Z",
          stroke: "#E80E11",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ r("path", { d: "M6 4V6.5", stroke: "#E80E11", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ r("path", { d: "M5.99805 8H6.00254", stroke: "#E80E11", strokeLinecap: "round", strokeLinejoin: "round" })
    ]
  }
), ne = ({
  size: t = 9,
  width: e,
  height: i,
  ...o
}) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: e ?? t,
    height: i ?? t,
    viewBox: "0 0 16 16",
    fill: "none",
    ...o,
    children: /* @__PURE__ */ r(
      "path",
      {
        d: "M15.4238 13.8329C15.6352 14.0442 15.7539 14.3309 15.7539 14.6298C15.7539 14.9286 15.6352 15.2153 15.4238 15.4266C15.2125 15.638 14.9258 15.7567 14.627 15.7567C14.3281 15.7567 14.0414 15.638 13.8301 15.4266L7.87789 9.47258L1.92383 15.4248C1.71248 15.6361 1.42584 15.7548 1.12695 15.7548C0.828065 15.7548 0.541421 15.6361 0.330077 15.4248C0.118732 15.2134 4.45375e-09 14.9268 0 14.6279C-4.45375e-09 14.329 0.118732 14.0424 0.330077 13.831L6.28414 7.87883L0.331951 1.92476C0.120607 1.71342 0.00187504 1.42677 0.00187504 1.12789C0.00187505 0.829003 0.120607 0.542358 0.331951 0.331014C0.543296 0.11967 0.82994 0.000937346 1.12883 0.000937343C1.42771 0.00093734 1.71436 0.11967 1.9257 0.331014L7.87789 6.28508L13.832 0.330076C14.0433 0.118732 14.3299 -4.97944e-09 14.6288 0C14.9277 4.97944e-09 15.2144 0.118732 15.4257 0.330076C15.637 0.541421 15.7558 0.828065 15.7558 1.12695C15.7558 1.42584 15.637 1.71248 15.4257 1.92383L9.47164 7.87883L15.4238 13.8329Z",
        fill: "#E80E11"
      }
    )
  }
), oe = `/* ─── Orki Checkout Widget Styles ────────────────────────────────────────── */

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

/* Container wrapper */
.orki-checkout-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}

/* Inline Error Alert */
.orki-inline-error {
  margin-top: 10px;
  padding: 10px 14px;
  background: #FFE7E7;
  border: 1px solid #FFB5B6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: orki-fade-in 0.2s ease-out;
  box-sizing: border-box;
}

.orki-error-icon {
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  display: block;
}

.orki-error-text {
  flex: 1;
  color: #E80E11;
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
}

.orki-error-dismiss {
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.15s ease;
}

.orki-error-dismiss:hover {
  opacity: 1;
}

.orki-error-close-icon {
  flex-shrink: 0;
  width: 9px;
  height: 9px;
  display: block;
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
function U() {
  if (typeof document > "u") return;
  const t = "orki-checkout-widget-styles";
  if (!document.getElementById(t)) {
    const e = document.createElement("style");
    e.id = t, e.textContent = oe, document.head.appendChild(e);
  }
}
typeof document < "u" && U();
function g() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const e = Math.random() * 16 | 0;
    return (t === "x" ? e : e & 3 | 8).toString(16);
  });
}
const ae = "https://sandbox-api.orki.io", X = ({
  paylinkId: t,
  amount: e,
  redirect_url: i,
  metadata: o,
  primaryColor: x = "#783FE4",
  buttonTextColor: A = "#FFFFFF",
  buttonText: f = "Pay Now",
  className: v = "",
  style: s = {},
  display: $ = "new-tab",
  onStartPayment: z,
  onChargeCreated: B,
  onSuccess: N,
  onError: l,
  onClose: c,
  autoOpen: K = !1,
  onModalClose: d
}) => {
  U();
  const [M, I] = C(!1), [R, Y] = C(null), [D, T] = C(null), y = P(g()), a = P(null), L = P(!1);
  w(() => {
    y.current = g();
  }, [t, e, o]);
  const W = async () => {
    var k;
    if (!t) {
      const u = new Error("[OrkiCheckout] paylinkId is required");
      console.error(u), l == null || l(u);
      return;
    }
    L.current = !1, I(!0), T(null), z == null || z();
    try {
      const u = `${ae}/api/v1/charges`, n = {
        paylink_id: t
      };
      e && e.trim() !== "" && (n.amount = e), i && i.trim() !== "" && (n.redirect_url = i), o && typeof o == "object" && Object.keys(o).length > 0 && (n.metadata = o);
      const _ = await fetch(u, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Idempotency-Key": y.current
        },
        body: JSON.stringify(n)
      });
      if (!_.ok) {
        const p = await _.json().catch(() => null), S = (p == null ? void 0 : p.msg) || (p == null ? void 0 : p.message) || `Request failed with status ${_.status}`;
        throw new Error(S);
      }
      const E = await _.json();
      if (!E.success || !((k = E.data) != null && k.checkout_url))
        throw new Error(E.msg || "Invalid charge response from server");
      B == null || B(E.data);
      const F = E.data.checkout_url;
      if ($ === "new-tab") {
        const p = window.open(F, "_blank");
        if (p) {
          a.current = p;
          const S = setInterval(() => {
            p.closed && (clearInterval(S), a.current === p && (a.current = null), L.current || (c == null || c(), d == null || d()));
          }, 1e3);
        }
        I(!1), y.current = g();
      } else if ($ === "popup") {
        const J = Math.max(0, Math.round(window.screenX + (window.outerWidth - 460) / 2)), ee = Math.max(0, Math.round(window.screenY + (window.outerHeight - 720) / 2)), m = window.open(
          F,
          "OrkiCheckout",
          `width=460,height=720,left=${J},top=${ee},resizable=yes,scrollbars=yes`
        );
        if (!m || m.closed || typeof m.closed > "u") {
          const b = window.open(F, "_blank");
          if (b) {
            a.current = b;
            const te = setInterval(() => {
              b.closed && (clearInterval(te), a.current === b && (a.current = null), L.current || (c == null || c(), d == null || d()));
            }, 1e3);
          }
        } else {
          a.current = m, m.focus();
          const b = setInterval(() => {
            m.closed && (clearInterval(b), a.current === m && (a.current = null), L.current || (c == null || c(), d == null || d()));
          }, 1e3);
        }
        I(!1), y.current = g();
      } else
        Y(F), I(!1);
    } catch (u) {
      console.error("[OrkiCheckout] Failed to create charge:", u);
      const n = u instanceof Error ? u.message : "Failed to start payment";
      T(n), I(!1), l == null || l(u);
    }
  };
  w(() => {
    K && W();
  }, [K]);
  const O = H(() => {
    Y(null), a.current && !a.current.closed && (a.current.close(), a.current = null), y.current = g(), c == null || c(), d == null || d();
  }, [c, d]), j = H((k) => {
    L.current = !0, a.current && !a.current.closed && (a.current.close(), a.current = null), y.current = g(), N == null || N(k);
  }, [N]);
  if (w(() => {
    const k = (u) => {
      const n = u.data;
      !n || typeof n != "object" || (n.type === "ORKI_PAYMENT_SUCCESS" || n.event === "payment.success" ? j(n.payload || n) : n.type === "ORKI_PAYMENT_ERROR" || n.event === "payment.error" ? l == null || l(n.payload || n) : (n.type === "ORKI_PAYMENT_CANCEL" || n.type === "ORKI_CLOSE") && O());
    };
    return window.addEventListener("message", k), () => window.removeEventListener("message", k);
  }, [j, O, l]), K)
    return R ? /* @__PURE__ */ r(
      q,
      {
        checkoutUrl: R,
        onClose: O,
        onSuccess: j,
        onError: l
      }
    ) : null;
  const Q = f || (e ? `Pay $${e}` : "Pay Now");
  return /* @__PURE__ */ h("div", { className: "orki-checkout-container", children: [
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: `orki-pay-btn ${v}`,
        style: {
          backgroundColor: x,
          color: A,
          ...s
        },
        onClick: W,
        disabled: M,
        children: M ? /* @__PURE__ */ h(re, { children: [
          /* @__PURE__ */ r("span", { className: "orki-spinner" }),
          /* @__PURE__ */ r("span", { children: "Processing..." })
        ] }) : Q
      }
    ),
    D && /* @__PURE__ */ h("div", { className: "orki-inline-error", role: "alert", children: [
      /* @__PURE__ */ r(ie, { className: "orki-error-icon", "aria-hidden": "true" }),
      /* @__PURE__ */ r("span", { className: "orki-error-text", children: D }),
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: "orki-error-dismiss",
          onClick: () => T(null),
          "aria-label": "Dismiss error",
          children: /* @__PURE__ */ r(ne, { className: "orki-error-close-icon", "aria-hidden": "true" })
        }
      )
    ] }),
    R && /* @__PURE__ */ r(
      q,
      {
        checkoutUrl: R,
        onClose: O,
        onSuccess: j,
        onError: l
      }
    )
  ] });
};
function G(t, e) {
  U();
  const i = typeof t == "string" ? document.getElementById(t) : t;
  if (!i) {
    console.error("[OrkiCheckout] Mount target element not found:", t);
    return;
  }
  Z(i).render(/* @__PURE__ */ r(X, { ...e }));
}
function se(t) {
  U();
  const e = document.createElement("div");
  e.id = `orki-checkout-portal-${Date.now()}`, document.body.appendChild(e);
  const i = Z(e), o = () => {
    var x;
    (x = t.onClose) == null || x.call(t), setTimeout(() => {
      i.unmount(), e.remove();
    }, 100);
  };
  i.render(/* @__PURE__ */ r(X, { ...t, autoOpen: !0, onModalClose: o }));
}
const V = Object.assign(G, {
  open: se,
  mount: G
});
typeof window < "u" && (window.orkiCheckout = V, window.checkoutWidget = V);
export {
  q as CheckoutModal,
  X as CheckoutWidget,
  V as default,
  V as orkiCheckout
};
