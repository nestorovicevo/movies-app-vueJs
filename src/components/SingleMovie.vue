<template>
<div class="mt-4">
   <!-- <router-link to="/movies">Go back</router-link> -->
   <hr/>
   <div class="card mb-3" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">{{ movie.title }}</h5>
        <h5 class="card-title">{{ movie.director }}</h5>
           <img :src="movie.imageUrl" width="100" height="100" :alt="movie.title">
             {{movie.imageUrl}}
           <p class="card-text">releaseDate: {{ movie.releaseDate }}</p>
           <p class="card-text">Genere: {{ movie.genre }}</p>
           <p class="card-text">Duration: {{ movie.duration }}</p>
     </div>
   </div>
 </div>
</template>

<script>

export default {
    name: "SingleMovie",

 props: {
   movie: Object
 },
}
</script>

<style>
</style>