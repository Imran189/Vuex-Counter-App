<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AllComponent/>
</template>

<script>
import AllComponent from "./components/AllComponent.vue"

export default {
  name: 'App',
  components: {
    AllComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
