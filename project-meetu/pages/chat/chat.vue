<template>
	<view id="chatPage" class="bg_page_3">
		<custom-nav :isBack="true" :textTitle="'与 ' + chatUserInfo.nickname + ' 的对话'"></custom-nav>
		<scroll-view class="panel-scroll-chat-box" scroll-y v-bind:scroll-with-animation="true" v-bind:style="{height: style.contentViewHeight+'px', marginTop: style.scrollViewMarginTop + 'px'} "
		 v-bind:scroll-top="scrollTop" v-on:click.prevent="InputBlur" :scroll-into-view="scrollToView" @scrolltoupper="loadHistoryChatInfo">

			<view class="loadmore text-center" v-if="chatInfoList.length < 6" @tap.stop="loadHistoryChatInfo">
				<text class="text-black-s">点击加载历史消息</text>
			</view>
			<!-- v-show="!isLoad" -->
			<view class="cu-chat">
				<view v-for="(item, index) in chatInfoList" v-bind:key="index">
					<!-- v-if="item.contentType != 'tip'" -->
					<view :id="'chat-item'+item.id" class="cu-item" v-bind:class="item.user_id == userInfo.id ? 'self' : ''">
						<view class="date" v-if="item.is_show_time">
							<text class="round">{{item.created_at_format}}</text>
						</view>
						<view v-if="item.user_id != userInfo.id" class="cu-avatar round">
							<image class="round" :src="item.headimgurl" mode="aspectFill"></image>
						</view>

						<view class="main">
							<view v-if="item.type == 1 && item.is_signal" class="content bg-signal">
								<text>{{item.content}}</text>
							</view>
							<view v-if="item.type == 1 && !item.is_signal" class="content" :class="item.user_id == userInfo.id?'bg-color-main':''">
								<text>{{item.content}}</text>
							</view>
							<view v-if="item.type == 3" class="content-img" @tap.stop="previmg(item.content)">
								<image :src="item.content" class="radius" mode="widthFix"></image>
							</view>
							<view v-if="item.type == 2">
								<view class="content" :class="item.is_signal?'bg-signal':''" @tap.stop="playVoiceHandle(item)">
									<image class="soundImg margin-right-lg" mode="aspectFill" :src="audioPlay && audioPlayCur == item.id? '../../static/meetu-img/xh.gif':'../../static/meetu-img/xh.png'"></image>
									<text class="voice-time">{{item.seconds}}s</text>
								</view>
							</view>
						</view>

						<view v-if="item.user_id == userInfo.id" class="cu-avatar round">
							<image class="round" :src="item.headimgurl" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="cu-bar foot input" v-bind:style="[{bottom:SoftKeyboardHeight+'px'}]">
			<view class="action img-send" @click="chooseImg">
				<text class="cuIcon-picfill"></text>
			</view>
			<textarea class="radius" placeholder="请输入您要发送的信息" :show-confirm-bar="false" cursor-spacing="9"
			 v-bind:adjust-position="false" v-bind:fixed="true" v-bind:auto-height="true" v-model="textareaValue" v-on:focus="TextareaFocus"
			 v-on:input="TextareaInput" v-on:blur="TextareaBulr"></textarea>
			<!-- <view class="action">
				<text class="cuIcon-emoji"></text>
			</view>
			<view class="action" v-if="InputCursor === 0">
				<text class="cuIcon-roundadd"></text>
			</view> -->
			<view class="btn-send bg-color-main text-center flex-df" v-on:click="submit">
				<image src="../../static/meetu-img/send.png" mode="aspectFill"></image>
				<!-- <input type="text" :disabled="submitInputDisable" v-on:click="submit" v-on:blur="InputBlur"> -->
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapState
	} from 'vuex';
	import * as DateUtils from "../../common/Utils/Date.js";
	import mixinInit from '../../mixins/init.js';

	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	export default {
		name: 'chat',
		mixins: [mixinInit],
		data() {
			return {
				chatUserInfo: null,
				style: {
					contentViewHeight: 0,
					mitemHeight: 0,
					scrollViewMarginTop: uni.upx2px(30),
				},
				scrollTop: 0,
				scrollToView: '',

				SoftKeyboardHeight: 0,
				textareaValue: '',
				isFocus: false,
				submitInputDisable: true,

				isHistoryLoad: false,

				prevImgArr: [],
				page: null, // 请求信息的page, page根据请求返回的信息 进行处理, 默认是最后一页, 
				lastInfoTime: null,

				audioPlay: false,
				audioPlayCur: -1
			}
		},

		computed: {
			...mapGetters(['userInfo', 'token']),
			...mapState({
				WS: state=> state.socketInfo.WS,
				chatInfoList: state => state.socketInfo.chatInfo, // 聊天详情信息
				chatMsg: state => state.socketInfo.chatMsg // 存储接收到消息
			})
		},

		watch: {
			chatMsg(newValue, oldValue) { // 监听chatMsg, 收到消息就这条消息push到chatInfoList
				let self = this;
				this.chatInfoList.push({
					id: newValue.id,
					user_id: newValue.user_id,
					nickname: newValue.nickname,
					headimgurl: newValue.headimgurl,
					type: newValue.type,
					content: newValue.content,
					created_at: newValue.created_at,
					created_at_format: DateUtils.timeFormat(newValue.created_at),
					is_show_time: DateUtils.dateDiff(self.lastInfoTime, newValue.created_at),
				});
				this.ws_read(this.chatUserInfo.user_id)
				setTimeout(() => {
					this.scrollToBottom();
					this.lastInfoTime = newValue.created_at;
				}, 10);
			},
			chatInfoList(newValue, oldValue) { // 监听chatInfoList, 加载历史消息时, 将内容中图片信息存放到prevImgArr
				this.page = (this.page && this.page < 1) ? 0 : newValue[0].page - 1;
				for (let i = 0; i < newValue.length; i++) {
					if (newValue[i].type == 3) {
						this.prevImgArr.push(newValue[i].content);
					}
				}
			}
		},
		onLoad(options) {
			innerAudioContext.onEnded(() => {
				console.log('播放结束')
				this.audioPlay = false;
				this.audioPlayCur = -1;
			})
			this.chatUserInfo = JSON.parse(options.chatItem);
			this.clog('对话人', this.chatUserInfo)
			this.ws_GetChatLogInfo();
		},
		onReady() {
			// 存放消息列表最后一条的时间
			this.lastInfoTime = this.chatInfoList[this.chatInfoList.length - 1].created_at;
		},
		onShow() {
			const res = uni.getSystemInfoSync(); //获取手机可使用窗口高度     api为获取系统信息同步接口
			this.style.contentViewHeight = res.windowHeight - res.screenWidth / 750 * (100) - this.CustomBar - this.style.scrollViewMarginTop;
			setTimeout(() => {
				// this.isLoad = false;
				this.scrollToBottom();
			}, 1000);
		},
		methods: {
			ws_GetChatLogInfo(loadType) {
				let self = this;
				if (loadType && loadType == 'add') {
					console.log('add被点击', self.page)
					if (this.page == 0) {
						return false;
					}
					if (this.isHistoryLoad) {
						return false;
					}
					this.isHistoryLoad = true;
				}
				this.WS.sendSocketMessage({
					msgType: "getChatLogInfo",
					data: {
						page: self.page,
						user_id: self.chatUserInfo.user_id,
					}
				}, okRes => {
					// self.clog('----消息发送OK----', okRes); // 这里的res(成功)->只代表uni-socket发送消息是否成功
					if (loadType && loadType == 'add') {
						setTimeout(() => {
							this.isHistoryLoad = false;
						}, 200)
					}
				})
			},

			ws_sendMsg(contentType, content) {
				let self = this;
				let created_at = DateUtils.dateFormat(new Date(), 'yyyy.MM.dd hh:mm:ss');
				/**
				 * created_at_format: 时间在页面展示上的处理,
				 * is_show_time: 是否需要展示时间
				 * 
				 * 消息发送成功--将lastInfoTime 变更为 created_at
				 * */
				let msgToFillList = {
					id: self.chatInfoList[self.chatInfoList.length - 1].id + 1,
					user_id: self.userInfo.id,
					nickname: self.userInfo.nickname,
					headimgurl: self.userInfo.headimgurl,
					type: contentType,
					content: content,
					created_at: created_at,
					created_at_format: DateUtils.timeFormat(created_at),
					is_show_time: DateUtils.dateDiff(self.lastInfoTime, created_at),
				}
				this.WS.sendSocketMessage({
					msgType: 'chatMsg',
					data: {
						to_id: self.chatUserInfo.user_id,
						content_type: contentType,
						content: content
					}
				}, okRes => {
					self.clog('---聊天消息发送OK----', okRes); // 这里的res(成功)->只代表uni-socket发送消息是否成功
					if (this.textareaValue) {
						console.log(this.textareaValue)
						this.textareaValue = '';
					}
					self.chatInfoList.push(msgToFillList);
					setTimeout(() => {
						self.scrollToBottom();
						self.lastInfoTime = created_at;
					}, 10)
				}, errRes => {
					self.clog('---聊天消息发送ERR----', errRes); 
				})
			},

			ws_read(userId) {
				this.WS.sendSocketMessage({
					msgType: "read",
					data: {
						user_id: userId
					}
				}, okRes => {
					this.clog('----读取未读消息OK----', okRes); // 这里的res(成功)->只代表uni-socket读取消息是否成功
				})
			},

			loadHistoryChatInfo() {
				this.ws_GetChatLogInfo('add');
			},

			scrollToBottom() {
				let that = this;
				let query = uni.createSelectorQuery();
				query.selectAll('.cu-item').boundingClientRect();
				query.select('.panel-scroll-chat-view').boundingClientRect();
				query.exec((res) => {
					// console.log(res);
					that.style.mitemHeight = 0;
					res[0].forEach((rect) => that.style.mitemHeight = that.style.mitemHeight + rect.height) //获取所有内部子元素的高度
					// 因为vue的虚拟DOM 每次生成的新消息都是之前的，所以采用异步setTimeout    主要就是添加了这定时器
					// console.log('mitemHeight', that.style.mitemHeight)
					setTimeout(() => {
						if (that.style.mitemHeight > (that.style.contentViewHeight)) { //判断子元素高度是否大于显示高度
							that.scrollTop = that.style.mitemHeight - that.style.contentViewHeight //用子元素的高度减去显示的高度就获益获得序言滚动的高度
							console.log('scrollTop', that.scrollTop)
						}
					}, 10)
				})
			},

			TextareaFocus(e) {
				this.submitInputDisable = false;
				this.softKeyboardHeightHandle('up', e.detail.height);
				let self = this;

				setTimeout(function() {
					// self.scrollToBottom()
					self.scrollToView = "chat-item" + self.chatInfoList[self.chatInfoList.length - 1].id;
					// self.scrollToView = ''
				}, 10)
			},

			TextareaInput(e) {
				this.textareaValue = e.detail.value;
			},

			TextareaBulr() {
				let self = this;
				// if (self.isFocus == false) {
				self.softKeyboardHeightHandle('down', self.SoftKeyboardHeight);
				setTimeout(function() {
					self.scrollToBottom()
				}, 10);
				// }
			},

			InputBlur(e) {
				let self = this;
				self.isFocus = false;
				this.submitInputDisable = true;
				self.softKeyboardHeightHandle('down', self.SoftKeyboardHeight);
				setTimeout(function() {
					self.scrollToBottom()
				}, 10);
			},

			softKeyboardHeightHandle(type, height) {
				if (type == 'up') { // 软键盘弹起时, 更改(减小)scrollView(聊天信息展示框)的高度, 并且滚动条滚至最后一条信息
					this.style.contentViewHeight -= height;
					this.SoftKeyboardHeight = height;
				} else if (type == 'down') { //软键盘收起之前, 更改(还原)scrollView(聊天信息展示框)的高度
					this.style.contentViewHeight += height;
					this.SoftKeyboardHeight = 0;
				}
			},

			previmg(curImgUrl) {
				let self = this;
				uni.previewImage({
					current: curImgUrl,
					urls: self.prevImgArr
				})
			},

			chooseImg() {
				let self = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed '],
					sourceType: ['album ', 'camera '],
					success: (res) => {
						console.log(res);
						let tempFilePath = res.tempFilePaths[0];
						uni.uploadFile({
							url: 'https://api.meetu.letwx.com/v2/sys/upload-img?token=' + self.token,
							filePath: tempFilePath,
							name: 'imgfile',
							formData: {
								'name': 'imgfile',
								'formData': JSON.stringify({
									'sort': 0
								})
							},
							success: (uploadFileRes) => {
								// console.log('upok',JSON.parse(uploadFileRes.data));
								let img = JSON.parse(uploadFileRes.data).data.imgUrl;
								self.ws_sendMsg(3, img);
							},
							fail: (err) => {
								console.log('err', err);
							}
						});
					}
				})
			},

			playVoiceHandle(item) {
				let self = this;
				if (this.audioPlay) {
					innerAudioContext.pause();
					this.audioPlay = false;
				} else {
					if (item.content) {
						innerAudioContext.src = item.content;
						innerAudioContext.play();
						this.audioPlay = true;
						this.audioPlayCur = item.id;
					}
				}
			},

			stopVoiceHandle() {
				if (!innerAudioContext.paused) {
					innerAudioContext.stop();
				}
				innerAudioContext.src = '';
				this.audioPlay = false;
				this.audioPlayCur = -1;
			},

			submit() {
				this.isFocus = true;
				if (!this.textareaValue) {
					return false;
				}
				this.ws_sendMsg(1, this.textareaValue);
			}
		},
		onHide() {
			this.InputBlur();
			this.stopVoiceHandle();
			// this.$store.commit('emptyInfo', 'chatInfo');
			console.log('-----onHide--------');
		},
		onUnload() {
			this.$store.commit('emptyInfo', 'chatInfo');
			this.stopVoiceHandle();
			console.log('-----onUnload--------');
		}
	}
</script>

<style lang="scss">
	.bg-signal {
		//信号源样式
		background: transparent;
		color: #FFFFFF;
		border: 2rpx solid #D04795;
	}

	#chatPage {
		overflow: hidden;

		.loading {
			//loading动画
			display: flex;
			justify-content: center;

			@keyframes stretchdelay {

				0%,
				40%,
				100% {
					transform: scaleY(0.6);
				}

				20% {
					transform: scaleY(1.0);
				}
			}

			.spinner {
				margin: 20upx 0;
				width: 60upx;
				height: 100upx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				view {
					background-color: #f06c7a;
					height: 50upx;
					width: 6upx;
					border-radius: 6upx;
					animation: stretchdelay 1.2s infinite ease-in-out;
				}

				.rect2 {
					animation-delay: -1.1s;
				}

				.rect3 {
					animation-delay: -1.0s;
				}

				.rect4 {
					animation-delay: -0.9s;
				}

				.rect5 {
					animation-delay: -0.8s;
				}
			}
		}

		.img-send {
			width: 94rpx;
			height: 90rpx;
			margin: 0;
		}

		.soundImg {
			width: 100rpx;
			height: 40rpx;
		}

		.btn-send {
			position: relative;
			width: 128rpx;
			height: 90rpx;
			line-height: 90rpx;
			font-size: 50rpx;

			image {
				width: 64rpx;
				height: 64rpx;

			}

			input {
				position: absolute;
				top: 0;
				left: 0;
				opacity: 0;
			}
		}

		// 以下是修改聊天UI组件样式
		.cu-chat {
			padding-top: 30rpx;

			// 定义自己self突出角的颜色 因为UI组件中是background-color:inherit, 导致渐变时background声明失效
			.cu-item.self>.main .content::after {
				background: #616DEC;
			}

			.cu-item {
				padding: 50rpx 30rpx;
			}

			// 重新定义聊天时 时间显示位置
			.cu-item .date {
				position: absolute;
				top: -4upx;
				left: 160upx;
				bottom: 0;
				width: calc(100% - 320upx);
				height: 30rpx;
				font-size: 24upx;
				color: #8799a3;
				text-align: center;

				text {
					background-color: rgba(0, 0, 0, 0.3);
					padding: 4rpx 20rpx;
				}
			}
		}

		// 以下是修改发送UI组件样式
		.cu-bar.input {
			padding-right: 0;

			textarea {
				height: 100%;
				min-height: 90rpx;
				margin: 0;
				padding: 20rpx 20rpx 12rpx;
				border-radius: none;
				border-left: 1px solid #CCCCCC;
			}
		}

		.cu-bar {
			min-height: 90rpx;
			background-color: #FFFFFF;
		}
	}
</style>
