
import Vue from 'vue'

const components = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value1"/>
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: components
  },
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <div>
      <comp-one :value="value" @input="value = arguments[0]" v-model="value"></comp-one>
    </div>
  `
})
