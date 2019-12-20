<template>
	<view id="signalPage" class="bg_page_3">
		<custom-nav :isBack="true" :tabsList="tabsList"></custom-nav>
		<view class="signal-wrap">
			<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="CustomBar" @refresh="onPulldownReresh"
			 @setEnableScroll="setEnableScroll">
				<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore">
					<view class="cu-timeline bg-transparent">
						<view class="signal_item" v-for="item,key in signalList" :key="key">
							<view class="cu-time flex text-white text-bold">
								<text class="text-xl">{{key.substring(9)}}</text>
								<text>{{key.substring(5,8)}}</text>
								<text>{{key.substring(0,4)}}</text>
							</view>
							<view class="cu-item not-icon" v-for="citem,cindex in item" :key="citem.id">
								<view class="content" v-if="citem.type==1">
									<text>{{citem.content}}</text>
								</view>
								<view class="content voice" v-if="citem.type==2">
									<view class="voice_img flex-df">
										<image class="" src="../../static/meetu-img/xh.png" mode="aspectFill"></image>
									</view>
									<text>{{citem.seconds}}</text>
								</view>
								<view class="action flex-df">
									<view class="action_num text-black-m">
										<text>{{citem.count}}个回应</text>
									</view>
									<view class="action_delete text-right text-xs">
										<text class="cuIcon-delete padding-right-xs text-sm"></text>删除
									</view>
									<view class="action_share text-right text-xs">
										<text class="cuIcon-share padding-right-xs text-sm"></text>分享
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 上滑加载更多组件 -->
					<mix-load-more :status="loadMoreStatus" :show="showLoadMore"></mix-load-more>
				</scroll-view>
			</mix-pulldown-refresh>
		</view>
	</view>
</template>

<script>
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	export default {
		name: 'signal', // 信号
		components: {
			mixPulldownRefresh,
			mixLoadMore
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				enableScroll: true,
				loadMoreStatus: 0, // 上拉加载更多状态对应值
				showLoadMore: false, //是否展示上拉加载
				refreshing: 0,
				
				tabsList: [
					{
						id: '1',
						name: '文字信号'
					},
					{
						id: '2',
						name: '语言信号'
					}
				],
				signalList: {
					"2019 06月 07": [
						{
							id: 6,
							type: 1,
							content: '今年的第一场雪终于来了，你那边下雪了么？',
							count: 13,
							seconds: 0,
						},
						{
							id: 7,
							type: 2,
							content: '今年的第一场雪终于来了，你那边下雪了么？今年的第一场雪终于来了，你那边下雪了么？',
							count: 3,
							seconds: '15s',
						}
					],
					"2019 06月 17": [
						{
							id: 1,
							type: 1,
							content: '今年的第一场雪终于来了，你那边下雪了么？',
							count: 13,
							seconds: 0,
						},
						{
							id: 2,
							type: 1,
							content: '今年的第一场雪终于来了，你那边下雪了么？今年的第一场雪终于来了，你那边下雪了么？今年的第一场雪终于来了，你那边下雪了么？今年的第一场雪终于来了，你那边下雪了么？今年的第一场雪终于来了，你那边下雪了么？今年的第一场',
							count: 3,
							seconds: 0,
						}
					],
					"2019 12月 20": [
						{
							id: 3,
							type: 1,
							content: '今年的第一场雪终于来了，你那边下雪了么？下雪意味着就快要过年了呀!!!',
							count: 1,
							seconds: 0,
						},
						{
							id: 4,
							type: 1,
							content: '今年的第一场雪终于来了，你那边下雪了么？今年的第一场雪终于来了，你那边下雪了么？',
							count: 3,
							seconds: 0,
						}
					]
				}
			}
		},
		onLoad() {

		},
		methods: {
			loadSignalList(type) {
				//type add 加载更多 refresh下拉刷新
				if (type === 'add') {
					if (this.loadMoreStatus === 2) {
						return;
					}
					this.showLoadMore = true;
					this.loadMoreStatus = 1;
				}
				// #ifdef APP-PLUS
				else if (type === 'refresh') {
					this.refreshing = true;
				}
				// #endif
				//setTimeout模拟异步请求数据
				setTimeout(() => {
					if (type === 'refresh') {
						//刷新前清空数组
					}
				
					//下拉刷新 关闭刷新动画
					if (type === 'refresh') {
						this.$refs.mixPulldownRefresh && this.$refs.mixPulldownRefresh.endPulldownRefresh();
						// #ifdef APP-PLUS
						this.refreshing = false;
						// #endif
						this.loadMoreStatus = 0;
					}
					//上滑加载 处理状态
					if (type === 'add') {
						// this.loadMoreStatus = this.chatList.length > 50 ? 2 : 0;
						this.loadMoreStatus = 2;
						this.showLoadMore = false;
					}
				}, 2000)
			},
			onPulldownReresh() {
				this.loadSignalList('refresh');
			},
			loadMore() {
				this.loadSignalList('add');
			},
			setEnableScroll(enable) {
				if (this.enableScroll !== enable) {
					this.enableScroll = enable;
				}
			},
		}
	}
</script>

<style lang="scss">
	.signal-wrap {
		overflow: hidden;
		.panel-scroll-box {
			height: 100%;
			padding-top: 50rpx;
		}
		.cu-timeline {
			padding-top: 110rpx;
		}
		view.signal_item {
			position: relative;
			display: flex;
			flex-direction: column;
			&>.cu-time {
				position: absolute;
				top: -36rpx;
				padding: 0;
				font-size: 30rpx;
				letter-spacing: 4rpx;
			}
			&>.cu-item {
				padding: 0 40rpx 50rpx 200rpx;
				&::before {
					left: 120rpx;
					top: 0;
				}
				&::after {
					left: 136rpx;
				}
				.content.voice {
					padding: 10rpx 40rpx;
					display: flex;
					align-items: center;
					border-radius: 500rpx;
					.voice_img {
						flex: 1;
						justify-content: flex-start;
						image {
							width: 76rpx;
							height: 50rpx;
						}
					}
				}
				.action {
					padding: 20rpx 20rpx 30rpx 10rpx;
					view {
						flex: 1;
					}
					.action_delete, .action_share {
						color: #DAB96B;
					}
				}
			}
		}
	}
</style>
