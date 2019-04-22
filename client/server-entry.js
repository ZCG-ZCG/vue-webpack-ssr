import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    router.push(context.url)

    // 在所有异步操作做完之后才会被调用
    router.onReady(() => {
      // 根据url匹配相应的组件，做相关的操作
      const matchedComponments = router.getMatchedComponents()
      if (!matchedComponments.length) {
        return reject(new Error('no component matched!'))
      }
      resolve(app)
    })
  })
}
