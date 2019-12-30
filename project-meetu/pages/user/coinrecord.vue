<template>
	<view id="coinrecordPage" class="bg_page_3">
		<custom-nav :isBack="true" :tabsInfo="tabsInfo" @tabChange="tabChange"></custom-nav>
		<scroll-view :scroll-y="true" class="coinrecord_wrap wrap_heihgt" @scrolltolower="loadMore">
			<view class="coinrecord_item flex-df" v-for="item,index in pointsLog" :key="item.id">
				<view class="record_info">
					<view class="text-df text-white">{{item.remark}}</view>
					<view class="text-sm margin-top-sm">{{item.created_at}}</view>
				</view>
				<view class="record_grade coin-color">
					<text>{{item.type ==1 ? '+' : '-'}}<text class="text-xxl">{{item.value}}</text></text>
				</view>
			</view>
			<mix-load-more :status="loadMoreStatus" :show="showLoadMore"></mix-load-more>
		</scroll-view>
		<cu-modal :modalName="modalName" :toastText="toastText"></cu-modal>
	</view>
</template>

<script>
	import mixinInit from "../../mixins/init.js";
	import mixLoadMore from '../../components/mix-load-more/mix-load-more.vue';
	export default {
		name: 'coinrecord',
		mixins: [mixinInit],
		components: {
			mixLoadMore
		},
		data() {
			return {
				tabsInfo: {
					tabsList:[
						{
							id: '1',
							name: '获得星豆'
						},
						{
							id: '2',
							name: '消耗星豆'
						}
					],
					tabCur: '1',
				},
				pointsLog: null
			}
		},
		onLoad() {
			this.api_PointsLog();
		},
		methods: {
			api_PointsLog(loadType) {
				let self = this;
				if (loadType && loadType == "add") {
					if (this.loadMoreStatus == 2) { // loadMoreStatus == 2 说明之前一次的请求已经没有数据了.
						return false;
					}
					this.page++;
					this.showLoadMore = true;
					setTimeout(() => {
						this.loadMoreStatus = 1; // 正在加载..
					}, 100)
				}
				this.$http1.post('points/log', {
					type: self.tabsInfo.tabCur,
					page: self.page,
					pageSize: 10
				}).then(res=>{
					// self.clog('星豆记录', res);
					if (!res.data && !loadType) {
						self.modalShow('toastModal', '暂无记录')
						return false;
					}
					if (res.data) {
						if (loadType == 'add') {
							self.pointsLog = [...self.pointsLog, ...res.data];
							//上拉加载提示取消
							this.showLoadMore = false;
							this.loadMoreStatus = 0;
						} else {
							self.pointsLog = res.data;
						}
					} else {
						this.loadMoreStatus = 2; // 没有数据了
					}
				})
			},
			loadMore() {
				this.api_PointsLog('add');
			},
			tabChange(item) {
				if (item.id === this.tabsInfo.tabCur) {
					return false;
				}
				this.page = 1;
				this.showLoadMore = false;
				this.loadMoreStatus = 0;
				this.tabsInfo.tabCur = item.id;
				this.pointsLog = [];
				this.api_PointsLog();
			},
		},
	}
</script>

<style lang="scss">
	.coinrecord_wrap {
		.coinrecord_item {
			justify-content: space-between;
			min-height: 130rpx;
			margin: 40rpx 0;
			padding: 0 40rpx;
			.record_info {
				view:nth-child(2) {
					color: #5D4C8B;
				}
			}
		}
	}
</style>
