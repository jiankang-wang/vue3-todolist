<template>
  <div>
      <div class="container">
        <div class="form-group">
          <label for="">内容</label>
          <input type="text" class="form-control" v-model="newItem.text">
          <div class="float-right mt-4">
              <button class="btn btn-success mr-4" @click="submit">保存</button>
              <button class="btn btn-secondary mr-4" @click="cancel">取消</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import store from '@/store'
import router from '@/router'
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const item = store.state.item
    const newItem = { ...item }
    const submit = () => {
      store.commit('update', newItem)
      router.go(-1)
    }
    const cancel = () => {
      router.go(-1)
    }
    return {
      newItem,
      submit,
      cancel
    }
  }
})
</script>

<style scoped>

</style>
