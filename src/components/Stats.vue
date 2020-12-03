<template>
  <div class="Echarts">
    <div id="top_left" style="width: 600px;height:400px;"></div>
    <div id="top_right" style="width: 600px;height:400px;"></div>
    <div id="bottom" style="width: 1200px;height:400px;"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Echarts',
    data() {
      return {
        myChart:{},
        x_data:[],
        s_data:[],
        opinionData: [],
        charts:''
      }
    },
    methods:{
      myEcharts1(x,s){
        console.log(x)
        console.log(s)
        // 基于准备好的dom，初始化echarts实例
        // let myChart = this.$echarts.init(document.getElementById('top_left'));
        this.myChart = this.$echarts.init(document.getElementById('top_left'))
        // 指定图表的配置项和数据
        let option = {
          title: {
            text: '网络流量统计'
          },
          tooltip: {},
          // legend: {
          //   data:['销量']
          // },
          xAxis: {
            // data: ["10.30.16.137", "10.30.168.119", "10.30.176.16"]
            data:this.x
          },
          yAxis: {},
          series: [{
            // name: '？',
            type: 'bar',
            // data: [4, 75, 4]
            data:this.s
          }]
        }
        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(option)
      },
      myEcharts2(){
        let myChart = this.$echarts.init(document.getElementById('top_right'));
        let option  = {
          title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
        myChart.setOption(option)
      },
      myEcharts3(){
        let myChart = this.$echarts.init(document.getElementById('bottom'));
        let option = {
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
        myChart.setOption(option)
      },
      getChart1Data() {
        let url = 'http://39.108.102.157:8088/cnt/udp'
        let x
        let s
        axios.get(url)
          .then(res => {
            if (res.status && this.$route.path == '/stats'){
              let i = 0
              for (let item of res.data) {
                if (i >= 3) break;
                // console.log(item.ip)
                // this.data[i] = item.ip + ""
                this.x_data.push(item.ip + "")
                // this.s_data[i] = parseInt(item.count)
                this.s_data.push(parseInt(item.count))
                i = i + 1
              }
              x = JSON.stringify(this.x_data)
              console.log(x)
              s = JSON.stringify(this.s_data)
              console.log(s)
            }
          })
         this.myEcharts1(this.x,this.s)
      },
      drawLine(id) {
        this.charts = this.$echarts.init(document.getElementById(id));
        this.charts.setOption({
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["近七日收益"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },

          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: this.x_data,
          },
          yAxis: {
            type: "value",
          },

          series: [
            {
              name: "近七日收益",
              type: "line",
              stack: "总量",
              data: this.opinionData,
            },
          ],
        });
      },
      getData() {
        axios.get('http://127.0.0.1:5000/chart').then(response => {
          console.log(response.data);
          this.x_data = response.data.categories;
          this.opinionData =response.data.data;
          this.drawLine('top_left')
        }, response => {
          console.log("error");
        });
      },
    },
    mounted() {
      // this.myEcharts1()
      // this.getChart1Data()
      // this.myEcharts2()
      // this.myEcharts3()
      this.$nextTick(function () {
        this.getData()
      })
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
