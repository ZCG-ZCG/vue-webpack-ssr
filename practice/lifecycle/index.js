import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  errorCaptured () {
    console.log(this, 'errorCaptured')
  },
  render (h) {
    throw new TypeError('render error')
    // console.log('render function')
    // return h('div', {}, this.text)
  },
  renderError (h, err) {
    // 用于开发环境  仅在当前组件可使用
    return h('div', {}, err.stack)
  }
  // errorCaptured () {
  //   // 会向上冒泡，并且正式环境可以使用
  // }
})

app.$mount('#root')
// setInterval(() => {
//   app.text += 1
// }, 1000)
setTimeout(() => {
  app.$destroy()
}, 1000)
