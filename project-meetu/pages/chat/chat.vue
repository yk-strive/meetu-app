<template>
	<view id="chatPage" class="bg_page_3">
		<custom-nav :isBack="true" :textTitle="'与' + oppositeinfo.name + '的对话'"></custom-nav>
		<scroll-view class="panel-scroll-chat-box" scroll-y v-bind:scroll-with-animation="true" v-bind:style="{height: style.contentViewHeight+'px', marginTop: style.scrollViewMarginTop + 'px'} "
		 v-bind:scroll-top="scrollTop" v-on:click.prevent="InputBlur" :scroll-into-view="scrollToView" @scrolltoupper="loadHistoryChatInfo">
			<!-- 加载历史数据waitingUI -->
			<view v-if="isHistoryLoad" class="loading">
				<view class="spinner">
					<view class="rect1"></view>
					<view class="rect2"></view>
					<view class="rect3"></view>
					<view class="rect4"></view>
					<view class="rect5"></view>
				</view>
			</view>
			<view class="cu-chat" v-show="!isLoad">
				<view v-for="(item, index) in chatInfo" v-bind:key="index">
					<view v-if="item.contentType != 'tip'" :id="'chat-item'+item.id" class="cu-item" v-bind:class="item.isself ? 'self' : ''">
						<view class="date">
							<text class="round">{{item.date}}</text>
						</view>
						<view v-if="!item.isself" class="cu-avatar round">
							<image class="round" :src="item.avatarUrl"></image>
						</view>

						<view class="main">
							<view v-if="item.contentType == 'text'" class="content shadow" v-bind:class="item.isself?'bg-color-main':''">
								<text>{{item.content}}</text>
							</view>
							<view v-if="item.contentType == 'image'" class="content-img" @tap.stop="previmg">
								<image :src="item.content" class="radius" mode="widthFix"></image>
							</view>
							<view v-if="item.contentType == 'voice'">
								<!-- <view class="action text-bold text-grey"></view> -->
								<view class="content shadow">
									<text class="cuIcon-sound text-xxl padding-right-xl"></text> <text class="voice-time">{{item.voicetime}}</text>
								</view>
							</view>
						</view>

						<view v-if="item.isself" class="cu-avatar round">
							<image class="round" :src="item.avatarUrl"></image>
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
			<view class="btn-send bg-color-main text-center">
				<text class="cuIcon-picfill"></text>
				<input type="text" v-on:click="submit" v-on:blur="InputBlur">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'chat',
		data() {
			return {
				oppositeinfo: null,
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

				isLoad: true,
				isHistoryLoad: false,
				chatInfo: [{
						id: 1,
						contentType: 'text',
						isself: true,
						avatarUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg',
						content: '狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋!',
						date: '2018年3月23日 13:23',
					},
					// {
					// 	contentType: 'tip',
					// 	content: '对方撤回一条消息!',
					// },
					{
						id: 2,
						contentType: 'text',
						isself: false,
						avatarUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg',
						content: '狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋!',
						date: '13:23',
					},
					{
						id: 3,
						contentType: 'image',
						isself: true,
						avatarUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg',
						content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
						date: '13:23',
					},
					// {
					// 	contentType: 'voice',
					// 	isself: true,
					// 	avatarUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg',
					// 	content: '',
					// 	voicetime: '3"',
					// 	date: '13:23',
					// },
					{
						id: 4,
						contentType: 'image',
						isself: false,
						avatarUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg',
						content: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						date: '13:23',
					},
					{
						id: 5,
						contentType: 'text',
						isself: false,
						avatarUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg',
						content: '狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋!',
						date: '13:23',
					},
					{
						id: 6,
						contentType: 'text',
						isself: false,
						avatarUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg',
						content: '狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋!',
						date: '13:23',
					},
					{
						id: 7,
						contentType: 'text',
						isself: false,
						avatarUrl: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg',
						content: '狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋! 狗蛋!',
						date: '13:23',
					},
				]
			}
		},
		onLoad(options) {
			this.oppositeinfo = JSON.parse(options.oppositeinfo);
		},
		onShow() {

			const res = uni.getSystemInfoSync(); //获取手机可使用窗口高度     api为获取系统信息同步接口
			this.style.contentViewHeight = res.windowHeight - res.screenWidth / 750 * (100) - this.CustomBar - this.style.scrollViewMarginTop;
			setTimeout(() => {
				this.isLoad = false;
				this.scrollToBottom();
			}, 1000);
		},
		methods: {
			loadChatInfo() { // 加载chatInfo
				console.log('加载');
				setTimeout(()=> {
					this.isHistoryLoad = false;
				}, 2000);
			},
			loadHistoryChatInfo() {
				if (this.isHistoryLoad) {
					return;
				}
				this.isHistoryLoad = true;
				
				this.loadChatInfo();
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
				this.softKeyboardHeightHandle('up', e.detail.height);
				let self = this;
				setTimeout(function() {
					self.scrollToBottom()
				}, 10);
			},
			TextareaInput(e) {
				this.textareaValue = e.detail.value;
			},
			TextareaBulr() {
				let self = this;
				if (self.isFocus == false) {
					self.softKeyboardHeightHandle('down', self.SoftKeyboardHeight);
					setTimeout(function() {
						self.scrollToBottom()
					}, 10);
				}
			},
			InputBlur(e) {
				let self = this;
				self.isFocus = false;
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
			chooseImg() {
				uni.chooseImage({
					count: 3,
					sizeType: ['compressed '],
					sourceType: ['album ', 'camera '],
					success: (res) => {
						console.log(res);
					}
				})
			},
			submit() {
				this.isFocus = true;
				if (this.textareaValue) {
					console.log(this.textareaValue)
					this.textareaValue = '';
				}
			}
		},
		onHide() {
			this.InputBlur()
		}
	}
</script>

<style lang="scss">
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

		.btn-send {
			position: relative;
			width: 128rpx;
			height: 90rpx;
			line-height: 90rpx;
			font-size: 50rpx;

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
