import * as DateUtils from '../../common/Utils/Date.js'
let socketInfo = {
	state: {
		WS: null,
		unread: 0, // 未读消息数量
		list: false, // 数组-- 存放消息列表 -1--当聊天列表为空时, -1 更改为null, 页面watch监听, 方便给提示 
		chatInfo: false, // 聊天信息
		chatMsg: false, //对象-- 发送消息返回的消息信息,
		errMag: null,
	},
	mutations: {
		WS(state, WS) {
			state.WS = WS
		},
		setSocketState(state, info) {
			switch (info.msgType) {
				case 'socketConnect':
				case 'pong':
					state.unread = info.unread;
					break;
				case 'getChatLogList':
					info.list.map(item=>{
						item.created_at_format = DateUtils.timeFormat(item.created_at);
						return item;
					})
					if (state.list) {
						state.list = [...state.list, ...info.list];
					} else {
						state.list = info.list;
					}
					break;
				case 'getChatLogInfo':
					for (let i = info.list.length - 1; i >= 0 ; i--) {
						info.list[i].created_at_format = DateUtils.timeFormat(info.list[i].created_at);
						if (i == 0) {
							info.list[i].is_show_time = 1;
						} else {
							info.list[i].is_show_time = DateUtils.dateDiff(info.list[i-1].created_at, info.list[i].created_at);
						}
					}
					if (state.chatInfo) {
						state.chatInfo = [...info.list, ...state.chatInfo];
					} else {
						state.chatInfo = info.list;
					}
					break;
				case 'chatMsg':
					state.chatMsg = info;
					state.unread = Number(state.unread) + 1;
					break;
				case 'read':
					state.unread = Number(state.unread) - info.count;
					break;
			}
			// console.log('-----mutations更新-----', state)
		},
		emptyInfo(state, type) {
			state[type] = false;
		},
		setSocketStateErr(state, info) {
			state.errMsg = info;
		}
	},
	actions: {
		WS({ commit }, WS) {
			commit('WS', WS);
		},
		setSocketState({ commit }, info) {
			console.log('---WS+socketInfo--接收---', info)
			commit('setSocketState', info);
		},
		emptyInfo({ commit }, type) {
			commit('emptyInfo', type);
		},
		setSocketStateErr({commit}, info) {
			commit('setSocketStateErr', info);
		}
	}
}
export default socketInfo
