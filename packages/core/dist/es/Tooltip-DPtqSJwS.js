import { _ as e, w as t } from "./utils-BI3XmkOj.js";
import { onMounted as o, watch as a, onUnmounted as l, defineComponent as i, ref as n, computed as r, watchEffect as u, openBlock as s, createElementBlock as v, mergeProps as c, toHandlers as p, renderSlot as d, createVNode as f, Transition as m, withCtx as g, createTextVNode as h, toDisplayString as _, createElementVNode as k, createCommentVNode as T } from "vue";
import { createPopper as y } from "@popperjs/core";
import { u as b } from "./hooks-DrdE-oTR.js";
import { i as w, f as x, d as j, b as E } from "./vendor-CNp94w8A.js";
const B = t(e(i({ name: "ErTooltip", __name: "Tooltip", props: { virtualRef: {}, virtualTriggering: { type: Boolean }, content: {}, trigger: { default: "hover" }, placement: { default: "bottom" }, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: { default: "fade" }, showTimeout: { default: 0 }, hideTimeout: { default: 200 } }, emits: ["visible-change", "click-outside"], setup(e2, { expose: t2, emit: i2 }) {
  const B2 = e2, L = i2, N = n(false), $ = n({}), M = n({}), O = n({}), R = n(), A = n(), D = n(), I = r(() => B2.virtualTriggering ? B2.virtualRef ?? D.value : D.value), q = r(() => ({ placement: B2.placement, modifiers: [{ name: "offset", options: { offset: [0, 9] } }], ...B2.popperOptions })), z = r(() => "hover" === B2.trigger ? B2.showTimeout : 0), C = r(() => "hover" === B2.trigger ? B2.hideTimeout : 0), F = /* @__PURE__ */ new Map();
  let G, H, J;
  function K() {
    H == null ? void 0 : H.cancel(), G == null ? void 0 : G();
  }
  function P() {
    G == null ? void 0 : G.cancel(), H == null ? void 0 : H();
  }
  function Q() {
    N.value ? P() : K();
  }
  function S(e3) {
    B2.disabled || (N.value = e3, L("visible-change", e3));
  }
  function U() {
    var _a;
    B2.disabled || B2.manual || ((_a = F.get(B2.trigger)) == null ? void 0 : _a());
  }
  function V() {
    J == null ? void 0 : J.destroy(), J = null;
  }
  function W() {
    $.value = {}, M.value = {}, O.value = {}, U();
  }
  F.set("hover", () => {
    $.value.mouseenter = K, M.value.mouseleave = P, O.value.mouseenter = K;
  }), F.set("click", () => {
    $.value.click = Q;
  }), F.set("contextmenu", () => {
    $.value.contextmenu = (e3) => {
      e3.preventDefault(), K();
    };
  });
  const X = K;
  return a(N, (e3) => {
    e3 && I.value && A.value && (J = y(I.value, A.value, q.value));
  }, { flush: "post" }), a(() => B2.manual, (e3) => {
    e3 ? W() : U();
  }), a(() => B2.trigger, () => {
    G == null ? void 0 : G.cancel(), N.value = false, L("visible-change", false), W();
  }), u(() => {
    B2.manual || U(), G = j(E(S, null, true), z.value), H = j(E(S, null, false), C.value);
  }), b(R, () => {
    L("click-outside"), "hover" === B2.trigger || B2.manual || N.value && P();
  }), function(e3, t3, i3) {
    let n2, r2;
    const u2 = /* @__PURE__ */ new Map(), s2 = () => {
      const e4 = t3.value;
      w(e4) && x(i3.value, (t4, o2) => {
        u2.set(o2, t4), e4 == null ? void 0 : e4.addEventListener(o2, t4);
      });
    };
    o(() => {
      r2 = a(t3, () => e3.virtualTriggering && s2(), { immediate: true }), n2 = a(i3, () => {
        e3.virtualTriggering && ((() => {
          const e4 = t3.value;
          w(e4) && x(["mouseenter", "click", "contextmenu"], (t4) => u2.has(t4) && (e4 == null ? void 0 : e4.removeEventListener(t4, u2.get(t4))));
        })(), s2(), G == null ? void 0 : G.cancel(), S(false));
      }, { deep: true });
    }), l(() => {
      r2 == null ? void 0 : r2(), n2 == null ? void 0 : n2();
    });
  }(B2, I, $), l(() => {
    V();
  }), t2({ show: X, hide: function() {
    G == null ? void 0 : G.cancel(), S(false);
  } }), (e3, t3) => (s(), v("div", c({ class: "er-tooltip", ref_key: "containerNode", ref: R }, p(M.value, true)), [e3.virtualTriggering ? d(e3.$slots, "default", { key: 1 }, void 0, true) : (s(), v("div", c({ key: 0, class: "er-tooltip__trigger", ref_key: "_triggerNode", ref: D }, p($.value, true)), [d(e3.$slots, "default", {}, void 0, true)], 16)), f(m, { name: e3.transition, onAfterLeave: V }, { default: g(() => [N.value ? (s(), v("div", c({ key: 0, class: "er-tooltip__popper", ref_key: "popperNode", ref: A }, p(O.value, true)), [d(e3.$slots, "content", {}, () => [h(_(e3.content), 1)], true), t3[0] || (t3[0] = k("div", { id: "arrow", "data-popper-arrow": "" }, null, -1))], 16)) : T("", true)]), _: 3 }, 8, ["name"])], 16));
} }), [["__scopeId", "data-v-e1f582ce"]]));
export {
  B as E
};
