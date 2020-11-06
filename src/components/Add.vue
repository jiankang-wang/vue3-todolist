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
      <li class="list-group-item" v-for="(item, index) in todos" :key="index">{{ item }}</li>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import { defineComponent, ref, reactive, computed } from 'vue'

export default defineComponent({
  setup () {
    const inputValue = ref('')
    const add = () => {
      store.commit('add', inputValue)
      inputValue.value = ''
    }
    return reactive({
      inputValue,
      add,
      todos: computed(() => store.state.todos)
    })
  }
})
</script>

<style scoped>

</style>
