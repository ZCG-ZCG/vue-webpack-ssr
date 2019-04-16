<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来要做什么？"
      @keyup.enter="addTodo"
    >
    <item
      :todo="todo"
      v-for="todo in filterTodos"
      :key="todo.id"
      @del="deleteTodo"
    />
    <tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    />

    <!-- <router-view></router-view> -->
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  props: ['id'],
  beforeRouteEnter (to, from, next) {
    console.log('todo before enter', this)
    next(vm => {
      console.log('todo after enter vm.id is ', vm.id)
    })
    // next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('todo before leave')
    // 可以控制页面离开时的行为一种方式
    // if (window.confirm('想好了吗？宝贝')) {
    //   next()
    // }
    next()
  },
  beforeRouteUpdata (to, from, next) {
    // 在同样的组件被调用 但是路由不同时触发
    console.log('todo before updata')
    next()
  },
  mounted () {
    console.log(this.id)
    console.log('todo mounted')
  },
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  components: {
    Item,
    Tabs
  },
  computed: {
    filterTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

.tab-container {
  background-color: #fff;
  padding: 0 15px;
}
</style>
