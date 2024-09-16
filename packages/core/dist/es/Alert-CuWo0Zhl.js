import { defineComponent as e, useSlots as t, ref as l, computed as s, openBlock as a, createBlock as o, Transition as r, withCtx as c, withDirectives as i, createElementVNode as n, normalizeClass as p, createCommentVNode as f, normalizeStyle as _, renderSlot as d, createTextVNode as u, toDisplayString as m, createElementBlock as y, createVNode as v, withModifiers as w, vShow as h } from "vue";
import { t as I, _ as k, w as $ } from "./utils-BvFIUHc3.js";
import { E as b } from "./Icon-CXWoaiEj.js";
const g = { class: "er-alert__content" }, x = { class: "er-alert__description" }, B = { key: 0, class: "er-alert__close" }, E = $(k(e({ name: "ErAlert", __name: "Alert", props: { title: {}, type: { default: "info" }, description: {}, effect: { default: "light" }, closable: { type: Boolean, default: true }, center: { type: Boolean }, showIcon: { type: Boolean } }, emits: ["close"], setup(e2, { emit: k2 }) {
  const $2 = e2, E2 = k2, j = t(), A = l(true), C = s(() => I.get($2.type) ?? "circle-info"), q = s(() => $2.description || j.default);
  function z() {
    A.value = false, E2("close");
  }
  return (e3, t2) => (a(), o(r, { name: "er-alert-fade" }, { default: c(() => [i(n("div", { class: p(["er-alert", { [`er-alert__${e3.type}`]: e3.type, [`er-alert__${e3.effect}`]: e3.effect, "text-center": e3.center }]), role: "alert" }, [e3.showIcon ? (a(), o(b, { key: 0, class: p(["er-alert__icon", { "big-icon": q.value }]), icon: C.value }, null, 8, ["class", "icon"])) : f("", true), n("div", g, [n("span", { class: p(["er-alert__title", { "with-desc": q.value }]), style: _({ display: e3.center && !e3.showIcon ? "flow" : "inline" }) }, [d(e3.$slots, "title", {}, () => [u(m(e3.title), 1)], true)], 6), n("p", x, [d(e3.$slots, "default", {}, () => [u(m(e3.description), 1)], true)]), e3.closable ? (a(), y("div", B, [v(b, { onClick: w(z, ["stop"]), icon: "xmark" })])) : f("", true)])], 2), [[h, A.value]])]), _: 3 }));
} }), [["__scopeId", "data-v-dca68164"]]));
export {
  E
};
