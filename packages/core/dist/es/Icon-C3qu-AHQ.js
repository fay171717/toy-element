import { defineComponent as e, computed as o, openBlock as t, createElementBlock as a, mergeProps as n, createVNode as p, unref as s, normalizeProps as l, guardReactiveProps as r } from "vue";
import { FontAwesomeIcon as i } from "@fortawesome/vue-fontawesome";
import { o as y } from "./vendor-CNp94w8A.js";
import { _ as m, w as B } from "./utils-BI3XmkOj.js";
import { B as c } from "./Button-YTs0Hzmt.js";
const u = m(e({ name: "ErIcon", inheritAttrs: false, __name: "Icon", props: { border: { type: Boolean }, fixedWidth: { type: Boolean }, flip: {}, icon: {}, mask: {}, listItem: { type: Boolean }, pull: {}, pulse: { type: Boolean }, rotation: {}, swapOpacity: { type: Boolean }, size: {}, spin: { type: Boolean }, transform: {}, symbol: { type: [Boolean, String] }, title: {}, inverse: { type: Boolean }, bounce: { type: Boolean }, shake: { type: Boolean }, beat: { type: Boolean }, fade: { type: Boolean }, beatFade: { type: Boolean }, spinPulse: { type: Boolean }, spinReverse: { type: Boolean }, type: {}, color: {} }, setup(e2) {
  const m2 = e2, B2 = o(() => y(m2, ["type", "color"])), c2 = o(() => ({ color: m2.color ?? void 0 }));
  return (e3, o2) => (t(), a("i", n({ class: ["er-icon", { [`er-icon--${e3.type}`]: e3.type }], style: c2.value }, e3.$attrs), [p(s(i), l(r(B2.value)), null, 16)], 16));
} }), [["__scopeId", "data-v-1ef3a962"]]), f = B(c);
export {
  u as E,
  f as a
};
