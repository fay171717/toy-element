<script setup lang="ts">
import { computed, ref,inject } from "vue";
import type { ButtonProps,ButtonEmits,ButtonInstance } from "./types";
import {throttle} from 'lodash-es'
import { BUTTON_GROUP_CTX_KEY } from "./contants";
import  ErIcon  from "../Icon/Icon.vue";

defineOptions({
  name: "ErButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle:true,
  throttleDuration:500 //节流的间隔
});

const emits = defineEmits<ButtonEmits>();
const slots = defineSlots();
const ctx = inject(BUTTON_GROUP_CTX_KEY,void 0);
const size =computed(()=>ctx?.size ?? props.size ?? "");
const type =computed(()=>ctx?.type ?? props.type ?? "")
const disabled = computed(()=>ctx?.disabled || props?.disabled ||false)
const _ref = ref<HTMLButtonElement>();
const handleBtnClick = (e:MouseEvent)=> emits('click',e);
const handleBtnClickThrottle = throttle(handleBtnClick,props.throttleDuration,{trailing:false});
const iconStyle = computed(()=>({marginRight:slots ? "6px":"0px"}))
defineExpose<ButtonInstance>({
  ref:_ref,
  disabled,
  size,
  type

});
</script>
<template>
  <component
    :is="tag"
    :autofocus = "autofocus"
    ref="_ref"
    class="er-button"
     :disabled="disabled || loading ? true : void 0"
    :type="tag === 'button' ? nativeType : void 0"
    :data-testid="'story-test-btn'"  
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e:MouseEvent)=>useThrottle ? handleBtnClickThrottle(e) : handleBtnClick"
    
   
  >
  <template v-if="loading">
    <slot name="loading">
      <er-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
    </slot>
  </template>
  <er-icon v-if="icon && !loading" :icon="icon"  size="1x" :style="iconStyle">
   
  </er-icon>
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css'
</style>
