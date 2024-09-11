import type { R } from "vitest/dist/reporters-yx5ZTtEV.js";
import { type Component, type ComputedRef, type Ref } from "vue";
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "submit" | "reset";
export type ButtonSize = "default" | "large" | "small";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  autofocus?: boolean;
  nativeType?: NativeType;
  icon?: string;
  loading?: boolean;
  loadingIcon?: string;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmits {
  (e:'click',val:MouseEvent):void;
}
export interface ButtonInstance{
  ref:Ref<HTMLButtonElement | void>;
  /* 给使用者拿到使用的 */
  disabled:ComputedRef<boolean>;
  size:ComputedRef<ButtonSize | "">
  type:ComputedRef<ButtonType | "">

  
}

export interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export interface ButtonGroupContext {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}