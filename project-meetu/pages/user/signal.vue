<template>
	<view id="signalPage" class="bg_page_3">
		<custom-nav :isBack="true" :tabsInfo="tabsInfo" @tabChange="tabChange"></custom-nav>
		<view class="signal-wrap">
			<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore">
				<view class="cu-timeline bg-transparent">
					<view class="signal_item" v-for="item,key in signalList" :key="key">
						<view class="cu-time flex text-white text-bold">
							<text class="text-xl">{{key.split('-')[2]}}</text>
							<text>{{key.split('-')[1]}}</text>
							<text>{{key.split('-')[0]}}</text>
						</view>
						<view class="cu-item not-icon" v-for="citem,cindex in item" :key="citem.id">
							<view class="content text" v-if="citem.type==1">
								<text>{{citem.contentSub && citem.islong ? citem.contentSub : citem.content}}</text>
								<view v-if="citem.contentSub" class="coin-color margin-top-sm" @tap.stop="toggleContent(citem)">{{citem.contentSub && citem.islong ? '查看更多' : '收起'}}</view>
							</view>
							<view class="content voice" v-if="citem.type==2" @tap.stop="playVoice(citem)">
								<view class="voice_img flex-df">
									<image class="" :src="audioPlay && audioPlayCur == citem.id?'../../static/meetu-img/xh.gif':'../../static/meetu-img/xh.png'"
									 mode="aspectFill"></image>
								</view>
								<text>{{citem.seconds}}s</text>
							</view>
							<view class="action flex-df">
								<view class="action_num text-black-m">
									<text>{{citem.count}}个回应</text>
								</view>
								<view class="action_delete text-right text-xs" @tap.stop="showDialogModal(key, citem,cindex)">
									<text class="cuIcon-delete padding-right-xs text-sm"></text>删除
								</view>
								<view class="action_share text-right text-xs" @tap.stop="shareModal(key, citem, cindex)">
									<text class="cuIcon-share padding-right-xs text-sm"></text>分享
								</view>
							</view>
						</view>
					</view>
					<mix-load-more :status="loadMoreStatus" :show="showLoadMore"></mix-load-more>
				</view>
			</scroll-view>
		</view>
		<cu-modal :modalName="modalName" :dialogText="dialogText" :toastText="toastText" @hideModal="hideModal"
		 @dialogConfirm="dialogConfirm">
			<block slot="bottomModal">
				<view class="shareProvider">
					<block v-for="item in providerList" :key="item.id">
						<view class="shareProviderItem" @tap.stop="share(item)">
							<view class="icon">
								<text class="cuIcon-weixin"></text>
							</view>
							<view class="name margin-top-sm">
								<text>{{item.name}}</text>
							</view>
							<view class="desc text-xs text-black-s">
								<text>{{item.desc}}</text>
							</view>
						</view>
					</block>
				</view>
			</block>
		</cu-modal>
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
				deleteInfo: null,
				audioPlay: false,
				audioPlayCur: -1,
				providerList: [],
				shareInfo: null,
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
			this.providerList = getApp().globalData.shareProviderList;
			this.api_SignalList();
		},
		methods: {
			api_SignalList(loadType) {
				let self = this;
				if (loadType && loadType == 'add') {
					if (this.loadMoreStatus == 2) { // loadMoreStatus == 2 说明之前一次的请求已经没有数据了.
						return false;
					}
					this.page++;
					this.showLoadMore = true;
					setTimeout(() => {
						this.loadMoreStatus = 1; // 正在加载..
					}, 100)
				}

				this.$http1.post('user/signal-list', {
					type: self.tabsInfo.tabCur,
					page: self.page,
					pageSize: self.pageSize
				}).then(res => {
					self.clog('signallist', res);
					if (!res.data && !loadType) {
						self.modalShow('toastModal', '暂无记录')
						return false;
					}
					if (res.data) {
						for (let key in res.data) {
							res.data[key].map(item => {
								if (item.type == 1) {
									let contentLen = item.content.byteLength();
									if (contentLen > 50) {
										item.contentSub = item.content.substr(0, 50) + '...';
										item.islong = true;
									}
								}
								return item;
							})
						}
						if (loadType && loadType == 'add') {
							self.signalList = Object.assign(self.signalList, res.data);
							//上拉加载提示取消
							this.showLoadMore = false;
							this.loadMoreStatus = 0;
						} else {
							self.signalList = res.data;
						}
					} else {
						this.loadMoreStatus = 2; // 没有数据了
					}
				})
			},
			api_DeleteSignal() {
				/*
				删除信号--> 先 showDialogModal 展示弹窗警示, --> 弹窗中点击确定 dialogConfirm, 调用该函数
				*/
				let self = this;
				let dateObj = this.signalList[this.deleteInfo.key]; // 某一天中的所有信号 array
				let deleteObj = dateObj[this.deleteInfo.cindex]; // 要删除的信号
				this.$http1.post('signal/delete', {
					signal_id: deleteObj.id
				}).then(res => {
					self.modalName = 'toastModal';
					self.toastText = '删除信号成功';
					this.signalList[self.deleteInfo.key].splice(self.deleteInfo.cindex, 1);
				}).catch(err => {
					self.modalName = 'toastModal';
					self.toastText = err.msg;
				})
			},
			loadMore() { // 上拉加载
				this.api_SignalList('add')
			},
			tabChange(item) {
				if (item.id === this.tabsInfo.tabCur) {
					return false;
				}
				this.page = 1;
				this.showLoadMore = false;
				this.loadMoreStatus = 0;

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
			stopVoiceHandle() {
				if (this.tabsInfo.tabCur == '2') {
					if (!innerAudioContext.paused) {
						innerAudioContext.stop();
					}
					innerAudioContext.src = '';
					this.audioPlay = false;
				}
			},
			toggleContent(citem) {
				if (citem.contentSub) {
					citem.islong = !citem.islong;
				}
			},
			showDialogModal(key, citem, cindex) {
				/**
				 * 接口数据结构
				 * data: {
					 "2019-12-30": [
						 {},
						 {}
					 ],
					"2019-12-28": [
						{},
						{}
					]
				 }
				 * */
				this.modalName = "dialogModal";
				this.dialogText = "确定要删除该信号吗?";
				this.deleteInfo = {
					key: key,
					cindex: cindex
				}
			},
			hideModal() {
				this.modalName = "";
			},
			dialogConfirm() {
				this.clog('删除信号', this.deleteInfo);
				this.hideModal();
				this.api_DeleteSignal()
			},
			shareModal(key, citem, cindex) {
				this.modalName = 'bottomModal';
				this.shareInfo = citem;
			},
			async share(e) {
				let self = this;
				// let shareType = self.tabsInfo.tabCur == '1' ? 0 : 3;
				let shareType = 0;
				let shareOptions = {
					provider: e.id,
					scene: e.type && e.type === 'WXSenceTimeline' ? 'WXSenceTimeline' : 'WXSceneSession',
					//WXSceneSession”分享到聊天界面，“WXSenceTimeline”分享到朋友圈，“WXSceneFavorite”分享到微信收藏 
					type: shareType, //0-图文; 1-纯文本; 2-纯图片; 3-音乐; 4-视频; 5-小程序
					success: (e) => {
						console.log('success', e);
						self.modalShow('toastModal', '已分享')
					},
					fail: (e) => {
						console.log('fail', e)
						self.modalShow('toastModal', e.errMsg);
					},
					complete: function() {
						console.log('分享操作结束!')
					}
				}
				let summary = self.shareInfo.type == 1 ? self.shareInfo.content : '语音';
				switch (shareType) {
					case 0:
						shareOptions.summary = '分享内容摘要:' + summary;
						shareOptions.imageUrl = require('../../static/meetu-img/logo.png');
						shareOptions.title = 'Meet U孤独星球';
						shareOptions.href = 'http://q.letwx.com/site/index';
						break;
					case 3:
						shareOptions.title = '分享测试标题: Meet U';
						// shareOptions.imageUrl = require('../../static/meetu-img/logo.png');
						shareOptions.mediaUrl = self.shareInfo.content;
						// shareOptions.href = 'http://q.letwx.com/app/ggSpringFestival2020-build/index.html';
						break; 
				}
				uni.share(shareOptions);
			}
		},
		onHide() {
			// console.log('----隐藏----')
			this.stopVoiceHandle();
		},
		onUnload() {
			this.stopVoiceHandle();
			// console.log('----页面卸载----');
		}
	}
</script>

<style lang="scss">
	#signalPage {
		overflow-y: scroll;
	}

	.border-b {
		border: 2rpx solid blue;
	}

	.signal-wrap {
		height: calc(100% - 180rpx);

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

	.shareProvider {
		display: flex;
		flex-flow: row wrap;

		.shareProviderItem {
			flex: 1;
			display: flex;
			align-items: center;
			flex-direction: column;

			.icon {
				background-color: rgb(0, 187, 49);
				color: #FFFFFF;
				width: 100rpx;
				height: 100rpx;
				line-height: 100rpx;
				font-size: 70rpx;
				border-radius: 500rpx;
			}
		}
	}
</style>
