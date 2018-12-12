import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home/home'
import City from '@/pages/City/City'
import Detail from '@/pages/detail/Detail'
import CommonGallary from '@/common/gallary/Gallary'
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
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '/gallary',
      name: 'CommonGallary',
      component: CommonGallary
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
