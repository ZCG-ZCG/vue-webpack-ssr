import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div v-bind:id='aaa' v-on:click='handleClick'>
  //     {{isActive ? 'avtive' : 'not active'}}<br/>
  //     {{arr.join(' ')}}<br/>
  //     {{Date.now()}}<br/>
  //     {{html}}
  //     <p v-html='html'></p>
  //   </div>
  // `,
  template: `
    <div>
      <div :class="{active: !isActive}">
        <p v-html='html'></p>
      </div>
      <div :class="[isActive ? 'active' : '']">
        <p v-html='html'></p>
      </div>
      <div :class="[{active : isActive}]" :style="[styles, styles2]">
        <p>{{getJoinedArr(arr)}}</p>
      </div>
    </div>  
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    styles: {
      color: 'red'
    },
    styles2: {
      color: 'black'
    }
  },
  // computed: {
  //   className () {

  //   }
  // },
  methods: {
    handleClick () {
      // eslint-disable-next-line no-undef
      alert('疼！')
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
