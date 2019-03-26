<template>
 <div>
   <single-movie :movie="movie"></single-movie>
 </div>
</template>

<script>
import SingleMovie from '../components/SingleMovie.vue'
import { movies } from '../services/Movies'

export default {
 data () {
   return {
     movie: {}
   }
 },

 components: {
     SingleMovie
 },

 created () {
     console.log('tu sam');
   console.log(this.$route.params);
   this.$route.params.id && movies.get(this.$route.params.id)
     .then((response) => {
       this.movie = response.data
     })
 }
}
</script>