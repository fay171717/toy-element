<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps,ButtonEmits,ButtonInstance } from "./types";
import {throttle} from 'lodash-es'

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

const _ref = ref<HTMLButtonElement>();

const handleBtnClick = (e:MouseEvent)=> emits('click',e);
const handleBtnClickThrottle = throttle(handleBtnClick,props.throttleDuration);

defineExpose<ButtonInstance>({
  ref:_ref,

});
</script>
<template>
  <component
    :is="tag"
    ref="_ref"
    class="er-button"
     :disabled="disabled || loading ? true : void 0"
    :type="tag === 'button' ? nativeType : void 0"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e:MouseEvent)=>useThrottle?handleBtnClickThrottle(e) : handleBtnClick"
   
  >
    <slot></slot>
  </component>
</template>

<style>
@import './style.css'
</style>
