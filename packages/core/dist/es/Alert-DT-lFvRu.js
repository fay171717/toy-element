import { defineComponent as k, useSlots as E, ref as I, computed as a, openBlock as o, createBlock as i, Transition as b, withCtx as B, withDirectives as C, createElementVNode as t, normalizeClass as s, createCommentVNode as c, normalizeStyle as N, renderSlot as p, createTextVNode as d, toDisplayString as f, createElementBlock as S, createVNode as g, withModifiers as A, vShow as V } from "vue";
import { t as $, _ as D, w as z } from "./utils-BX8S-HAr.js";
import { E as u } from "./Icon-DfLcuQ1m.js";
const M = { class: "er-alert__content" }, T = { class: "er-alert__description" }, j = {
  key: 0,
  class: "er-alert__close"
}, q = /* @__PURE__ */ k({
  name: "ErAlert",
  __name: "Alert",
  props: {
    title: {},
    type: { default: "info" },
    description: {},
    effect: { default: "light" },
    closable: { type: Boolean, default: !0 },
    center: { type: Boolean },
    showIcon: { type: Boolean }
  },
  emits: ["close"],
  setup(m, { emit: _ }) {
    const l = m, h = _, y = E(), r = I(!0), v = a(() => $.get(l.type) ?? "circle-info"), n = a(() => l.description || y.default);
    function w() {
      r.value = !1, h("close");
    }
    return (e, G) => (o(), i(b, { name: "er-alert-fade" }, {
      default: B(() => [
        C(t("div", {
          class: s(["er-alert", {
            [`er-alert__${e.type}`]: e.type,
            [`er-alert__${e.effect}`]: e.effect,
            "text-center": e.center
          }]),
          role: "alert"
        }, [
          e.showIcon ? (o(), i(u, {
            key: 0,
            class: s(["er-alert__icon", { "big-icon": n.value }]),
            icon: v.value
          }, null, 8, ["class", "icon"])) : c("", !0),
          t("div", M, [
            t("span", {
              class: s(["er-alert__title", { "with-desc": n.value }]),
              style: N({ display: e.center && !e.showIcon ? "flow" : "inline" })
            }, [
              p(e.$slots, "title", {}, () => [
                d(f(e.title), 1)
              ], !0)
            ], 6),
            t("p", T, [
              p(e.$slots, "default", {}, () => [
                d(f(e.description), 1)
              ], !0)
            ]),
            e.closable ? (o(), S("div", j, [
              g(u, {
                onClick: A(w, ["stop"]),
                icon: "xmark"
              })
            ])) : c("", !0)
          ])
        ], 2), [
          [V, r.value]
        ])
      ]),
      _: 3
    }));
  }
}), F = /* @__PURE__ */ D(q, [["__scopeId", "data-v-54b3b878"]]), L = z(F);
export {
  L as E
};
