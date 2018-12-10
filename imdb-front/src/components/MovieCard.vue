<template>
	<router-link :to="`/movie/${movie.id}`">
    <el-card shadow="hover" :body-style="{ padding: '0px'}">
      <i class="el-icon-picture image"></i>
      <div style="padding: 14px;">
        <span><strong>{{movie.name}}</strong> ({{movie.year}})</span>
				<span>Rank: {{movie.rank}}</span>
        <div v-if="movie.role" class="bottom clearfix">
         	<span>Role: {{movie.role}}</span>
        </div>
      </div>
    </el-card>
	</router-link>
</template>

<script>
export default {
  props: {
    movie: Object
  }
};
</script>

<style scoped>
.el-icon-picture {
  padding: 100px;
}
</style>
