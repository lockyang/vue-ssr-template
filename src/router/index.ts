import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'

Vue.use(Router)

export default function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Hello',
        // component: () => import('@/views/Home.vue')
        component: Home
      },
      {
        path: '/test',
        name: 'test',
        component: Test
      }
    ]
  })
}
