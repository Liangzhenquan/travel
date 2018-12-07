import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home/home'
import list from '@/pages/List/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
