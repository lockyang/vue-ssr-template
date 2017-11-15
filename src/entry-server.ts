import createaApp from './main'

export default (context: any) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createaApp()
    // 设置服务端 router 的位置
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents) return reject(new Error('code: 404'))
      // 返回应用程序实例, 才可以渲染
      resolve(app)
    }, reject)
  })
}
