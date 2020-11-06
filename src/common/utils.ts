import store from '@/store'
import { TodoItemState } from '../common/const'

export const utils = () => {
  const clear = (type: TodoItemState) => {
    store.commit('clear', type)
  }
  return {
    clear,
    TodoItemState
  }
}
