//存放常量
//存依赖注入的Key
import type { InjectionKey } from "vue";
import type { ButtonGroupContext } from "./types";

export const BUTTON_GROUP_CTX_KEY: InjectionKey<ButtonGroupContext>= Symbol(
    "BUTTON_GROUP_CTX_KEY"
);