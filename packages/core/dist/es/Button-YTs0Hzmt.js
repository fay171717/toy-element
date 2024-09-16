import { defineComponent as e, useSlots as t, inject as o, computed as a, ref as i, openBlock as s, createBlock as l, resolveDynamicComponent as n, normalizeClass as d, unref as u, withCtx as r, renderSlot as p, createVNode as c, normalizeStyle as y, createCommentVNode as f, provide as b, reactive as v, toRef as g, createElementBlock as m } from "vue";
import { E as _ } from "./Icon-C3qu-AHQ.js";
import { t as B } from "./vendor-CNp94w8A.js";
import { _ as z, w as T } from "./utils-BI3XmkOj.js";
const k = Symbol("BUTTON_GROUP_CTX_KEY"), x = z(e({ name: "ErButton", __name: "Button", props: { tag: { default: "button" }, type: {}, size: {}, nativeType: { default: "button" }, disabled: { type: Boolean }, loading: { type: Boolean }, icon: {}, circle: { type: Boolean }, plain: { type: Boolean }, round: { type: Boolean }, loadingIcon: {}, autofocus: { type: Boolean }, useThrottle: { type: Boolean, default: true }, throttleDuration: { default: 500 } }, emits: ["click"], setup(e2, { expose: b2, emit: v2 }) {
  const g2 = e2, m2 = v2, z2 = t(), T2 = o(k, void 0), x2 = a(() => (T2 == null ? void 0 : T2.size) ?? g2.size ?? ""), h2 = a(() => (T2 == null ? void 0 : T2.type) ?? g2.type ?? ""), E2 = a(() => (T2 == null ? void 0 : T2.disabled) || (g2 == null ? void 0 : g2.disabled) || false), I2 = i(), $2 = (e3) => m2("click", e3), j = B($2, g2.throttleDuration, { trailing: false }), G = a(() => ({ marginRight: z2 ? "6px" : "0px" }));
  return b2({ ref: I2, disabled: E2, size: x2, type: h2 }), (e3, t2) => (s(), l(n(e3.tag), { autofocus: e3.autofocus, ref_key: "_ref", ref: I2, class: d(["er-button", { [`er-button--${h2.value}`]: h2.value, [`er-button--${x2.value}`]: x2.value, "is-plain": e3.plain, "is-round": e3.round, "is-circle": e3.circle, "is-disabled": E2.value, "is-loading": e3.loading }]), disabled: !(!E2.value && !e3.loading) || void 0, type: "button" === e3.tag ? e3.nativeType : void 0, "data-testid": "story-test-btn", onClick: t2[0] || (t2[0] = (t3) => e3.useThrottle ? u(j)(t3) : $2) }, { default: r(() => [e3.loading ? p(e3.$slots, "loading", { key: 0 }, () => [c(_, { class: "loading-icon", icon: e3.loadingIcon ?? "spinner", style: y(G.value), size: "1x", spin: "" }, null, 8, ["icon", "style"])], true) : f("", true), e3.icon && !e3.loading ? (s(), l(_, { key: 1, icon: e3.icon, size: "1x", style: y(G.value) }, null, 8, ["icon", "style"])) : f("", true), p(e3.$slots, "default", {}, void 0, true)]), _: 3 }, 8, ["autofocus", "disabled", "type", "class"]));
} }), [["__scopeId", "data-v-4074f3df"]]), h = { class: "er-button-group" }, E = z(e({ name: "ErButtonGroup", __name: "ButtonGroup", props: { size: {}, type: {}, disabled: { type: Boolean } }, setup(e2) {
  const t2 = e2;
  return b(k, v({ size: g(t2, "size"), type: g(t2, "type"), disabled: g(t2, "disabled") })), (e3, t3) => (s(), m("div", h, [p(e3.$slots, "default", {}, void 0, true)]));
} }), [["__scopeId", "data-v-8b8f04e2"]]), I = T(x), $ = T(E);
export {
  x as B,
  I as E,
  $ as a
};
