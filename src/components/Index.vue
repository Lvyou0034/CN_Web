<template>
  <el-container>
    <el-header><div>网络监控系统</div></el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2">
          <el-menu-item index="2">
<!--            <i class="el-icon-menu"></i>-->
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="2">
<!--            <i class="el-icon-menu"></i>-->
            <span slot="title">网络流量监控</span>
          </el-menu-item>
          <el-menu-item index="2">
<!--            <i class="el-icon-menu"></i>-->
            <span slot="title">敏感词汇检测</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <h1>（内容为空）</h1>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Index"
  }
</script>

<style scoped>
  .el-header {
    position: absolute;
    width: 100%;
    height: 60px;
    background-color: #B3C0D1;
    display: flex;
  }
  .el-header div {
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .el-aside {
    display: block;
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    background-color: #D3DCE6;
  }
  .el-main {
    position: absolute;
    left: 200px;
    right: 0;
    top: 60px;
    bottom: 0;
    overflow-y: scroll;
    background-color: #E9EEF3;
  }
  .el-menu-item {
    color: black;
  }
</style>
