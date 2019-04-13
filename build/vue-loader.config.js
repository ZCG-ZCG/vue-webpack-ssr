
// const docsLoader = require.resolve("./doc-loader")

module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCss: !isDev,
    cssModules: {
      modules: true,
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    }

    // hotReload: false  //根据环境变量生成,
    // loader: {
    //   "docs": docsLoader
    // },
    // preLoader: {},
    // postLoader: {}
  }
}
