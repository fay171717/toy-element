import type { Ref } from "vue";
export type CollapseItemName = string | number;

export interface CollapseProps {
  modelValue: CollapseItemName[];
  accordion?: boolean;
}

export interface CollapseItemProps {
  name: CollapseItemName;
  title?: string;
  disabled?: boolean;
}

export interface CollapseEmits {
  (e: "update:modelValue", value: CollapseItemName[]): void;
  (e: "change", value: CollapseItemName[]): void;
}

//有哪些折叠面板处于展开状态，存在一个数组里面
export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>;
  handleItemClick(name: CollapseItemName): void;
}


