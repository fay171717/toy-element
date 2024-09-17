import { createApp } from "vue";
import App from "./App.vue";
import PlayElement from "play-element";

import "play-element/dist/es/theme/index.css";

createApp(App).use(PlayElement).mount("#app");
