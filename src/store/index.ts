import { createStore, createLogger } from 'vuex'
import { TodoItem } from '@/common/interfacce'
import { TodoItemState } from '@/common/const'
import { v4 as uuidv4 } from 'uuid'

const debug = process.env.NODE_ENV !== 'production'

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
    },
    check (state, id) {
      const index = state.todos.findIndex((item) => item.id === id)
      state.todos[index].state = state.todos[index].state === TodoItemState.DONE ? TodoItemState.OPEN : TodoItemState.DONE
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: debug ? [createLogger()] : []
})
