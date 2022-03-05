<template>
  <div>

    <el-container>
      <el-header class="homeHeader" >
        <div class="title">微人事</div>
          <div>
            <el-dropdown class="userinfo" @command="commandHandler">
              <span class="el-dropdown-link">
                {{ this.$store.state.userInfo.username }}
                <i >
                  <img :src="this.$store.state.userInfo.userface" alt="">

              </i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="info">个人中心</el-dropdown-item>
                <el-dropdown-item command="setting">设置</el-dropdown-item>
                <el-dropdown-item command="logout" divided>注销登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
      </el-header>
      <el-container>
        <el-aside width="200px" >
          <el-menu
              default-active="/home/ano"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @select="menuClick"
              @close="handleClose">

            <el-submenu index="/home/test1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>任务总览</span>
              </template>
                <el-menu-item index="/home/test1">我的任务</el-menu-item>
                <el-menu-item index="/home/test2">系统</el-menu-item>
                <el-menu-item index="/home/test3">排行榜</el-menu-item>
            </el-submenu>
            <el-menu-item index="/home/ano">
              <i class="el-icon-menu"></i>
              <span slot="title">任务状态</span>
            </el-menu-item>
            <el-menu-item index="/home/new">
              <i class="el-icon-plus"></i>
              <span slot="title">新建任务</span>
            </el-menu-item>

            <el-menu-item index="/home/third">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>



    </div>

</template>

<script>
import {getRequest} from "@/util/api";

export default {
  name: "Home",
  data(){
    return{
      name:this.$store.state.userInfo.username

    }
  },
  methods: {
    commandHandler(cmd) {
      if (cmd == 'logout') {
        getRequest('/logout')
        this.$store.state.userInfo={}
        this.$router.replace('/login')
      } else if (cmd == 'info') {
        this.$router.push('/info');
      }

    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuClick(index){
      //页面跳转
      this.$router.push(index)


    }
  }
}
</script>

<style scoped>
#nav{
  padding: 0px;
}
.homeHeader {
  background-color: #409eff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  box-sizing: border-box;
}
.homeHeader .title{
  font-size: 30px;
  font-family: 华文行楷;
  color: #ffffff
}
.homeHeader .userinfo {
  cursor: pointer;
}
.el-dropdown-link img {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-left: 8px;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
}




</style>