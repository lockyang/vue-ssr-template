import Vue from 'vue'
import Vuex from 'vuex'
import moduleTest from './test'
Vue.use(Vuex)

export default function createStore () {
  return new Vuex.Store({
    // strict: process.env.NODE_ENV !== 'production',
    modules: {
      a: moduleTest
    }
  })
}
