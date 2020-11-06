import { createStore } from 'vuex'
import { TodoItem } from '@/common/interfacce'
import { TodoItemState } from '@/common/const'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    todos: [] as TodoItem[]
  },
  mutations: {
    add (state, value) {
      state.todos.push({
        id: uuidv4(),
        text: value,
        state: TodoItemState.OPEN
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
