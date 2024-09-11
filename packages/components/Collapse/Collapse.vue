<script setup lang="ts">
import type { CollapseEmits, CollapseItemName, CollapseProps } from "./types";
import { ref, provide, watch, watchEffect } from "vue";
import { COLLAPSE_CTX_KEY } from "./constans";

import { debugWarn } from "../../utils/index";

const COMP_NAME="ErCollapse" as const;
defineOptions({
  name: COMP_NAME,
});

const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
const activeNames = ref(props.modelValue);

if (props.accordion && activeNames.value.length > 1) {
  // console.warn("accordion mode should only have one active item")
  debugWarn(COMP_NAME, "accordion mode should only have one active item");
}
function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value];
  // 手风琴模式
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? "" : item];
    updateActiveNames(_activeNames);
    return;
  }

  const index = _activeNames.indexOf(item);
  if (index > -1) {
    // 存在，删除数组中的一项
    _activeNames.splice(index, 1);
  } else {
    // 不存在，插入对应 name
    _activeNames.push(item);
  }
  updateActiveNames(_activeNames);
}

function updateActiveNames(newNames: CollapseItemName[]) {
  activeNames.value = newNames;
  emits("update:modelValue", newNames);
  emits("change", newNames);
}
/* //第一次不符合，一些骚操作符合了
watchEffect(()=>{
    if(props.accordion && activeNames.value.length >1){
      
       debugWarn(COMP_NAME, "accordion mode should only have one active item");
    }
}); */
watch(
  () => props.modelValue,
  (newNames) => updateActiveNames(newNames)
);

provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
});
</script>

<template>
  <div class="er-collapse"></div>
  <!-- 用默认插槽去关联子组件和父组件 -->
  <slot></slot>
</template>

<style>
@import "./style.css";
</style>
