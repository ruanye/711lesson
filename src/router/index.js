import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component:  () => import('../views/Login.vue')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'home',
        // route level code-splitting
        // this generates a separate chunk (home.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
