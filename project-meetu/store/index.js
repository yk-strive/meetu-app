import Vue from 'vue';
import Vuex from "vuex";

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
	},
	getters: { // 获取仓库中存放的值,供页面使用
		token(state) { return state.token}
	},
	// mutations-改变仓库中变量的值, 只能进行同步操作. 触发条件--store.commit('changeVal')
	mutations: {
		changeVal(state, options={stateKey, newValue}) { // 更新仓库中的某变量的值
			state[options.stateKey] = options.newValue;
			if (options.stateKey == 'token') {
				uni.setStorage({
					key: 'token',
					data: options.newValue
				});
			}
		},
	},
	actions: {
		changeVal({commit}, options={stateKey, newValue}) {
			console.log('a-'+options.stateKey, options.newValue);
			commit('changeVal', options)
		}
	}
})

export default store;