import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import bookStore from '@/components/bookStore/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/store',
      component: bookStore
    }
  ]
})
