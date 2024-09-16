import { defineComponent as r } from "vue";
import { a as o } from "./vendor-c-_1wZas.js";
function n(r2) {
  return (o2) => {
    r2.forEach((r3) => o2.use(r3));
  };
}
const e = (r2) => (r2.install = (o2) => {
  const n2 = r2.name;
  o2.component(n2, r2);
}, r2);
class c extends Error {
  constructor(r2) {
    super(r2), this.name = "ErUIError";
  }
}
function s(r2, o2) {
  if ("production" !== process.env.NODE_ENV) {
    const n2 = function(r3, o3) {
      return new c(`[${r3}] ${o3}`);
    }(r2, o2);
    console.warn(n2);
  }
}
r({ props: { vNode: { type: [String, Object, Function], required: true } }, setup: (r2) => () => o(r2.vNode) ? r2.vNode() : r2.vNode });
const t = /* @__PURE__ */ new Map([["info", "circle-info"], ["success", "check-circle"], ["warning", "circle-exclamation"], ["danger", "circle-xmark"], ["error", "circle-xmark"]]), i = (r2, o2) => {
  const n2 = r2.__vccOpts || r2;
  for (const [r3, e2] of o2) n2[r3] = e2;
  return n2;
};
export {
  i as _,
  s as d,
  n as m,
  t,
  e as w
};
