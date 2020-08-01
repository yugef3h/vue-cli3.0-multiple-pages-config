import Vue from 'vue'
import Router from 'vue-router'
// 1
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting    
      // this generates a separate chunk (about.[hash].js) for this route    
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/bio',
      name: 'bio',
      component: () => import('./views/Bio.vue')
    },
  ]
})