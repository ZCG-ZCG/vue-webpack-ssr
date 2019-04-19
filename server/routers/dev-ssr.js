const Router = require('koa-router')
const axios = require('axios')
const MemoryFS = require('memory-fs')
const webpack = require('webpack')
const VueServerRenderer = require('vue-server-renderer')
const path = require('path')
const fs = require('fs')

const serverConfig = require('../../build/webpack.config.server')

const serverComplier = webpack(serverConfig)
const mfs = new MemoryFS()
serverComplier.outputFileSystem = mfs

let bundle
serverComplier.watch({}, (err, states) => {
  if (err) throw err
  states = states.toJson()
  states.errors.forEach(err => console.log(err))
  states.hasWarnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-boundle.json'
  )

  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
})

const handleSSR = async (ctx) => {
  if (bundle) {
    ctx.body = '兄die，等一哈子嘛~'
    return
  }

  const clientMainfestResp = await axios.get(
    'http://127.0.0.1:8000/vue-ssr-client-mainfest.json'
  )
  const clientMainfest = clientMainfestResp.data

  const template = fs.readFileSync(
    path.join(__dirname, '../server.template.ejs')
  )

  const render = VueServerRenderer.createBundleRenderer(bundle, {
    // 防止其他功能注入，只渲染html
    inject: false,
    clientMainfest
  })
}
