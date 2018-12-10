import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home/home'
import City from '@/pages/City/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
