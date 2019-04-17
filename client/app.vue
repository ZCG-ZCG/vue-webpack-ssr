<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}} {{counter}}</p>
    <!-- <p>{{textA}} {{textPlus}}</p>
    <p>{{textC}}</p> -->
    <!-- <todo></todo> -->
    <router-link to="/app/123">app123</router-link>
    <router-link to="/app/456">app456</router-link>
    <router-link to="/login">login</router-link>
    <!-- <router-link to="/login/exact">login/exact</router-link> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <!-- <router-view name="a"></router-view> -->
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'

export default {
  components: {
    Header,
    Footer
    // Todo
  },
  data () {
    return {}
  },
  mounted () {
    // console.log(this.$route)
    console.log(this.$store)
    // let i = 0
    // mutations同步操作的数据
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)
    // setInterval(() => {
    //   this.updateCount({
    //     num1: i++,
    //     num2: 2
    //   })
    // }, 1000)
    // actions异步操作数据
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // this['a/updateText']('123')
    // this['a/add']()
    // this['b/testAction']()
  },
  methods: {
    ...mapActions([
      'updateCountAsync'
      // 'a/add',
      // 'b/testAction'
    ]),
    ...mapMutations([
      'updateCount'
      // 'a/updateText'
    ])
  },
  computed: {
    // ...mapState({
    //   counter: 'count'
    // }),
    // 相比于字符串的方式回调可以做更多复杂业务逻辑
    ...mapState({
      counter: (state) => state.count
      // textA: (state) => state.a.text,
      // textC: (state) => state.c.text
    }),
    // count () {
    //   return this.$store.state.count
    // },
    ...mapGetters({
      'fullName': 'fullName'
      // textPlus: 'a/textPlus'
    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #999;
  opacity: 0.9;
  z-index: -1;
}

#loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
