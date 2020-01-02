import * as DateUtils from '../../common/Utils/Date.js'
let socketInfo = {
	state: {
		unread: 0, // 未读消息数量
		list: false, // 数组-- 存放消息列表 -1--当聊天列表为空时, -1 更改为null, 页面watch监听, 方便给提示 
		chatInfo: false, // 聊天信息
		chatMsg: null, //对象-- 发送消息返回的消息信息,
		errMag: null,
	},
	mutations: {
		setSocketState(state, info) {
			switch (info.msgType) {
				case 'socketConnect':
				case 'pong':
					state.unread = info.unread;
					break;
				case 'getChatLogList':
					info.list.map(item=>{
						item.created_at = DateUtils.timeFormat(item.created_at);
						return item;
					})
					console.log('-------时间处理---------', info.list)
					if (state.list) {
						state.list = [...state.list, ...info.list];
					} else {
						state.list = info.list;
					}
					break;
				case 'getChatLogInfo':
					if (state.chatInfo) {
						state.chatInfo = [...info.list, ...state.chatInfo];
					} else {
						state.chatInfo = info.list;
					}
					break;
				case 'chatMsg':
					state.chatMsg = info;
					break;
					console.log('-----mutations更新-----', state)
			}
		},
		emptyInfo(state, type) {
			state[type] = false;
		},
		setSocketStateErr(state, info) {
			state.errMsg = info;
		}
	},
	actions: {
		setSocketState({
			commit
		}, info) {
			console.log('---WS+socketInfo--接收---', info)
			commit('setSocketState', info);
		},
		emptyInfo({
			commit
		}, type) {
			commit('emptyInfo', type);
		},
		setSocketStateErr({commit}, info) {
			commit('setSocketStateErr', info);
		}
	}
}
export default socketInfo
