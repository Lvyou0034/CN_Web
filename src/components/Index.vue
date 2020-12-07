<template>
  <el-container>
    <el-header height="80px"><div>网络监控系统</div></el-header>
    <el-container>
      <el-aside width="220px" >
        <el-menu :default-active="activeMenu"
                 active-text-color="#EF0505"
                 background-color="#61666C"
                 text-color="#fff"
                 router>
          <el-menu-item index="home">
            <i class="el-icon-house"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="users">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="udp_tcp">
            <i class="el-icon-tickets"></i>
            <span slot="title">TCP/UDP统计表</span>
          </el-menu-item>
          <el-menu-item index="stats">
            <i class="el-icon-s-data"></i>
            <span slot="title">TCP/UDP统计图</span>
          </el-menu-item>
          <el-menu-item index="sensitive_voc">
            <i class="el-icon-warning-outline"></i>
            <span slot="title">敏感词汇检测</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Index",
    computed: {
      // 我们使用计算属性来获取到当前点击的菜单的路由路径，然后设置default-active中的值
      // 使得菜单在载入时就能对应高亮
      activeMenu() {
        let path = this.$route.path.split("/")
        return path[1]
      }
    }
  }
</script>

<style scoped>
  .el-header {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #252526;
    display: flex;
  }
  .el-header div {
    color: #fff;
    font-size: 22px;
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .el-aside {
    display: block;
    position: absolute;
    left: 0;
    top: 80px;
    bottom: 0;
    background-color: #74747E;
  }
  .el-main {
    position: absolute;
    left: 220px;
    right: 0;
    top: 80px;
    bottom: 0;
    background-color: #E9EEF3;
  }
  .el-menu-item {
    height: 70px;
    font-size: 16px;
  }
</style>
