import { _ as G, w as H } from "./utils-BX8S-HAr.js";
import { onMounted as J, watch as g, onUnmounted as R, defineComponent as K, ref as u, computed as y, watchEffect as Q, openBlock as V, createElementBlock as B, mergeProps as M, toHandlers as C, renderSlot as O, createVNode as W, Transition as X, withCtx as Y, createTextVNode as Z, toDisplayString as D, createElementVNode as ee, createCommentVNode as te } from "vue";
import { createPopper as re } from "@popperjs/core";
import { u as oe } from "./hooks-CoExOHWd.js";
import { i as $, f as b, d as F, b as I } from "./vendor-BMSfUpMX.js";
function ne(T, d, h, e) {
  let l, n;
  const a = /* @__PURE__ */ new Map(), c = () => {
    const o = d.value;
    $(o) && b(h.value, (i, v) => {
      a.set(v, i), o == null || o.addEventListener(v, i);
    });
  }, f = () => {
    const o = d.value;
    $(o) && b(
      ["mouseenter", "click", "contextmenu"],
      (i) => a.has(i) && (o == null ? void 0 : o.removeEventListener(i, a.get(i)))
    );
  };
  J(() => {
    n = g(
      d,
      () => T.virtualTriggering && c(),
      { immediate: !0 }
    ), l = g(
      h,
      () => {
        T.virtualTriggering && (f(), c(), e());
      },
      { deep: !0 }
    );
  }), R(() => {
    n == null || n(), l == null || l();
  });
}
const ae = /* @__PURE__ */ K({
  name: "ErTooltip",
  __name: "Tooltip",
  props: {
    virtualRef: {},
    virtualTriggering: { type: Boolean },
    content: {},
    trigger: { default: "hover" },
    placement: { default: "bottom" },
    manual: { type: Boolean },
    disabled: { type: Boolean },
    popperOptions: {},
    transition: { default: "fade" },
    showTimeout: { default: 0 },
    hideTimeout: { default: 200 }
  },
  emits: ["visible-change", "click-outside"],
  setup(T, { expose: d, emit: h }) {
    const e = T, l = h, n = u(!1), a = u({}), c = u({}), f = u({}), o = u(), i = u(), v = u(), k = y(() => e.virtualTriggering ? e.virtualRef ?? v.value : v.value), A = y(() => ({
      placement: e.placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
          }
        }
      ],
      ...e.popperOptions
    })), S = y(
      () => e.trigger === "hover" ? e.showTimeout : 0
    ), U = y(
      () => e.trigger === "hover" ? e.hideTimeout : 0
    ), E = /* @__PURE__ */ new Map();
    E.set("hover", () => {
      a.value.mouseenter = p, c.value.mouseleave = w, f.value.mouseenter = p;
    }), E.set("click", () => {
      a.value.click = j;
    }), E.set("contextmenu", () => {
      a.value.contextmenu = (t) => {
        t.preventDefault(), p();
      };
    });
    let r, s;
    function p() {
      s == null || s.cancel(), r == null || r();
    }
    function w() {
      r == null || r.cancel(), s == null || s();
    }
    function j() {
      n.value ? w() : p();
    }
    function _(t) {
      e.disabled || (n.value = t, l("visible-change", t));
    }
    function N() {
      var t;
      e.disabled || e.manual || (t = E.get(e.trigger)) == null || t();
    }
    let m;
    function P() {
      m == null || m.destroy(), m = null;
    }
    function x() {
      a.value = {}, c.value = {}, f.value = {}, N();
    }
    const q = p, z = function() {
      r == null || r.cancel(), _(!1);
    };
    return g(
      n,
      (t) => {
        t && k.value && i.value && (m = re(
          k.value,
          i.value,
          A.value
        ));
      },
      { flush: "post" }
    ), g(
      () => e.manual,
      (t) => {
        if (t) {
          x();
          return;
        }
        N();
      }
    ), g(
      () => e.trigger,
      () => {
        r == null || r.cancel(), n.value = !1, l("visible-change", !1), x();
      }
    ), Q(() => {
      e.manual || N(), r = F(I(_, null, !0), S.value), s = F(I(_, null, !1), U.value);
    }), oe(o, () => {
      l("click-outside"), !(e.trigger === "hover" || e.manual) && n.value && w();
    }), ne(e, k, a, () => {
      r == null || r.cancel(), _(!1);
    }), R(() => {
      P();
    }), d({
      show: q,
      hide: z
    }), (t, L) => (V(), B("div", M({
      class: "er-tooltip",
      ref_key: "containerNode",
      ref: o
    }, C(c.value, !0)), [
      t.virtualTriggering ? O(t.$slots, "default", { key: 1 }, void 0, !0) : (V(), B("div", M({
        key: 0,
        class: "er-tooltip__trigger",
        ref_key: "_triggerNode",
        ref: v
      }, C(a.value, !0)), [
        O(t.$slots, "default", {}, void 0, !0)
      ], 16)),
      W(X, {
        name: t.transition,
        onAfterLeave: P
      }, {
        default: Y(() => [
          n.value ? (V(), B("div", M({
            key: 0,
            class: "er-tooltip__popper",
            ref_key: "popperNode",
            ref: i
          }, C(f.value, !0)), [
            O(t.$slots, "content", {}, () => [
              Z(D(t.content), 1)
            ], !0),
            L[0] || (L[0] = ee("div", {
              id: "arrow",
              "data-popper-arrow": ""
            }, null, -1))
          ], 16)) : te("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 16));
  }
}), ie = /* @__PURE__ */ G(ae, [["__scopeId", "data-v-12569994"]]), de = H(ie);
export {
  de as E
};
