<template>
  <div id="app">
    <router-view  />
  </div>
</template>
<script>
// import Main from "./views/Main.vue";
export default {
  name: "App",
  components: {
    // "main-ui": Main,
  },
  methods: {
  },
};
</script>
<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
