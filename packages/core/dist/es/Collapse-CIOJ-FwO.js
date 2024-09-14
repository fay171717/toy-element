import { defineComponent as E, ref as $, watch as k, provide as H, openBlock as y, createElementBlock as b, Fragment as I, createElementVNode as r, renderSlot as d, inject as N, computed as S, normalizeClass as p, createTextVNode as O, toDisplayString as A, createVNode as u, Transition as B, mergeProps as L, toHandlers as P, unref as T, withCtx as D, withDirectives as M, vShow as j } from "vue";
import { d as z, w } from "./utils-BX8S-HAr.js";
import { E as F } from "./Icon-DfLcuQ1m.js";
const V = Symbol("collapseContext"), h = "ErCollapse", K = /* @__PURE__ */ E({
  name: h,
  __name: "Collapse",
  props: {
    modelValue: {},
    accordion: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: n }) {
    const s = e, i = n, a = $(s.modelValue);
    s.accordion && a.value.length > 1 && z(h, "accordion mode should only have one active item");
    function t(o) {
      let l = [...a.value];
      if (s.accordion) {
        l = [l[0] === o ? "" : o], c(l);
        return;
      }
      const m = l.indexOf(o);
      m > -1 ? l.splice(m, 1) : l.push(o), c(l);
    }
    function c(o) {
      a.value = o, i("update:modelValue", o), i("change", o);
    }
    return k(
      () => s.modelValue,
      (o) => c(o)
    ), H(V, {
      activeNames: a,
      handleItemClick: t
    }), (o, l) => (y(), b(I, null, [
      l[0] || (l[0] = r("div", { class: "er-collapse" }, null, -1)),
      d(o.$slots, "default")
    ], 64));
  }
}), v = (e) => e.style.height = "0px", _ = (e) => e.style.height = `${e.scrollHeight}px`, f = (e) => e.style.height = "", g = (e) => e.style.overflow = "hidden", C = (e) => e.style.overflow = "", W = {
  beforeEnter(e) {
    v(e), g(e);
  },
  enter: (e) => _(e),
  afterEnter(e) {
    f(e), C(e);
  },
  beforeLeave(e) {
    _(e), g(e);
  },
  leave: (e) => v(e),
  afterLeave(e) {
    f(e), C(e);
  }
}, X = ["id"], Y = { class: "er-collapse-item__title" }, Z = { class: "er-collapse-item__wapper" }, q = ["id"], G = /* @__PURE__ */ E({
  name: "ErCollapse",
  __name: "CollapseItem",
  props: {
    name: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const n = e, s = N(V, void 0), i = S(() => {
      var t;
      return (t = s == null ? void 0 : s.activeNames.value) == null ? void 0 : t.includes(n.name);
    });
    function a() {
      n.disabled || s == null || s.handleItemClick(n.name);
    }
    return (t, c) => (y(), b("div", {
      class: p(["er-collapse-item", {
        "is-disabled": t.disabled
      }])
    }, [
      r("div", {
        class: p(["er-collapse-item__header", {
          "is-disabled": t.disabled,
          "is-active": i.value
        }]),
        id: `item-header-${t.name}`,
        onClick: a
      }, [
        r("span", Y, [
          d(t.$slots, "title", {}, () => [
            O(A(t.title), 1)
          ])
        ]),
        u(F, {
          icon: "angle-right",
          class: "header-angle"
        })
      ], 10, X),
      u(B, L({ name: "slide" }, P(T(W))), {
        default: D(() => [
          M(r("div", Z, [
            r("div", {
              class: "er-collapse-item__content",
              id: `item-content-${t.name}`
            }, [
              d(t.$slots, "default")
            ], 8, q)
          ], 512), [
            [j, i.value]
          ])
        ]),
        _: 3
      }, 16)
    ], 2));
  }
}), U = w(K), x = w(G);
export {
  x as E,
  U as a
};
