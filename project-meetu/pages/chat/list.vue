<template>
	<view id="chatListPage" class="bg_page_3">
		<custom-nav :isBack="true" textTitle="消息"></custom-nav>
		<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" :top="CustomBar" @refresh="onPulldownReresh"
		 @setEnableScroll="setEnableScroll">
			<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore">
				<view class="cu-list menu-avatar">
					<view class="cu-item" v-for="item,index in chatList" :key="index" @tap.stop="linkChat(item)">
						<view class="cu-avatar round">
							<image class="round" :src="item.avatarurl" mode="aspectFill"></image>
						</view>
						<view class="content">
							<view class="text-white text-xl">{{item.name + index}}</view>
							<view class="text-time_news-color text-sm flex padding-top-xs">
								<view class="text-cut">
									<!-- <text class="cuIcon-infofill text-red  margin-right-xs"></text> -->
									{{item.contenttype == 0 ? item.content : item.contenttype == 1?'[图片]' : item.contenttype == 2?'[语音]' : ''}}
								</view>
							</view>
						</view>
						<view class="action">
							<view class="text-time_news-color text-sm time">{{item.time}}</view>
							<view class="cu-tag round bg-news sm text-white padding-top-xs" v-show="item.unread !=0">{{item.unread !=0 ? item.unread : ''}}</view>
						</view>
					</view>
				</view>
				<!-- 上滑加载更多组件 -->
				<mix-load-more :status="loadMoreStatus" :show="showLoadMore"></mix-load-more>
			</scroll-view>
		</mix-pulldown-refresh>
	</view>
</template>

<script>
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	export default {
		name: 'chatlist',
		components: {
			mixPulldownRefresh,
			mixLoadMore
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				enableScroll: true,
				loadMoreStatus: 0,
				showLoadMore: false,
				refreshing: 0,
				chatList: [{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
						name: '微白',
						userid: 1,
						time: '12:34:00',
						unread: 0,
						contenttype: 0,
						content: '1111111111111111111111111111111111111111111111111111111111111111111111'
					},
					{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg',
						name: '雪宗',
						userid: 2,
						time: '2019-12-16 18:25:00',
						unread: 1,
						contenttype: 0,
						content: '突然大V烦恼歌哈理工给你看发给你开发公开逢年过节北京饭店'
					},
					{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg',
						name: '清真',
						userid: 3,
						time: '2019-12-11 09:25:00',
						unread: 2,
						contenttype: 1,
						content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg'
					},
					{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
						name: '微白',
						userid: 4,
						time: '2019-12-13 12:34:00',
						unread: 10,
						contenttype: 1,
						content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg'
					},
					{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg',
						name: '雪宗',
						userid: 5,
						time: '2019-12-10 18:25:00',
						unread: 0,
						contenttype: 1,
						content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg'
					},
					{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg',
						name: '清真',
						userid: 6,
						time: '2019-12-11 09:25:00',
						unread: 2,
						contenttype: 2,
						content: ''
					},
					{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
						name: '微白',
						userid: 7,
						time: '2019-12-17 12:34:00',
						unread: 3,
						contenttype: 2,
						content: ''
					},
					{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg',
						name: '雪宗',
						userid: 8,
						time: '2019-12-16 18:25:00',
						unread: 0,
						contenttype: 2,
						content: ''
					},
					{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg',
						name: '清真',
						userid: 9,
						time: '2019-10-11 09:25:00',
						unread: 0,
						contenttype: 0,
						content: '让国人如果入股如果让他加Yuki哦io'
					},
					{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
						name: '微白',
						userid: 10,
						time: '2019-12-17 12:34:00',
						unread: 0,
						contenttype: 2,
						content: ''
					},
					{
						avatarurl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
						name: '微白',
						userid: 11,
						time: '2019-12-17 12:34:00',
						unread: 0,
						contenttype: 2,
						content: ''
					}
				]
			}
		},
		methods: {
			getRandomIntInclusive(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
			},
			
			linkChat(item) {
				uni.navigateTo({
					url: './chat?oppositeinfo=' + JSON.stringify(item),
					animationDuration: 300,
					animationType: 'slide-in-bottom'
				})
			},
			
			loadChatList(type) {
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
						let tempList = this.chatList.length <= 12 ? this.chatList.reverse() : this.chatList.splice(this.getRandomIntInclusive(0, 12), 12);
						//刷新前清空数组
						this.chatList = [];
						this.chatList = tempList;
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
						this.chatList = [...this.chatList, ...this.chatList];
						this.loadMoreStatus = this.chatList.length > 50 ? 2 : 0;
						this.showLoadMore = false;
					}
				}, 2000)
			},
			onPulldownReresh() {
				this.loadChatList('refresh');
			},
			loadMore() {
				this.loadChatList('add');
			},
			setEnableScroll(enable) {
				// if (this.enableScroll !== enable) {
				// 	this.enableScroll = enable;
				// }
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},

			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},

			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
		}
	}
</script>

<style lang="scss">
	.panel-scroll-box {
		height: 100%;
		padding-top: 30rpx;
	}

	// 消息列表样式改动, 符合设计图的样式
	.cu-list.menu-avatar {
		.cu-item {
			background-color: transparent;

			&::after {
				border-bottom: none;
			}

			.cu-avatar {
				width: 100rpx;
				height: 100rpx;
				background-color: transparent;
				left: 40rpx;
			}

			.content {
				left: 170rpx;
			}

			.action {
				padding-top: 44rpx;

				.time {
					position: absolute;
					top: 24rpx;
					right: 26rpx;
					max-width: 300rpx;
				}
			}

			.text-time_news-color {
				color: #A6A3CF;
			}

			.bg-news {
				background-color: #dd514c;
			}
		}
	}
</style>
