import { a as r, c as e, e as n } from "./vendor-CNp94w8A.js";
import { defineComponent as o } from "vue";
function c(r2) {
  return (e2) => {
    r2.forEach((r3) => e2.use(r3));
  };
}
const s = (r2) => (r2.install = (e2) => {
  const n2 = r2.name;
  e2.component(n2, r2);
}, r2);
class t extends Error {
  constructor(r2) {
    super(r2), this.name = "ErUIError";
  }
}
function i(e2, n2) {
  if ("production" !== process.env.NODE_ENV) {
    const o2 = r(e2) ? function(r2, e3) {
      return new t(`[${r2}] ${e3}`);
    }(e2, n2) : e2;
    console.warn(o2);
  }
}
function a(n2, o2 = "px") {
  return n2 ? e(n2) || ((e2) => !!r(e2) && !Number.isNaN(Number(e2)))(n2) ? `${n2}${o2}` : r(n2) ? n2 : void i("utils/style", "binding value must be a string or number") : "";
}
o({ props: { vNode: { type: [String, Object, Function], required: true } }, setup: (r2) => () => n(r2.vNode) ? r2.vNode() : r2.vNode });
const u = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), m = (r2, e2) => {
  const n2 = r2.__vccOpts || r2;
  for (const [r3, o2] of e2) n2[r3] = o2;
  return n2;
};
export {
  m as _,
  a,
  i as d,
  c as m,
  u as t,
  s as w
};
