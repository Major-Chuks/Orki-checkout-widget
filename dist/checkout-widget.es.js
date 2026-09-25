function ic(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xi = { exports: {} }, nl = {}, Gi = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn = Symbol.for("react.element"), sc = Symbol.for("react.portal"), ac = Symbol.for("react.fragment"), cc = Symbol.for("react.strict_mode"), fc = Symbol.for("react.profiler"), dc = Symbol.for("react.provider"), pc = Symbol.for("react.context"), mc = Symbol.for("react.forward_ref"), hc = Symbol.for("react.suspense"), vc = Symbol.for("react.memo"), yc = Symbol.for("react.lazy"), Du = Symbol.iterator;
function gc(e) {
  return e === null || typeof e != "object" ? null : (e = Du && e[Du] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Zi = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ji = Object.assign, qi = {};
function an(e, t, n) {
  this.props = e, this.context = t, this.refs = qi, this.updater = n || Zi;
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bi() {
}
bi.prototype = an.prototype;
function Vo(e, t, n) {
  this.props = e, this.context = t, this.refs = qi, this.updater = n || Zi;
}
var Bo = Vo.prototype = new bi();
Bo.constructor = Vo;
Ji(Bo, an.prototype);
Bo.isPureReactComponent = !0;
var Fu = Array.isArray, es = Object.prototype.hasOwnProperty, Wo = { current: null }, ts = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, t, n) {
  var r, l = {}, o = null, u = null;
  if (t != null) for (r in t.ref !== void 0 && (u = t.ref), t.key !== void 0 && (o = "" + t.key), t) es.call(t, r) && !ts.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var s = Array(i), f = 0; f < i; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: Zn, type: e, key: o, ref: u, props: l, _owner: Wo.current };
}
function kc(e, t) {
  return { $$typeof: Zn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zn;
}
function wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Uu = /\/+/g;
function xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wc("" + e.key) : t.toString(36);
}
function wr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var u = !1;
  if (e === null) u = !0;
  else switch (o) {
    case "string":
    case "number":
      u = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Zn:
        case sc:
          u = !0;
      }
  }
  if (u) return u = e, l = l(u), e = r === "" ? "." + xl(u, 0) : r, Fu(l) ? (n = "", e != null && (n = e.replace(Uu, "$&/") + "/"), wr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (Ho(l) && (l = kc(l, n + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(Uu, "$&/") + "/") + e)), t.push(l)), 1;
  if (u = 0, r = r === "" ? "." : r + ":", Fu(e)) for (var i = 0; i < e.length; i++) {
    o = e[i];
    var s = r + xl(o, i);
    u += wr(o, t, n, s, l);
  }
  else if (s = gc(e), typeof s == "function") for (e = s.call(e), i = 0; !(o = e.next()).done; ) o = o.value, s = r + xl(o, i++), u += wr(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return u;
}
function rr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return wr(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function Sc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null }, Sr = { transition: null }, xc = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: Sr, ReactCurrentOwner: Wo };
function rs() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = { map: rr, forEach: function(e, t, n) {
  rr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return rr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return rr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ho(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = an;
T.Fragment = ac;
T.Profiler = fc;
T.PureComponent = Vo;
T.StrictMode = cc;
T.Suspense = hc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xc;
T.act = rs;
T.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Ji({}, e.props), l = e.key, o = e.ref, u = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, u = Wo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (s in t) es.call(t, s) && !ts.hasOwnProperty(s) && (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var f = 0; f < s; f++) i[f] = arguments[f + 2];
    r.children = i;
  }
  return { $$typeof: Zn, type: e.type, key: l, ref: o, props: r, _owner: u };
};
T.createContext = function(e) {
  return e = { $$typeof: pc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: dc, _context: e }, e.Consumer = e;
};
T.createElement = ns;
T.createFactory = function(e) {
  var t = ns.bind(null, e);
  return t.type = e, t;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: mc, render: e };
};
T.isValidElement = Ho;
T.lazy = function(e) {
  return { $$typeof: yc, _payload: { _status: -1, _result: e }, _init: Sc };
};
T.memo = function(e, t) {
  return { $$typeof: vc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function(e) {
  var t = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = t;
  }
};
T.unstable_act = rs;
T.useCallback = function(e, t) {
  return se.current.useCallback(e, t);
};
T.useContext = function(e) {
  return se.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function(e, t) {
  return se.current.useEffect(e, t);
};
T.useId = function() {
  return se.current.useId();
};
T.useImperativeHandle = function(e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function(e, t) {
  return se.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function(e, t) {
  return se.current.useLayoutEffect(e, t);
};
T.useMemo = function(e, t) {
  return se.current.useMemo(e, t);
};
T.useReducer = function(e, t, n) {
  return se.current.useReducer(e, t, n);
};
T.useRef = function(e) {
  return se.current.useRef(e);
};
T.useState = function(e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function(e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function() {
  return se.current.useTransition();
};
T.version = "18.3.1";
Gi.exports = T;
var Ue = Gi.exports;
const Ec = /* @__PURE__ */ ic(Ue);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _c = Ue, Cc = Symbol.for("react.element"), Nc = Symbol.for("react.fragment"), Pc = Object.prototype.hasOwnProperty, zc = _c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Lc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, t, n) {
  var r, l = {}, o = null, u = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (u = t.ref);
  for (r in t) Pc.call(t, r) && !Lc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Cc, type: e, key: o, ref: u, props: l, _owner: zc.current };
}
nl.Fragment = Nc;
nl.jsx = ls;
nl.jsxs = ls;
Xi.exports = nl;
var I = Xi.exports, os = { exports: {} }, we = {}, us = { exports: {} }, is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(E, P) {
    var L = E.length;
    E.push(P);
    e: for (; 0 < L; ) {
      var H = L - 1 >>> 1, G = E[H];
      if (0 < l(G, P)) E[H] = P, E[L] = G, L = H;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var P = E[0], L = E.pop();
    if (L !== P) {
      E[0] = L;
      e: for (var H = 0, G = E.length, tr = G >>> 1; H < tr; ) {
        var kt = 2 * (H + 1) - 1, Sl = E[kt], wt = kt + 1, nr = E[wt];
        if (0 > l(Sl, L)) wt < G && 0 > l(nr, Sl) ? (E[H] = nr, E[wt] = L, H = wt) : (E[H] = Sl, E[kt] = L, H = kt);
        else if (wt < G && 0 > l(nr, L)) E[H] = nr, E[wt] = L, H = wt;
        else break e;
      }
    }
    return P;
  }
  function l(E, P) {
    var L = E.sortIndex - P.sortIndex;
    return L !== 0 ? L : E.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var u = Date, i = u.now();
    e.unstable_now = function() {
      return u.now() - i;
    };
  }
  var s = [], f = [], h = 1, m = null, p = 3, g = !1, w = !1, k = !1, M = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var P = n(f); P !== null; ) {
      if (P.callback === null) r(f);
      else if (P.startTime <= E) r(f), P.sortIndex = P.expirationTime, t(s, P);
      else break;
      P = n(f);
    }
  }
  function v(E) {
    if (k = !1, d(E), !w) if (n(s) !== null) w = !0, kl(S);
    else {
      var P = n(f);
      P !== null && wl(v, P.startTime - E);
    }
  }
  function S(E, P) {
    w = !1, k && (k = !1, c(N), N = -1), g = !0;
    var L = p;
    try {
      for (d(P), m = n(s); m !== null && (!(m.expirationTime > P) || E && !ce()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, p = m.priorityLevel;
          var G = H(m.expirationTime <= P);
          P = e.unstable_now(), typeof G == "function" ? m.callback = G : m === n(s) && r(s), d(P);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var tr = !0;
      else {
        var kt = n(f);
        kt !== null && wl(v, kt.startTime - P), tr = !1;
      }
      return tr;
    } finally {
      m = null, p = L, g = !1;
    }
  }
  var C = !1, _ = null, N = -1, B = 5, z = -1;
  function ce() {
    return !(e.unstable_now() - z < B);
  }
  function gt() {
    if (_ !== null) {
      var E = e.unstable_now();
      z = E;
      var P = !0;
      try {
        P = _(!0, E);
      } finally {
        P ? Je() : (C = !1, _ = null);
      }
    } else C = !1;
  }
  var Je;
  if (typeof a == "function") Je = function() {
    a(gt);
  };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(), jt = q.port2;
    q.port1.onmessage = gt, Je = function() {
      jt.postMessage(null);
    };
  } else Je = function() {
    M(gt, 0);
  };
  function kl(E) {
    _ = E, C || (C = !0, Je());
  }
  function wl(E, P) {
    N = M(function() {
      E(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, kl(S));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(E) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = p;
    }
    var L = p;
    p = P;
    try {
      return E();
    } finally {
      p = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, P) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var L = p;
    p = E;
    try {
      return P();
    } finally {
      p = L;
    }
  }, e.unstable_scheduleCallback = function(E, P, L) {
    var H = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? H + L : H) : L = H, E) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = L + G, E = { id: h++, callback: P, priorityLevel: E, startTime: L, expirationTime: G, sortIndex: -1 }, L > H ? (E.sortIndex = L, t(f, E), n(s) === null && E === n(f) && (k ? (c(N), N = -1) : k = !0, wl(v, L - H))) : (E.sortIndex = G, t(s, E), w || g || (w = !0, kl(S))), E;
  }, e.unstable_shouldYield = ce, e.unstable_wrapCallback = function(E) {
    var P = p;
    return function() {
      var L = p;
      p = P;
      try {
        return E.apply(this, arguments);
      } finally {
        p = L;
      }
    };
  };
})(is);
us.exports = is;
var Tc = us.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc = Ue, ke = Tc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ss = /* @__PURE__ */ new Set(), Mn = {};
function Mt(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (Mn[e] = t, e = 0; e < t.length; e++) ss.add(t[e]);
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xl = Object.prototype.hasOwnProperty, Oc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $u = {}, Au = {};
function Mc(e) {
  return Xl.call(Au, e) ? !0 : Xl.call($u, e) ? !1 : Oc.test(e) ? Au[e] = !0 : ($u[e] = !0, !1);
}
function Ic(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jc(e, t, n, r) {
  if (t === null || typeof t > "u" || Ic(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function ae(e, t, n, r, l, o, u) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qo = /[\-:]([a-z])/g;
function Ko(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Qo,
    Ko
  );
  te[t] = new ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Qo, Ko);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Qo, Ko);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yo(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (jc(t, n, l, r) && (n = null), r || l === null ? Mc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lr = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), Xo = Symbol.for("react.strict_mode"), Gl = Symbol.for("react.profiler"), as = Symbol.for("react.provider"), cs = Symbol.for("react.context"), Go = Symbol.for("react.forward_ref"), Zl = Symbol.for("react.suspense"), Jl = Symbol.for("react.suspense_list"), Zo = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), fs = Symbol.for("react.offscreen"), Vu = Symbol.iterator;
function dn(e) {
  return e === null || typeof e != "object" ? null : (e = Vu && e[Vu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, El;
function wn(e) {
  if (El === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    El = t && t[1] || "";
  }
  return `
` + El + e;
}
var _l = !1;
function Cl(e, t) {
  if (!e || _l) return "";
  _l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (f) {
        var r = f;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (f) {
        r = f;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var l = f.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; ) i--;
      for (; 1 <= u && 0 <= i; u--, i--) if (l[u] !== o[i]) {
        if (u !== 1 || i !== 1)
          do
            if (u--, i--, 0 > i || l[u] !== o[i]) {
              var s = `
` + l[u].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= u && 0 <= i);
        break;
      }
    }
  } finally {
    _l = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? wn(e) : "";
}
function Dc(e) {
  switch (e.tag) {
    case 5:
      return wn(e.type);
    case 16:
      return wn("Lazy");
    case 13:
      return wn("Suspense");
    case 19:
      return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Cl(e.type, !1), e;
    case 11:
      return e = Cl(e.type.render, !1), e;
    case 1:
      return e = Cl(e.type, !0), e;
    default:
      return "";
  }
}
function ql(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Ft:
      return "Portal";
    case Gl:
      return "Profiler";
    case Xo:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case Jl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case cs:
      return (e.displayName || "Context") + ".Consumer";
    case as:
      return (e._context.displayName || "Context") + ".Provider";
    case Go:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Zo:
      return t = e.displayName || null, t !== null ? t : ql(e.type) || "Memo";
    case be:
      t = e._payload, e = e._init;
      try {
        return ql(e(t));
      } catch {
      }
  }
  return null;
}
function Fc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ql(t);
    case 8:
      return t === Xo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ds(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Uc(e) {
  var t = ds(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(u) {
      r = "" + u, o.call(this, u);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(u) {
      r = "" + u;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = Uc(e));
}
function ps(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ds(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Or(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bl(e, t) {
  var n = t.checked;
  return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Bu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = pt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ms(e, t) {
  t = t.checked, t != null && Yo(e, "checked", t, !1);
}
function eo(e, t) {
  ms(e, t);
  var n = pt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? to(e, t.type, n) : t.hasOwnProperty("defaultValue") && to(e, t.type, pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Wu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function to(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sn = Array.isArray;
function Gt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function no(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Hu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(y(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: pt(n) };
}
function hs(e, t) {
  var n = pt(t.value), r = pt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Qu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ro(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? vs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ur, ys = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ur = ur || document.createElement("div"), ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ur.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function In(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _n = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, $c = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function(e) {
  $c.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), _n[t] = _n[e];
  });
});
function gs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _n.hasOwnProperty(e) && _n[e] ? ("" + t).trim() : t + "px";
}
function ks(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = gs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Ac = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function lo(e, t) {
  if (t) {
    if (Ac[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function oo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var uo = null;
function Jo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var io = null, Zt = null, Jt = null;
function Ku(e) {
  if (e = bn(e)) {
    if (typeof io != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = il(t), io(e.stateNode, e.type, t));
  }
}
function ws(e) {
  Zt ? Jt ? Jt.push(e) : Jt = [e] : Zt = e;
}
function Ss() {
  if (Zt) {
    var e = Zt, t = Jt;
    if (Jt = Zt = null, Ku(e), t) for (e = 0; e < t.length; e++) Ku(t[e]);
  }
}
function xs(e, t) {
  return e(t);
}
function Es() {
}
var Nl = !1;
function _s(e, t, n) {
  if (Nl) return e(t, n);
  Nl = !0;
  try {
    return xs(e, t, n);
  } finally {
    Nl = !1, (Zt !== null || Jt !== null) && (Es(), Ss());
  }
}
function jn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = il(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var so = !1;
if (Ke) try {
  var pn = {};
  Object.defineProperty(pn, "passive", { get: function() {
    so = !0;
  } }), window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn);
} catch {
  so = !1;
}
function Vc(e, t, n, r, l, o, u, i, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var Cn = !1, Mr = null, Ir = !1, ao = null, Bc = { onError: function(e) {
  Cn = !0, Mr = e;
} };
function Wc(e, t, n, r, l, o, u, i, s) {
  Cn = !1, Mr = null, Vc.apply(Bc, arguments);
}
function Hc(e, t, n, r, l, o, u, i, s) {
  if (Wc.apply(this, arguments), Cn) {
    if (Cn) {
      var f = Mr;
      Cn = !1, Mr = null;
    } else throw Error(y(198));
    Ir || (Ir = !0, ao = f);
  }
}
function It(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Cs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Yu(e) {
  if (It(e) !== e) throw Error(y(188));
}
function Qc(e) {
  var t = e.alternate;
  if (!t) {
    if (t = It(e), t === null) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Yu(l), e;
        if (o === r) return Yu(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var u = !1, i = l.child; i; ) {
        if (i === n) {
          u = !0, n = l, r = o;
          break;
        }
        if (i === r) {
          u = !0, r = l, n = o;
          break;
        }
        i = i.sibling;
      }
      if (!u) {
        for (i = o.child; i; ) {
          if (i === n) {
            u = !0, n = o, r = l;
            break;
          }
          if (i === r) {
            u = !0, r = o, n = l;
            break;
          }
          i = i.sibling;
        }
        if (!u) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ns(e) {
  return e = Qc(e), e !== null ? Ps(e) : null;
}
function Ps(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ps(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zs = ke.unstable_scheduleCallback, Xu = ke.unstable_cancelCallback, Kc = ke.unstable_shouldYield, Yc = ke.unstable_requestPaint, Q = ke.unstable_now, Xc = ke.unstable_getCurrentPriorityLevel, qo = ke.unstable_ImmediatePriority, Ls = ke.unstable_UserBlockingPriority, jr = ke.unstable_NormalPriority, Gc = ke.unstable_LowPriority, Ts = ke.unstable_IdlePriority, rl = null, $e = null;
function Zc(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function") try {
    $e.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Oe = Math.clz32 ? Math.clz32 : bc, Jc = Math.log, qc = Math.LN2;
function bc(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Jc(e) / qc | 0) | 0;
}
var ir = 64, sr = 4194304;
function xn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Dr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = n & 268435455;
  if (u !== 0) {
    var i = u & ~l;
    i !== 0 ? r = xn(i) : (o &= u, o !== 0 && (r = xn(o)));
  } else u = n & ~l, u !== 0 ? r = xn(u) : o !== 0 && (r = xn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function ef(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var u = 31 - Oe(o), i = 1 << u, s = l[u];
    s === -1 ? (!(i & n) || i & r) && (l[u] = ef(i, t)) : s <= t && (e.expiredLanes |= i), o &= ~i;
  }
}
function co(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Rs() {
  var e = ir;
  return ir <<= 1, !(ir & 4194240) && (ir = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function nf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function bo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Os(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ms, eu, Is, js, Ds, fo = !1, ar = [], ot = null, ut = null, it = null, Dn = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map(), tt = [], rf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Gu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ot = null;
      break;
    case "dragenter":
    case "dragleave":
      ut = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fn.delete(t.pointerId);
  }
}
function mn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = bn(t), t !== null && eu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function lf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ot = mn(ot, e, t, n, r, l), !0;
    case "dragenter":
      return ut = mn(ut, e, t, n, r, l), !0;
    case "mouseover":
      return it = mn(it, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dn.set(o, mn(Dn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Fn.set(o, mn(Fn.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Fs(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Cs(n), t !== null) {
          e.blockedOn = t, Ds(e.priority, function() {
            Is(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      uo = r, n.target.dispatchEvent(r), uo = null;
    } else return t = bn(n), t !== null && eu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Zu(e, t, n) {
  xr(e) && n.delete(t);
}
function of() {
  fo = !1, ot !== null && xr(ot) && (ot = null), ut !== null && xr(ut) && (ut = null), it !== null && xr(it) && (it = null), Dn.forEach(Zu), Fn.forEach(Zu);
}
function hn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, fo || (fo = !0, ke.unstable_scheduleCallback(ke.unstable_NormalPriority, of)));
}
function Un(e) {
  function t(l) {
    return hn(l, e);
  }
  if (0 < ar.length) {
    hn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ot !== null && hn(ot, e), ut !== null && hn(ut, e), it !== null && hn(it, e), Dn.forEach(t), Fn.forEach(t), n = 0; n < tt.length; n++) r = tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && (n = tt[0], n.blockedOn === null); ) Fs(n), n.blockedOn === null && tt.shift();
}
var qt = Ze.ReactCurrentBatchConfig, Fr = !0;
function uf(e, t, n, r) {
  var l = O, o = qt.transition;
  qt.transition = null;
  try {
    O = 1, tu(e, t, n, r);
  } finally {
    O = l, qt.transition = o;
  }
}
function sf(e, t, n, r) {
  var l = O, o = qt.transition;
  qt.transition = null;
  try {
    O = 4, tu(e, t, n, r);
  } finally {
    O = l, qt.transition = o;
  }
}
function tu(e, t, n, r) {
  if (Fr) {
    var l = po(e, t, n, r);
    if (l === null) Fl(e, t, r, Ur, n), Gu(e, r);
    else if (lf(l, e, t, n, r)) r.stopPropagation();
    else if (Gu(e, r), t & 4 && -1 < rf.indexOf(e)) {
      for (; l !== null; ) {
        var o = bn(l);
        if (o !== null && Ms(o), o = po(e, t, n, r), o === null && Fl(e, t, r, Ur, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Fl(e, t, r, null, n);
  }
}
var Ur = null;
function po(e, t, n, r) {
  if (Ur = null, e = Jo(r), e = Et(e), e !== null) if (t = It(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Cs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ur = e, null;
}
function Us(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Xc()) {
        case qo:
          return 1;
        case Ls:
          return 4;
        case jr:
        case Gc:
          return 16;
        case Ts:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null, nu = null, Er = null;
function $s() {
  if (Er) return Er;
  var e, t = nu, n = t.length, r, l = "value" in rt ? rt.value : rt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var u = n - e;
  for (r = 1; r <= u && t[n - r] === l[o - r]; r++) ;
  return Er = l.slice(e, 1 < r ? 1 - r : void 0);
}
function _r(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function cr() {
  return !0;
}
function Ju() {
  return !1;
}
function Se(e) {
  function t(n, r, l, o, u) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? cr : Ju, this.isPropagationStopped = Ju, this;
  }
  return V(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = cr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = cr);
  }, persist: function() {
  }, isPersistent: cr }), t;
}
var cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ru = Se(cn), qn = V({}, cn, { view: 0, detail: 0 }), af = Se(qn), zl, Ll, vn, ll = V({}, qn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: lu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== vn && (vn && e.type === "mousemove" ? (zl = e.screenX - vn.screenX, Ll = e.screenY - vn.screenY) : Ll = zl = 0, vn = e), zl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ll;
} }), qu = Se(ll), cf = V({}, ll, { dataTransfer: 0 }), ff = Se(cf), df = V({}, qn, { relatedTarget: 0 }), Tl = Se(df), pf = V({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mf = Se(pf), hf = V({}, cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), vf = Se(hf), yf = V({}, cn, { data: 0 }), bu = Se(yf), gf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, kf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, wf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wf[e]) ? !!t[e] : !1;
}
function lu() {
  return Sf;
}
var xf = V({}, qn, { key: function(e) {
  if (e.key) {
    var t = gf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: lu, charCode: function(e) {
  return e.type === "keypress" ? _r(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ef = Se(xf), _f = V({}, ll, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ei = Se(_f), Cf = V({}, qn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lu }), Nf = Se(Cf), Pf = V({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zf = Se(Pf), Lf = V({}, ll, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Tf = Se(Lf), Rf = [9, 13, 27, 32], ou = Ke && "CompositionEvent" in window, Nn = null;
Ke && "documentMode" in document && (Nn = document.documentMode);
var Of = Ke && "TextEvent" in window && !Nn, As = Ke && (!ou || Nn && 8 < Nn && 11 >= Nn), ti = " ", ni = !1;
function Vs(e, t) {
  switch (e) {
    case "keyup":
      return Rf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Bs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var $t = !1;
function Mf(e, t) {
  switch (e) {
    case "compositionend":
      return Bs(t);
    case "keypress":
      return t.which !== 32 ? null : (ni = !0, ti);
    case "textInput":
      return e = t.data, e === ti && ni ? null : e;
    default:
      return null;
  }
}
function If(e, t) {
  if ($t) return e === "compositionend" || !ou && Vs(e, t) ? (e = $s(), Er = nu = rt = null, $t = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return As && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ri(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jf[e.type] : t === "textarea";
}
function Ws(e, t, n, r) {
  ws(r), t = $r(t, "onChange"), 0 < t.length && (n = new ru("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Pn = null, $n = null;
function Df(e) {
  ea(e, 0);
}
function ol(e) {
  var t = Bt(e);
  if (ps(t)) return e;
}
function Ff(e, t) {
  if (e === "change") return t;
}
var Hs = !1;
if (Ke) {
  var Rl;
  if (Ke) {
    var Ol = "oninput" in document;
    if (!Ol) {
      var li = document.createElement("div");
      li.setAttribute("oninput", "return;"), Ol = typeof li.oninput == "function";
    }
    Rl = Ol;
  } else Rl = !1;
  Hs = Rl && (!document.documentMode || 9 < document.documentMode);
}
function oi() {
  Pn && (Pn.detachEvent("onpropertychange", Qs), $n = Pn = null);
}
function Qs(e) {
  if (e.propertyName === "value" && ol($n)) {
    var t = [];
    Ws(t, $n, e, Jo(e)), _s(Df, t);
  }
}
function Uf(e, t, n) {
  e === "focusin" ? (oi(), Pn = t, $n = n, Pn.attachEvent("onpropertychange", Qs)) : e === "focusout" && oi();
}
function $f(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ol($n);
}
function Af(e, t) {
  if (e === "click") return ol(t);
}
function Vf(e, t) {
  if (e === "input" || e === "change") return ol(t);
}
function Bf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ie = typeof Object.is == "function" ? Object.is : Bf;
function An(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Xl.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function ui(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ii(e, t) {
  var n = ui(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ui(n);
  }
}
function Ks(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ks(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ys() {
  for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Or(e.document);
  }
  return t;
}
function uu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Wf(e) {
  var t = Ys(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ks(n.ownerDocument.documentElement, n)) {
    if (r !== null && uu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = ii(n, o);
        var u = ii(
          n,
          r
        );
        l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Hf = Ke && "documentMode" in document && 11 >= document.documentMode, At = null, mo = null, zn = null, ho = !1;
function si(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ho || At == null || At !== Or(r) || (r = At, "selectionStart" in r && uu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zn && An(zn, r) || (zn = r, r = $r(mo, "onSelect"), 0 < r.length && (t = new ru("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = At)));
}
function fr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vt = { animationend: fr("Animation", "AnimationEnd"), animationiteration: fr("Animation", "AnimationIteration"), animationstart: fr("Animation", "AnimationStart"), transitionend: fr("Transition", "TransitionEnd") }, Ml = {}, Xs = {};
Ke && (Xs = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);
function ul(e) {
  if (Ml[e]) return Ml[e];
  if (!Vt[e]) return e;
  var t = Vt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xs) return Ml[e] = t[n];
  return e;
}
var Gs = ul("animationend"), Zs = ul("animationiteration"), Js = ul("animationstart"), qs = ul("transitionend"), bs = /* @__PURE__ */ new Map(), ai = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ht(e, t) {
  bs.set(e, t), Mt(t, [e]);
}
for (var Il = 0; Il < ai.length; Il++) {
  var jl = ai[Il], Qf = jl.toLowerCase(), Kf = jl[0].toUpperCase() + jl.slice(1);
  ht(Qf, "on" + Kf);
}
ht(Gs, "onAnimationEnd");
ht(Zs, "onAnimationIteration");
ht(Js, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(qs, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function ci(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Hc(r, t, void 0, e), e.currentTarget = null;
}
function ea(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var u = r.length - 1; 0 <= u; u--) {
        var i = r[u], s = i.instance, f = i.currentTarget;
        if (i = i.listener, s !== o && l.isPropagationStopped()) break e;
        ci(l, i, f), o = s;
      }
      else for (u = 0; u < r.length; u++) {
        if (i = r[u], s = i.instance, f = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped()) break e;
        ci(l, i, f), o = s;
      }
    }
  }
  if (Ir) throw e = ao, Ir = !1, ao = null, e;
}
function D(e, t) {
  var n = t[wo];
  n === void 0 && (n = t[wo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ta(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), ta(n, e, r, t);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function Vn(e) {
  if (!e[dr]) {
    e[dr] = !0, ss.forEach(function(n) {
      n !== "selectionchange" && (Yf.has(n) || Dl(n, !1, e), Dl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[dr] || (t[dr] = !0, Dl("selectionchange", !1, t));
  }
}
function ta(e, t, n, r) {
  switch (Us(t)) {
    case 1:
      var l = uf;
      break;
    case 4:
      l = sf;
      break;
    default:
      l = tu;
  }
  n = l.bind(null, t, n, e), l = void 0, !so || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Fl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var u = r.tag;
    if (u === 3 || u === 4) {
      var i = r.stateNode.containerInfo;
      if (i === l || i.nodeType === 8 && i.parentNode === l) break;
      if (u === 4) for (u = r.return; u !== null; ) {
        var s = u.tag;
        if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        u = u.return;
      }
      for (; i !== null; ) {
        if (u = Et(i), u === null) return;
        if (s = u.tag, s === 5 || s === 6) {
          r = o = u;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  _s(function() {
    var f = o, h = Jo(n), m = [];
    e: {
      var p = bs.get(e);
      if (p !== void 0) {
        var g = ru, w = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Ef;
            break;
          case "focusin":
            w = "focus", g = Tl;
            break;
          case "focusout":
            w = "blur", g = Tl;
            break;
          case "beforeblur":
          case "afterblur":
            g = Tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = qu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = ff;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Nf;
            break;
          case Gs:
          case Zs:
          case Js:
            g = mf;
            break;
          case qs:
            g = zf;
            break;
          case "scroll":
            g = af;
            break;
          case "wheel":
            g = Tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = ei;
        }
        var k = (t & 4) !== 0, M = !k && e === "scroll", c = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = f, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, c !== null && (v = jn(a, c), v != null && k.push(Bn(a, v, d)))), M) break;
          a = a.return;
        }
        0 < k.length && (p = new g(p, w, null, n, h), m.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && n !== uo && (w = n.relatedTarget || n.fromElement) && (Et(w) || w[Ye])) break e;
        if ((g || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = f, w = w ? Et(w) : null, w !== null && (M = It(w), w !== M || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = f), g !== w)) {
          if (k = qu, v = "onMouseLeave", c = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = ei, v = "onPointerLeave", c = "onPointerEnter", a = "pointer"), M = g == null ? p : Bt(g), d = w == null ? p : Bt(w), p = new k(v, a + "leave", g, n, h), p.target = M, p.relatedTarget = d, v = null, Et(h) === f && (k = new k(c, a + "enter", w, n, h), k.target = d, k.relatedTarget = M, v = k), M = v, g && w) t: {
            for (k = g, c = w, a = 0, d = k; d; d = Dt(d)) a++;
            for (d = 0, v = c; v; v = Dt(v)) d++;
            for (; 0 < a - d; ) k = Dt(k), a--;
            for (; 0 < d - a; ) c = Dt(c), d--;
            for (; a--; ) {
              if (k === c || c !== null && k === c.alternate) break t;
              k = Dt(k), c = Dt(c);
            }
            k = null;
          }
          else k = null;
          g !== null && fi(m, p, g, k, !1), w !== null && M !== null && fi(m, M, w, k, !0);
        }
      }
      e: {
        if (p = f ? Bt(f) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var S = Ff;
        else if (ri(p)) if (Hs) S = Vf;
        else {
          S = $f;
          var C = Uf;
        }
        else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = Af);
        if (S && (S = S(e, f))) {
          Ws(m, S, n, h);
          break e;
        }
        C && C(e, p, f), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && to(p, "number", p.value);
      }
      switch (C = f ? Bt(f) : window, e) {
        case "focusin":
          (ri(C) || C.contentEditable === "true") && (At = C, mo = f, zn = null);
          break;
        case "focusout":
          zn = mo = At = null;
          break;
        case "mousedown":
          ho = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ho = !1, si(m, n, h);
          break;
        case "selectionchange":
          if (Hf) break;
        case "keydown":
        case "keyup":
          si(m, n, h);
      }
      var _;
      if (ou) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else $t ? Vs(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (As && n.locale !== "ko" && ($t || N !== "onCompositionStart" ? N === "onCompositionEnd" && $t && (_ = $s()) : (rt = h, nu = "value" in rt ? rt.value : rt.textContent, $t = !0)), C = $r(f, N), 0 < C.length && (N = new bu(N, e, null, n, h), m.push({ event: N, listeners: C }), _ ? N.data = _ : (_ = Bs(n), _ !== null && (N.data = _)))), (_ = Of ? Mf(e, n) : If(e, n)) && (f = $r(f, "onBeforeInput"), 0 < f.length && (h = new bu("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: f }), h.data = _));
    }
    ea(m, t);
  });
}
function Bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $r(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = jn(e, n), o != null && r.unshift(Bn(e, o, l)), o = jn(e, t), o != null && r.push(Bn(e, o, l))), e = e.return;
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fi(e, t, n, r, l) {
  for (var o = t._reactName, u = []; n !== null && n !== r; ) {
    var i = n, s = i.alternate, f = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 && f !== null && (i = f, l ? (s = jn(n, o), s != null && u.unshift(Bn(n, s, i))) : l || (s = jn(n, o), s != null && u.push(Bn(n, s, i)))), n = n.return;
  }
  u.length !== 0 && e.push({ event: t, listeners: u });
}
var Xf = /\r\n?/g, Gf = /\u0000|\uFFFD/g;
function di(e) {
  return (typeof e == "string" ? e : "" + e).replace(Xf, `
`).replace(Gf, "");
}
function pr(e, t, n) {
  if (t = di(t), di(e) !== t && n) throw Error(y(425));
}
function Ar() {
}
var vo = null, yo = null;
function go(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ko = typeof setTimeout == "function" ? setTimeout : void 0, Zf = typeof clearTimeout == "function" ? clearTimeout : void 0, pi = typeof Promise == "function" ? Promise : void 0, Jf = typeof queueMicrotask == "function" ? queueMicrotask : typeof pi < "u" ? function(e) {
  return pi.resolve(null).then(e).catch(qf);
} : ko;
function qf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ul(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Un(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Un(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function mi(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fn = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + fn, Wn = "__reactProps$" + fn, Ye = "__reactContainer$" + fn, wo = "__reactEvents$" + fn, bf = "__reactListeners$" + fn, ed = "__reactHandles$" + fn;
function Et(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ye] || n[Fe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = mi(e); e !== null; ) {
        if (n = e[Fe]) return n;
        e = mi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function bn(e) {
  return e = e[Fe] || e[Ye], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Wn] || null;
}
var So = [], Wt = -1;
function vt(e) {
  return { current: e };
}
function F(e) {
  0 > Wt || (e.current = So[Wt], So[Wt] = null, Wt--);
}
function j(e, t) {
  Wt++, So[Wt] = e.current, e.current = t;
}
var mt = {}, oe = vt(mt), pe = vt(!1), zt = mt;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function me(e) {
  return e = e.childContextTypes, e != null;
}
function Vr() {
  F(pe), F(oe);
}
function hi(e, t, n) {
  if (oe.current !== mt) throw Error(y(168));
  j(oe, t), j(pe, n);
}
function na(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Fc(e) || "Unknown", l));
  return V({}, n, r);
}
function Br(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mt, zt = oe.current, j(oe, e), j(pe, pe.current), !0;
}
function vi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = na(e, t, zt), r.__reactInternalMemoizedMergedChildContext = e, F(pe), F(oe), j(oe, e)) : F(pe), j(pe, n);
}
var Be = null, sl = !1, $l = !1;
function ra(e) {
  Be === null ? Be = [e] : Be.push(e);
}
function td(e) {
  sl = !0, ra(e);
}
function yt() {
  if (!$l && Be !== null) {
    $l = !0;
    var e = 0, t = O;
    try {
      var n = Be;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Be = null, sl = !1;
    } catch (l) {
      throw Be !== null && (Be = Be.slice(e + 1)), zs(qo, yt), l;
    } finally {
      O = t, $l = !1;
    }
  }
  return null;
}
var Ht = [], Qt = 0, Wr = null, Hr = 0, xe = [], Ee = 0, Lt = null, We = 1, He = "";
function St(e, t) {
  Ht[Qt++] = Hr, Ht[Qt++] = Wr, Wr = e, Hr = t;
}
function la(e, t, n) {
  xe[Ee++] = We, xe[Ee++] = He, xe[Ee++] = Lt, Lt = e;
  var r = We;
  e = He;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var u = l - l % 5;
    o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, We = 1 << 32 - Oe(t) + l | n << l | r, He = o + e;
  } else We = 1 << o | n << l | r, He = e;
}
function iu(e) {
  e.return !== null && (St(e, 1), la(e, 1, 0));
}
function su(e) {
  for (; e === Wr; ) Wr = Ht[--Qt], Ht[Qt] = null, Hr = Ht[--Qt], Ht[Qt] = null;
  for (; e === Lt; ) Lt = xe[--Ee], xe[Ee] = null, He = xe[--Ee], xe[Ee] = null, We = xe[--Ee], xe[Ee] = null;
}
var ge = null, ye = null, U = !1, Re = null;
function oa(e, t) {
  var n = _e(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function yi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ge = e, ye = st(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ge = e, ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Lt !== null ? { id: We, overflow: He } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = _e(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ge = e, ye = null, !0) : !1;
    default:
      return !1;
  }
}
function xo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eo(e) {
  if (U) {
    var t = ye;
    if (t) {
      var n = t;
      if (!yi(e, t)) {
        if (xo(e)) throw Error(y(418));
        t = st(n.nextSibling);
        var r = ge;
        t && yi(e, t) ? oa(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ge = e);
      }
    } else {
      if (xo(e)) throw Error(y(418));
      e.flags = e.flags & -4097 | 2, U = !1, ge = e;
    }
  }
}
function gi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ge = e;
}
function mr(e) {
  if (e !== ge) return !1;
  if (!U) return gi(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !go(e.type, e.memoizedProps)), t && (t = ye)) {
    if (xo(e)) throw ua(), Error(y(418));
    for (; t; ) oa(e, t), t = st(t.nextSibling);
  }
  if (gi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = st(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function ua() {
  for (var e = ye; e; ) e = st(e.nextSibling);
}
function rn() {
  ye = ge = null, U = !1;
}
function au(e) {
  Re === null ? Re = [e] : Re.push(e);
}
var nd = Ze.ReactCurrentBatchConfig;
function yn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(u) {
        var i = l.refs;
        u === null ? delete i[o] : i[o] = u;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ki(e) {
  var t = e._init;
  return t(e._payload);
}
function ia(e) {
  function t(c, a) {
    if (e) {
      var d = c.deletions;
      d === null ? (c.deletions = [a], c.flags |= 16) : d.push(a);
    }
  }
  function n(c, a) {
    if (!e) return null;
    for (; a !== null; ) t(c, a), a = a.sibling;
    return null;
  }
  function r(c, a) {
    for (c = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
    return c;
  }
  function l(c, a) {
    return c = dt(c, a), c.index = 0, c.sibling = null, c;
  }
  function o(c, a, d) {
    return c.index = d, e ? (d = c.alternate, d !== null ? (d = d.index, d < a ? (c.flags |= 2, a) : d) : (c.flags |= 2, a)) : (c.flags |= 1048576, a);
  }
  function u(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function i(c, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Kl(d, c.mode, v), a.return = c, a) : (a = l(a, d), a.return = c, a);
  }
  function s(c, a, d, v) {
    var S = d.type;
    return S === Ut ? h(c, a, d.props.children, v, d.key) : a !== null && (a.elementType === S || typeof S == "object" && S !== null && S.$$typeof === be && ki(S) === a.type) ? (v = l(a, d.props), v.ref = yn(c, a, d), v.return = c, v) : (v = Rr(d.type, d.key, d.props, null, c.mode, v), v.ref = yn(c, a, d), v.return = c, v);
  }
  function f(c, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Yl(d, c.mode, v), a.return = c, a) : (a = l(a, d.children || []), a.return = c, a);
  }
  function h(c, a, d, v, S) {
    return a === null || a.tag !== 7 ? (a = Pt(d, c.mode, v, S), a.return = c, a) : (a = l(a, d), a.return = c, a);
  }
  function m(c, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = Kl("" + a, c.mode, d), a.return = c, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return d = Rr(a.type, a.key, a.props, null, c.mode, d), d.ref = yn(c, null, a), d.return = c, d;
        case Ft:
          return a = Yl(a, c.mode, d), a.return = c, a;
        case be:
          var v = a._init;
          return m(c, v(a._payload), d);
      }
      if (Sn(a) || dn(a)) return a = Pt(a, c.mode, d, null), a.return = c, a;
      hr(c, a);
    }
    return null;
  }
  function p(c, a, d, v) {
    var S = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return S !== null ? null : i(c, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === S ? s(c, a, d, v) : null;
        case Ft:
          return d.key === S ? f(c, a, d, v) : null;
        case be:
          return S = d._init, p(
            c,
            a,
            S(d._payload),
            v
          );
      }
      if (Sn(d) || dn(d)) return S !== null ? null : h(c, a, d, v, null);
      hr(c, d);
    }
    return null;
  }
  function g(c, a, d, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return c = c.get(d) || null, i(a, c, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case lr:
          return c = c.get(v.key === null ? d : v.key) || null, s(a, c, v, S);
        case Ft:
          return c = c.get(v.key === null ? d : v.key) || null, f(a, c, v, S);
        case be:
          var C = v._init;
          return g(c, a, d, C(v._payload), S);
      }
      if (Sn(v) || dn(v)) return c = c.get(d) || null, h(a, c, v, S, null);
      hr(a, v);
    }
    return null;
  }
  function w(c, a, d, v) {
    for (var S = null, C = null, _ = a, N = a = 0, B = null; _ !== null && N < d.length; N++) {
      _.index > N ? (B = _, _ = null) : B = _.sibling;
      var z = p(c, _, d[N], v);
      if (z === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && z.alternate === null && t(c, _), a = o(z, a, N), C === null ? S = z : C.sibling = z, C = z, _ = B;
    }
    if (N === d.length) return n(c, _), U && St(c, N), S;
    if (_ === null) {
      for (; N < d.length; N++) _ = m(c, d[N], v), _ !== null && (a = o(_, a, N), C === null ? S = _ : C.sibling = _, C = _);
      return U && St(c, N), S;
    }
    for (_ = r(c, _); N < d.length; N++) B = g(_, c, N, d[N], v), B !== null && (e && B.alternate !== null && _.delete(B.key === null ? N : B.key), a = o(B, a, N), C === null ? S = B : C.sibling = B, C = B);
    return e && _.forEach(function(ce) {
      return t(c, ce);
    }), U && St(c, N), S;
  }
  function k(c, a, d, v) {
    var S = dn(d);
    if (typeof S != "function") throw Error(y(150));
    if (d = S.call(d), d == null) throw Error(y(151));
    for (var C = S = null, _ = a, N = a = 0, B = null, z = d.next(); _ !== null && !z.done; N++, z = d.next()) {
      _.index > N ? (B = _, _ = null) : B = _.sibling;
      var ce = p(c, _, z.value, v);
      if (ce === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && ce.alternate === null && t(c, _), a = o(ce, a, N), C === null ? S = ce : C.sibling = ce, C = ce, _ = B;
    }
    if (z.done) return n(
      c,
      _
    ), U && St(c, N), S;
    if (_ === null) {
      for (; !z.done; N++, z = d.next()) z = m(c, z.value, v), z !== null && (a = o(z, a, N), C === null ? S = z : C.sibling = z, C = z);
      return U && St(c, N), S;
    }
    for (_ = r(c, _); !z.done; N++, z = d.next()) z = g(_, c, N, z.value, v), z !== null && (e && z.alternate !== null && _.delete(z.key === null ? N : z.key), a = o(z, a, N), C === null ? S = z : C.sibling = z, C = z);
    return e && _.forEach(function(gt) {
      return t(c, gt);
    }), U && St(c, N), S;
  }
  function M(c, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Ut && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var S = d.key, C = a; C !== null; ) {
              if (C.key === S) {
                if (S = d.type, S === Ut) {
                  if (C.tag === 7) {
                    n(c, C.sibling), a = l(C, d.props.children), a.return = c, c = a;
                    break e;
                  }
                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === be && ki(S) === C.type) {
                  n(c, C.sibling), a = l(C, d.props), a.ref = yn(c, C, d), a.return = c, c = a;
                  break e;
                }
                n(c, C);
                break;
              } else t(c, C);
              C = C.sibling;
            }
            d.type === Ut ? (a = Pt(d.props.children, c.mode, v, d.key), a.return = c, c = a) : (v = Rr(d.type, d.key, d.props, null, c.mode, v), v.ref = yn(c, a, d), v.return = c, c = v);
          }
          return u(c);
        case Ft:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(c, a.sibling), a = l(a, d.children || []), a.return = c, c = a;
                break e;
              } else {
                n(c, a);
                break;
              }
              else t(c, a);
              a = a.sibling;
            }
            a = Yl(d, c.mode, v), a.return = c, c = a;
          }
          return u(c);
        case be:
          return C = d._init, M(c, a, C(d._payload), v);
      }
      if (Sn(d)) return w(c, a, d, v);
      if (dn(d)) return k(c, a, d, v);
      hr(c, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(c, a.sibling), a = l(a, d), a.return = c, c = a) : (n(c, a), a = Kl(d, c.mode, v), a.return = c, c = a), u(c)) : n(c, a);
  }
  return M;
}
var ln = ia(!0), sa = ia(!1), Qr = vt(null), Kr = null, Kt = null, cu = null;
function fu() {
  cu = Kt = Kr = null;
}
function du(e) {
  var t = Qr.current;
  F(Qr), e._currentValue = t;
}
function _o(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function bt(e, t) {
  Kr = e, cu = Kt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (de = !0), e.firstContext = null);
}
function Ne(e) {
  var t = e._currentValue;
  if (cu !== e) if (e = { context: e, memoizedValue: t, next: null }, Kt === null) {
    if (Kr === null) throw Error(y(308));
    Kt = e, Kr.dependencies = { lanes: 0, firstContext: e };
  } else Kt = Kt.next = e;
  return t;
}
var _t = null;
function pu(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function aa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, pu(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Xe(e, r);
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function mu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ca(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, R & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Xe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, pu(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Xe(e, n);
}
function Cr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bo(e, n);
  }
}
function wi(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = u : o = o.next = u, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Yr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i, f = s.next;
    s.next = null, u === null ? o = f : u.next = f, u = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== u && (i === null ? h.firstBaseUpdate = f : i.next = f, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    u = 0, h = f = s = null, i = o;
    do {
      var p = i.lane, g = i.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: g,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, k = i;
          switch (p = t, g = n, k.tag) {
            case 1:
              if (w = k.payload, typeof w == "function") {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = k.payload, p = typeof w == "function" ? w.call(g, m, p) : w, p == null) break e;
              m = V({}, m, p);
              break e;
            case 2:
              et = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else g = { eventTime: g, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (f = h = g, s = m) : h = h.next = g, u |= p;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        u |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Rt |= u, e.lanes = u, e.memoizedState = m;
  }
}
function Si(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
      l.call(r);
    }
  }
}
var er = {}, Ae = vt(er), Hn = vt(er), Qn = vt(er);
function Ct(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function hu(e, t) {
  switch (j(Qn, t), j(Hn, e), j(Ae, er), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ro(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ro(t, e);
  }
  F(Ae), j(Ae, t);
}
function on() {
  F(Ae), F(Hn), F(Qn);
}
function fa(e) {
  Ct(Qn.current);
  var t = Ct(Ae.current), n = ro(t, e.type);
  t !== n && (j(Hn, e), j(Ae, n));
}
function vu(e) {
  Hn.current === e && (F(Ae), F(Hn));
}
var $ = vt(0);
function Xr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Al = [];
function yu() {
  for (var e = 0; e < Al.length; e++) Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Nr = Ze.ReactCurrentDispatcher, Vl = Ze.ReactCurrentBatchConfig, Tt = 0, A = null, Y = null, Z = null, Gr = !1, Ln = !1, Kn = 0, rd = 0;
function ne() {
  throw Error(y(321));
}
function gu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function ku(e, t, n, r, l, o) {
  if (Tt = o, A = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Nr.current = e === null || e.memoizedState === null ? id : sd, e = n(r, l), Ln) {
    o = 0;
    do {
      if (Ln = !1, Kn = 0, 25 <= o) throw Error(y(301));
      o += 1, Z = Y = null, t.updateQueue = null, Nr.current = ad, e = n(r, l);
    } while (Ln);
  }
  if (Nr.current = Zr, t = Y !== null && Y.next !== null, Tt = 0, Z = Y = A = null, Gr = !1, t) throw Error(y(300));
  return e;
}
function wu() {
  var e = Kn !== 0;
  return Kn = 0, e;
}
function De() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? A.memoizedState = Z = e : Z = Z.next = e, Z;
}
function Pe() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = Z === null ? A.memoizedState : Z.next;
  if (t !== null) Z = t, Y = e;
  else {
    if (e === null) throw Error(y(310));
    Y = e, e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }, Z === null ? A.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function Yn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = Pe(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var u = l.next;
      l.next = o.next, o.next = u;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var i = u = null, s = null, f = o;
    do {
      var h = f.lane;
      if ((Tt & h) === h) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (i = s = m, u = r) : s = s.next = m, A.lanes |= h, Rt |= h;
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? u = r : s.next = i, Ie(r, t.memoizedState) || (de = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, A.lanes |= o, Rt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wl(e) {
  var t = Pe(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var u = l = l.next;
    do
      o = e(o, u.action), u = u.next;
    while (u !== l);
    Ie(o, t.memoizedState) || (de = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function da() {
}
function pa(e, t) {
  var n = A, r = Pe(), l = t(), o = !Ie(r.memoizedState, l);
  if (o && (r.memoizedState = l, de = !0), r = r.queue, Su(va.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, Xn(9, ha.bind(null, n, r, l, t), void 0, null), J === null) throw Error(y(349));
    Tt & 30 || ma(n, t, l);
  }
  return l;
}
function ma(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = A.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, A.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ha(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ya(t) && ga(e);
}
function va(e, t, n) {
  return n(function() {
    ya(t) && ga(e);
  });
}
function ya(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function ga(e) {
  var t = Xe(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function xi(e) {
  var t = De();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yn, lastRenderedState: e }, t.queue = e, e = e.dispatch = ud.bind(null, A, e), [t.memoizedState, e];
}
function Xn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = A.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, A.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ka() {
  return Pe().memoizedState;
}
function Pr(e, t, n, r) {
  var l = De();
  A.flags |= e, l.memoizedState = Xn(1 | t, n, void 0, r === void 0 ? null : r);
}
function al(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var u = Y.memoizedState;
    if (o = u.destroy, r !== null && gu(r, u.deps)) {
      l.memoizedState = Xn(t, n, o, r);
      return;
    }
  }
  A.flags |= e, l.memoizedState = Xn(1 | t, n, o, r);
}
function Ei(e, t) {
  return Pr(8390656, 8, e, t);
}
function Su(e, t) {
  return al(2048, 8, e, t);
}
function wa(e, t) {
  return al(4, 2, e, t);
}
function Sa(e, t) {
  return al(4, 4, e, t);
}
function xa(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ea(e, t, n) {
  return n = n != null ? n.concat([e]) : null, al(4, 4, xa.bind(null, t, e), n);
}
function xu() {
}
function _a(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ca(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Na(e, t, n) {
  return Tt & 21 ? (Ie(n, t) || (n = Rs(), A.lanes |= n, Rt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, de = !0), e.memoizedState = n);
}
function ld(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, Vl.transition = r;
  }
}
function Pa() {
  return Pe().memoizedState;
}
function od(e, t, n) {
  var r = ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, za(e)) La(t, n);
  else if (n = aa(e, t, n, r), n !== null) {
    var l = ie();
    Me(n, e, r, l), Ta(n, t, r);
  }
}
function ud(e, t, n) {
  var r = ft(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (za(e)) La(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var u = t.lastRenderedState, i = o(u, n);
      if (l.hasEagerState = !0, l.eagerState = i, Ie(i, u)) {
        var s = t.interleaved;
        s === null ? (l.next = l, pu(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = aa(e, t, l, r), n !== null && (l = ie(), Me(n, e, r, l), Ta(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === A || t !== null && t === A;
}
function La(e, t) {
  Ln = Gr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ta(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, bo(e, n);
  }
}
var Zr = { readContext: Ne, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, id = { readContext: Ne, useCallback: function(e, t) {
  return De().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ne, useEffect: Ei, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pr(
    4194308,
    4,
    xa.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Pr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Pr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = De();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = De();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = od.bind(null, A, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = De();
  return e = { current: e }, t.memoizedState = e;
}, useState: xi, useDebugValue: xu, useDeferredValue: function(e) {
  return De().memoizedState = e;
}, useTransition: function() {
  var e = xi(!1), t = e[0];
  return e = ld.bind(null, e[1]), De().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = A, l = De();
  if (U) {
    if (n === void 0) throw Error(y(407));
    n = n();
  } else {
    if (n = t(), J === null) throw Error(y(349));
    Tt & 30 || ma(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Ei(va.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Xn(9, ha.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = De(), t = J.identifierPrefix;
  if (U) {
    var n = He, r = We;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = rd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, sd = {
  readContext: Ne,
  useCallback: _a,
  useContext: Ne,
  useEffect: Su,
  useImperativeHandle: Ea,
  useInsertionEffect: wa,
  useLayoutEffect: Sa,
  useMemo: Ca,
  useReducer: Bl,
  useRef: ka,
  useState: function() {
    return Bl(Yn);
  },
  useDebugValue: xu,
  useDeferredValue: function(e) {
    var t = Pe();
    return Na(t, Y.memoizedState, e);
  },
  useTransition: function() {
    var e = Bl(Yn)[0], t = Pe().memoizedState;
    return [e, t];
  },
  useMutableSource: da,
  useSyncExternalStore: pa,
  useId: Pa,
  unstable_isNewReconciler: !1
}, ad = { readContext: Ne, useCallback: _a, useContext: Ne, useEffect: Su, useImperativeHandle: Ea, useInsertionEffect: wa, useLayoutEffect: Sa, useMemo: Ca, useReducer: Wl, useRef: ka, useState: function() {
  return Wl(Yn);
}, useDebugValue: xu, useDeferredValue: function(e) {
  var t = Pe();
  return Y === null ? t.memoizedState = e : Na(t, Y.memoizedState, e);
}, useTransition: function() {
  var e = Wl(Yn)[0], t = Pe().memoizedState;
  return [e, t];
}, useMutableSource: da, useSyncExternalStore: pa, useId: Pa, unstable_isNewReconciler: !1 };
function Le(e, t) {
  if (e && e.defaultProps) {
    t = V({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Co(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = { isMounted: function(e) {
  return (e = e._reactInternals) ? It(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = ft(e), o = Qe(r, l);
  o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Me(t, e, l, r), Cr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = ft(e), o = Qe(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = at(e, o, l), t !== null && (Me(t, e, l, r), Cr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ie(), r = ft(e), l = Qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (Me(t, e, r, n), Cr(t, e, r));
} };
function _i(e, t, n, r, l, o, u) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : t.prototype && t.prototype.isPureReactComponent ? !An(n, r) || !An(l, o) : !0;
}
function Ra(e, t, n) {
  var r = !1, l = mt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = Ne(o) : (l = me(t) ? zt : oe.current, r = t.contextTypes, o = (r = r != null) ? nn(e, l) : mt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Ci(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function No(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, mu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = Ne(o) : (o = me(t) ? zt : oe.current, l.context = nn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Co(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && cl.enqueueReplaceState(l, l.state, null), Yr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function un(e, t) {
  try {
    var n = "", r = t;
    do
      n += Dc(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Hl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Po(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cd = typeof WeakMap == "function" ? WeakMap : Map;
function Oa(e, t, n) {
  n = Qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    qr || (qr = !0, Fo = r), Po(e, t);
  }, n;
}
function Ma(e, t, n) {
  n = Qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Po(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Po(e, t), typeof r != "function" && (ct === null ? ct = /* @__PURE__ */ new Set([this]) : ct.add(this));
    var u = t.stack;
    this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
  }), n;
}
function Ni(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = _d.bind(null, e, t, n), t.then(e, e));
}
function Pi(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zi(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e);
}
var fd = Ze.ReactCurrentOwner, de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? sa(t, null, n, r) : ln(t, e.child, n, r);
}
function Li(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return bt(t, l), r = ku(e, t, n, r, o, l), n = wu(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (U && n && iu(t), t.flags |= 1, ue(e, t, r, l), t.child);
}
function Ti(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Tu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ia(e, t, o, r, l)) : (e = Rr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var u = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : An, n(u, r) && e.ref === t.ref) return Ge(e, t, l);
  }
  return t.flags |= 1, e = dt(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ia(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (An(o, r) && e.ref === t.ref) if (de = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (de = !0);
    else return t.lanes = e.lanes, Ge(e, t, l);
  }
  return zo(e, t, n, r, l);
}
function ja(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, j(Xt, ve), ve |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, j(Xt, ve), ve |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, j(Xt, ve), ve |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, j(Xt, ve), ve |= r;
  return ue(e, t, l, n), t.child;
}
function Da(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zo(e, t, n, r, l) {
  var o = me(n) ? zt : oe.current;
  return o = nn(t, o), bt(t, l), n = ku(e, t, n, r, o, l), r = wu(), e !== null && !de ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (U && r && iu(t), t.flags |= 1, ue(e, t, n, l), t.child);
}
function Ri(e, t, n, r, l) {
  if (me(n)) {
    var o = !0;
    Br(t);
  } else o = !1;
  if (bt(t, l), t.stateNode === null) zr(e, t), Ra(t, n, r), No(t, n, r, l), r = !0;
  else if (e === null) {
    var u = t.stateNode, i = t.memoizedProps;
    u.props = i;
    var s = u.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Ne(f) : (f = me(n) ? zt : oe.current, f = nn(t, f));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    m || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== f) && Ci(t, u, r, f), et = !1;
    var p = t.memoizedState;
    u.state = p, Yr(t, r, u, l), s = t.memoizedState, i !== r || p !== s || pe.current || et ? (typeof h == "function" && (Co(t, n, h, r), s = t.memoizedState), (i = et || _i(t, n, i, r, p, s, f)) ? (m || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), u.props = r, u.state = s, u.context = f, r = i) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    u = t.stateNode, ca(e, t), i = t.memoizedProps, f = t.type === t.elementType ? i : Le(t.type, i), u.props = f, m = t.pendingProps, p = u.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ne(s) : (s = me(n) ? zt : oe.current, s = nn(t, s));
    var g = n.getDerivedStateFromProps;
    (h = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== m || p !== s) && Ci(t, u, r, s), et = !1, p = t.memoizedState, u.state = p, Yr(t, r, u, l);
    var w = t.memoizedState;
    i !== m || p !== w || pe.current || et ? (typeof g == "function" && (Co(t, n, g, r), w = t.memoizedState), (f = et || _i(t, n, f, r, p, w, s) || !1) ? (h || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, w, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, w, s)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), u.props = r, u.state = w, u.context = s, r = f) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Lo(e, t, n, r, o, l);
}
function Lo(e, t, n, r, l, o) {
  Da(e, t);
  var u = (t.flags & 128) !== 0;
  if (!r && !u) return l && vi(t, n, !1), Ge(e, t, o);
  r = t.stateNode, fd.current = t;
  var i = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && u ? (t.child = ln(t, e.child, null, o), t.child = ln(t, null, i, o)) : ue(e, t, i, o), t.memoizedState = r.state, l && vi(t, n, !0), t.child;
}
function Fa(e) {
  var t = e.stateNode;
  t.pendingContext ? hi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hi(e, t.context, !1), hu(e, t.containerInfo);
}
function Oi(e, t, n, r, l) {
  return rn(), au(l), t.flags |= 256, ue(e, t, n, r), t.child;
}
var To = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ro(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ua(e, t, n) {
  var r = t.pendingProps, l = $.current, o = !1, u = (t.flags & 128) !== 0, i;
  if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), j($, l & 1), e === null)
    return Eo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, u = { mode: "hidden", children: u }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = pl(u, r, 0, null), e = Pt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ro(n), t.memoizedState = To, e) : Eu(t, u));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return dd(e, t, u, r, i, l, n);
  if (o) {
    o = r.fallback, u = t.mode, l = e.child, i = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(u & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = dt(i, o) : (o = Pt(o, u, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, u = e.child.memoizedState, u = u === null ? Ro(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~n, t.memoizedState = To, r;
  }
  return o = e.child, e = o.sibling, r = dt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Eu(e, t) {
  return t = pl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function vr(e, t, n, r) {
  return r !== null && au(r), ln(t, e.child, null, n), e = Eu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dd(e, t, n, r, l, o, u) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Hl(Error(y(422))), vr(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = pl({ mode: "visible", children: r.children }, l, 0, null), o = Pt(o, l, u, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && ln(t, e.child, null, u), t.child.memoizedState = Ro(u), t.memoizedState = To, o);
  if (!(t.mode & 1)) return vr(e, t, u, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, o = Error(y(419)), r = Hl(o, r, void 0), vr(e, t, u, r);
  }
  if (i = (u & e.childLanes) !== 0, de || i) {
    if (r = J, r !== null) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Xe(e, l), Me(r, e, l, -1));
    }
    return Lu(), r = Hl(Error(y(421))), vr(e, t, u, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Cd.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ye = st(l.nextSibling), ge = t, U = !0, Re = null, e !== null && (xe[Ee++] = We, xe[Ee++] = He, xe[Ee++] = Lt, We = e.id, He = e.overflow, Lt = t), t = Eu(t, r.children), t.flags |= 4096, t);
}
function Mi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _o(e.return, t, n);
}
function Ql(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function $a(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (ue(e, t, r.children, n), r = $.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Mi(e, n, t);
      else if (e.tag === 19) Mi(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (j($, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Xr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ql(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Xr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Ql(t, !0, n, null, o);
      break;
    case "together":
      Ql(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function zr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ge(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Rt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function pd(e, t, n) {
  switch (t.tag) {
    case 3:
      Fa(t), rn();
      break;
    case 5:
      fa(t);
      break;
    case 1:
      me(t.type) && Br(t);
      break;
    case 4:
      hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      j(Qr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (j($, $.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ua(e, t, n) : (j($, $.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
      j($, $.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return $a(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), j($, $.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ja(e, t, n);
  }
  return Ge(e, t, n);
}
var Aa, Oo, Va, Ba;
Aa = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Oo = function() {
};
Va = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Ct(Ae.current);
    var o = null;
    switch (n) {
      case "input":
        l = bl(e, l), r = bl(e, r), o = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = no(e, l), r = no(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ar);
    }
    lo(n, r);
    var u;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var i = l[f];
      for (u in i) i.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Mn.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (i = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== i && (s != null || i != null)) if (f === "style") if (i) {
        for (u in i) !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
        for (u in s) s.hasOwnProperty(u) && i[u] !== s[u] && (n || (n = {}), n[u] = s[u]);
      } else n || (o || (o = []), o.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Mn.hasOwnProperty(f) ? (s != null && f === "onScroll" && D("scroll", e), o || i === s || (o = [])) : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Ba = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!U) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function md(e, t, n) {
  var r = t.pendingProps;
  switch (su(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return me(t.type) && Vr(), re(t), null;
    case 3:
      return r = t.stateNode, on(), F(pe), F(oe), yu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (mr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Re !== null && (Ao(Re), Re = null))), Oo(e, t), re(t), null;
    case 5:
      vu(t);
      var l = Ct(Qn.current);
      if (n = t.type, e !== null && t.stateNode != null) Va(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (e = Ct(Ae.current), mr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Fe] = t, r[Wn] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < En.length; l++) D(En[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                r
              ), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Bu(r, o), D("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, D("invalid", r);
              break;
            case "textarea":
              Hu(r, o), D("invalid", r);
          }
          lo(n, o), l = null;
          for (var u in o) if (o.hasOwnProperty(u)) {
            var i = o[u];
            u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && pr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && pr(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Mn.hasOwnProperty(u) && i != null && u === "onScroll" && D("scroll", r);
          }
          switch (n) {
            case "input":
              or(r), Wu(r, o, !0);
              break;
            case "textarea":
              or(r), Qu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ar);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = vs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Fe] = t, e[Wn] = r, Aa(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (u = oo(n, r), n) {
              case "dialog":
                D("cancel", e), D("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < En.length; l++) D(En[l], e);
                l = r;
                break;
              case "source":
                D("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  e
                ), D("load", e), l = r;
                break;
              case "details":
                D("toggle", e), l = r;
                break;
              case "input":
                Bu(e, r), l = bl(e, r), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), D("invalid", e);
                break;
              case "textarea":
                Hu(e, r), l = no(e, r), D("invalid", e);
                break;
              default:
                l = r;
            }
            lo(n, l), i = l;
            for (o in i) if (i.hasOwnProperty(o)) {
              var s = i[o];
              o === "style" ? ks(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && ys(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && In(e, s) : typeof s == "number" && In(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Mn.hasOwnProperty(o) ? s != null && o === "onScroll" && D("scroll", e) : s != null && Yo(e, o, s, u));
            }
            switch (n) {
              case "input":
                or(e), Wu(e, r, !1);
                break;
              case "textarea":
                or(e), Qu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Gt(e, !!r.multiple, o, !1) : r.defaultValue != null && Gt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ar);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Ba(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (n = Ct(Qn.current), Ct(Ae.current), mr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Fe] = t, (o = r.nodeValue !== n) && (e = ge, e !== null)) switch (e.tag) {
            case 3:
              pr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && pr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Fe] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (F($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ye !== null && t.mode & 1 && !(t.flags & 128)) ua(), rn(), t.flags |= 98560, o = !1;
        else if (o = mr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
            o[Fe] = t;
          } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), o = !1;
        } else Re !== null && (Ao(Re), Re = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? X === 0 && (X = 3) : Lu())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return on(), Oo(e, t), e === null && Vn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return du(t.type._context), re(t), null;
    case 17:
      return me(t.type) && Vr(), re(t), null;
    case 19:
      if (F($), o = t.memoizedState, o === null) return re(t), null;
      if (r = (t.flags & 128) !== 0, u = o.rendering, u === null) if (r) gn(o, !1);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (u = Xr(e), u !== null) {
            for (t.flags |= 128, gn(o, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return j($, $.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && Q() > sn && (t.flags |= 128, r = !0, gn(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Xr(u), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), gn(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !U) return re(t), null;
        } else 2 * Q() - o.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128, r = !0, gn(o, !1), t.lanes = 4194304);
        o.isBackwards ? (u.sibling = t.child, t.child = u) : (n = o.last, n !== null ? n.sibling = u : t.child = u, o.last = u);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Q(), t.sibling = null, n = $.current, j($, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return zu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ve & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function hd(e, t) {
  switch (su(t), t.tag) {
    case 1:
      return me(t.type) && Vr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return on(), F(pe), F(oe), yu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return vu(t), null;
    case 13:
      if (F($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(y(340));
        rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return F($), null;
    case 4:
      return on(), null;
    case 10:
      return du(t.type._context), null;
    case 22:
    case 23:
      return zu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1, le = !1, vd = typeof WeakSet == "function" ? WeakSet : Set, x = null;
function Yt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    W(e, t, r);
  }
  else n.current = null;
}
function Mo(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Ii = !1;
function yd(e, t) {
  if (vo = Fr, e = Ys(), uu(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var u = 0, i = -1, s = -1, f = 0, h = 0, m = e, p = null;
        t: for (; ; ) {
          for (var g; m !== n || l !== 0 && m.nodeType !== 3 || (i = u + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = u + r), m.nodeType === 3 && (u += m.nodeValue.length), (g = m.firstChild) !== null; )
            p = m, m = g;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++f === l && (i = u), p === o && ++h === r && (s = u), (g = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = g;
        }
        n = i === -1 || s === -1 ? null : { start: i, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yo = { focusedElem: e, selectionRange: n }, Fr = !1, x = t; x !== null; ) if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
  else for (; x !== null; ) {
    t = x;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var k = w.memoizedProps, M = w.memoizedState, c = t.stateNode, a = c.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Le(t.type, k), M);
            c.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(y(163));
      }
    } catch (v) {
      W(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, x = e;
      break;
    }
    x = t.return;
  }
  return w = Ii, Ii = !1, w;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Mo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Io(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Wa(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Wa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Fe], delete t[Wn], delete t[wo], delete t[bf], delete t[ed])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ha(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ji(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ha(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ar));
  else if (r !== 4 && (e = e.child, e !== null)) for (jo(e, t, n), e = e.sibling; e !== null; ) jo(e, t, n), e = e.sibling;
}
function Do(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Do(e, t, n), e = e.sibling; e !== null; ) Do(e, t, n), e = e.sibling;
}
var b = null, Te = !1;
function qe(e, t, n) {
  for (n = n.child; n !== null; ) Qa(e, t, n), n = n.sibling;
}
function Qa(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function") try {
    $e.onCommitFiberUnmount(rl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      le || Yt(n, t);
    case 6:
      var r = b, l = Te;
      b = null, qe(e, t, n), b = r, Te = l, b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? Ul(e.parentNode, n) : e.nodeType === 1 && Ul(e, n), Un(e)) : Ul(b, n.stateNode));
      break;
    case 4:
      r = b, l = Te, b = n.stateNode.containerInfo, Te = !0, qe(e, t, n), b = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, u = o.destroy;
          o = o.tag, u !== void 0 && (o & 2 || o & 4) && Mo(n, t, u), l = l.next;
        } while (l !== r);
      }
      qe(e, t, n);
      break;
    case 1:
      if (!le && (Yt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        W(n, t, i);
      }
      qe(e, t, n);
      break;
    case 21:
      qe(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, qe(e, t, n), le = r) : qe(e, t, n);
      break;
    default:
      qe(e, t, n);
  }
}
function Di(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vd()), t.forEach(function(r) {
      var l = Nd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, u = t, i = u;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            b = i.stateNode, Te = !1;
            break e;
          case 3:
            b = i.stateNode.containerInfo, Te = !0;
            break e;
          case 4:
            b = i.stateNode.containerInfo, Te = !0;
            break e;
        }
        i = i.return;
      }
      if (b === null) throw Error(y(160));
      Qa(o, u, l), b = null, Te = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      W(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ka(t, e), t = t.sibling;
}
function Ka(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), je(e), r & 4) {
        try {
          Tn(3, e, e.return), fl(3, e);
        } catch (k) {
          W(e, e.return, k);
        }
        try {
          Tn(5, e, e.return);
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(t, e), je(e), r & 512 && n !== null && Yt(n, n.return);
      break;
    case 5:
      if (ze(t, e), je(e), r & 512 && n !== null && Yt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          In(l, "");
        } catch (k) {
          W(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, u = n !== null ? n.memoizedProps : o, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          i === "input" && o.type === "radio" && o.name != null && ms(l, o), oo(i, u);
          var f = oo(i, o);
          for (u = 0; u < s.length; u += 2) {
            var h = s[u], m = s[u + 1];
            h === "style" ? ks(l, m) : h === "dangerouslySetInnerHTML" ? ys(l, m) : h === "children" ? In(l, m) : Yo(l, h, m, f);
          }
          switch (i) {
            case "input":
              eo(l, o);
              break;
            case "textarea":
              hs(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? Gt(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? Gt(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Gt(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[Wn] = o;
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 6:
      if (ze(t, e), je(e), r & 4) {
        if (e.stateNode === null) throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 3:
      if (ze(t, e), je(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Un(t.containerInfo);
      } catch (k) {
        W(e, e.return, k);
      }
      break;
    case 4:
      ze(t, e), je(e);
      break;
    case 13:
      ze(t, e), je(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Nu = Q())), r & 4 && Di(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (f = le) || h, ze(t, e), le = f) : ze(t, e), je(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && e.mode & 1) for (x = e, h = e.child; h !== null; ) {
          for (m = x = h; x !== null; ) {
            switch (p = x, g = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Tn(4, p, p.return);
                break;
              case 1:
                Yt(p, p.return);
                var w = p.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (k) {
                    W(r, n, k);
                  }
                }
                break;
              case 5:
                Yt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Ui(m);
                  continue;
                }
            }
            g !== null ? (g.return = p, x = g) : Ui(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = m.stateNode, s = m.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = gs("display", u));
              } catch (k) {
                W(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = f ? "" : m.memoizedProps;
            } catch (k) {
              W(e, e.return, k);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), m = m.return;
          }
          h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      ze(t, e), je(e), r & 4 && Di(e);
      break;
    case 21:
      break;
    default:
      ze(
        t,
        e
      ), je(e);
  }
}
function je(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ha(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (In(l, ""), r.flags &= -33);
          var o = ji(e);
          Do(e, o, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo, i = ji(e);
          jo(e, i, u);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gd(e, t, n) {
  x = e, Ya(e);
}
function Ya(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x, o = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || yr;
      if (!u) {
        var i = l.alternate, s = i !== null && i.memoizedState !== null || le;
        i = yr;
        var f = le;
        if (yr = u, (le = s) && !f) for (x = l; x !== null; ) u = x, s = u.child, u.tag === 22 && u.memoizedState !== null ? $i(l) : s !== null ? (s.return = u, x = s) : $i(l);
        for (; o !== null; ) x = o, Ya(o), o = o.sibling;
        x = l, yr = i, le = f;
      }
      Fi(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, x = o) : Fi(e);
  }
}
function Fi(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            le || fl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Si(t, o, r);
            break;
          case 3:
            var u = t.updateQueue;
            if (u !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Si(t, u, n);
            }
            break;
          case 5:
            var i = t.stateNode;
            if (n === null && t.flags & 4) {
              n = i;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var f = t.alternate;
              if (f !== null) {
                var h = f.memoizedState;
                if (h !== null) {
                  var m = h.dehydrated;
                  m !== null && Un(m);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(y(163));
        }
        le || t.flags & 512 && Io(t);
      } catch (p) {
        W(t, t.return, p);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function Ui(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function $i(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var o = t.return;
          try {
            Io(t);
          } catch (s) {
            W(t, o, s);
          }
          break;
        case 5:
          var u = t.return;
          try {
            Io(t);
          } catch (s) {
            W(t, u, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      x = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, x = i;
      break;
    }
    x = t.return;
  }
}
var kd = Math.ceil, Jr = Ze.ReactCurrentDispatcher, _u = Ze.ReactCurrentOwner, Ce = Ze.ReactCurrentBatchConfig, R = 0, J = null, K = null, ee = 0, ve = 0, Xt = vt(0), X = 0, Gn = null, Rt = 0, dl = 0, Cu = 0, Rn = null, fe = null, Nu = 0, sn = 1 / 0, Ve = null, qr = !1, Fo = null, ct = null, gr = !1, lt = null, br = 0, On = 0, Uo = null, Lr = -1, Tr = 0;
function ie() {
  return R & 6 ? Q() : Lr !== -1 ? Lr : Lr = Q();
}
function ft(e) {
  return e.mode & 1 ? R & 2 && ee !== 0 ? ee & -ee : nd.transition !== null ? (Tr === 0 && (Tr = Rs()), Tr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Us(e.type)), e) : 1;
}
function Me(e, t, n, r) {
  if (50 < On) throw On = 0, Uo = null, Error(y(185));
  Jn(e, n, r), (!(R & 2) || e !== J) && (e === J && (!(R & 2) && (dl |= n), X === 4 && nt(e, ee)), he(e, r), n === 1 && R === 0 && !(t.mode & 1) && (sn = Q() + 500, sl && yt()));
}
function he(e, t) {
  var n = e.callbackNode;
  tf(e, t);
  var r = Dr(e, e === J ? ee : 0);
  if (r === 0) n !== null && Xu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Xu(n), t === 1) e.tag === 0 ? td(Ai.bind(null, e)) : ra(Ai.bind(null, e)), Jf(function() {
      !(R & 6) && yt();
    }), n = null;
    else {
      switch (Os(r)) {
        case 1:
          n = qo;
          break;
        case 4:
          n = Ls;
          break;
        case 16:
          n = jr;
          break;
        case 536870912:
          n = Ts;
          break;
        default:
          n = jr;
      }
      n = tc(n, Xa.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Xa(e, t) {
  if (Lr = -1, Tr = 0, R & 6) throw Error(y(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Dr(e, e === J ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = el(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = Za();
    (J !== e || ee !== t) && (Ve = null, sn = Q() + 500, Nt(e, t));
    do
      try {
        xd();
        break;
      } catch (i) {
        Ga(e, i);
      }
    while (!0);
    fu(), Jr.current = o, R = l, K !== null ? t = 0 : (J = null, ee = 0, t = X);
  }
  if (t !== 0) {
    if (t === 2 && (l = co(e), l !== 0 && (r = l, t = $o(e, l))), t === 1) throw n = Gn, Nt(e, 0), nt(e, r), he(e, Q()), n;
    if (t === 6) nt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !wd(l) && (t = el(e, r), t === 2 && (o = co(e), o !== 0 && (r = o, t = $o(e, o))), t === 1)) throw n = Gn, Nt(e, 0), nt(e, r), he(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          xt(e, fe, Ve);
          break;
        case 3:
          if (nt(e, r), (r & 130023424) === r && (t = Nu + 500 - Q(), 10 < t)) {
            if (Dr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ie(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ko(xt.bind(null, e, fe, Ve), t);
            break;
          }
          xt(e, fe, Ve);
          break;
        case 4:
          if (nt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Oe(r);
            o = 1 << u, u = t[u], u > l && (l = u), r &= ~o;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ko(xt.bind(null, e, fe, Ve), r);
            break;
          }
          xt(e, fe, Ve);
          break;
        case 5:
          xt(e, fe, Ve);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return he(e, Q()), e.callbackNode === n ? Xa.bind(null, e) : null;
}
function $o(e, t) {
  var n = Rn;
  return e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256), e = el(e, t), e !== 2 && (t = fe, fe = n, t !== null && Ao(t)), e;
}
function Ao(e) {
  fe === null ? fe = e : fe.push.apply(fe, e);
}
function wd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!Ie(o(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function nt(e, t) {
  for (t &= ~Cu, t &= ~dl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ai(e) {
  if (R & 6) throw Error(y(327));
  en();
  var t = Dr(e, 0);
  if (!(t & 1)) return he(e, Q()), null;
  var n = el(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = co(e);
    r !== 0 && (t = r, n = $o(e, r));
  }
  if (n === 1) throw n = Gn, Nt(e, 0), nt(e, t), he(e, Q()), n;
  if (n === 6) throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, xt(e, fe, Ve), he(e, Q()), null;
}
function Pu(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    R = n, R === 0 && (sn = Q() + 500, sl && yt());
  }
}
function Ot(e) {
  lt !== null && lt.tag === 0 && !(R & 6) && en();
  var t = R;
  R |= 1;
  var n = Ce.transition, r = O;
  try {
    if (Ce.transition = null, O = 1, e) return e();
  } finally {
    O = r, Ce.transition = n, R = t, !(R & 6) && yt();
  }
}
function zu() {
  ve = Xt.current, F(Xt);
}
function Nt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zf(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (su(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Vr();
        break;
      case 3:
        on(), F(pe), F(oe), yu();
        break;
      case 5:
        vu(r);
        break;
      case 4:
        on();
        break;
      case 13:
        F($);
        break;
      case 19:
        F($);
        break;
      case 10:
        du(r.type._context);
        break;
      case 22:
      case 23:
        zu();
    }
    n = n.return;
  }
  if (J = e, K = e = dt(e.current, null), ee = ve = t, X = 0, Gn = null, Cu = dl = Rt = 0, fe = Rn = null, _t !== null) {
    for (t = 0; t < _t.length; t++) if (n = _t[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var u = o.next;
        o.next = l, r.next = u;
      }
      n.pending = r;
    }
    _t = null;
  }
  return e;
}
function Ga(e, t) {
  do {
    var n = K;
    try {
      if (fu(), Nr.current = Zr, Gr) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Gr = !1;
      }
      if (Tt = 0, Z = Y = A = null, Ln = !1, Kn = 0, _u.current = null, n === null || n.return === null) {
        X = 1, Gn = t, K = null;
        break;
      }
      e: {
        var o = e, u = n.return, i = n, s = t;
        if (t = ee, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, h = i, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var g = Pi(u);
          if (g !== null) {
            g.flags &= -257, zi(g, u, i, o, t), g.mode & 1 && Ni(o, f, t), t = g, s = f;
            var w = t.updateQueue;
            if (w === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ni(o, f, t), Lu();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && i.mode & 1) {
          var M = Pi(u);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256), zi(M, u, i, o, t), au(un(s, i));
            break e;
          }
        }
        o = s = un(s, i), X !== 4 && (X = 2), Rn === null ? Rn = [o] : Rn.push(o), o = u;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var c = Oa(o, s, t);
              wi(o, c);
              break e;
            case 1:
              i = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ct === null || !ct.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var v = Ma(o, i, t);
                wi(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qa(n);
    } catch (S) {
      t = S, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Za() {
  var e = Jr.current;
  return Jr.current = Zr, e === null ? Zr : e;
}
function Lu() {
  (X === 0 || X === 3 || X === 2) && (X = 4), J === null || !(Rt & 268435455) && !(dl & 268435455) || nt(J, ee);
}
function el(e, t) {
  var n = R;
  R |= 2;
  var r = Za();
  (J !== e || ee !== t) && (Ve = null, Nt(e, t));
  do
    try {
      Sd();
      break;
    } catch (l) {
      Ga(e, l);
    }
  while (!0);
  if (fu(), R = n, Jr.current = r, K !== null) throw Error(y(261));
  return J = null, ee = 0, X;
}
function Sd() {
  for (; K !== null; ) Ja(K);
}
function xd() {
  for (; K !== null && !Kc(); ) Ja(K);
}
function Ja(e) {
  var t = ec(e.alternate, e, ve);
  e.memoizedProps = e.pendingProps, t === null ? qa(e) : K = t, _u.current = null;
}
function qa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = hd(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, K = null;
        return;
      }
    } else if (n = md(n, t, ve), n !== null) {
      K = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function xt(e, t, n) {
  var r = O, l = Ce.transition;
  try {
    Ce.transition = null, O = 1, Ed(e, t, n, r);
  } finally {
    Ce.transition = l, O = r;
  }
  return null;
}
function Ed(e, t, n, r) {
  do
    en();
  while (lt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (nf(e, o), e === J && (K = J = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || gr || (gr = !0, tc(jr, function() {
    return en(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = Ce.transition, Ce.transition = null;
    var u = O;
    O = 1;
    var i = R;
    R |= 4, _u.current = null, yd(e, n), Ka(n, e), Wf(yo), Fr = !!vo, yo = vo = null, e.current = n, gd(n), Yc(), R = i, O = u, Ce.transition = o;
  } else e.current = n;
  if (gr && (gr = !1, lt = e, br = l), o = e.pendingLanes, o === 0 && (ct = null), Zc(n.stateNode), he(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr) throw qr = !1, e = Fo, Fo = null, e;
  return br & 1 && e.tag !== 0 && en(), o = e.pendingLanes, o & 1 ? e === Uo ? On++ : (On = 0, Uo = e) : On = 0, yt(), null;
}
function en() {
  if (lt !== null) {
    var e = Os(br), t = Ce.transition, n = O;
    try {
      if (Ce.transition = null, O = 16 > e ? 16 : e, lt === null) var r = !1;
      else {
        if (e = lt, lt = null, br = 0, R & 6) throw Error(y(331));
        var l = R;
        for (R |= 4, x = e.current; x !== null; ) {
          var o = x, u = o.child;
          if (x.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var f = i[s];
                for (x = f; x !== null; ) {
                  var h = x;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, x = m;
                  else for (; x !== null; ) {
                    h = x;
                    var p = h.sibling, g = h.return;
                    if (Wa(h), h === f) {
                      x = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = g, x = p;
                      break;
                    }
                    x = g;
                  }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var M = k.sibling;
                    k.sibling = null, k = M;
                  } while (k !== null);
                }
              }
              x = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null) u.return = o, x = u;
          else e: for (; x !== null; ) {
            if (o = x, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Tn(9, o, o.return);
            }
            var c = o.sibling;
            if (c !== null) {
              c.return = o.return, x = c;
              break e;
            }
            x = o.return;
          }
        }
        var a = e.current;
        for (x = a; x !== null; ) {
          u = x;
          var d = u.child;
          if (u.subtreeFlags & 2064 && d !== null) d.return = u, x = d;
          else e: for (u = a; x !== null; ) {
            if (i = x, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  fl(9, i);
              }
            } catch (S) {
              W(i, i.return, S);
            }
            if (i === u) {
              x = null;
              break e;
            }
            var v = i.sibling;
            if (v !== null) {
              v.return = i.return, x = v;
              break e;
            }
            x = i.return;
          }
        }
        if (R = l, yt(), $e && typeof $e.onPostCommitFiberRoot == "function") try {
          $e.onPostCommitFiberRoot(rl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, Ce.transition = t;
    }
  }
  return !1;
}
function Vi(e, t, n) {
  t = un(n, t), t = Oa(e, t, 1), e = at(e, t, 1), t = ie(), e !== null && (Jn(e, 1, t), he(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Vi(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Vi(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ct === null || !ct.has(r))) {
        e = un(n, e), e = Ma(t, e, 1), t = at(t, e, 1), e = ie(), t !== null && (Jn(t, 1, e), he(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function _d(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, J === e && (ee & n) === n && (X === 4 || X === 3 && (ee & 130023424) === ee && 500 > Q() - Nu ? Nt(e, 0) : Cu |= n), he(e, t);
}
function ba(e, t) {
  t === 0 && (e.mode & 1 ? (t = sr, sr <<= 1, !(sr & 130023424) && (sr = 4194304)) : t = 1);
  var n = ie();
  e = Xe(e, t), e !== null && (Jn(e, t, n), he(e, n));
}
function Cd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ba(e, n);
}
function Nd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), ba(e, n);
}
var ec;
ec = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return de = !1, pd(e, t, n);
    de = !!(e.flags & 131072);
  }
  else de = !1, U && t.flags & 1048576 && la(t, Hr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zr(e, t), e = t.pendingProps;
      var l = nn(t, oe.current);
      bt(t, n), l = ku(null, t, r, e, l, n);
      var o = wu();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, me(r) ? (o = !0, Br(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, mu(t), l.updater = cl, t.stateNode = l, l._reactInternals = t, No(t, r, e, n), t = Lo(null, t, r, !0, o, n)) : (t.tag = 0, U && o && iu(t), ue(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = zd(r), e = Le(r, e), l) {
          case 0:
            t = zo(null, t, r, e, n);
            break e;
          case 1:
            t = Ri(null, t, r, e, n);
            break e;
          case 11:
            t = Li(null, t, r, e, n);
            break e;
          case 14:
            t = Ti(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), zo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Ri(e, t, r, l, n);
    case 3:
      e: {
        if (Fa(t), e === null) throw Error(y(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, ca(e, t), Yr(t, r, null, n);
        var u = t.memoizedState;
        if (r = u.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = un(Error(y(423)), t), t = Oi(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = un(Error(y(424)), t), t = Oi(e, t, r, n, l);
          break e;
        } else for (ye = st(t.stateNode.containerInfo.firstChild), ge = t, U = !0, Re = null, n = sa(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (rn(), r === l) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return fa(t), e === null && Eo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, go(r, l) ? u = null : o !== null && go(r, o) && (t.flags |= 32), Da(e, t), ue(e, t, u, n), t.child;
    case 6:
      return e === null && Eo(t), null;
    case 13:
      return Ua(e, t, n);
    case 4:
      return hu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Li(e, t, r, l, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, u = l.value, j(Qr, r._currentValue), r._currentValue = u, o !== null) if (Ie(o.value, u)) {
          if (o.children === l.children && !pe.current) {
            t = Ge(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var i = o.dependencies;
          if (i !== null) {
            u = o.child;
            for (var s = i.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = Qe(-1, n & -n), s.tag = 2;
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var h = f.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), f.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), _o(
                  o.return,
                  n,
                  t
                ), i.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (u = o.return, u === null) throw Error(y(341));
            u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), _o(u, n, t), u = o.sibling;
          } else u = o.child;
          if (u !== null) u.return = o;
          else for (u = o; u !== null; ) {
            if (u === t) {
              u = null;
              break;
            }
            if (o = u.sibling, o !== null) {
              o.return = u.return, u = o;
              break;
            }
            u = u.return;
          }
          o = u;
        }
        ue(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, bt(t, n), l = Ne(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), Ti(e, t, r, l, n);
    case 15:
      return Ia(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), zr(e, t), t.tag = 1, me(r) ? (e = !0, Br(t)) : e = !1, bt(t, n), Ra(t, r, l), No(t, r, l, n), Lo(null, t, r, !0, e, n);
    case 19:
      return $a(e, t, n);
    case 22:
      return ja(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function tc(e, t) {
  return zs(e, t);
}
function Pd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function _e(e, t, n, r) {
  return new Pd(e, t, n, r);
}
function Tu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function zd(e) {
  if (typeof e == "function") return Tu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Go) return 11;
    if (e === Zo) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = _e(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Rr(e, t, n, r, l, o) {
  var u = 2;
  if (r = e, typeof e == "function") Tu(e) && (u = 1);
  else if (typeof e == "string") u = 5;
  else e: switch (e) {
    case Ut:
      return Pt(n.children, l, o, t);
    case Xo:
      u = 8, l |= 8;
      break;
    case Gl:
      return e = _e(12, n, t, l | 2), e.elementType = Gl, e.lanes = o, e;
    case Zl:
      return e = _e(13, n, t, l), e.elementType = Zl, e.lanes = o, e;
    case Jl:
      return e = _e(19, n, t, l), e.elementType = Jl, e.lanes = o, e;
    case fs:
      return pl(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case as:
          u = 10;
          break e;
        case cs:
          u = 9;
          break e;
        case Go:
          u = 11;
          break e;
        case Zo:
          u = 14;
          break e;
        case be:
          u = 16, r = null;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = _e(u, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function Pt(e, t, n, r) {
  return e = _e(7, e, r, t), e.lanes = n, e;
}
function pl(e, t, n, r) {
  return e = _e(22, e, r, t), e.elementType = fs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Kl(e, t, n) {
  return e = _e(6, e, null, t), e.lanes = n, e;
}
function Yl(e, t, n) {
  return t = _e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Ld(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Ru(e, t, n, r, l, o, u, i, s) {
  return e = new Ld(e, t, n, i, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = _e(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, mu(o), e;
}
function Td(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ft, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function nc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (me(n)) return na(e, n, t);
  }
  return t;
}
function rc(e, t, n, r, l, o, u, i, s) {
  return e = Ru(n, r, !0, e, l, o, u, i, s), e.context = nc(null), n = e.current, r = ie(), l = ft(n), o = Qe(r, l), o.callback = t ?? null, at(n, o, l), e.current.lanes = l, Jn(e, l, r), he(e, r), e;
}
function ml(e, t, n, r) {
  var l = t.current, o = ie(), u = ft(l);
  return n = nc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(o, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, u), e !== null && (Me(e, l, u, o), Cr(e, l, u)), u;
}
function tl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bi(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ou(e, t) {
  Bi(e, t), (e = e.alternate) && Bi(e, t);
}
function Rd() {
  return null;
}
var lc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Mu(e) {
  this._internalRoot = e;
}
hl.prototype.render = Mu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  ml(e, t, null, null);
};
hl.prototype.unmount = Mu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ot(function() {
      ml(null, e, null, null);
    }), t[Ye] = null;
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = js();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++) ;
    tt.splice(n, 0, e), n === 0 && Fs(e);
  }
};
function Iu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function vl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Wi() {
}
function Od(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = tl(u);
        o.call(f);
      };
    }
    var u = rc(t, r, e, 0, null, !1, !1, "", Wi);
    return e._reactRootContainer = u, e[Ye] = u.current, Vn(e.nodeType === 8 ? e.parentNode : e), Ot(), u;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var f = tl(s);
      i.call(f);
    };
  }
  var s = Ru(e, 0, !1, null, null, !1, !1, "", Wi);
  return e._reactRootContainer = s, e[Ye] = s.current, Vn(e.nodeType === 8 ? e.parentNode : e), Ot(function() {
    ml(t, s, n, r);
  }), s;
}
function yl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var s = tl(u);
        i.call(s);
      };
    }
    ml(t, u, e, l);
  } else u = Od(n, t, e, l, r);
  return tl(u);
}
Ms = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xn(t.pendingLanes);
        n !== 0 && (bo(t, n | 1), he(t, Q()), !(R & 6) && (sn = Q() + 500, yt()));
      }
      break;
    case 13:
      Ot(function() {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ie();
          Me(r, e, 1, l);
        }
      }), Ou(e, 1);
  }
};
eu = function(e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ie();
      Me(t, e, 134217728, n);
    }
    Ou(e, 134217728);
  }
};
Is = function(e) {
  if (e.tag === 13) {
    var t = ft(e), n = Xe(e, t);
    if (n !== null) {
      var r = ie();
      Me(n, e, t, r);
    }
    Ou(e, t);
  }
};
js = function() {
  return O;
};
Ds = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
io = function(e, t, n) {
  switch (t) {
    case "input":
      if (eo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(y(90));
            ps(r), eo(r, l);
          }
        }
      }
      break;
    case "textarea":
      hs(e, n);
      break;
    case "select":
      t = n.value, t != null && Gt(e, !!n.multiple, t, !1);
  }
};
xs = Pu;
Es = Ot;
var Md = { usingClientEntryPoint: !1, Events: [bn, Bt, il, ws, Ss, Pu] }, kn = { findFiberByHostInstance: Et, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Id = { bundleType: kn.bundleType, version: kn.version, rendererPackageName: kn.rendererPackageName, rendererConfig: kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ns(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: kn.findFiberByHostInstance || Rd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kr.isDisabled && kr.supportsFiber) try {
    rl = kr.inject(Id), $e = kr;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Md;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Iu(t)) throw Error(y(200));
  return Td(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Iu(e)) throw Error(y(299));
  var n = !1, r = "", l = lc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ru(e, 1, !1, null, null, n, !1, r, l), e[Ye] = t.current, Vn(e.nodeType === 8 ? e.parentNode : e), new Mu(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Ns(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Ot(e);
};
we.hydrate = function(e, t, n) {
  if (!vl(t)) throw Error(y(200));
  return yl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Iu(e)) throw Error(y(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", u = lc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = rc(t, null, e, 1, n ?? null, l, !1, o, u), e[Ye] = t.current, Vn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new hl(t);
};
we.render = function(e, t, n) {
  if (!vl(t)) throw Error(y(200));
  return yl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!vl(e)) throw Error(y(40));
  return e._reactRootContainer ? (Ot(function() {
    yl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ye] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Pu;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!vl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return yl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function oc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc);
    } catch (e) {
      console.error(e);
    }
}
oc(), os.exports = we;
var jd = os.exports, ju, Hi = jd;
ju = Hi.createRoot, Hi.hydrateRoot;
const Qi = ({
  checkoutUrl: e,
  onClose: t,
  onSuccess: n,
  onError: r
}) => {
  const [l, o] = Ue.useState(!0);
  return Ue.useEffect(() => {
    const u = (i) => {
      i.key === "Escape" && t();
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [t]), Ue.useEffect(() => {
    const u = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = u;
    };
  }, []), Ue.useEffect(() => {
    const u = (i) => {
      const s = i.data;
      !s || typeof s != "object" || (s.type === "ORKI_PAYMENT_SUCCESS" || s.event === "payment.success" ? (n == null || n(s.payload || s), t()) : s.type === "ORKI_PAYMENT_ERROR" || s.event === "payment.error" ? r == null || r(s.payload || s) : (s.type === "ORKI_PAYMENT_CANCEL" || s.type === "ORKI_CLOSE") && t());
    };
    return window.addEventListener("message", u), () => window.removeEventListener("message", u);
  }, [t, n, r]), /* @__PURE__ */ I.jsx("div", { className: "orki-modal-backdrop", onClick: t, role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ I.jsxs("div", { className: "orki-modal-container", onClick: (u) => u.stopPropagation(), children: [
    /* @__PURE__ */ I.jsxs("div", { className: "orki-modal-header", children: [
      /* @__PURE__ */ I.jsxs("div", { className: "orki-modal-brand", children: [
        /* @__PURE__ */ I.jsxs(
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
              /* @__PURE__ */ I.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
              /* @__PURE__ */ I.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
            ]
          }
        ),
        /* @__PURE__ */ I.jsx("span", { children: "Orki Secure Checkout" })
      ] }),
      /* @__PURE__ */ I.jsx(
        "button",
        {
          type: "button",
          className: "orki-modal-close",
          onClick: t,
          "aria-label": "Close checkout",
          children: "×"
        }
      )
    ] }),
    /* @__PURE__ */ I.jsxs("div", { className: "orki-modal-body", children: [
      l && /* @__PURE__ */ I.jsxs("div", { className: "orki-modal-loading", children: [
        /* @__PURE__ */ I.jsx("div", { className: "orki-spinner" }),
        /* @__PURE__ */ I.jsx("span", { children: "Loading secure payment..." })
      ] }),
      /* @__PURE__ */ I.jsx(
        "iframe",
        {
          src: e,
          className: "orki-modal-iframe",
          title: "Orki Checkout",
          allow: "payment; camera; clipboard-write",
          onLoad: () => o(!1)
        }
      )
    ] })
  ] }) });
}, Dd = `/* ─── Orki Checkout Widget Styles ────────────────────────────────────────── */

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
function gl() {
  if (typeof document > "u") return;
  const e = "orki-checkout-widget-styles";
  if (!document.getElementById(e)) {
    const t = document.createElement("style");
    t.id = e, t.textContent = Dd, document.head.appendChild(t);
  }
}
typeof document < "u" && gl();
const Fd = !0, Ud = async (e, t = "5.00", n) => {
  await new Promise((o) => setTimeout(o, 900));
  const r = `chg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`, l = `https://orki-payment-widget.vercel.app/pay/${r}`;
  return {
    msg: "Charge created successfully.",
    data: {
      charge_token: r,
      paylink_id: e,
      amount: (parseFloat(t || "5.00") || 5).toFixed(8),
      price_denomination: "fiat",
      price_denomination_id: "01kf0etgd9tgvw372wwkw7rzk6",
      status: "pending",
      amount_paid: "0.00000000",
      chain: null,
      tx_hash: null,
      metadata: n || {
        orderId: "ORD-DEMO",
        customerReference: "cust-demo"
      },
      checkout_url: l,
      expires_at: new Date(Date.now() + 30 * 60 * 1e3).toISOString(),
      paid_at: null,
      created_at: (/* @__PURE__ */ new Date()).toISOString()
    },
    success: !0,
    code: 200
  };
};
const uc = ({
  paylinkId: e,
  amount: t,
  redirectUrl: n,
  redirect_url: r,
  metadata: l,
  apiUrl: o = "https://api.orki.io",
  primaryColor: u = "#783FE4",
  buttonTextColor: i = "#FFFFFF",
  buttonText: s = "Pay Now",
  className: f = "",
  style: h = {},
  display: m = "iframe",
  onStartPayment: p,
  onChargeCreated: g,
  onSuccess: w,
  onError: k,
  onClose: M,
  autoOpen: c = !1,
  onModalClose: a
}) => {
  gl();
  const [d, v] = Ue.useState(!1), [S, C] = Ue.useState(null), [_, N] = Ue.useState(null), B = n || r, z = async () => {
    var Je;
    if (!e) {
      const q = new Error("[OrkiCheckout] paylinkId is required");
      console.error(q), k == null || k(q);
      return;
    }
    v(!0), N(null), p == null || p();
    try {
      let q;
      if (Fd && (console.log("[OrkiCheckout] [MOCK MODE] Simulating charge creation for paylink:", e), q = await Ud(e, t, l)), !q.success || !((Je = q.data) != null && Je.checkout_url))
        throw new Error(q.msg || "Invalid charge response from server");
      g == null || g(q.data);
      const jt = q.data.checkout_url;
      m === "new-tab" ? (window.open(jt, "_blank", "noopener,noreferrer"), v(!1)) : (C(jt), v(!1));
    } catch (q) {
      console.error("[OrkiCheckout] Failed to create charge:", q);
      const jt = q instanceof Error ? q.message : "Failed to start payment";
      N(jt), v(!1), k == null || k(q);
    }
  };
  Ec.useEffect(() => {
    c && z();
  }, [c]);
  const ce = () => {
    C(null), M == null || M(), a == null || a();
  };
  if (c)
    return S ? /* @__PURE__ */ I.jsx(
      Qi,
      {
        checkoutUrl: S,
        onClose: ce,
        onSuccess: w,
        onError: k
      }
    ) : null;
  const gt = s || (t ? `Pay $${t}` : "Pay Now");
  return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    /* @__PURE__ */ I.jsx(
      "button",
      {
        type: "button",
        className: `orki-pay-btn ${f}`,
        style: {
          backgroundColor: u,
          color: i,
          ...h
        },
        onClick: z,
        disabled: d,
        children: d ? /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
          /* @__PURE__ */ I.jsx("span", { className: "orki-spinner" }),
          /* @__PURE__ */ I.jsx("span", { children: "Processing..." })
        ] }) : gt
      }
    ),
    _ && /* @__PURE__ */ I.jsx("div", { className: "orki-inline-error", title: _, children: _ }),
    S && /* @__PURE__ */ I.jsx(
      Qi,
      {
        checkoutUrl: S,
        onClose: ce,
        onSuccess: w,
        onError: k
      }
    )
  ] });
};
function Ki(e, t) {
  gl();
  const n = typeof e == "string" ? document.getElementById(e) : e;
  if (!n) {
    console.error("[OrkiCheckout] Mount target element not found:", e);
    return;
  }
  ju(n).render(/* @__PURE__ */ I.jsx(uc, { ...t }));
}
function $d(e) {
  gl();
  const t = document.createElement("div");
  t.id = `orki-checkout-portal-${Date.now()}`, document.body.appendChild(t);
  const n = ju(t), r = () => {
    var l;
    (l = e.onClose) == null || l.call(e), setTimeout(() => {
      n.unmount(), t.remove();
    }, 100);
  };
  n.render(/* @__PURE__ */ I.jsx(uc, { ...e, autoOpen: !0, onModalClose: r }));
}
const Yi = Object.assign(Ki, {
  open: $d,
  mount: Ki
});
typeof window < "u" && (window.orkiCheckout = Yi, window.checkoutWidget = Yi);
export {
  Qi as CheckoutModal,
  uc as CheckoutWidget,
  Yi as default,
  Yi as orkiCheckout
};
