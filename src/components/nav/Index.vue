<template lang="html">
  <div id='nav' class="">
    <div id="logo">
      <a href="#/">
        <i class="el-icon-platform-eleme"></i>
      </a>
    </div>
      <el-menu :router="true" :default-active="$route.path" class="el-menu-vertical"   :collapse="true" active-text-color="#fff">
      <el-submenu index="/management">
        <template slot="title">
          <i class="el-icon-s-management"></i>
          <span slot="title">基础管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/management/authority">权限管理</el-menu-item>
          <el-menu-item index="/management/department">部门资料</el-menu-item>
          <el-menu-item index="/management/managementstaff">职员资料</el-menu-item>
          <el-menu-item index="/management/projectType">项目类型</el-menu-item>
          <el-menu-item index="/management/projectStatus">项目状态</el-menu-item>
          <el-menu-item index="/management/taskStatus">任务状态</el-menu-item>
          <el-menu-item index="/management/attachmentType">附件类型</el-menu-item>
          <el-menu-item index="/management/dictionary">字典管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/implementation">
        <i class="el-icon-s-claim"></i>
        <span slot="title">项目执行</span>
      </el-menu-item>
      <el-submenu index="/search">
        <template slot="title">
          <i class="el-icon-search"></i>
          <span slot="title">查询</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/search/school">全校项目总览</el-menu-item>
          <el-menu-item index="/search/overview">项目总览</el-menu-item>
          <el-menu-item index="/search/chart">项目一张图表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>

  </div>

</template>

<script>
export default {

}
</script>

<style lang="css">
#nav{
  background-color: #3e4963;
  width: 60px;
  height: 100%;
}

#logo{
  height: 50px;
  width: 60px;
  text-align: center;
  padding: 30px 0 0 0;
}
#logo i{
  font-size: 32px;
  color: #fff;
}
.el-menu-vertical i{
  color: #fff;
  font-size: 24px;
}
.el-menu, .el-menu-item{
  background-color: #3e4963;
  color: #fff;
}
.el-submenu__title:hover, .el-menu-item.el-menu-item:focus, .el-menu-item.el-menu-item:hover, .el-menu-item.is-active {
  background-color: #2a344b;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-item-group .el-menu-item-group__title{
  padding: 0;
}
</style>
