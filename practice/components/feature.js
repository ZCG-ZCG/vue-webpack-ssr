import Vue from 'vue'

const ChildComponent = {
  template: `
    <div>child component:{{data.value}}</div>
  `,
  inject: ['yeye', 'data'],
  mounted () {
    // console.log(this.yeye, this.value)
  }
}

const component = {
  name: 'camp',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style="style">
  //     <div class="header">
  //       <slot name="header"></slot>
  //     </div>
  //     <div class="footer">
  //       <slot name="footer"></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
      <slot :value="value" aaa="111"></slot>
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

new Vue({
  el: '#root',
  template: `
    <div>
      <com-one ref="comp">
        <span slot-scope="props" ref="span">{{props.value}}   {{props.aaa}}  {{value}}</span>
      </com-one>
      <input type="text" v-model="value"/>
    </div>
  `,
  provide () {
    const data = {}

    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })

    return {
      yeye: this,
      data
    }
  },
  components: {
    ComOne: component
  },
  mounted () {
    console.log(this.$refs.comp.value)
    console.log(this.$refs.span)
  },
  data () {
    return {
      value: '123'
    }
  }
})
