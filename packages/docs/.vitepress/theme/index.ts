import type { App } from "vue";
import { ElementPlusContainer } from "../../../../libs/vitepress-preview-component"
import DefaultTheme from "vitepress";
import PlayElement from "play-element";

import "vitepress-preivew-component/style.css";
import "play-element/dist/index.css";
export default {
  ...DefaultTheme,

  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(PlayElement);
  },
};
