import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: {
      type: String,
      required: true
    }
  },
  template: `
    <div>
      <input type="text" v-model="text" />
      <span v-show="active">你看见我了吗</span>
      <span @click="handleChange">{{propOne}}</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('compment mounted')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', component)

const component2 = {
  extends: component,
  data () {
    return {
      text: 1
    }
  }
}

// const ComVue = Vue.extend(component)
// new ComVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   mounted () {
//     console.log('instance mounted')
//   },
//   data () {
//     return {
//       text: 123
//     }
//   }
// })

new Vue({
  el: '#root',
  components: {
    Comp: component2
  },
  template: `
    <Comp></Comp>
  `
})
