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
        <el-button type="primary" @click="getdirtywordlist">查看当前敏感词库</el-button>
      </el-form-item>
      <el-dialog
        title="敏感词库"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-table
          :data="dirtywordlist"
          height="300px"
          border
          style="width: 100%">
          <el-table-column
            prop="dirtyword"
            label="敏感词"
            width="auto">
          </el-table-column>
          <el-table-column
            prop="updatetime"
            label="时间"
            width="auto">
          </el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
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
        dialogVisible: false,
        voc_add:'',
        vocs:[
          {
            sourceip: '',
            dirtyword:'',
            time:''
          }
        ],
        dirtywordlist: [
          {
            dirtyword:'',
            updatetime:''
          }
        ],
        sen_voc:[],
        form:{
          name: ''
        }
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      getdirtywordlist() {
        this.dialogVisible = true
        let url = 'http://49.234.108.161:5000/dirtyword/get'
        axios.get(url)
        .then(res => {
          if (res.status) {
            this.dirtywordlist = res.data
          }
        })
      },
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
        let url = 'http://49.234.108.161:5000/dirtyword'
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
      addSubmit() {
        let url = 'http://49.234.108.161:5000/dirtyword/add/' + this.voc_add
        axios.get('http://49.234.108.161:5000/dirtyword/get')
          .then(res => {
            if (res.status) {
              this.dirtywordlist = res.data
            }
          })
        if (this.voc_add) {
          for(let item of this.dirtywordlist) {
            if (this.voc_add == item.dirtyword) {
              alert("不能重复添加敏感词")
              return
            }
          }
          axios.get(url).then(
            res => {
              if (res.status) {
                alert("添加成功")
              }else {
                alert("添加失败")
              }
            }
          )
        }else {
          alert("添加敏感词不能为空")
        }
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
