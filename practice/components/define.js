import Vue from 'vue'

const component = {
  props: {
    active: {
      // type: Boolean,
      // required: true,
      // default: true
      validator (value) {
        return typeof value === 'boolean'
      }
    },
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
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  data: {
    prop1: 'text1'
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  el: '#root',
  template: `
  <div>
    <comp-one ref="comp1" :active="true" :propOne="prop1" @change="handleChange"></comp-one>
    <comp-one :active="false"></comp-one>
  </div>
  `
})
