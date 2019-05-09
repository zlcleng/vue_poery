import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/views/recommend'
import Tang from '@/views/tang'
import Song from '@/views/song'
import Poery from '@/views/poery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/tang',
      component: Tang
    },
    {
      path: '/song',
      component: Song
    },
    {
      path:'/poery',
      component:Poery
    }
  ]
})
