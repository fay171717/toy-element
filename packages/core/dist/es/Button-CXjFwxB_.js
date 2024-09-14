import { defineComponent as k, useSlots as $, inject as S, computed as s, ref as N, openBlock as p, createBlock as v, resolveDynamicComponent as O, normalizeClass as R, unref as U, withCtx as w, renderSlot as c, createVNode as D, normalizeStyle as b, createCommentVNode as g, provide as K, reactive as P, toRef as d, createElementBlock as V } from "vue";
import { E as h } from "./Icon-DfLcuQ1m.js";
import { t as X } from "./vendor-BMSfUpMX.js";
import { _ as z, w as T } from "./utils-BX8S-HAr.js";
const _ = Symbol(
  "BUTTON_GROUP_CTX_KEY"
), Y = /* @__PURE__ */ k({
  name: "ErButton",
  __name: "Button",
  props: {
    tag: { default: "button" },
    type: {},
    size: {},
    plain: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    disabled: { type: Boolean },
    autofocus: { type: Boolean },
    nativeType: { default: "button" },
    icon: {},
    loading: { type: Boolean },
    loadingIcon: {},
    useThrottle: { type: Boolean, default: !0 },
    throttleDuration: { default: 500 }
  },
  emits: ["click"],
  setup(a, { expose: n, emit: l }) {
    const t = a, C = l, E = $(), o = S(_, void 0), i = s(() => (o == null ? void 0 : o.size) ?? t.size ?? ""), r = s(() => (o == null ? void 0 : o.type) ?? t.type ?? ""), u = s(() => (o == null ? void 0 : o.disabled) || (t == null ? void 0 : t.disabled) || !1), f = N(), y = (e) => C("click", e), G = X(y, t.throttleDuration, { trailing: !1 }), m = s(() => ({ marginRight: E ? "6px" : "0px" }));
    return n({
      ref: f,
      disabled: u,
      size: i,
      type: r
    }), (e, B) => (p(), v(O(e.tag), {
      autofocus: e.autofocus,
      ref_key: "_ref",
      ref: f,
      class: R(["er-button", {
        [`er-button--${r.value}`]: r.value,
        [`er-button--${i.value}`]: i.value,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle,
        "is-disabled": u.value,
        "is-loading": e.loading
      }]),
      disabled: u.value || e.loading ? !0 : void 0,
      type: e.tag === "button" ? e.nativeType : void 0,
      "data-testid": "story-test-btn",
      onClick: B[0] || (B[0] = (I) => e.useThrottle ? U(G)(I) : y)
    }, {
      default: w(() => [
        e.loading ? c(e.$slots, "loading", { key: 0 }, () => [
          D(h, {
            class: "loading-icon",
            icon: e.loadingIcon ?? "spinner",
            style: b(m.value),
            size: "1x",
            spin: ""
          }, null, 8, ["icon", "style"])
        ], !0) : g("", !0),
        e.icon && !e.loading ? (p(), v(h, {
          key: 1,
          icon: e.icon,
          size: "1x",
          style: b(m.value)
        }, null, 8, ["icon", "style"])) : g("", !0),
        c(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["autofocus", "disabled", "type", "class"]));
  }
}), j = /* @__PURE__ */ z(Y, [["__scopeId", "data-v-4074f3df"]]), q = { class: "er-button-group" }, A = /* @__PURE__ */ k({
  name: "ErButtonGroup",
  __name: "ButtonGroup",
  props: {
    size: {},
    type: {},
    disabled: { type: Boolean }
  },
  setup(a) {
    const n = a;
    return K(
      _,
      P({
        size: d(n, "size"),
        type: d(n, "type"),
        disabled: d(n, "disabled")
      })
    ), (l, t) => (p(), V("div", q, [
      c(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}), F = /* @__PURE__ */ z(A, [["__scopeId", "data-v-8b8f04e2"]]), Q = T(j), W = T(F);
export {
  j as B,
  Q as E,
  W as a
};
