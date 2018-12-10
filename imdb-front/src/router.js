import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import TopMovies from "./views/TopMovies.vue";
import SearchResults from "./views/SearchResults.vue";
import Actor from "./views/Actor.vue";
import Movie from "./views/Movie.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/topMovies/:decade",
      name: "topMovies",
      component: TopMovies
    },
    {
      path: "/search/:query",
      name: "searchResults",
      component: SearchResults
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: Movie
    },
    {
      path: "/actor/:id",
      name: "actor",
      component: Actor
    }
  ]
});
