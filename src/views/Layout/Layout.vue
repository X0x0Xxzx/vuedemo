<template>
  <el-container style="height: 100%; border: 1px solid #eee" class="heightAll">

    <el-aside width="200px" style="background-color: rgb(238, 241, 246)" class="heightAll">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" class="heightAll">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu  router default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item index="/main">
            <i class="el-icon-location"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/test1">
          <i class="el-icon-menu"></i>
          <span slot="title">测试一</span>
        </el-menu-item>
        <el-menu-item index="/test2" >
          <i class="el-icon-document"></i>
          <span slot="title">测试二</span>
        </el-menu-item>
        <el-menu-item index="/test3">
          <i class="el-icon-setting"></i>
          <span slot="title">测试三</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 15px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item @click.native="loginout">切换用户</el-dropdown-item>
            <el-dropdown-item>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{username}}</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import Mymenu from './mymenu'
import Mycontent from './main'
export default {
  name: 'Layout',
  created : function () {
    const user_name=window.localStorage.getItem('user_name')
    console.log(user_name)
    if(user_name){
      this.username=window.localStorage.getItem('user_name')
    }
  },
  data() {
    return {
      isCollapse: true
    };
  },
  components: {
    Mymenu,
    Mycontent
  },
  methods: {
    loginout : function () {
      localStorage.removeItem('user_name')
      console.log("已注销！")
      this.$router.push('/login')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  overflow: hidden;
}
.heightAll {
  height: 100%;
}
</style>
