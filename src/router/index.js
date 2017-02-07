import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/explore',
      component: resolve => require(['../views/Explore'], resolve)
    },
    {
      path: '/shelf',
      component: resolve => require(['../views/Shelf'], resolve)
    },
    {
      path: '/book',
      component: resolve => require(['../views/BookDetail'], resolve)
    }
  ]
})
