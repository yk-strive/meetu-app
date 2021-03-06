export default {
	data() {
		return {
			page: 1, 
			pageSize: 10,
			// 上拉加载组件使用
			loadMoreStatus: 0, // 上拉加载更多状态对应值 0-上拉进行加载/1-正在加载中.../2-没有更多数据了
			showLoadMore: false, //是否展示上拉加载组件
			
			// 模态框-- modalName: Modal/bottomModal/toastModal/dialogModal(带确定和取消操作)
			modalName: '',
			toastText: '',
			dialogText: '',
			dialogSureText: '',
		}
	},
	watch: {
		modalName() {
			if (this.modalName == 'toastModal') {
				setTimeout(() => {
					this.modalName = '';
				}, 1500);
			}
		}
	},
	methods: {
		clog(name, value) {
			console.log('----'+name+'----', value);
		},
		modalShow(modalName, toastText) {
			this.modalName = modalName;
			if (modalName == 'toastModal') {
				this.toastText = toastText?toastText:'';
			}
			if (modalName == 'dialogModal') {
				this.dialogText = toastText;
			}
		},
		
	}
}