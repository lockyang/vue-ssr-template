<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="test">test</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class HelloWorld extends Vue {
  msg: string = 'Welcome to Your Vue.js App'
  mounted () {
    console.log(this.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2
  font-weight normal

ul
  padding 0
  list-style-type none

li
  margin 0 10px
  display inline-block

a
  color #42b983
</style>
