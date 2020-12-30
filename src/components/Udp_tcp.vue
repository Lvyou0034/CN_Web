<template>
  <div>
    <el-table
      :data="tcp_data"
      height="300px"
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
      height="300px"
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
        ],
        udp_data: [
        ]
      }
    },
    methods: {
      get_tcp_data() {
        let url = 'http://49.234.108.161:5000/cnt/tcp0'
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
        let url = 'http://49.234.108.161:5000/cnt/udp0'
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
