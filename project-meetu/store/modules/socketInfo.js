let socketInfo = {
	state: {
		unread: 0, // 未读消息数量
		list: false, // 数组-- 存放消息列表/消息详情 -1--当聊天列表为空时, -1 更改为null, 页面watch监听, 方便给提示 
		sendMsg: null, //对象-- 发送消息返回的消息信息
	},
	mutations: {
		setSocketState(state, info) {
			switch (info.msgType) {
				case 'socketConnect':
				case 'pong':
					state.unread = info.unread;
					break;
				case 'getChatLogList':
				case 'getChatLogInfo':
					if (state.list) {
						state.list = [...state.list, ...info.list];
					} else {
						state.list = info.list;
					}
					break;
				case 'chatMsg':

					break;
					console.log('-----mutations更新-----', state)
			}
		},
		emptyInfo(state) {
			state.list = false;
		},
		setSocketStateErr(state, info) {
			state.SocketStateErr = info;
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
		}) {
			commit('emptyInfo');
		}
	}
}
export default socketInfo
