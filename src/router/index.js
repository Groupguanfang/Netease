import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/user',
    name: 'UserView',
    component: () => import('../views/UserView.vue')
  }
]

const router = new VueRouter({ routes })

export default router
