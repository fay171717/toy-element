import { defineComponent as e, ref as l, watch as a, provide as t, openBlock as s, createElementBlock as o, Fragment as i, createElementVNode as n, renderSlot as d, inject as c, computed as r, normalizeClass as m, createTextVNode as p, toDisplayString as u, createVNode as v, Transition as h, mergeProps as f, toHandlers as _, unref as g, withCtx as b, withDirectives as y, vShow as C } from "vue";
import { d as E, w as $ } from "./utils-BvFIUHc3.js";
import { E as x } from "./Icon-CXWoaiEj.js";
const V = Symbol("collapseContext"), w = "ErCollapse", I = e({ name: w, __name: "Collapse", props: { modelValue: {}, accordion: { type: Boolean } }, emits: ["update:modelValue", "change"], setup(e2, { emit: c2 }) {
  const r2 = e2, m2 = c2, p2 = l(r2.modelValue);
  function u2(e3) {
    p2.value = e3, m2("update:modelValue", e3), m2("change", e3);
  }
  return r2.accordion && p2.value.length > 1 && E(w, "accordion mode should only have one active item"), a(() => r2.modelValue, (e3) => u2(e3)), t(V, { activeNames: p2, handleItemClick: function(e3) {
    let l2 = [...p2.value];
    if (r2.accordion) return l2 = [l2[0] === e3 ? "" : e3], void u2(l2);
    const a2 = l2.indexOf(e3);
    a2 > -1 ? l2.splice(a2, 1) : l2.push(e3), u2(l2);
  } }), (e3, l2) => (s(), o(i, null, [l2[0] || (l2[0] = n("div", { class: "er-collapse" }, null, -1)), d(e3.$slots, "default")], 64));
} }), k = (e2) => e2.style.height = "0px", j = (e2) => e2.style.height = `${e2.scrollHeight}px`, B = (e2) => e2.style.height = "", L = (e2) => e2.style.overflow = "hidden", N = (e2) => e2.style.overflow = "", H = { beforeEnter(e2) {
  k(e2), L(e2);
}, enter: (e2) => j(e2), afterEnter(e2) {
  B(e2), N(e2);
}, beforeLeave(e2) {
  j(e2), L(e2);
}, leave: (e2) => k(e2), afterLeave(e2) {
  B(e2), N(e2);
} }, O = ["id"], S = { class: "er-collapse-item__title" }, q = { class: "er-collapse-item__wapper" }, z = ["id"], A = e({ name: "ErCollapse", __name: "CollapseItem", props: { name: {}, title: {}, disabled: { type: Boolean } }, setup(e2) {
  const l2 = e2, a2 = c(V, void 0), t2 = r(() => {
    var _a;
    return (_a = a2 == null ? void 0 : a2.activeNames.value) == null ? void 0 : _a.includes(l2.name);
  });
  function i2() {
    l2.disabled || (a2 == null ? void 0 : a2.handleItemClick(l2.name));
  }
  return (e3, l3) => (s(), o("div", { class: m(["er-collapse-item", { "is-disabled": e3.disabled }]) }, [n("div", { class: m(["er-collapse-item__header", { "is-disabled": e3.disabled, "is-active": t2.value }]), id: `item-header-${e3.name}`, onClick: i2 }, [n("span", S, [d(e3.$slots, "title", {}, () => [p(u(e3.title), 1)])]), v(x, { icon: "angle-right", class: "header-angle" })], 10, O), v(h, f({ name: "slide" }, _(g(H))), { default: b(() => [y(n("div", q, [n("div", { class: "er-collapse-item__content", id: `item-content-${e3.name}` }, [d(e3.$slots, "default")], 8, z)], 512), [[C, t2.value]])]), _: 3 }, 16)], 2));
} }), D = $(I), F = $(A);
export {
  F as E,
  D as a
};
