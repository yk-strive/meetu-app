<template>
	<view id="coinrecordPage" class="bg_page_3">
		<custom-nav :isBack="true" :tabsInfo="tabsInfo" @tabChange="tabChange"></custom-nav>
		<view class="coinrecord_wrap">
			<view class="coinrecord_item flex-df" v-for="item,index in pointsLog" :key="item.id">
				<view class="record_info">
					<view class="text-df text-white">{{item.remark}}</view>
					<view class="text-sm margin-top-sm">{{item.created_at}}</view>
				</view>
				<view class="record_grade coin-color">
					<text>{{item.type ==1 ? '+' : '-'}}<text class="text-xxl">{{item.value}}</text></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mixinInit from "../../mixins/init.js";
	export default {
		name: 'coinrecord',
		mixins: [mixinInit],
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
			api_PointsLog() {
				let self = this;
				this.$http1.post('points/log', {
					type: self.tabsInfo.tabCur,
					page: self.page,
					pageSize: 10
				}).then(res=>{
					// self.clog('星豆记录', res);
					self.pointsLog = res.data;
				})
			},
			tabChange(item) {
				if (item.id === this.tabsInfo.tabCur) {
					return false;
				}
				this.tabsInfo.tabCur = item.id;
				this.pointsLog = [];
				this.api_PointsLog();
			}
		},
	}
</script>

<style lang="scss">
	.coinrecord_wrap {
		padding-top: 40rpx;
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
