<template>
  <div class="Echarts">
    <div id="top_left" style="width: 100%;height:400px;"></div>
    <div id="top_right" style="width: 100%;height:400px;"></div>
    <div id="bottom" style="width: 1200px;height:400px;"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Echarts',
    data() {
      return {
        tcp_x_data:["用户A的ip","用户B的ip","用户C的ip","用户D的ip","用户E的ip","用户F的ip","用户G的ip"],
        tcp_s_data:[5, 20, 36, 10, 10, 20, 22],
        udp_x_data:["用户A的ip","用户B的ip","用户C的ip","用户D的ip","用户E的ip","用户F的ip"],
        udp_s_data:[5, 20, 36, 10, 10, 20]
      }
    },
    watch: {
      tcp_x_data() {
        this.tcp_chart()
      },
      tcp_s_data() {
        this.tcp_chart()
      },
      udp_x_data() {
        this.udp_chart()
      },
      udp_s_data() {
        this.udp_chart()
      }
    },
    methods:{
      tcp_chart(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('top_left'));
        // 指定图表的配置项和数据
        let option = {
          title: {
            text: 'TCP流量统计'
          },
          tooltip: {
            show:true
          },
          legend: {
            data:['数量']
          },
          xAxis: [{
            data: this.tcp_x_data,
            type: 'category',
          }],
          yAxis: [{
            type:'value'
          }],
          series: [{
            name: 'TCP包数量',
            type: 'bar',
            data: this.tcp_s_data,
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color: 'black',
                    fontSize: 13
                  }
                },
                //这里是重点
                color: function(params) {
                  //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  let colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622'];
                  if (params.dataIndex >= colorList.length) {
                    let index = params.dataIndex - colorList.length;
                    return colorList[index]
                  }
                  return colorList[params.dataIndex]
                }
              }
            }
          }]
        }
        myChart.setOption(option)
      },
      get_tcp_data() {
        let url = 'http://39.108.102.157:8088/cnt/tcp'
        let myUrl = 'http://127.0.0.1:5000/tcp'
        axios.get(myUrl)
          .then(res => {
            if (res.status && this.$route.path == '/stats'){
              let form_data = res.data
              console.log(form_data)
              this.tcp_x_data = form_data[0]
              this.tcp_s_data = form_data[1]
              setTimeout(() => {
                this.get_tcp_data()
              },5000)
            }else{
              console.log("连接失败")
              return
            }
          })
      },
      udp_chart(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('top_right'));
        // 指定图表的配置项和数据
        let option = {
          title: {
            text: 'UDP流量统计'
          },
          tooltip: {
            show:true
          },
          legend: {
            data:['数量']
          },
          xAxis: [{
            data: this.udp_x_data,
            type: 'category',
          }],
          yAxis: [{
            type:'value'
          }],
          series: [{
            name: 'UDP包数量',
            type: 'bar',
            data: this.udp_s_data,
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: 'top', //在上方显示
                  textStyle: { //数值样式
                    color: 'black',
                    fontSize: 13
                  }
                },
                //这里是重点
                color: function(params) {
                  //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  let colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622'];
                  if (params.dataIndex >= colorList.length) {
                    let index = params.dataIndex - colorList.length;
                    return colorList[index]
                  }
                  return colorList[params.dataIndex]
                }
              }
            }
          }]
        }
        myChart.setOption(option)
      },
      get_udp_data() {
        let url = 'http://39.108.102.157:8088/cnt/udp'
        let myUrl = 'http://127.0.0.1:5000/udp'
        axios.get(myUrl)
          .then(res => {
            if (res.status && this.$route.path == '/stats'){
              let form_data = res.data
              console.log(form_data)
              this.udp_x_data = form_data[0]
              this.udp_s_data = form_data[1]
              setTimeout(() => {
                this.get_udp_data()
              },5000)
            }else{
              console.log("连接失败")
              return
            }
          })
      },
      // myEcharts2(){
      //   let myChart = this.$echarts.init(document.getElementById('top_right'));
      //   let option  = {
      //     title: {
      //       text: '某站点用户访问来源',
      //       subtext: '纯属虚构',
      //       left: 'center'
      //     },
      //     tooltip: {
      //       trigger: 'item',
      //       formatter: '{a} <br/>{b} : {c} ({d}%)'
      //     },
      //     legend: {
      //       orient: 'vertical',
      //       left: 'left',
      //       data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      //     },
      //     series: [
      //       {
      //         name: '访问来源',
      //         type: 'pie',
      //         radius: '55%',
      //         center: ['50%', '60%'],
      //         data: [
      //           {value: 335, name: '直接访问'},
      //           {value: 310, name: '邮件营销'},
      //           {value: 234, name: '联盟广告'},
      //           {value: 135, name: '视频广告'},
      //           {value: 1548, name: '搜索引擎'}
      //         ],
      //         emphasis: {
      //           itemStyle: {
      //             shadowBlur: 10,
      //             shadowOffsetX: 0,
      //             shadowColor: 'rgba(0, 0, 0, 0.5)'
      //           }
      //         }
      //       }
      //     ]
      //   }
      //   myChart.setOption(option)
      // },
      // myEcharts3(){
      //   let myChart = this.$echarts.init(document.getElementById('bottom'));
      //   let option = {
      //     title: {
      //       text: '折线图堆叠'
      //     },
      //     tooltip: {
      //       trigger: 'axis'
      //     },
      //     legend: {
      //       data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      //     },
      //     grid: {
      //       left: '3%',
      //       right: '4%',
      //       bottom: '3%',
      //       containLabel: true
      //     },
      //     toolbox: {
      //       feature: {
      //         saveAsImage: {}
      //       }
      //     },
      //     xAxis: {
      //       type: 'category',
      //       boundaryGap: false,
      //       data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      //     },
      //     yAxis: {
      //       type: 'value'
      //     },
      //     series: [
      //       {
      //         name: '邮件营销',
      //         type: 'line',
      //         stack: '总量',
      //         data: [120, 132, 101, 134, 90, 230, 210]
      //       },
      //       {
      //         name: '联盟广告',
      //         type: 'line',
      //         stack: '总量',
      //         data: [220, 182, 191, 234, 290, 330, 310]
      //       },
      //       {
      //         name: '视频广告',
      //         type: 'line',
      //         stack: '总量',
      //         data: [150, 232, 201, 154, 190, 330, 410]
      //       },
      //       {
      //         name: '直接访问',
      //         type: 'line',
      //         stack: '总量',
      //         data: [320, 332, 301, 334, 390, 330, 320]
      //       },
      //       {
      //         name: '搜索引擎',
      //         type: 'line',
      //         stack: '总量',
      //         data: [820, 932, 901, 934, 1290, 1330, 1320]
      //       }
      //     ]
      //   }
      //   myChart.setOption(option)
      // }
    },
    mounted() {
      this.tcp_chart()
      this.udp_chart()
      this.get_tcp_data()
      this.get_udp_data()
    },
    created() {
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*justify-content: center;*/
  }
</style>
