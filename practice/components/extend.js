import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
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

const parent = new Vue({
  name: 'parent'
})

const component2 = {
  parent: parent,
  extends: component,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log('comp2 mounted')
    console.log(this.$parent.$options.name)
    // this.$parent.text = 12345
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
  parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    Comp: component2
  },
  data () {
    return {
      text: '23333'
    }
  },
  template: `
    <div>
      <span>{{text}}</span>
      <comp></comp>
    </div>
  `,
  mounted () {
    console.log('comp2 mounted')
    console.log(this.$parent.$options.name)
    // this.$parent.text = 12345
  }
})
