<template>
  <div id="app">
    <router-link to="/index">go index</router-link> | 
    <router-link to="/home">go home</router-link>
    <!-- <Index msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style lang="less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 36/@rem;
}
</style>
