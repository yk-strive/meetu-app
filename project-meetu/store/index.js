import Vue from 'vue';
import Vuex from "vuex";
import socketInfo from './modules/socketInfo.js';
Vue.use(Vuex);
/*
  js文件下使用
	1.import store from '../../store' 先引用
	2、store.state.token  取值
  vue文件下使用
	1. import { mapState, mapGetters, mapMutations} from 'vuex';
	2. computed: {
		mapState[['token']],
		...mapGetters(['token'])
	} / methods: {
		...mapMutations(['changeVal'])
	}
	
*/
let store = new Vuex.Store({
	//state-仓库-存放定义好的值
	state: {
		token: '',
		dailyLogin: 0, // 每日登录--这里只记录授权成功之后的daily_login的值.防止每日登录领取之后,将应用卸载在下载
		userInfo: null,
	},
	getters: { // 获取仓库中存放的值,供页面使用
		token(state) {
			return state.token
		},
		dailyLogin(state) {
			return state.dailyLogin
		},
		userInfo(state) {
			return state.userInfo
		}
	},
	// mutations-改变仓库中变量的值, 只能进行同步操作. 触发条件--store.commit('changeVal')
	mutations: {
		changeVal(state, options = {
			stateKey,
			newValue
		}) { // 更新仓库中的某变量的值
			state[options.stateKey] = options.newValue;
			if (options.stateKey == 'token') {
				uni.setStorage({
					key: 'token',
					data: options.newValue
				});
			}
			if (options.stateKey == 'userInfo') {
				// console.log('s-user', options.newValue)
				uni.setStorage({
					key: 'userInfo',
					data: JSON.stringify(options.newValue)
				});
			}
		},
		outApp(state) {
			uni.removeStorage({
				key: 'token',
				success() {
					state.token = null;
				}
			})
			uni.removeStorage({
				key: 'userInfo',
				success() {
					state.userInfo = null;
				}
			})
		}
	},
	actions: {
		changeVal({
			commit
		}, options = {
			stateKey,
			newValue
		}) {
			// console.log('a-'+options.stateKey, options.newValue);
			commit('changeVal', options)
		}
	},
	modules: {
		socketInfo
	}
})

export default store;
