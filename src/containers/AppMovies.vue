<template>
  <div>
    <movies-list :movies="movies"></movies-list>
  </div>
</template>

<script>
import MoviesList from '../components/MoviesList'
import {movies} from '../services/Movies.js'

export default {
  components: {
    MoviesList
  },

  data(){
    return{
      movies : []
    }
  },

  beforeRouteEnter (to, from, next) {
    movies.getAll()
      .then((response) => {
        next((vm) => {
          vm.movies = response.data
        })
      }).catch((error) => {
        console.log(error)
      })
  }
}
</script>