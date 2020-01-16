<template>
	<view id="homePage" class="bg_page_1">
		<canvas class="meteorShower" canvas-id="meteorShower"></canvas>
		<view class="AppName text-white text-lg">{{appName}}</view>
		<view class="avatar round avatar-animation" @tap.stop="linkUser">
			<image class="wh-100" v-bind:src="userInfo.headimgurl" mode="aspectFill"></image>
		</view>
		
		<view class="abs-center text-white" style="opacity: 0;" @click="copyHandle">{{token}}</view>
		
		<view class="home_bottom_act">
			<view v-if="showSendToast" class="toast abs-center text-white text-xxs">
				<text>给茫茫宇宙发射一个信号寻找远方的回应</text>
			</view>
			<view class="signal-ani abs-center" :class="isSendSignal ? 'signal-animation' : ''"></view>
			<view class="home_action">
				<view class="action_item" v-on:click="linkAction('search')">
					<image src="../../static/meetu-img/home_action1.png" mode="aspectFill"></image>
				</view>
				<view class="action_item" v-on:click="linkAction('send')">
					<image src="../../static/meetu-img/home_action2.gif" mode="aspectFill"></image>
				</view>
				<view class="action_item" v-on:click="linkAction('chatList')">
					<image src="../../static/meetu-img/home_action3.png" mode="aspectFill"></image>
					<view v-if="unread>0" class="cu-tag badge">{{unread}}</view>
				</view>
			</view>
			<view class="action_num text-center text-white text-xxs">
				今日剩余次数：<text v-if="userNumber">{{userNumber.signal_config-userNumber.signal_number}}/{{userNumber.signal_config}}</text>
			</view>
		</view>

		<view class="daily-login cu-modal" :class="showDailyLogin ? 'show' : ''">
			<view class="daily-login-wrap">
				<view class="flex-df">
					<image class="bg" src="../../static/meetu-img/login_prize.png" mode="widthFix"></image>
					<image class="coin" src="../../static/meetu-img/dou.png" mode="aspectFill"></image>
					<view class="text-letter-df w-100">星豆+5</view>
					<button class="cu-btn bg-color-main round" @tap.stop="getDailyLogin">立即领取</button>
				</view>
			</view>
		</view>
		<cu-modal :modalName="modalName" :toastText="toastText" @hideModal="hideModal">
			<block slot="bottomModal">
				<view class="modal_info">
					<view class="modal_info_item" @tap.stop="linkAction('sendText')">
						<view class="img_box round">
							<image class="abs-center" src="../../static/meetu-img/home_modal_text.png" mode="aspectFill"></image>
						</view>
						<view class="send_type text-letter-df text-df text-center">
							<text>文字黑洞</text>
						</view>
						<view class="send_type_tip text-letter-df text-xxs text-black-m text-center padding-bottom-xs">
							<text>发布文字信号</text>
						</view>
						<view class="send_type_tip text-letter-df text-xxs text-black-m text-center">
							<text>有什么话想对ta说</text>
						</view>
					</view>
					<view class="modal_info_item" @tap.stop="linkAction('sendVoice')">
						<view class="img_box round">
							<image class="abs-center" src="../../static/meetu-img/home_modal_voice.png" mode="aspectFill"></image>
						</view>
						<view class="send_type text-letter-df text-df text-center">
							<text>星球传呼机</text>
						</view>
						<view class="send_type_tip text-letter-df text-xxs text-black-m text-center padding-bottom-xs">
							<text>发布语音信号</text>
						</view>
						<view class="send_type_tip text-letter-df text-xxs text-black-m text-center">
							<text>听见你的声音</text>
						</view>
					</view>
				</view>
			</block>
		</cu-modal>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters
	} from 'vuex';
	import mixinInit from '../../mixins/init.js';
	import mSocket from '@/common/socket/index.js';
	import {throttle} from '@/common/Utils/common.js';
	import permision from "@/common/wa-permission/permission.js"
	import {MeteorShower} from '@/common/Utils/meteorShower.js'
	export default {
		name: 'homeIndex',
		components: {},
		mixins: [mixinInit],
		data() {
			return {
				// modalName: '', // 弹窗类型-modal/bottomModal/toastModal
				// toastText: '', //toast弹窗提示文本
				isSendSignal: false, //发送消息,动画展示
				showDailyLogin: false,
				appName: 'Meet U',
				showSendToast: false,
				userNumber: null,
				
				tempUpImgs: []
			}
		},
		computed: {
			...mapGetters(['userInfo', 'dailyLogin', 'token']),
			...mapState({
				unread: state => state.socketInfo.unread
			})
		},

		onLoad(options) {
			// this.meteorShower();
			this.api_UserNumber();
			// console.log('-------home------',options);
			this.handlePush();
		},

		onReady() {
			this.ws_init()
			if (uni.getStorageSync('homeSendToast')) {
				this.showSendToast = false;
			} else {
				this.showSendToast = true;
			}
		},
		onShow() {
			this.api_UserInfo();
			
			// 发送信号-返回首页-动画提示
			if (getApp().globalData.sendSignal) {
				this.isSendSignal = true;
				this.api_UserNumber();
				setTimeout(() => {
					this.modalShow('toastModal', '信号已发往星球')
					getApp().globalData.sendSignal = false;
					this.isSendSignal = false;
				}, 2500);
			}
			
			// 每日登录弹窗是否展示
			if (this.dailyLogin == 1) {
				return false;
			} else {
				if (uni.getStorageSync('dailyLoginExpires')) {
					let now = (new Date()).getTime();
					if (now > uni.getStorageSync('dailyLoginExpires')) {
						this.clog('mow', '超过')
						this.showDailyLogin = true;
					} else {
						this.clog('mow', '未超过')
						this.showDailyLogin = false;
					}
				} else {
					this.showDailyLogin = true;
				}
			}
		},
		methods: {
			handlePush() {
				// #ifdef APP-PLUS
				const _self = this
				const receive_pushHandle = function(msg) {
					console.log("----receive---", JSON.stringify(msg));
					
					if (msg.payload == 'im') {
						console.log('----click+进入if---- IM');
						uni.reLaunch({
							url: '../chat/list',
						})
					} else if (msg.payload == 'inviter') {
						console.log('----click+进入if---- Inviter');
						uni.navigateTo({
							url: '../user/coinrecord',
							animationDuration: 300,
							animationType: 'fade-in'
						})
					}
				}
				const click_pushHandle = function(msg) {
					console.log("----click---", JSON.stringify(msg));
					if (msg.payload == 'im') {
						console.log('----click+进入if---- IM');
						uni.redirectTo({
							url: '../chat/list?enterMode=im',
						})
					} else if (msg.payload == 'inviter') {
						console.log('----click+进入if---- Inviter');
						uni.navigateTo({
							url: '../user/coinrecord',
							animationDuration: 300,
							animationType: 'fade-in'
						})
					}
				}
				// 事件处理
				plus.push.addEventListener('click', click_pushHandle)
				plus.push.addEventListener('receive', receive_pushHandle)
				// #endif
			},
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
			
			async api_UserInfo() {
				let rstUserInfo = await this.$http1.post('user/info');
				if (rstUserInfo.code == 0) {
					this.$store.dispatch('changeVal', {
						stateKey: 'userInfo',
						newValue: rstUserInfo.data
					})
				} else {
					this.modelShow('toastModal', rstUserInfo.msg);
				}
			},
			api_UserNumber() { //操作剩余次数
				this.$http1.post('user/number').then(res => {
					// console.log('userNumber', res.data);
					this.userNumber = res.data;
				}).catch(err => {

				})
			},
			api_DailyLogin() {
				let self = this;
				this.$http1.post('points/daily-login').then(res => {
					if (res.code == 0) {
						this.modalShow('toastModal', '领取成功');
						this.showDailyLogin = false;
						uni.setStorageSync('dailyLoginExpires', self.expiresTime());
					}
				}).catch(err => {
					this.showDailyLogin = false;
					this.modalShow('toastModal', err.data.msg);
				})
			},
			getDailyLogin() {
				this.api_DailyLogin();
			},
			linkUser() {
				uni.navigateTo({
					url: '../user/index',
					animationDuration: 300,
					animationType: 'fade-in'
				})
			},
			linkAction(type) {
				let self = this;
				switch (type) {
					case 'search':
						uni.navigateTo({
							url: '../search/search',
							animationDuration: 500,
							animationType: 'fade-in'
						})
						break;
					case 'send':
						if (!uni.getStorageSync('homeSendToast')) {
							uni.setStorageSync('homeSendToast', true);
							this.showSendToast = false;
						}
						this.modalName = 'bottomModal';
						break;
					case 'chatList':
						uni.navigateTo({
							url: '../chat/list',
							animationDuration: 500,
							animationType: 'fade-in'
						})
						break;
					case 'sendText':
						this.modalName = '';
						uni.navigateTo({
							url: '../send/text',
							animationDuration: 500,
							animationType: 'fade-in'
						})
						break;
					case 'sendVoice':
						this.modalName = '';
						uni.navigateTo({
							url: '../send/voice',
							animationDuration: 500,
							animationType: 'fade-in'
						})
						break;
				}
			},
			expiresTime() {
				let now = new Date();
				var year = now.getFullYear(),
					month = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + now.getMonth() + 1,
					date = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
				let expires = year + '/' + month + '/' + date + ' 23:59:59';
				return (new Date(expires)).getTime();
			},
			hideModal() {
				this.modalName = '';
			},
			copyHandle: throttle(function() {
				let self = this;
				uni.setClipboardData({
				    data: self.token,
				    success: function () {
				        // uni.hideToast()
				    }
				});
			}, 5000),
			meteorShower() {
				// let cvs = document.querySelector("canvas");
				// let ctx = cvs.getContext("2d");
				// let meteorShower = new MeteorShower(cvs, ctx);
				// meteorShower.start();
				setTimeout(()=>{
					let query = uni.createSelectorQuery();
					query.select('.meteorShower').boundingClientRect();
					query.exec((res) => {
						console.log(JSON.stringify(res));
						let cvs = res[0];
						let ctx = uni.createCanvasContext('meteorShower');
						console.log('-----ctx----', ctx)
						let meteorShower = new MeteorShower(cvs, ctx);
						meteorShower.start();
					})
				}, 500)
			}
		}
	}
</script>

<style lang="scss">
	#homePage {
		canvas.meteorShower {
			width: 100%;
			height: 100%;
		}
		.AppName,
		.avatar {
			position: fixed;
			top: 140rpx;
			right: 50rpx;
			width: 120rpx;
			height: 120rpx;
			overflow: hidden;
		}

		.AppName {
			left: 50rpx;
		}

		.home_bottom_act {
			position: fixed;
			bottom: 60upx;
			width: 100%;

			.toast {
				top: -60%;
				width: 314upx;
				height: 128upx;
				padding: 30upx 40upx;
				background-color: #453C5B;
				border-radius: 10upx;
				box-shadow: 0 0 10upx 10upx #2E2D53;
				text-align: center;
				line-height: 2;

				&::after {
					content: '';
					position: absolute;
					z-index: -1;
					bottom: -16upx;
					left: 50%;
					transform: translateX(-50%);
					border-left: 60upx solid transparent;
					border-right: 60upx solid transparent;
					border-top: 60upx solid #453C5B;
				}
			}

			.signal-ani {
				opacity: 0;
				border-radius: 50%;
			}

			.home_action {
				display: flex;
				align-items: flex-end;

				.action_item {
					flex: 1;
					text-align: center;
					position: relative;
				}

				.action_item:nth-child(1) {
					image {
						width: 80rpx;
						height: 80rpx;
					}
				}

				.action_item:nth-child(2) {
					image {
						width: 130rpx;
						height: 152.6rpx;
					}
				}

				.action_item:nth-child(3) {
					image {
						width: 77rpx;
						height: 64rpx;
					}

					.badge {
						right: 28%;
						top: -20rpx;
					}
				}
			}

			.action_num {
				margin-top: 20upx;
			}
		}

		.daily-login {
			.daily-login-wrap {
				position: relative;
				display: inline-block;
				vertical-align: middle;
				margin-left: auto;
				margin-right: auto;

				image.bg,
				image.coin,
				view,
				button {
					position: absolute;
				}

				image.bg {
					width: 540rpx;
				}

				image.coin {
					width: 84rpx;
					height: 74rpx;
					margin-top: -90rpx;
				}

				view {
					width: 200rpx;
					left: 50%;
					transform: translateX(-50%);
				}

				button {
					width: 270rpx;
					height: 64rpx;
					margin-top: 100rpx;
					margin-left: 10rpx;
				}
			}
		}

		.modal_info {
			display: flex;
			justify-content: space-around;

			.modal_info_item {
				flex: 1;
				padding: 20upx 0;

				.img_box {
					width: 120upx;
					height: 120upx;
					margin: 0 auto;
					position: relative;
					background: linear-gradient(to left top, #616DEC, #D04795);

					image {
						width: 50upx;
						height: 50upx;
					}
				}

				.send_type {
					padding: 10upx 0 20upx;
				}
			}
		}

		.avatar-animation {
			animation: avatar-animation 2s linear both infinite;
		}

		@keyframes avatar-animation {
			0% {
				box-shadow: 0 0 12rpx 12rpx rgba(105, 65, 124, 0.8);
			}

			50% {
				box-shadow: 0 0 12rpx 12rpx rgba(105, 65, 124, 0.4);
			}

			100% {
				box-shadow: 0 0 12rpx 12rpx rgba(105, 65, 124, 0.8);
			}
		}

		.signal-animation {
			// 发送信号回首页--动画展示
			animation: signal-animation 2s 0.5s linear both;
		}

		@keyframes signal-animation {
			0% {
				width: 20rpx;
				height: 20rpx;
				opacity: 1;
				background-color: rgba(255, 255, 255, .5);
				box-shadow: 0 0 8rpx 6rpx rgba(255, 255, 255, .3);
			}

			40% {
				width: 12rpx;
				height: 12rpx;
				opacity: 1;
				top: -200px;
				background-color: rgba(255, 255, 255, .3);
				box-shadow: 0 0 8rpx 6rpx rgba(255, 255, 255, .5);
			}

			100% {
				width: 8rpx;
				height: 8rpx;
				opacity: 0;
				top: -600rpx;
				background-color: rgba(255, 255, 255, .5);
				box-shadow: 0 0 8rpx 6rpx rgba(255, 255, 255, .2);
			}
		}
	}
</style>
