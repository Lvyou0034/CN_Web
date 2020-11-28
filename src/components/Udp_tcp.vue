<template>
  <div>
    <el-table
      :data="tableData"
      height="100%"
      border
      style="width: 100%">
      <el-table-column
        prop="source"
        label="源IP地址"
        width="auto">
      </el-table-column>
      <el-table-column
        prop="destination"
        label="目的IP地址"
        width="auto">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        width="auto">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "Udp_tcp",
    data() {
      return {
        tableData: [
          {
            source: '192.168.0.1',
            destination: '192.168.0.1',
            time: '2020/11/28'
          },
          {
            source: '192.168.0.1',
            destination: '192.168.0.1',
            time: '2020/11/28'
          },
          {
            source: '192.168.0.1',
            destination: '192.168.0.1',
            time: '2020/11/28'
          },
          {
            source: '192.168.0.1',
            destination: '192.168.0.1',
            time: '2020/11/28'
          },
          {
            source: '192.168.0.1',
            destination: '192.168.0.1',
            time: '2020/11/28'
          },
          {
            source: '192.168.0.1',
            destination: '192.168.0.1',
            time: '2020/11/28'
          }
        ]
      }
    },
    mounted() {
      console.log(this.$route)
    }
  }
</script>

<style scoped>

</style>
