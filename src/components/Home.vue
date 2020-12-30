<template>
  <div>
    <el-carousel :interval="4000" type="card" height="750px">
      <el-carousel-item>
        <br>
        <h3>综述</h3>
        <p>本项目结合计算机网络课程理论内容，对内网进行监控</p>
        <p>解析通过内网的数据包，识别来源，对其中的IP进行流量统计</p>
        <p>对明文传输的HTTP报文中的敏感词汇进行检测，并记录发出该词汇的源IP地址。</p>
        <p>根据传输层协议对数据包的流量进行统计，并用图表的方式进行可视化展示</p>
        <p>针对解码后的数据包内容，使用字符串匹配的方式检测敏感词汇，获取敏感词发出的主机信息</p>
      </el-carousel-item>
      <el-carousel-item>
        <br>
        <h3>抓包及解析</h3>
        <p>该模块利用利用pyshark连接本地的tshark程序进行实时抓包。后续对数据包的各类信息进行分析</p>
        <p>方案为创建LiveCapture对象，调用tshark模块进行抓包操作。然后利用pyshark库中的分析功能提取数据包相关信息，结合正则表达式等进行分析与统计。</p>
      </el-carousel-item>
      <el-carousel-item>
        <br>
        <h3>聊天室部分</h3>
        <p>在实验三socket编程的基础上，改用TCP协议，实现多主机实时聊天可视化功能。</p>
        <p>通过setting.py设置进行连接的服务器端和客户端之间的默认套接字，如果在常用网络环境下可以直接通过此默认设置新建聊天室窗口</p>
        <p>利用Tkinter库中函数创建聊天窗口的图形化界面</p>
        <p>利用multiprocessing.Queue设置了两个队列queue和queueu来保存消息，使主进程和子进程都能获取对方的消息</p>
      </el-carousel-item>
      <el-carousel-item>
        <br>
        <h3>前端部分</h3>
        <p>前端的实现目的在于直观清晰地展示项目实现过程中抓取、分析、统计到的数据，使用Vue + Element框架进行开发</p>
        <p>项目实现的主要功能有：</p>
        <p>· 接入用户统计分析</p>
        <p>· TCP/UDP数据包统计分析</p>
        <p>· 接入用户敏感词统计分析</p>
      </el-carousel-item>
      <el-carousel-item>
        <br>
        <h3>后端部分</h3>
        <p>后端主要使用的是Flask框架</p>
        <p>数据库配置方式是将数据库信息存放于类Config中</p>
        <p>在app.py中对表项进行类定义，每个类都与数据库中表项格式相对应</p>
        <p>利用后端框架直接进行数据库操作。例如查询、增添、修改等</p>
      </el-carousel-item>

    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>
  .el-carousel__item {
    padding: 20px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 30px;
    opacity: 0.75;
    line-height: 50px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    align-items: center;
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  p {
    font-size: 20px;
    font-family: "Microsoft YaHei";
    list-style-type:none;
    line-height: 50px;
  }
</style>
