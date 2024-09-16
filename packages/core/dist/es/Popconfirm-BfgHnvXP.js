import { defineComponent as o, ref as e, computed as t, openBlock as n, createBlock as c, unref as i, createSlots as l, withCtx as r, createElementVNode as a, normalizeStyle as f, createCommentVNode as s, createTextVNode as m, toDisplayString as p, createVNode as u, renderSlot as d } from "vue";
import { E as y } from "./Tooltip-DPtqSJwS.js";
import { E as _ } from "./Button-YTs0Hzmt.js";
import { a as B } from "./Icon-C3qu-AHQ.js";
import { a as T, w as h } from "./utils-BI3XmkOj.js";
const v = { class: "er-popconfirm__main" }, k = { class: "er-popconfirm__action" }, x = h(o({ name: "ErPopconfirm", __name: "Popconfirm", props: { title: { default: "" }, confirmButtonText: {}, cancelButtonText: {}, confirmButtonType: { default: "primary" }, cancelButtonType: {}, icon: { default: "question-circle" }, iconColor: { default: "#f90" }, hideIcon: { type: Boolean }, hideAfter: { default: 200 }, width: { default: 150 } }, emits: ["confirm", "cancel"], setup(o2, { emit: h2 }) {
  const x2 = o2, j = h2, w = e(), C = t(() => ({ width: T(x2.width) }));
  function E() {
    var _a;
    (_a = w.value) == null ? void 0 : _a.hide();
  }
  function $(o3) {
    j("confirm", o3), E();
  }
  function I(o3) {
    j("cancel", o3), E();
  }
  return (o3, e2) => (n(), c(i(y), { ref_key: "tooltipRef", ref: w, trigger: "click", "hide-timeout": o3.hideAfter }, l({ content: r(() => [a("div", { class: "er-popconfirm", style: f(C.value) }, [a("div", v, [!o3.hideIcon && o3.icon ? (n(), c(i(B), { key: 0, icon: o3.icon, color: o3.iconColor }, null, 8, ["icon", "color"])) : s("", true), m(" " + p(o3.title), 1)]), a("div", k, [u(i(_), { class: "er-popconfirm__cancel", size: "small", type: o3.cancelButtonType, onClick: I }, { default: r(() => [m(p(o3.cancelButtonText || o3.locale.t("popconfirm.cancelButtonText")), 1)]), _: 1 }, 8, ["type"]), u(i(_), { class: "er-popconfirm__confirm", size: "small", type: o3.confirmButtonType, onClick: $ }, { default: r(() => [m(p(o3.confirmButtonText || o3.locale.t("popconfirm.confirmButtonText")), 1)]), _: 1 }, 8, ["type"])])], 4)]), _: 2 }, [o3.$slots.default ? { name: "default", fn: r(() => [d(o3.$slots, "default")]), key: "0" } : void 0, o3.$slots.reference ? { name: "default", fn: r(() => [d(o3.$slots, "reference")]), key: "1" } : void 0]), 1032, ["hide-timeout"]));
} }));
export {
  x as E
};
