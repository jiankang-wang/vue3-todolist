<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light mb-4">
      <a class="navbar-brand d-flex align-item-center" href="#">
        <div class="logo mr-2"></div>
        <span>toDoList</span>
      </a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/add">代办事项</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/done">已完成</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/delete">已删除</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss" scoped>
  .logo {
    background: url('~@/assets/logo.png') no-repeat center center;
    width: 40px;
    height: auto;
    background-size: contain
  }
</style>
