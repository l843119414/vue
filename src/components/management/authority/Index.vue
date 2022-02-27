<template lang="html">
  <div id="authority">
    <el-container>
      <el-header>
        <el-page-header @back="goBack" content="权限管理">
        </el-page-header>

      </el-header>
      <el-main>
          vsd
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {

  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#authority{
  width: 100%;
}
#authority .el-header{
  background-color: #fff;
  padding: 15px 20px;
}
</style>
