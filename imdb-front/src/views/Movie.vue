<template>
    <div>
        <h2>{{movie.name}} ({{movie.year}})</h2>
        <h5>Rated : {{movie.rank}}</h5>
        <h3>Director(s)</h3>
        <ul>
            <li v-for="director in movie.directors" :key="director.id">{{director.first_name}} {{director.last_name}}</li>
        </ul> 
        <h3>Genre(s)</h3>
        <ul>
            <li v-for="genre in movie.genres" :key="genre.id">{{genre.genre}}</li>
        </ul> 
        <h3>Cast</h3>
        <div class="card-list">
            <actor-card :actor='actor' v-for="actor in movie.actors" :key="actor.id"></actor-card>
        </div>
    </div>
</template>

<script>
import ActorCard from "@/components/ActorCard.vue";
import ImdbService from "@/services/ImdbService";

export default {
  name: "movie",
  data() {
    return {
      movie: null
    };
  },
  components: {
    ActorCard
  },
  /* 
    Before showing the view, 
    - we get the Movie Id from the route params,
    - we get the Movie data from our Service API,
    - we store the Movie data in our component data
  */
  async beforeRouteEnter(to, from, next) {
    const movie = await ImdbService.getMovie(to.params.id);
    next(vm => (vm.movie = movie));
  }
};
</script>

<style scoped>
</style>
