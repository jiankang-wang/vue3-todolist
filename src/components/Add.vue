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
          <select name="" id="" class="form-control">
            <option value="">选择已过滤.....</option>
            <option value="">代办中</option>
            <option value="">已完成</option>
            <option value="">已删除</option>
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
          <button type="button" class="btn btn-danger btn-sm">删除</button>
        </div>
      </li>
    </div>
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
    const add = () => {
      store.commit('add', inputValue)
      inputValue.value = ''
    }
    const check = (item: TodoItem) => {
      store.commit('check', item.id)
    }
    return reactive({
      inputValue,
      add,
      todos: computed(() => store.state.todos),
      TodoItemState,
      check
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
