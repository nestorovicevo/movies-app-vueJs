<template>
  <div class="row">
    <div class="card col-md-2" v-for="movie in movies" :key="movie.id">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">Model: {{ movie.director }}</p>
        <img :src="movie.imageUrl" width="100" height="100" :alt="movie.title">
        {{movie.imageUrl}}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Duration: {{ movie.duration }}</li>
        <li class="list-group-item">Release date: {{ movie.releaseDate }}</li>
        <li class="list-group-item">Genre: {{ movie.genre }}</li>
      </ul>
      <div class="card-body">
        <router-link  :to="{ name: 'single-movie', params: { id: movie.id } }"  class="btn btn-link">View Movie Details</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Search',

  props: {
     movies: Array
  },

   methods: {
    search (movie) {
      this.$emit('search', movie)
    }
  }

  } 
  

</script>
  
