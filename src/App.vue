<template>
  <div id="app">
    <nav-bar/>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
