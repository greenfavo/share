import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/explore',
      alias: '/',
      component: resolve => require(['../views/Explore'], resolve)
    },
    {
      path: '/shelf',
      component: resolve => require(['../views/Shelf'], resolve)
    },
    {
      path: '/book',
      component: resolve => require(['../views/BookDetail'], resolve)
    },
    {
      path: '/mine',
      component: resolve => require(['../views/Mine'], resolve)
    },
    {
      path: '/user',
      component: resolve => require(['../views/HomePage'], resolve)
    },
    {
      path: '/notify',
      component: resolve => require(['../views/Notify'], resolve)
    },
    {
      path: '/addBook',
      component: resolve => require(['../views/AddBook'], resolve)
    }
  ]
})
