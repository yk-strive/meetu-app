<template>
	<view id="chatListPage" class="bg_page_3">
		<custom-nav :isBack="true" textTitle="消息列表"></custom-nav>
		<view class="chatlist-wrap wrap_heihgt">
			<mix-pulldown-refresh ref="mixPulldownRefresh" class="panel-content" @refresh="onPulldownReresh"
			 @setEnableScroll="setEnableScroll">
				<scroll-view class="panel-scroll-box" :scroll-y="enableScroll" @scrolltolower="loadMore">
					<view class="cu-list menu-avatar">
						<view class="cu-item" v-for="item,index in list" :key="index" @tap.stop="linkChat(item)" @longpress="removeChatItem(item.user_id,index)">
							<view class="cu-avatar round">
								<image class="round" :src="item.headimgurl" mode="aspectFill"></image>
							</view>
							<view class="content">
								<view class="text-white text-xl">{{item.nickname}}</view>
								<view class="text-time_news-color text-sm flex padding-top-xs">
									<view class="text-cut">
										<!-- <text class="cuIcon-infofill text-red  margin-right-xs"></text> -->
										{{item.type == 1 ? item.content : item.type == 3?'[图片]' : ''}}
									</view>
								</view>
							</view>
							<view class="action">
								<view class="text-time_news-color text-sm time">{{item.created_at_format}}</view>
								<view class="cu-tag round bg-news sm text-white padding-top-xs" v-show="item.unread !=0">{{item.unread !=0 ? item.unread : ''}}</view>
							</view>
						</view>
					</view>
					<!-- 上滑加载更多组件 -->
					<mix-load-more :status="loadMoreStatus" :show="showLoadMore"></mix-load-more>
				</scroll-view>
			</mix-pulldown-refresh>
		</view>
		<cu-modal :modalName="modalName" :toastText="toastText" :dialogText="dialogText" @hideModal="hideModal" @dialogConfirm="dialogConfirm"></cu-modal>
	</view>
</template>

<script>
	import mixPulldownRefresh from '@/components/mix-pulldown-refresh/mix-pulldown-refresh';
	import mixLoadMore from '@/components/mix-load-more/mix-load-more';
	import mixinInit from '../../mixins/init.js';
	import * as DateUtils from "../../common/Utils/Date.js";
	import {throttle} from '@/common/Utils/common.js';
	import mSocket from '@/common/socket/index.js';
	import { mapState,mapGetters } from 'vuex';
	export default {
		name: 'chatlist',
		components: {
			mixPulldownRefresh,
			mixLoadMore
		},
		mixins: [mixinInit],
		data() {
			return {
				enableScroll: true,
				loadType: '',
				refreshing: 0,
				pageUnload: false,
				removeItemInfo: null,
			}
		},
		
		computed: {
			...mapGetters(['token']),
			...mapState({
				WS: state=> state.socketInfo.WS,
				list: state=>state.socketInfo.list,
				chatMsg: state=>state.socketInfo.chatMsg  ,// 存储接收到消息
				deleteErr: state=>state.socketInfo.deleteErr
			})
		},
		
		watch: {
			list(newV, oldV) {
				if (!this.list && this.loadType == '' && !this.pageUnload) {
					this.modalShow('toastModal', '还没有和ta人交流过')
				}
				if (((this.list.length) % (this.pageSize) != 0) && this.page > 1 && newV.length == oldV.length) {
					this.loadMoreStatus = 2;
				}
			},
			chatMsg(newV, oldV) {
				this.list.map(item=>{
					if(item.user_id == newV.user_id) {
						item.id = newV.id;
						item.type = newV.type;
						item.content = newV.content;
						item.unread = Number(item.unread) + 1;
						item.created_at = newV.created_at;
						item.created_at_format = DateUtils.timeFormat(newV.created_at);
					}
				})
				this.list.sort(DateUtils.compare('created_at'))
			},
			deleteErr(newV) {
				if (newV.error == 0) {
					this.modalName = '';
					this.list.splice(this.removeItemInfo.index, 1);
				}
			}
		},
		onLoad(options) {
			if (options.enterMode) {
				getApp().globalData.chatListPageOpenMode = options.enterMode;
			}
		},
		onShow() {
			this.pageUnload = false;
			this.ws_GetChatList();
		},
		
		methods: {
			ws_init() { 
				let self = this;
				let socket = new mSocket({
					url: 'wss://api.meetu.letwx.com/im?token=' + self.token,
					timeout: 30000,
					isSendHeart: true,
					heartData: {
						"msgType": "ping",
						"data": {}
					},
					isReconnection: true,
					reConnectTime: 3000,
					debug: process.env.NODE_ENV === "development",
					params: { // 发送消息时如果时json则自动加上组合里面参数
						// token: token
					},
					onSocketOpen: header => {},
					onSocketMessage: data => {
						self.$store.dispatch('setSocketState', data);
					},
					onSocketError: res => {
						self.$store.dispatch('setSocketStateErr', res);
					},
					onSocketClose: res => {}
				});
				console.log('--socket--', socket)
				self.$store.dispatch('WS', socket);
				socket.initSocket();
			},
			ws_GetChatList(loadType) {
				let self = this;
				if (loadType) {
					this.loadType = loadType;
					if (loadType === 'refresh') {
						this.showLoadMore = false;
						this.loadMoreStatus = 0;
						this.page = 1;
						this.$store.commit('emptyInfo', 'list');
					}
					if (loadType === 'add') {
						if (this.loadMoreStatus == 2) {
							return false;
						}
						this.page++;
						this.showLoadMore = true;
						setTimeout(() => {
							this.loadMoreStatus = 1; // 正在加载..
						}, 100)
					}
				}
				self.WS.sendSocketMessage({
					msgType:"getChatLogList",
					data:{
						page: self.page,
						pageSzie: self.pageSize,
					}
				}, okRes=>{
					// self.clog('----消息发送OK----', okRes); // 这里的res(成功)->只代表uni-socket发送消息是否成功
					setTimeout(function() {
						self.$refs.mixPulldownRefresh && self.$refs.mixPulldownRefresh.endPulldownRefresh();
					}, 200)
				})
			},
			
			ws_read(userId) {
				this.WS.sendSocketMessage({
					msgType:"read",
					data:{
						user_id: userId
					}
				}, okRes=>{
					this.clog('----读取未读消息OK----', okRes); // 这里的res(成功)->只代表uni-socket读取消息是否成功
				})
			},
			
			ws_delete(removeInfo) {
				this.WS.sendSocketMessage({
					msgType:"delete",
					data:{
						user_id: removeInfo.userId
					}
				}, okRes=>{
					this.clog('----读取未读消息OK----', okRes); // 这里的res(成功)->只代表uni-socket读取消息是否成功
				})
			},
			
			onPulldownReresh: throttle(function(){
				let self = this;
				self.ws_GetChatList('refresh');
			}, 5000, function() {
				let self = this;
				self.$refs.mixPulldownRefresh && self.$refs.mixPulldownRefresh.endPulldownRefresh();
			}),
			
			loadMore() {
				this.ws_GetChatList('add');
			},
			
			linkChat(item) {
				this.ws_read(item.user_id);
				getApp().globalData.chatUserInfo = item;
				uni.navigateTo({
					url: './chat?chatUserId=' + item.user_id,
					animationDuration: 300,
					animationType: 'fade-in'
				})
			},
			
			removeChatItem(userId, index) {
				this.removeItemInfo = {
					userId: userId,
					index: index
				}
				this.modalShow('dialogModal', '删除会话?');
			},
			
			setEnableScroll(enable) {
				if (this.enableScroll !== enable) {
					this.enableScroll = enable;
				}
			},
			
			dialogConfirm() {
				this.ws_delete(this.removeItemInfo)
			},
			
			hideModal() {
				this.modalName = '';
				if (this.modalName == 'dialogModal') {
					this.removeItemInfo = null;
				}
			},
		},
		
		onHide() {
			this.pageUnload = true;
			this.$store.commit('emptyInfo', 'list');
		},
		onUnload() {
			this.pageUnload = true;
			this.$store.commit('emptyInfo', 'list');
			if (getApp().globalData.chatListPageOpenMode) {
				getApp().globalData.chatListPageOpenMode = null;
			}
		}
	}
</script>

<style lang="scss">
	.panel-scroll-box {
		height: 100%;
		padding-bottom: 20rpx;
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
