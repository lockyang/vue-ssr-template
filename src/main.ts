// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'

import {
  Button as ElButton,
  Container as ElContainer,
  Main as ElMain,
  Aside as ElAside
} from 'element-ui'

Vue.use(ElButton)
Vue.use(ElContainer)
Vue.use(ElMain)
Vue.use(ElAside)

Vue.config.productionTip = false

/* eslint-disable no-new */
export default function createApp () {
  const router = createRouter()
  const store = createStore()
  let app = new Vue({
    router,
    store,
    render: (h) => h(App)
  })
  return { app, router, store }
}
