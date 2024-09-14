import { defineComponent as p, computed as t, openBlock as s, createElementBlock as l, mergeProps as i, createVNode as c, unref as m, normalizeProps as y, guardReactiveProps as B } from "vue";
import { FontAwesomeIcon as f } from "@fortawesome/vue-fontawesome";
import { o as u } from "./vendor-BMSfUpMX.js";
import { _ as d, w as I } from "./utils-BX8S-HAr.js";
import { B as _ } from "./Button-CXjFwxB_.js";
const v = /* @__PURE__ */ p({
  name: "ErIcon",
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: {},
    color: {}
  },
  setup(n) {
    const e = n, a = t(() => u(e, ["type", "color"])), r = t(() => ({ color: e.color ?? void 0 }));
    return (o, b) => (s(), l("i", i({
      class: ["er-icon", { [`er-icon--${o.type}`]: o.type }],
      style: r.value
    }, o.$attrs), [
      c(m(f), y(B(a.value)), null, 16)
    ], 16));
  }
}), g = /* @__PURE__ */ d(v, [["__scopeId", "data-v-1ef3a962"]]), $ = I(_);
export {
  g as E,
  $ as a
};
