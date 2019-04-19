const Koa = require('koa')

const app = new Koa()

const isDev = process.env.NODE_ENV === 'development'

// ctx接受的内容，next接下来要执行的任务
app.use(async (ctx, next) => {
  try {
    console.log('request with path', ctx.path)
    await next()
  } catch (error) {
    console.log(error)
    ctx.status = 500
    if (isDev) {
      ctx.body = error.message
    } else {
      ctx.body = 'please try again later'
    }
  }
})
