// 心跳包时间索引
let timer = null;
// 断线重连时间索引
let reConnectTimer = null;
// 是否登录
let isLogin = false;
// 当前网络状态
let netWork = true;
// 是否是主动退出
// let isClosed = false;
// 消息队列
let socketMsgQueue = [];
export default class Socket {
  constructor(config) {
    // 基本配置
    this.config = Object.assign({
      url: "ws://127.0.0.1",
      // 通用参数,只要在发送的数据为json才有效,优先率低
      params: {},
      debug: true,
      // 心跳检测开关
      isSendHeart: true,
      // 断线重连开关
      isReconnection: true,
      // 断线重连检测时间
      reConnectTime: 3000,
      // 心跳检测频率
      timeout: 4 * 60 * 1000, // 建议5分钟以内
      // 心跳数据
      heartData: "ping",
      // 接收到消息
      onSocketMessage: null,
      // socket被关闭回调
      onSocketClose: null,
      // socket错误回调
      onSocketError: null,
      // 
      onSocketOpen: null
    }, config);

    // 连接socket
    this.initSocket = (success, fail) => {
      // isClosed = false;
      if (isLogin) {
        this.config.debug && console.log("%c [socket] %c 您已经登录了,请勿重新登录", 'color:#0f0;', 'color:#000;');
        return typeof success === "function" && success(this);
      }
      // 检查网络状态
      this.config.debug && console.log("%c [socket] %c 检查网络状态...", 'color:yellow;', 'color:#000;');
      uni.getNetworkType({
        fail: (err) => {
          this.config.debug && console.log("%c [socket] %c 检查网络状态失败:", 'color:red;', 'color:#000;', err);
          typeof fail === "function" && fail(err, this);
        },
        success: (res1) => {
          if (res1.networkType === "none") {
            this.config.debug && console.log("%c [socket] %c 网络已断开", 'color:red;', 'color:#000;');
            isLogin = false;
            netWork = false;
            uni.showModal({
              title: "网络错误",
              content: "请打开网络服务",
              showCancel: false
            });
            typeof fail === "function" && fail(res1, this);
          } else {
            netWork = true;
            this.config.debug && console.log("%c [socket] %c 网络正常,开始建立连接...", 'color:yellow;', 'color:#000;');
            uni.connectSocket({
              url: this.config.url,
              fail: err => {
                this.config.debug && console.log("%c [socket] %c 连接socket失败:", 'color:red;',
                  'color:#000;', err);
                typeof fail === "function" && fail(err, this);
              },
              success: (res2) => {
                console.log("%c [socket] %c 连接成功", 'color:blue;', 'color:#000;', res2)
                typeof success === "function" && success(this);
              }
            });
          }
        }
      });
    };

    // 发送socket消息
    this.sendSocketMessage = (data = "", success, fail) => {
      if (typeof data === "object") {
        data = Object.assign(this.config.params, data);
        this.config.debug && console.log("%c [socket] %c 发送消息", 'color:blue;', 'color:#000;', data);
        data = JSON.stringify(data);
      } else {
        this.config.debug && console.log("%c [socket] %c 发送消息", 'color:blue;', 'color:#000;', data);
      }
      if (!isLogin) {
        socketMsgQueue.push(data);
      } else {
        uni.sendSocketMessage({
          data: data,
          success,
          fail
        });
      }
    }
    // 主动关闭socket
    this.closeSocket = (options) => {
      this.config.debug && console.log("%c [socket] %c 主动关闭socket", 'color:red;', 'color:#000;');
      isLogin = false;
      // 主动退出
      // isClosed = true;
      if (this.config.isSendHeart) {
        this._clearHeart();
      }
      uni.closeSocket(options);
    };

    // 监听socket是否打开成功
    uni.onSocketOpen(header => {
      this.config.debug && console.log("%c [socket] %c socket打开成功", 'color:blue;',
        'color:#000;', header);
      isLogin = true;
      // 判断是否需要发送心跳包
      if (this.config.isSendHeart) {
        this.config.debug && console.log("%c [socket] %c 检查到需要发送心跳包:", 'color:#0f0;',
          'color:#000;', this.config.timeout);
        this._clearHeart()._startHeart();
      }
      // 发送消息队列消息
      for (let i = 0; i < socketMsgQueue.length; i++) {
        this.config.debug && console.log("%c [socket] %c 正在发送消息队列消息:", 'color:blue;',
          'color:#000;', i, socketMsgQueue[i]);
        this.sendSocketMessage(socketMsgQueue[i]);
      }
      socketMsgQueue = [];
      typeof this.config.onSocketOpen === "function" && this.config.onSocketOpen(this);
    });

    uni.onSocketMessage(data => {
      let message = this._isJson(data.data) ? JSON.parse(data.data) : data.data;
      this.config.debug && console.log("%c [socket] %c 接收到消息:", 'color:blue;', 'color:#000;', message);
      typeof this.config.onSocketMessage === "function" && this.config.onSocketMessage(message);
    });
    // 监听网络状态
    uni.onNetworkStatusChange(res => {
      this.config.debug && console.log("%c [socket] %c 监听到网络状态改变", 'color:#0f0;', 'color:#000;', JSON.stringify(
        res));
      if (res.isConnected) {
        if (!isLogin /*&& !isClosed */ && this.config.isReconnection) {
          this.config.debug && console.log("%c [socket] %c 监听到有网络服务,重新连接socket", 'color:yellow;', 'color:#000;');
          this._reConnentSocket();
        }
      } else {
        isLogin = false;
        this.config.isSendHeart && this._clearHeart();
        uni.showModal({
          title: "网络错误",
          content: "请打开网络服务",
          showCancel: false
        });
      }
    });
    // 监听socket被关闭
    uni.onSocketClose(res => {
      isLogin = false;
      typeof this.config.onSocketClose === "function" && this.config.onSocketClose(res);
      this.config.debug && console.log("%c [socket] %c 监听到socket被关闭了:", 'color:red;', 'color:#000;', JSON.stringify(
        res));
      // 停止心跳检查
      if (this.config.isSendHeart) {
        this._clearHeart();
      }
      if ( /*!isClosed && */ this.config.isReconnection) {
        // 断线重连
        this.config.debug && console.log("%c [socket] %c 非主动断开socket,重新连接中...", 'color:yellow;', 'color:#000;');
        this._reConnentSocket();
      }
    });
    // 监听socket错误
    uni.onSocketError(res => {
      isLogin = false;
      this.config.debug && console.log("%c [socket] %c 监听到socket错误", 'color:red;', 'color:#000;', res);
      // if(this.config.isReconnection){
      //   this.initSocket();
      // }
      typeof this.config.onSocketError === "function" && this.config.onSocketError(res);
    });
  }

  // socket重连
  _reConnentSocket() {
    if (this.isLogin) {
      this.config.debug && console.log("%c [socket] %c 在登录状态,无法重连", 'color:red;', 'color:#000;');
    } else {
      reConnectTimer = setInterval(() => {
        this.initSocket(function(e) {
          e.config.debug && console.log("%c [socket] %c 重新连接成功", 'color:yellow;', 'color:#000;');
          if (e.config.isSendHeart) {
            e._clearHeart()._startHeart();
          }
          clearInterval(reConnectTimer);
          reConnectTimer = null;
        }, function(err, e) {
          e.config.debug && console.log("%c [socket] %c 重新连接失败", 'color:red;', 'color:#000;');
        });
      }, this.config.reConnectTime);
    }
  }
  // 清除心跳
  _clearHeart() {
    this.config.debug && console.log("%c [socket] %c 已清除心跳", 'color:#0f0;', 'color:#000;');
    clearInterval(timer);
    return this;
  }
  // 心跳开始
  _startHeart() {
    this.config.debug && console.log("%c [socket] %c 心跳开始", 'color:#0f0;', 'color:#000;')
    timer = setInterval(() => {
      console.warn("登录状态", isLogin);
      this.sendSocketMessage(this.config.heartData);
    }, this.config.timeout);
  }
  // 是否是json字符串
  _isJson(str) {
    if (typeof str == 'string') {
      try {
        var obj = JSON.parse(str);
        if (typeof obj == 'object' && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
  }
}
