import Vue from 'vue'
import VueRouter from 'vue-router'

import AppMovies from './containers/AppMovies.vue'
import MovieRow from './containers/MovieRow.vue'
import MovieSearch from './containers/MovieSearch.vue'



Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/movies', name: 'home' },
  { path: '/movies', component: AppMovies, name: 'movies' },
  { path: '/movies/:id', component: MovieRow, name: 'single-movie' },
  { path: '/movies/search', component: MovieSearch, name: 'search' }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})