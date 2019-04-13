import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-text="text"></div>
      <div v-html="html"></div>
      <div v-show="active">show text {{text}}</div>
      <div v-if="active">if text {{text}}</div>
      <div v-else-if="text === 0">else text {{text}}</div>
      <div v-else>this is else content</div>
      <input type="text" v-model.number="text"/>
      <input type="checkbox" v-model="active"/>
      <div>
        <input type="checkbox" :value="1" v-model="arr"/>
        <input type="checkbox" :value="2" v-model="arr"/>
        <input type="checkbox" :value="3" v-model="arr"/>
      </div>
      <div>
        <input type="radio" value="one" v-model="picked"/>
        <input type="radio" value="two" v-model="picked"/>
      </div>
      <ul>
        <li v-for="(item, index) in arr" >{{item}}:{{index}}</li>
      </ul>
      <ul>
        <li v-for="(value, key, index) in obj">{{key}}:{{value}}:{{index}}</li>
      </ul>
    </div>
  `,
  data: {
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    picked: '',
    active: false,
    text: 0,
    html: '<span>this is html</span>'
  }
})
