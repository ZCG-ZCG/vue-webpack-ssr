import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
    // 配置是否为单页面应用
    // fallback: true
    // 把字符串转成object
    // parseQuery (query) {},
    // 把字符串转成obj
    // stringifyQuery (obj) {}
  })
}
