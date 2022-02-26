<template lang="html">
  <div id='nav' class="">
    <div id="logo">
      <a href="#/">
        <i class="el-icon-platform-eleme"></i>
      </a>
    </div>

    <el-menu :router="true" :default-active="this.$route.path" class="el-menu-vertical"   :collapse="true" active-text-color="#fff">
      <template  v-for="(item,index) in navs" >
        <el-submenu  v-if="item.path.length !== 0" :index="item.url" :key="index">
          <template slot="title">
            <i :class="item.logo"></i>
            <span slot="title">{{ item.title }} {{ item.path.length}}</span>
          </template>
          <el-menu-item-group >
            <el-menu-item  v-for="(temp,i) in item.path" :key="i"  :index="temp.url">{{ temp.title }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-if="item.path.length === 0" :index="item.url" :key="index">
          <i :class="item.logo"></i>
          <span slot="title">{{ item.title }} {{ item.path.length}}</span>
        </el-menu-item>
      </template>
    </el-menu>

  </div>

</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          url: '/management',
          title: '基础管理',
          logo: 'el-icon-s-management',
          path: [
            {
              url: '/management/authority',
              title: '权限管理'
            },
            {
              url: '/management/department',
              title: '部门资料'
            },
            {
              url: 'managementstaff',
              title: '职员资料'
            },
            {
              url: 'projectType',
              title: '项目类型'
            },
            {
              url: 'projectStatus',
              title: '项目状态'
            },
            {
              url: 'taskStatus',
              title: '任务状态'
            },
            {
              url: 'attachmentType',
              title: '附件类型'
            },
            {
              url: 'dictionary',
              title: '字典管理'
            }
          ]
        },
        {
          url: '/implementation',
          title: '项目执行',
          logo: 'el-icon-s-claim',
          path: []
        },
        {
          url: '/search',
          title: '查询',
          logo: 'el-icon-search',
          path: [
            {
              url: '/search/school',
              title: '全校项目总览'
            },
            {
              url: '/search/overview',
              title: '项目总览'
            },
            {
              url: '/search/chart',
              title: '项目一张图表'
            }
          ]
        }
      ]
    }
  }

}
</script>

<style lang="css">
#nav{
  background-color: #3e4963;
  width: 65px;
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
.el-menu{
  border-right: 0;
}
.el-menu-item-group .el-menu-item-group__title{
  padding: 0;
}
</style>
