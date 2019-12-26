export default {
	data() {
		return {
			page: 1, 
			pageSize: 10,
		}
	},
	onLoad() {
		
	},
	onShow() {
		
	},
	methods: {
		clog(name, value) {
			console.log('----'+name+'----', value);
		}
	}
}