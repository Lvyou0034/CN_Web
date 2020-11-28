<template>
  <div>
    <el-table
      :data="tableData3"
      border
      style="width: 100%">
      <el-table-column
        prop="time"
        label="接入时间"
        width="auto">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="auto">
      </el-table-column>
      <el-table-column
        prop="ip"
        label="IP地址"
        width="auto">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Users",
    data() {
      return {
        tableData3: []
      }
    },
    methods: {
      getUserData() {
        let url = 'http://127.0.0.1:5000/user_data'
        axios.get('http://127.0.0.1:5000/user_data')
          .then(res => {
            if (res.status && this.$route.path == '/users')
            {
              console.log(this.tableData3)
              this.tableData3 = res.data
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
    mounted() {
    },
    created() {
      this.getUserData()
    }
  }
</script>

<style scoped>

</style>
