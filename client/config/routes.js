// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // /app/xxx
    // path: '/app/:id',
    path: '/app',
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    component: () => import('../views/todo/todo.vue'),
    name: 'app',
    props: true,
    // props: (route) => ({ id: route.query }),
    meta: {
      title: 'this is app',
      description: 'xxxxx'
    },
    beforeEnter: (to, from, next) => {
      // 在进入路由之前被调用
      console.log('app route beforeEnter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    // components: {
    //   default: Login,
    //   a: Todo
    // },
    component: () => import('../views/login/login.vue')
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
