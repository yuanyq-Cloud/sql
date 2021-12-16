<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>购物推荐</template
            >
            <el-menu-item-group>
              <router-link to="/tb" tag="span"
                ><el-menu-item index="1-1">淘宝热搜</el-menu-item></router-link
              >
              <router-link to="/jd" tag="span"
                ><el-menu-item index="1-2">京东热搜</el-menu-item></router-link
              >
              <router-link to="/g" tag="span"
                ><el-menu-item index="1-3">个性推荐</el-menu-item></router-link
              >
              <router-link to="/hw" tag="span"
                ><el-menu-item index="1-4">热门词条</el-menu-item></router-link
              >
              <router-link to="/hp" tag="span"
                ><el-menu-item index="1-5">热门商品</el-menu-item></router-link
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <img
          src="../assets/ad.jpg"
          style="width: 100%; height: 200px"
          fit="contain"
        />
        <img
          src="../assets/ad.jpg"
          style="width: 100%; height: 200px"
          fit="contain"
        />
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span>用户名</span>
          <el-dropdown>
            <i
              class="el-icon-user"
              style="margin-left: 15px; font-size: 20px"
            ></i>
            <el-dropdown-menu slot="dropdown">
              <div @click="toLog('login')"
                ><el-dropdown-item>登录</el-dropdown-item></div
              >
              <div @click="toLog('register')"
                ><el-dropdown-item>注册</el-dropdown-item></div
              >
              <div @click="toLog('logout')"
                ><el-dropdown-item>退出</el-dropdown-item></div
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <!--        <el-main>-->
        <!--          <el-table :data="tableData">-->
        <!--            <el-table-column label="商品" width="100">-->
        <!--              <template slot-scope="scope">-->
        <!--                <img :src="scope.row.photo" width="40" height="40" />-->
        <!--              </template>-->
        <!--            </el-table-column>-->
        <!--            <el-table-column prop="name" label="名称" width="120">-->
        <!--            </el-table-column>-->
        <!--            <el-table-column prop="detail" label="详细"> </el-table-column>-->
        <!--          </el-table>-->
        <!--        </el-main>-->
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name:"MainUI",
  data() {
    // const item = {
    //   photo: Logo,
    //   name: "",
    //   detail: "",
    // };
    return {
      tableData: this.$store.getters.getItems,
    };
  },
  methods: {
    toLog(event){
      this.$emit(event);
    },
  },
};
</script>

<style scoped>
.el-header {
  background-color: #c0ddf6;
  color: #000000;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
