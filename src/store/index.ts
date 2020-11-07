import { createStore, createLogger } from 'vuex'
import { TodoItem } from '@/common/interfacce'
import { TodoItemState } from '@/common/const'
import { v4 as uuidv4 } from 'uuid'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state: {
    todos: [] as TodoItem[],
    item: {} as TodoItem
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
    },
    remove (state, id) {
      const index = state.todos.findIndex((item) => item.id === id)
      state.todos[index].state = TodoItemState.DELETE
    },
    clear (state, type: TodoItemState) {
      state.todos = state.todos.filter(item => item.state !== type)
    },
    saveEditItem (state, item: TodoItem) {
      state.item = item
    },
    update (state, item: TodoItem) {
      const index = state.todos.findIndex(ele => ele.id === item.id)
      state.todos[index] = item
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    dones: state => state.todos.filter(item => item.state === TodoItemState.DONE),
    deletes: state => state.todos.filter(item => item.state === TodoItemState.DELETE),
    opens: state => state.todos.filter(item => item.state === TodoItemState.OPEN)
  },
  plugins: debug ? [createLogger()] : []
})
