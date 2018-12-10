<template>
	<router-link :to="`/actor/${actor.id}`">
		<el-card shadow="hover" :body-style="{ padding: '0px' }">
			<i class="el-icon-picture image"></i>
			<div style="padding: 14px;">
				<span><strong>{{actor.first_name}} {{actor.last_name}}</strong></span>
				<div v-if="actor.role" class="bottom clearfix">
					<span>{{actor.role}}</span>
				</div>
			</div>
		</el-card>
	</router-link>
</template>

<script>
export default {
  props: {
    actor: Object
  }
};
</script>

<style scoped>
.el-icon-picture {
  padding: 100px;
}
</style>
