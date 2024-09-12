/* 安装相关 */
import { describe, expect, it } from "vitest";
import { defineComponent, createApp } from "vue";
import { mount } from "@vue/test-utils";
import { makeInstaller, withInstall } from "../install";

const AppComp = defineComponent({
  setup() {
    return () => <div>app</div>;
  },
});

const componentA = withInstall(
  defineComponent({
    name: "testA",
    setup() {
      return () => <div>test</div>;
    },
  })
);

const componentB = withInstall(
  defineComponent({
    name: "testB",
    setup() {
      return () => <div>test2</div>;
    },
  })
);

describe("install", () => {
  it("withInstall should be worked", () => {
    const wrapper = mount(() => <div id="app2"></div>);
    const app = createApp(AppComp);

    app.use(componentA).use(componentB).mount(wrapper.element);

    expect(componentA.install).toBeDefined();
    expect(componentB.install).toBeDefined();
    expect(wrapper.findComponent(componentA)).toBeTruthy();
    expect(wrapper.findComponent(componentB)).toBeTruthy();
  });
  it("makeInstaller should be worked",()=>{
    const wrapper = mount(() => <div id="app2"></div>);
    const app = createApp(AppComp);
    const installer = makeInstaller([componentA,componentB])

    app.use(installer).mount(wrapper.element)
    
    expect(componentA.install).toBeDefined();

    expect(installer).toBeDefined();
    expect(wrapper.findComponent(componentA)).toBeTruthy();
    expect(wrapper.findComponent(componentB)).toBeTruthy();
  })
});
