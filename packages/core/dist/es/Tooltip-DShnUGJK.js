import { onMounted as e, watch as t, onUnmounted as o, defineComponent as a, ref as l, computed as i, watchEffect as n, openBlock as r, createElementBlock as u, mergeProps as s, toHandlers as v, renderSlot as c, createVNode as p, Transition as d, withCtx as f, createTextVNode as m, toDisplayString as g, createElementVNode as h, createCommentVNode as _ } from "vue";
import { createPopper as k } from "@popperjs/core";
import { u as T } from "./hooks-DrdE-oTR.js";
import { i as y, f as b, d as w, b as x } from "./vendor-CNp94w8A.js";
import { _ as j, w as E } from "./utils-BI3XmkOj.js";
const B = E(j(a({ name: "ErTooltip", __name: "Tooltip", props: { virtualRef: {}, virtualTriggering: { type: Boolean }, content: {}, trigger: { default: "hover" }, placement: { default: "bottom" }, manual: { type: Boolean }, disabled: { type: Boolean }, popperOptions: {}, transition: { default: "fade" }, showTimeout: { default: 0 }, hideTimeout: { default: 200 } }, emits: ["visible-change", "click-outside"], setup(a2, { expose: j2, emit: E2 }) {
  const B2 = a2, L = E2, N = l(false), $ = l({}), M = l({}), O = l({}), R = l(), A = l(), D = l(), I = i(() => B2.virtualTriggering ? B2.virtualRef ?? D.value : D.value), q = i(() => ({ placement: B2.placement, modifiers: [{ name: "offset", options: { offset: [0, 9] } }], ...B2.popperOptions })), z = i(() => "hover" === B2.trigger ? B2.showTimeout : 0), C = i(() => "hover" === B2.trigger ? B2.hideTimeout : 0), F = /* @__PURE__ */ new Map();
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
  function S(e2) {
    B2.disabled || (N.value = e2, L("visible-change", e2));
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
    $.value.contextmenu = (e2) => {
      e2.preventDefault(), K();
    };
  });
  const X = K;
  return t(N, (e2) => {
    e2 && I.value && A.value && (J = k(I.value, A.value, q.value));
  }, { flush: "post" }), t(() => B2.manual, (e2) => {
    e2 ? W() : U();
  }), t(() => B2.trigger, () => {
    G == null ? void 0 : G.cancel(), N.value = false, L("visible-change", false), W();
  }), n(() => {
    B2.manual || U(), G = w(x(S, null, true), z.value), H = w(x(S, null, false), C.value);
  }), T(R, () => {
    L("click-outside"), "hover" === B2.trigger || B2.manual || N.value && P();
  }), function(a3, l2, i2) {
    let n2, r2;
    const u2 = /* @__PURE__ */ new Map(), s2 = () => {
      const e2 = l2.value;
      y(e2) && b(i2.value, (t2, o2) => {
        u2.set(o2, t2), e2 == null ? void 0 : e2.addEventListener(o2, t2);
      });
    };
    e(() => {
      r2 = t(l2, () => a3.virtualTriggering && s2(), { immediate: true }), n2 = t(i2, () => {
        a3.virtualTriggering && ((() => {
          const e2 = l2.value;
          y(e2) && b(["mouseenter", "click", "contextmenu"], (t2) => u2.has(t2) && (e2 == null ? void 0 : e2.removeEventListener(t2, u2.get(t2))));
        })(), s2(), G == null ? void 0 : G.cancel(), S(false));
      }, { deep: true });
    }), o(() => {
      r2 == null ? void 0 : r2(), n2 == null ? void 0 : n2();
    });
  }(B2, I, $), o(() => {
    V();
  }), j2({ show: X, hide: function() {
    G == null ? void 0 : G.cancel(), S(false);
  } }), (e2, t2) => (r(), u("div", s({ class: "er-tooltip", ref_key: "containerNode", ref: R }, v(M.value, true)), [e2.virtualTriggering ? c(e2.$slots, "default", { key: 1 }, void 0, true) : (r(), u("div", s({ key: 0, class: "er-tooltip__trigger", ref_key: "_triggerNode", ref: D }, v($.value, true)), [c(e2.$slots, "default", {}, void 0, true)], 16)), p(d, { name: e2.transition, onAfterLeave: V }, { default: f(() => [N.value ? (r(), u("div", s({ key: 0, class: "er-tooltip__popper", ref_key: "popperNode", ref: A }, v(O.value, true)), [c(e2.$slots, "content", {}, () => [m(g(e2.content), 1)], true), t2[0] || (t2[0] = h("div", { id: "arrow", "data-popper-arrow": "" }, null, -1))], 16)) : _("", true)]), _: 3 }, 8, ["name"])], 16));
} }), [["__scopeId", "data-v-e1f582ce"]]));
export {
  B as E
};
