<template>
  <el-input @keyup.native.enter="submitSearch()" v-model="query" placeholder="Search for a movie or an actor" class="input">
    <el-button @click="submitSearch()" slot="append" icon="el-icon-search"></el-button>
  </el-input>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    submitSearch() {
      /* 
        When the user submit the search query,
        we redirect the user to the search result view,
        1 - if the user was in a different view, 
          the beforeRouteEnter method will be called
        2 - if the user was aleady in the search result view,
          the beforeRouteUpdate method will be called 
        - We push a new route, so we can also benefit from History State API to naviguate
      */
      this.$router.push(`/search/${this.query}`);
    }
  }
};
</script>
