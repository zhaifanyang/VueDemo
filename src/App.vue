<template>
  <div id="app">
  	<Head></Head>
	<router-view></router-view>
  </div>
</template>

<script>
import Head from './components/common/head'
export default {
  name: 'App',
  components: {
        Head,
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
