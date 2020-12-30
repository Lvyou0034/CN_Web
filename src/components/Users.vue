<template>
  <div>
    <el-table
      :data="tableData3"
      border
      style="width: 100%">
      <el-table-column
        prop="ip"
        label="IP地址"
        width="auto">
      </el-table-column>
      <el-table-column
        prop="address"
        label="MAC地址"
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
        let url = 'http://49.234.108.161:5000/user_data'
        axios.get(url)
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
