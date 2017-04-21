import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
      component: resolve => require(['../views/Shelf'], resolve)
    },
    {
      path: '/book/:id',
      component: resolve => require(['../views/BookDetail'], resolve)
    },
    {
      name: 'mine',
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
