import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

import './assets/style/global.styl'

import createRouter from './config/router'
const router = createRouter()
Vue.use(VueRouter)

// 在每次路由跳转之前都会触发的钩子
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log('beforeEach invocked')
  // if (to.fullPath === '/app') {
  //   next({
  //     path: '/login'
  //   })
  // } else {
  //   next()
  // }
  next()
})

// 等组件内部的beforeEnter和全局的beforeEnter触发了才会触发resolve
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve invocked')
  next()
})

// 等所有的导航钩子触发完成之后才会触发
router.afterEach((to, from) => {
  console.log('afterEach invocked')
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
