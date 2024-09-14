import { defineComponent as c } from "vue";
import { a as s } from "./vendor-BMSfUpMX.js";
function f(r) {
  return (n) => {
    r.forEach((t) => n.use(t));
  };
}
const d = (r) => (r.install = (e) => {
  const n = r.name;
  e.component(n, r);
}, r);
class a extends Error {
  constructor(e) {
    super(e), this.name = "ErUIError";
  }
}
function i(r, e) {
  return new a(`[${r}] ${e}`);
}
function m(r, e) {
  if (process.env.NODE_ENV !== "production") {
    const n = i(r, e);
    console.warn(n);
  }
}
c({
  props: {
    vNode: {
      type: [String, Object, Function],
      required: !0
    }
  },
  setup(r) {
    return () => s(r.vNode) ? r.vNode() : r.vNode;
  }
});
const p = /* @__PURE__ */ new Map([
  ["info", "circle-info"],
  ["success", "check-circle"],
  ["warning", "circle-exclamation"],
  ["danger", "circle-xmark"],
  ["error", "circle-xmark"]
]), E = (r, e) => {
  const n = r.__vccOpts || r;
  for (const [t, o] of e)
    n[t] = o;
  return n;
};
export {
  E as _,
  m as d,
  f as m,
  p as t,
  d as w
};
