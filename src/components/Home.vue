<template>
  <div class="hello">
    <h2>this is Home</h2>
  </div>
</template>

<script>
import {init} from '@/http/interface'

export default {
  name: 'Home',
  props: {
    // msg: String
  },
  created(){
    // init().then( res => {
    //   console.log(res)
    // }, errRes => {
    //   alert(errRes)
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
