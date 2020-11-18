<template>
  <div class="Echarts">
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
  export default {
    name: 'Echarts',
    methods:{
      myEcharts(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
          title: {
            text: '网络流量统计'
          },
          tooltip: {},
          // legend: {
          //   data:['销量']
          // },
          xAxis: {
            data: ["用户A","用户B","用户C","用户D","用户E","用户F"]
          },
          yAxis: {},
          series: [{
            // name: '？',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      }
    },
    mounted() {
      this.myEcharts();
    }
  }
</script>

<style scoped>

</style>
