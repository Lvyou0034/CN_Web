<template>
  <div>
    <el-table
      :data="tcp_data"
      height="100%"
      border
      style="width: 100%">
      <el-table-column
        prop="ip"
        label="IP地址"
        width="auto">
      </el-table-column>
      <el-table-column
        prop="count"
        label="TCP包数量"
        width="auto">
      </el-table-column>
    </el-table>
    <br><br>
    <el-table
      :data="udp_data"
      height="100%"
      border
      style="width: 100%">
      <el-table-column
        prop="ip"
        label="IP地址"
        width="auto">
      </el-table-column>
      <el-table-column
        prop="count"
        label="UDP包数量"
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
        tcp_data: [
          {
            ip: '192.168.0.1',
            count: 10,
          },
        ],
        udp_data: [
          {
            ip: '192.168.0.1',
            count: 11,
          }
        ]
      }
    },
    methods: {
      get_tcp_data() {
        let url = 'http://127.0.0.1:5000/tcp'
        axios.get(url)
          .then(res => {
            if (res.status && this.$route.path == '/udp_tcp')
            {
              console.log(this.tcp_data)
              this.tcp_data = res.data
              setTimeout(() => {
                this.get_tcp_data()
              },5000)
            }else{
              console.log('请求失败')
              return
            }
          })
      },
      get_udp_data() {
        let url = 'http://127.0.0.1:5000/udp'
        axios.get(url)
          .then(res => {
            if (res.status && this.$route.path == '/udp_tcp')
            {
              console.log(this.udp_data)
              this.udp_data = res.data
              setTimeout(() => {
                this.get_tcp_data()
              },5000)
            }else{
              console.log('请求失败')
              return
            }
          })
      }
    },
    created() {
      this.get_tcp_data()
      this.get_udp_data()
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
