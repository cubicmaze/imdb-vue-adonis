<template>
  <div class="top-movies">
    <h2>Top 10 movies in {{selectedDecade}} - {{(endOfDecade)}}</h2>
    Select a decade :
    <el-select @change="decadeChanged()" v-model="selectedDecade" placeholder="Select a decade">
      <el-option
        v-for="decade in decades"
        :key="decade"
        :label="decade+' - '+(decade+9)"
        :value="decade">
      </el-option>
    </el-select>
    <template v-if="topMovies.length > 0">
			<div class="card-list">
				<movie-card :movie="movie" v-for="movie in topMovies" :key="movie.id"></movie-card>
			</div>
		</template>
  </div>
</template>

<script>
import ImdbService from "@/services/ImdbService";
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "topMovies",
  data() {
    return {
      topMovies: [],
      selectedDecade: null,
      endOfDecade: null,
      decades: [2000, 1990, 1980, 1970, 1960, 1950]
    };
  },
  components: {
    MovieCard
  },
  methods: {
    /* 
      If the user select a different decade from the listed options,
      - we push a new route, so we can also benefit from History State API to naviguate
    */
    decadeChanged() {
      this.endOfDecade = this.selectedDecade + 9;
      this.$router.push(`/topMovies/${this.selectedDecade}`);
    }
  },
  /* 
    Before showing the view, 
    - we get the selected decade from the route params,
    - we get the topMovies for that decade from our Service API
  */
  async beforeRouteEnter(to, from, next) {
    const decade = parseInt(to.params.decade);
    const endOfDecade = decade + 9;
    const topMovies = await ImdbService.getTopMovies(decade, endOfDecade);
    next(vm => {
      vm.selectedDecade = decade;
      vm.endOfDecade = endOfDecade;
      vm.topMovies = topMovies;
    });
  },
  /* 
    We update the topMovies prop using our Service API
  */
  async beforeRouteUpdate(to, from, next) {
    this.topMovies = await ImdbService.getTopMovies(
      this.selectedDecade,
      this.endOfDecade
    );
    next();
  }
};
</script>
