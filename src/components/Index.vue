<template>
<el-container>
  <el-aside width="60px" style="height: 100vh">
    <router-view name="nav" />
  </el-aside>

  <el-container style="height:100vh">
    <router-view />
  </el-container>
</el-container>
</template>
<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>

</script>
