import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test.vue'

Vue.use(Router)

export default function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Hello',
        component: HelloWorld
      },
      {
        path: '/test',
        name: 'test',
        component: Test
      }
    ]
  })
}
