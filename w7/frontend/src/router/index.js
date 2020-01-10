import Vue from 'vue'
import VueRouter from 'vue-router'

import Splash from '@/views/Splash.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/splash',
    name: 'splash',
    component: Splash
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
