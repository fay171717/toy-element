import { defineComponent as e, ref as o, computed as t, openBlock as n, createBlock as i, unref as c, createSlots as l, withCtx as r, createElementVNode as a, normalizeStyle as f, createCommentVNode as s, createTextVNode as m, toDisplayString as u, createVNode as p, renderSlot as d } from "vue";
import { E as y } from "./Tooltip-DShnUGJK.js";
import { E as _ } from "./Button-DxvpcpcX.js";
import { a as h } from "./Icon-Cy2oeWhq.js";
import { a as B, w as T } from "./utils-BI3XmkOj.js";
const v = { class: "er-popconfirm__main" }, k = { class: "er-popconfirm__action" }, x = T(e({ name: "ErPopconfirm", __name: "Popconfirm", props: { title: { default: "" }, confirmButtonText: {}, cancelButtonText: {}, confirmButtonType: { default: "primary" }, cancelButtonType: {}, icon: { default: "question-circle" }, iconColor: { default: "#f90" }, hideIcon: { type: Boolean }, hideAfter: { default: 200 }, width: { default: 150 } }, emits: ["confirm", "cancel"], setup(e2, { emit: T2 }) {
  const x2 = e2, j = T2, w = o(), C = t(() => ({ width: B(x2.width) }));
  function E() {
    var _a;
    (_a = w.value) == null ? void 0 : _a.hide();
  }
  function $(e3) {
    j("confirm", e3), E();
  }
  function I(e3) {
    j("cancel", e3), E();
  }
  return (e3, o2) => (n(), i(c(y), { ref_key: "tooltipRef", ref: w, trigger: "click", "hide-timeout": e3.hideAfter }, l({ content: r(() => [a("div", { class: "er-popconfirm", style: f(C.value) }, [a("div", v, [!e3.hideIcon && e3.icon ? (n(), i(c(h), { key: 0, icon: e3.icon, color: e3.iconColor }, null, 8, ["icon", "color"])) : s("", true), m(" " + u(e3.title), 1)]), a("div", k, [p(c(_), { class: "er-popconfirm__cancel", size: "small", type: e3.cancelButtonType, onClick: I }, { default: r(() => [m(u(e3.cancelButtonText), 1)]), _: 1 }, 8, ["type"]), p(c(_), { class: "er-popconfirm__confirm", size: "small", type: e3.confirmButtonType, onClick: $ }, { default: r(() => [m(u(e3.confirmButtonText), 1)]), _: 1 }, 8, ["type"])])], 4)]), _: 2 }, [e3.$slots.default ? { name: "default", fn: r(() => [d(e3.$slots, "default")]), key: "0" } : void 0, e3.$slots.reference ? { name: "default", fn: r(() => [d(e3.$slots, "reference")]), key: "1" } : void 0]), 1032, ["hide-timeout"]));
} }));
export {
  x as E
};
