import type { App } from "vue";
import {ElementPlusContainer} from "vitepress-preview-component"
import  DefaultTheme  from "vitepress";
import ToyElement from "toy-element"

import "vitepress-preivew-component/style.css"
import "toy-element/dist/index.css"
export default{
    ...DefaultTheme,

    enhanceApp({app}:{app:App}){
        app.component("demo-preview",ElementPlusContainer);
        app.use(ToyElement)
    }
}