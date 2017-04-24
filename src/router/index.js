import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from '../utils'
import store from '../vuex/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'explore',
      path: '/explore',
      alias: '/',
      component: resolve => require(['../views/Explore'], resolve)
    },
    {
      name: 'shelf',
      path: '/shelf',
      component: resolve => require(['../views/Shelf'], resolve),
      meta: { vertify: true }
    },
    {
      path: '/book/:id',
      component: resolve => require(['../views/BookDetail'], resolve)
    },
    {
      name: 'mine',
      path: '/mine',
      component: resolve => require(['../views/Mine'], resolve),
      meta: { vertify: true }
    },
    {
      path: '/user/:id',
      component: resolve => require(['../views/HomePage'], resolve)
    },
    {
      path: '/notify',
      component: resolve => require(['../views/Notify'], resolve),
      meta: { vertify: true }
    },
    {
      path: '/addBook',
      component: resolve => require(['../views/AddBook'], resolve),
      meta: { vertify: true }
    },
    {
      path: '/search',
      component: resolve => require(['../views/Search'], resolve)
    },
    {
      path: '/vertify',
      component: resolve => require(['../views/Vertify'], resolve)
    }
  ]
})
router.beforeEach((to, from, next) => {
  let isVerify = getCookie('verify') || store.state.vertify
  if (to.matched.some(record => record.meta.vertify)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isVerify) {
      next({
        path: '/vertify',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router

