<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{ name: 'home' }" class="navbar-brand">Movies</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <form @submit.prevent="search" class="form-inline">
      <i class="fas fa-search" aria-hidden="true"></i>
      <input class="form-control form-control-sm ml-3 w-75" type="text" v-model="search" placeholder="search" aria-label="search">
    </form>
  </nav>
</template>

<script>
import MovieSearch from '../containers/MovieSearch'

export default {
    name: 'NavBar',

    components: {
      MovieSearch
    }
}
</script>

<style>
</style>