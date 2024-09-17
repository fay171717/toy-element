import { defineComponent as e, computed as o, openBlock as t, createElementBlock as a, mergeProps as n, createVNode as p, unref as l, normalizeProps as s, guardReactiveProps as r } from "vue";
import { FontAwesomeIcon as i } from "@fortawesome/vue-fontawesome";
import { o as y } from "./vendor-CNp94w8A.js";
import { _ as c, w as m } from "./utils-BI3XmkOj.js";
const B = c(e({ name: "ErIcon", inheritAttrs: false, __name: "Icon", props: { border: { type: Boolean }, fixedWidth: { type: Boolean }, flip: {}, icon: {}, mask: {}, listItem: { type: Boolean }, pull: {}, pulse: { type: Boolean }, rotation: {}, swapOpacity: { type: Boolean }, size: {}, spin: { type: Boolean }, transform: {}, symbol: { type: [Boolean, String] }, title: {}, inverse: { type: Boolean }, bounce: { type: Boolean }, shake: { type: Boolean }, beat: { type: Boolean }, fade: { type: Boolean }, beatFade: { type: Boolean }, spinPulse: { type: Boolean }, spinReverse: { type: Boolean }, type: {}, color: {} }, setup(e2) {
  const c2 = e2, m2 = o(() => y(c2, ["type", "color"])), B2 = o(() => ({ color: c2.color ?? void 0 }));
  return (e3, o2) => (t(), a("i", n({ class: ["er-icon", [`er-icon-${c2.type}`]], style: B2.value }, e3.$attrs), [p(l(i), s(r(m2.value)), null, 16)], 16));
} }), [["__scopeId", "data-v-ac6f8c02"]]), u = m(B);
export {
  B as E,
  u as a
};
