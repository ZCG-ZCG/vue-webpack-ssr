import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <span>Name:{{name}}</span>  <br/>
      <span>Name:{{getName()}}</span>   <br/>
      <span>Number：{{number}}</span>
      <p>FunllName: {{fullName}}</p>
      <p><input type="text" v-model="number"/></p>
      <p>FirstName:<input type="text" v-model="firstName"/></p>
      <p>LastName:<input type="text" v-model="lastName"/></p>
      <p>Name:<input type="text" v-model="name"/></p>
      <p>Obj.a:<input type="text" v-model="obj.a"/></p>
    </div>
  `,
  data: {
    firstName: 'Chonggui',
    lastName: 'Zhou',
    number: 0,
    fullName: '',
    obj: {
      a: 0
    }
  },
  computed: {
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // }
    // firstName: {
    //   handler  (newName, oldName) {
    //     this.fullName = newName + ' ' + this.lastName
    //   },
    //   immediate: true,
    //   deep: true
    // },
    // 当监听对象的时候只有给对象属性赋值时才会被监听到
    'obj.a': {
      handler  () {
        console.log('obj.a changed')
        // this.obj.a += 1
      },
      immediate: true
      // deep: true
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  },
  mounted () {
    this.obj = {
      a: '345'
    }
  }
})
