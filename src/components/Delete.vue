<template>
  <div>
    <ul>
      <li
        class="list-group-item d-flex align-item-center justify-content-between"
        v-for="(item, index) in deletes"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
    <button
      type="button"
      class="btn btn-danger
      float-right mt-4"
      @click="clear(TodoItemState.DELETE)">
      清除所有
    </button>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { defineComponent } from 'vue'
import { utils } from '@/common/utils'

export default defineComponent({
  setup () {
    const { clear, TodoItemState } = utils()
    return {
      clear,
      TodoItemState
    }
  },
  computed: {
    ...mapGetters(['deletes'])
  }
})
</script>

<style scoped>

</style>
