import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/valks',
      name: 'valks',
      component: () => import(/* webpackChunkName: "valks" */ '@/views/Valks.vue')
    },
    {
      path: '/guides',
      name: 'guides',
      component: () => import(/* webpackChunkName: "guides" */ '@/views/Guides.vue')
    }
  ]
})
