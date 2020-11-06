import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
// const Add = () => () => import(/* webpackChunkName: "add" */ '@/components/Add.vue')
// const Edit = () => () => import(/* webpackChunkName: "edit" */ '@/components/Edit.vue')
// const Delete = () => () => import(/* webpackChunkName: "delete" */ '@/components/Delete.vue')
// const Done = () => () => import(/* webpackChunkName: "done" */ '@/components/Done.vue')

import Home from '@/views/Home.vue'
import Add from '@/components/Add.vue'
import Delete from '@/components/Delete.vue'
import Edit from '@/components/Edit.vue'
import Done from '@/components/Done.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '', redirect: { name: 'add' } },
      { path: '/add', name: 'add', component: Add },
      { path: '/delete', name: 'selete', component: Delete },
      { path: '/edit', name: 'edit', component: Edit },
      { path: '/done', name: 'done', component: Done }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes
})

export default router
