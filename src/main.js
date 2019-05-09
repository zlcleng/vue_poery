// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import promise from 'es6-promise'
promise.polyfill()
import Vue from 'vue'
import App from './App'
import router from './router'


import fastclick from 'fastclick' // 用来解决移动端点击300毫秒的延迟
Vue.config.productionTip = false
fastclick.attach(document.body) // 取消body下面所有点击300毫秒延迟

import 'assets/css/common.css'   //公共样式
import 'assets/css/swiper.min.css'   //轮播样式

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
