<template>
  <div>
    <el-table
      :data="tableData3"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="time"
        label="接入时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ip"
        label="IP地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Users",
    data() {
      return {
        tableData3: [{
          time: '2020-11-18',
          username: 'Nuo',
          ip: '192.168.0.1'
        }, {
          time: '2020-11-18',
          username: 'Nuo',
          ip: '192.168.0.1'
        }, {
          time: '2020-11-18',
          username: 'Nuo',
          ip: '192.168.0.1'
        }]
      }
    }
  }
</script>

<style scoped>

</style>
