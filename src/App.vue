<template>
  <div id="app">
    <router-view @login="red('login')" @register="red('register')" @logout="logout"/>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  methods: {
    red:function (url){
      console.log(String(url))
      this.$router.push({name: String(url)})
    },
    logout:()=>{
      console.log('exit')
    }
  },
}
</script>
<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
