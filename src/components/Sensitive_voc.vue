<template>
  <div>
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item label="过滤器">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="onSubmit">搜索</el-button>-->
<!--      </el-form-item>-->
      <el-form-item label="添加敏感词">
        <el-input v-model="voc_add"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addSubmit">添加</el-button>
      </el-form-item>
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
        voc_add:'',
        vocs:[
          {
            sourceip: '',
            dirtyword:'',
            time:''
          }
          // {
          //   source: '127.0.0.1',
          //   voc: 'haha',
          //   time: '2020/11/28'
          // },
          // {
          //   source: '127.0.0.1',
          //   voc: 'fuck',
          //   time: '2020/11/28'
          // },
          // {
          //   source: '127.0.0.1',
          //   voc: 'haha',
          //   time: '2020/11/28'
          // },
          // {
          //   source: '127.0.0.1',
          //   voc: 'haha',
          //   time: '2020/11/28'
          // },
          // {
          //   source: '127.0.0.1',
          //   voc: 'Ohhhh',
          //   time: '2020/11/28'
          // }
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
        // let url = 'http://127.0.0.1:5000/sensitive_voc'
        let url = '39.108.102.157:8088/dirtyword'
        axios.get('http://39.108.102.157:8088/dirtyword')
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
      addSubmit() {
        let url = 'http://39.108.102.157:8088/dirtyword/' + this.voc_add
        axios.get(url).then(
          res => {

          }
        )
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
