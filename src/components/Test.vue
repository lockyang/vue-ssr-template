<template lang="pug">
  div#test
    router-link(to="/") 这是个测试页面 有个计数器11
    p {{ mode }}
    p {{ count }}
    button(@click="increment") count++
    button(@click="count = 0") refresh
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'test',
  data () {
    return {
      mode: process.env.VUE_ENV === 'server' ? 'server' : 'client',
      count: 0
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions(['CHANGE_COUNT']),
    increment () {
      this.count += 1
      this.CHANGE_COUNT({
        count: this.count
      })
    }
  }
}
</script>
<style scoped>
  #test {
    color: #f00;
  }
</style>


