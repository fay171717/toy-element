import { isRef as t, watch as s, onMounted as r, onBeforeUnmount as v, unref as c } from "vue";
function f(n, e, i) {
  t(n) ? s(n, (o, u) => {
    u == null || u.removeEventListener(e, i), o == null || o.addEventListener(e, i);
  }) : r(() => n == null ? void 0 : n.addEventListener(e, i)), v(() => {
    var o;
    return (o = c(n)) == null ? void 0 : o.removeEventListener(e, i);
  });
}
function l(n, e) {
  f(document, "click", (i) => {
    n.value && i.target && (n.value.contains(i.target) || e(i));
  });
}
export {
  l as u
};
