# uni-socket

#### 介绍
uni-app的socket完全封装

特点:
1. 断线重连
2. 自定义心跳
3. 网络检测
4. 断线消息队列
5. debug

#### 安装教程

`npm i @i5920/uni-socket -S`

#### 使用说明

```
import uniSocket from "@i5920/uni-socket";

export default {
  globalData: {
    socket: null
  },
  onLaunch: function() {
    // 初始化socket配置
    this.initSocket();
  },
  onShow: function() {
    // 连接socket
    this.globalData.socket.initSocket();
  },
  methods:{
    initSocket(){
      let socket = new websocket({
          url: "ws://127.0.0.1:8080",
          timeout: 1 * 60 * 1000,   // 心跳时间间隔
          isSendHeart: true,        // 是否发送心跳
          heartData: "ping",        // 心跳数据
          isReconnection:true,      // 是否断线重连
          reConnectTime: 3000,      // 断线重连检测时间间隔
          params: {                 // 发送消息时如果时json则自动加上组合里面参数
            token: this.$store.state.user.TOKEN
          },
          debug: process.env.NODE_ENV === "development",  // debug
          onSocketOpen: header => {},
          onSocketMessage: data => {},
          onSocketError:res => {},
          onSocketClose:res => {}
      });
      this.globalData.socket = socket;
    }
  }
}

```

#### 赞助二维码

![](https://gitee.com/uploads/images/2018/0623/112959_9f84f1f7_696921.png "3.png")
![](https://gitee.com/uploads/images/2018/0623/113008_0014aa83_696921.jpeg "4.jpg")