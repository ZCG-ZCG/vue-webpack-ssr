import { createApp } from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    router.push(context.url)

    // 在所有异步操作做完之后才会被调用
    router.onReady(() => {
      const matchedComponments = router.getMatchedComponents()
      resolve(app)
    })
  })
}
