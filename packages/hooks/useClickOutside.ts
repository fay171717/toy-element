import { type Ref } from 'vue'
import useEventListener from './useEventListener'

export default function useClickOutside (
  elementRef: Ref<HTMLElement | void>,
  callback: (e: MouseEvent) => void
) {
  useEventListener(document, 'click', (e: Event) => {
    if (elementRef.value && e.target) {
        //判断目标事件是否发生在节点之内
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        callback(e as MouseEvent)
      }
    }
  })
}
