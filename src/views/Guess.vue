<template>
  <div>
    <el-main>
      <el-table :data="this.$store.getters.getReItems">
        <el-table-column label="商品" width="100">
          <template slot-scope="scope">
            <img :src="scope.row.photo" width="40" height="40" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="120">
        </el-table-column>
        <el-table-column prop="detail" label="详细"> </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "Guess",
};
</script>

<style scoped></style>
