<template>
  <div>
    <el-form ref="form" :model="form" label-width="auto">
      <el-form-item label="过滤器">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="voc"
      height="100%"
      border
      style="width: 100%">
      <el-table-column
        prop="source"
        label="源IP地址"
        width="auto">
      </el-table-column>
      <el-table-column
        prop="voc"
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
  export default {
    name: "Sensitive_voc",
    data() {
      return {
        voc:[
          {
            source: '127.0.0.1',
            voc: 'haha',
            time: '2020/11/28'
          }
        ],
        form:{
          name: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      }
    }
  }
</script>

<style scoped>

</style>
