<template>
  <div>
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item label="过滤器">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="onSubmit">搜索</el-button>-->
<!--      </el-form-item>-->
    </el-form>
    <el-table
      :data="this.search()"
      border
      style="width: 100%">
      <el-table-column
        prop="sourceip"
        label="源IP地址"
        width="auto">
      </el-table-column>
      <el-table-column
        prop="dirtyword"
        label="敏感词"
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
  import axios from 'axios'
  export default {
    name: "Sensitive_voc",
    data() {
      return {
        vocs:[
          // {
          //   sourceip:'',
          //   dirtyword:'',
          //   time:''
          // }
          {
            sourceip: '127.0.0.1',
            dirtyword: 'haha',
            time: '2020/11/28'
          },
          {
            sourceip: '127.0.0.1',
            dirtyword: 'nm',
            time: '2020/11/28'
          },
          {
            sourceip: '127.0.0.1',
            dirtyword: 'shab',
            time: '2020/11/28'
          },
          {
            sourceip: '127.0.0.1',
            dirtyword: 'tmd',
            time: '2020/11/28'
          },
          {
            sourceip: '127.0.0.1',
            dirtyword: 'haha',
            time: '2020/11/28'
          }
        ],
        sen_voc:[],
        form:{
          name: ''
        }
      }
    },
    methods: {
      search() {
        for(let item of this.vocs) {
          if(this.form.name == '')
            return this.vocs
          else {
            let res = this.vocs.filter(n => {
              return n.dirtyword == this.form.name
            })
            return res
          }
        }
      },
      getUserData() {
        let url = 'http://39.108.102.157:8088/dirtyword'
        axios.get(url)
          .then(res => {
            if (res.status && this.$route.path == '/sensitive_voc')
            {
              console.log(this.vocs)
              this.vocs = res.data
              setTimeout(() => {
                this.getUserData()
              },5000)
            }else{
              console.log('请求失败')
              return
            }
          })
      },
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
