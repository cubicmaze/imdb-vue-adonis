<template>
  <div class="search-results">
    <h2>Results for '{{query}}'</h2>
		<template v-if="movies.length > 0">
			<h3>Movies</h3>
			<div class="card-list">
				<movie-card :movie="movie" v-for="movie in movies" :key="movie.id"></movie-card>
			</div>
		</template>
		<template v-if="actors.length > 0">
			<h3>Actors</h3>
			<div class="card-list">
				<actor-card :actor="actor" v-for="actor in actors" :key="actor.id"></actor-card>
			</div>
		</template>
		<template v-if="actors.length == 0 && movies.length == 0">
			No results, please try another query.
		</template>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import ActorCard from "@/components/ActorCard.vue";
import ImdbService from "@/services/ImdbService";

export default {
  name: "searchResults",
  data() {
    return {
      minScore: 0,
      maxScore: 10,
      query: "",
      movies: [],
      actors: []
    };
  },
  components: {
    MovieCard,
    ActorCard
  },
  /* 
    This method is called when the user first hit the search result view
  */
  async beforeRouteEnter(to, from, next) {
    /* 
      We use Promise.all to perform the search query on movies & actors simultaneously.
    */
    const results = await Promise.all([
      ImdbService.searchMovies(to.params.query),
      ImdbService.searchActors(to.params.query)
    ]);
    //As soon as we have the data, we store it in our component data
    next(vm => {
      vm.query = to.params.query;
      vm.movies = results[0];
      vm.actors = results[1];
    });
  },
  /* 
    This method is called when the user is already
    in the search result view and submit a new search
  */
  async beforeRouteUpdate(to, from, next) {
    /* 
      We use Promise.all to perform the search query on movies & actors simultaneously.
    */
    const results = await Promise.all([
      ImdbService.searchMovies(to.params.query),
      ImdbService.searchActors(to.params.query)
    ]);
    //As soon as we have the data, we store it in our component data
    this.query = to.params.query;
    this.movies = results[0];
    this.actors = results[1];
    next();
  }
};
</script>
