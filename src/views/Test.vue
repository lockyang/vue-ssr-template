<template lang="pug">
  div#test
    router-link(to="/") 这是个测试页面 有个计数器11
    p.test-img {{ count }}
    el-button(@click="increment") count++
    el-button(@click="count = 0") refresh
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({})
export default class Test extends Vue {
  count: number = 0
  mounted () {
    console.log(this.$store)
  }
  increment () {
    this.count += 1
    this.$store.dispatch('CHANGE_COUNT', {
      count: this.count
    })
  }
}
</script>
<style lang="stylus" scoped>
#test
  color #f00

.test-img
  background url('../assets/logo.png')
</style>


