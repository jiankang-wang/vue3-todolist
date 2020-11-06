<template>
  <div>
    <div class="form-group">
      <label for="">添加代办事项</label>
      <div class="row">
        <div class="col-8">
          <input
            type="text"
            v-model="inputValue"
            class="form-control"
            @keydown.enter="add"
          >
        </div>
        <div class="col-4">
          <select name="" id="" class="form-control" v-model="filterState">
            <option :value="TodoItemState.ALL">选择已过滤.....</option>
            <option :value="TodoItemState.OPEN">代办中</option>
            <option :value="TodoItemState.DONE">已完成</option>
            <option :value="TodoItemState.DELETE">已删除</option>
          </select>
        </div>
      </div>
      <small class="form-text text-muted">回车即可加入</small>
    </div>
    <div class="list-group">
      <li
        @click.stop="check(item)"
        class="list-group-item d-flex align-item-center justify-content-between"
        v-for="(item, index) in todos"
        :key="index"
      >
        <div class="form-check">
          <input
            type="checkbox"
            :id="item.id"
            class="formcheckinput"
            :checked="item.state ===TodoItemState.DONE"
            :disabled="item.state === TodoItemState.DELETE"
          />
          <label
            @click.stop.prevent="check(item)"
            :for="item.id"
            :class="{ 'text-black-50 line-through': item.state === TodoItemState.DONE }"
          >
            {{ item }}
          </label>
        </div>
        <div
          class="float-right ctrls"
          :class="{'d-none': item.state !== TodoItemState.OPEN}"
        >
          <button type="button" class="btn btn-warning btn-sm mr-2 text-light">编辑</button>
          <button type="button" class="btn btn-danger btn-sm" @click.stop="remove(item.id)">删除</button>
        </div>
      </li>
    </div>
    <button type="button" class="btn btn-danger float-right mt-4" @click="hide">
      {{ filterState === TodoItemState.OPEN ? '显示所有' : '隐藏已完成' }}
    </button>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { TodoItemState } from '@/common/const'
import { TodoItem } from '@/common/interfacce'
import { defineComponent, ref, reactive, computed } from 'vue'

export default defineComponent({
  setup () {
    const inputValue = ref('')
    const filterState = ref(TodoItemState.ALL)
    const add = () => {
      store.commit('add', inputValue)
      inputValue.value = ''
    }
    const check = (item: TodoItem) => {
      if ((item.state === TodoItemState.OPEN) || (item.state === TodoItemState.DONE)) {
        store.commit('check', item.id)
      }
    }
    const remove = (id: string) => {
      store.commit('remove', id)
    }
    const filterItem = (value: TodoItemState) => {
      if (value === TodoItemState.ALL) {
        return store.state.todos
      }
      return store.state.todos.filter(item => item.state === value)
    }
    const hide = () => {
      if (filterState.value === TodoItemState.OPEN) {
        filterState.value = TodoItemState.ALL
      } else {
        filterState.value = TodoItemState.OPEN
      }
    }

    return reactive({
      inputValue,
      add,
      todos: computed(() => filterItem(filterState.value)),
      TodoItemState,
      check,
      remove,
      filterState,
      hide
    })
  }
})
</script>

<style lang="scss" scoped>
  .line-through {
    text-decoration: line-through
  }
  .list-group-item {
    user-select: none;  // 禁止选中文本
    .ctrls {
      display: none
    }
    &:hover {
      .ctrls {
        display: block
      }
    }
  }
</style>
