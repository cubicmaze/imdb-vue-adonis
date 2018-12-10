<template>
    <div>
        <h2>{{actor.first_name}} {{actor.last_name}} ({{actor.gender}})</h2>
        <h3>Movies & Roles</h3>
        <div class="card-list">
            <movie-card :movie="movie" v-for="movie in actor.movies" :key="movie.id"></movie-card>
        </div>
    </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import ImdbService from "@/services/ImdbService";

export default {
  name: "actor",
  data() {
    return {
      actor: null
    };
  },
  components: {
    MovieCard
  },
  async beforeRouteEnter(to, from, next) {
    /* 
      Before showing the view, 
      - we get the Actor Id from the route params,
      - we get the Actor data from our Service API,
      - we store the Actor data in our component data
    */
    const actor = await ImdbService.getActor(to.params.id);
    next(vm => (vm.actor = actor));
  }
};
</script>

<style scoped>
</style>
