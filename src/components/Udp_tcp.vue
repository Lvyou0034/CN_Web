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
  import axios from "axios";
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
    methods: {
      getUserData() {
        let url = 'http://127.0.0.1:5000/udp_tcp'
        axios.get('http://127.0.0.1:5000/udp_tcp')
          .then(res => {
            if (res.status && this.$route.path == '/udp_tcp')
            {
              console.log(this.tableData)
              this.tableData = res.data
              setTimeout(() => {
                this.getUserData()
              },5000)
            }else{
              console.log('请求失败')
              return
            }
          })
      }
    },
    created() {
      this.getUserData()
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
