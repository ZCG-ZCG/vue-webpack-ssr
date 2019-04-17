import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import createStore from './store/store'

import './assets/style/global.styl'

import createRouter from './config/router'

const router = createRouter()
Vue.use(VueRouter)

Vue.use(Vuex)
const store = createStore()

store.registerModule('c', {
  state: {
    text: 3
  }
})

store.unregisterModule('c')

// store.watch(state => state.count + 1, (newCount) => {
//   console.log('new count watched', newCount)
// })

// store.subscribe((mutation, state) => {
//   // mutation调用的哪个方法
//   console.log(mutation.type)
//   // mutation调用的时候接受的参数
//   console.log(mutation.payload)
// })

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

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
  store,
  render: (h) => h(App)
}).$mount('#root')
