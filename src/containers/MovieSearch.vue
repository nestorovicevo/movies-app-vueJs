<template>
  <div>
    <search :movies="movies" @search="search"></search>
  </div>
</template>

<script>
import Search from '../components/Search'
import {movies} from '../services/Movies.js'

export default {
  components: {
    Search
  },

  data(){
    return{
        
      movies : [],
      search : ''
    }
  },

    created(){
        movies.get()
            .then(function(data){
                this.movies = data.title.slice(0,10);
            })
    },

    computed: {
        filteredMovies: function(){
            return this.movies.filter((movie) =>{
                return boolean;
            })
        }
    },

  methods: {
    search (movie) {
    //   cars.remove(car.id)
    //     .then((success) => {
    //       this.cars = this.cars.filter(c => c !== car)
    //     })
    }
    }
}
</script>