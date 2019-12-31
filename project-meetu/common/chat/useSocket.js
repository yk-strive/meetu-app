import Vue from 'vue'
import socket from "./socket.js"; //引入socket.js 重要
import store from "@/store/index.js";

const Socket = new socket({
	url: 'wss://api.meetu.letwx.com/im?token=DrHpfu3LGP-1QpQhe4JaEesdBoTP_3sA', //连接地址 必填
	maxInterValCount: 5,
	interValTime: 2000,
	onOpen (res) {
		console.log('连接成功', res)
		let msg = {
			"msgType":"ping","data":{}
		};
		this.nsend(JSON.stringify(msg));
	},
	onClose(err){
		console.log('关闭了连接', err)
	},
	onReload(res){
		console.log('重载：' + res)
	},
	onRdFinsh(count) {
		console.log(count + '次重连已完成')
	},
	onMsg(msg) {
		const res=JSON.parse(msg.data);
		const keys=Object.keys(res);
		const State=Object.assign({},store.state.SocketState)
		for(let i=0;i<keys.length;i++){
			let key=keys[i];
			if(!State[key]){
				State[key]=[];
			}
			State[key].push(res[key])
		}
		// store.commit('setSocketState',State)
	},
})
Vue.prototype.$Socket = Socket;

