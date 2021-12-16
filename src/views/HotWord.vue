<template>
  <el-main>
    <el-table :data="this.$store.getters.getWords">
      <el-table-column prop="key" label="词条" width="120"> </el-table-column>
      <el-table-column prop="detail" label="详细"> </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  name: "Hotword",
};
</script>

<style scoped></style>
