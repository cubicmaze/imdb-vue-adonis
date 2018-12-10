<template>
  <el-container>
     <el-header>
        <nav-bar></nav-bar>
     </el-header>
    <el-main>
      <search-bar></search-bar>
      <router-view/>
    </el-main> 
  </el-container>
</template>

<script>
import NavBar from "@/components/Nav.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SearchBar
  }
};
</script>
<style>
.el-container {
  width: 1000px;
  margin: 0 auto;
}
body {
  font-family: "Open Sans", sans-serif;
}
.el-card {
  display: inline-block;
  margin: 18px 18px;
  width: 220px;
}
.el-card:nth-child(4n + 1) {
  margin-left: 0;
}
.el-card:nth-child(4n) {
  margin-right: 0;
}
.el-card span {
  --webkit-line-clamp: 1;
  overflow: hidden;
  height: 25px;
  display: -webkit-box;
}
</style>
