import Vue from 'vue'
import VueRouter from 'vue-router'

import AppMovies from './containers/AppMovies.vue'
import MovieRow from './containers/MovieRow.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/movies', name: 'home' },
  { path: '/movies', component: AppMovies, name: 'movies' },
  { path: '/movies/:id', component: MovieRow, name: 'single-movie' },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})