<template>
	<view id="signalPage" class="bg_page_3">
		<custom-nav :isBack="true" :tabsInfo="tabsInfo" @tabChange="tabChange"></custom-nav>
		<view class="signal-wrap">
			<scroll-view class="panel-scroll-box" :scroll-y="enableScroll">
				<view class="cu-timeline bg-transparent">
					<view class="signal_item" v-for="item,key in signalList" :key="key">
						<view class="cu-time flex text-white text-bold">
							<text class="text-xl">{{key.split('-')[2]}}</text>
							<text>{{key.split('-')[1]}}</text>
							<text>{{key.split('-')[0]}}</text>
						</view>
						<view class="cu-item not-icon" v-for="citem,cindex in item" :key="citem.id">
							<view class="content" v-if="citem.type==1">
								<text>{{citem.content}}</text>
							</view>
							<view class="content voice" v-if="citem.type==2" @tap.stop="playVoice(citem)">
								<view class="voice_img flex-df">
									<image class="" :src="audioPlay && audioPlayCur == citem.id?'../../static/meetu-img/xh.gif':'../../static/meetu-img/xh.png'" mode="aspectFill"></image>
								</view>
								<text>{{citem.seconds}}s</text>
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
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	import mixinInit from '../../mixins/init.js';
	let scrollTimer = false;
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	export default {
		name: 'signal', // 信号
		components: {
			mixPulldownRefresh,
			mixLoadMore
		},
		mixins: [mixinInit],
		data() {
			return {
				CustomBar: this.CustomBar,
				enableScroll: true,
				loadMoreStatus: 0, // 上拉加载更多状态对应值
				showLoadMore: false, //是否展示上拉加载
				refreshing: 0,

				tabsInfo: {
					tabsList: [{
							id: '1',
							name: '文字信号',
							list: [],
							isload: false,
						},
						{
							id: '2',
							name: '语言信号',
							list: [],
							isload: false
						}
					],
					tabCur: '',
				},
				signalList: null,
				audioPlay: false,
				audioPlayCur: -1
			}
		},
		onLoad(options) {
			innerAudioContext.onEnded(() => {
				console.log('播放结束')
				this.audioPlay = false;
				this.audioPlayCur = -1;
			})
			this.tabsInfo.tabCur = this.tabsInfo.tabsList[0].id;
			if (options.navId) {
				this.tabsInfo.tabCur = options.navId == 'text' ? this.tabsInfo.tabsList[0].id : this.tabsInfo.tabsList[1].id
			}

			this.api_SignalList();
		},
		methods: {
			api_SignalList() {
				let self = this;
				this.$http1.post('user/signal-list', {
					type: self.tabsInfo.tabCur,
					page: self.page,
					pageSize: self.pageSize
				}).then(res => {
					self.clog('signallist', res);
					if (JSON.stringify(res.data) !== '{}') {
						if (self.signalList) {
							self.signalList = Object.assign(self.signalList, res.data);
						} else {
							self.signalList = res.data;
						}
					}
				})
			},
			tabChange(item) {
				if (item.id === this.tabsInfo.tabCur) {
					return false;
				}
				if (scrollTimer) {
					clearTimeout(scrollTimer);
					scrollTimer = false;
				}
				scrollTimer = setTimeout(() => {
					this.signalList = null;
					this.tabsInfo.tabCur = item.id;
					this.api_SignalList();
				}, 200);
			},
			playVoice(citem) {
				//播放录制的音频
				let self = this;
				if (this.audioPlay) {
					innerAudioContext.pause();
					this.audioPlay = false;
				} else {
					if (citem.content) {
						innerAudioContext.src = citem.content;
						innerAudioContext.play();
						this.audioPlay = true;
						this.audioPlayCur = citem.id;
					}
				}
			},
		}
	}
</script>

<style lang="scss">
	#signalPage {
		overflow-y: scroll;
	}

	.signal-wrap {
		margin-top: 100rpx;
		height: calc(100% - 150rpx);

		.panel-scroll-box {
			width: 100%;
			height: 100%;
			// padding-top: 50rpx;
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
					padding: 20rpx 40rpx;
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

					.action_delete,
					.action_share {
						color: #DAB96B;
					}
				}
			}
		}
	}
</style>
