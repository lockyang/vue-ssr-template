<template lang="pug">
  el-container#app
    el-aside.side(
      width="400px"
      height="100vh"
    )
    el-main
      router-view
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({})
export default class App extends Vue {

}
</script>

<style lang="stylus">
@import './style/bootstrap.styl'
#app
  height 100vh
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

.side
  background #fff url('./assets/side.jpg') left top repeat
  background-size 100% auto;

</style>
