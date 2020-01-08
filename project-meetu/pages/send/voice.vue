<template>
	<view id="sendVoicePage" class="bg_page_1">
		<custom-nav :isBack="true" textTitle="发布语音信号"></custom-nav>
		<view class="voiceRecordTosat abs-center text-center flex-df" v-show="isRecord || audioPlay">
			<text class="cuIcon-voice text-white"></text>
			<view class="voiceAni">
				<view class="rect1 rect"></view>
				<view class="rect2 rect"></view>
				<view class="rect3 rect"></view>
				<view class="rect4 rect"></view>
				<view class="rect5 rect"></view>
			</view>
		</view>
		<view class="voice_action border-b">
			<view class="voice_time text-white text-center padding-left-sm border-y" v-show="intIntervalTime">
				<text>{{intIntervalTime}}”</text>
			</view>
			<view v-if="!isRecordEnd" class="voice_init round text-xl text-center" @touchstart="touchStartHandle" @touchcancel="touchCancelHandle"
			 @touchend="touchEndHandle">
				<text>按住</text>
			</view>
			<view v-if="isRecordEnd" class="voice_handle">
				<view class="voice_reset round text-df text-center" @tap.stop="resetVoiceHandle">
					<text>重录</text>
				</view>
				<view class="voice_play round text-xl text-center" @tap.stop="playVoiceHandle">
					<text>{{audioPlay ? '暂停' : '播放'}}</text>
				</view>
				<view class="voice_send round text-df text-center" @tap.stop="sendVoiceHandle">
					<text>发送</text>
				</view>
			</view>
		</view>
		<cu-modal :modalName="modalName" :toastText="toastText"></cu-modal>
	</view>
</template>

<script>
	import permision from "@/common/wa-permission/permission.js"
	import mixinInit from "../../mixins/init.js";
	import {
		mapGetters,
		mapMutations
	} from 'vuex'
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	export default {
		name: 'sendVoice',
		components: {},
		mixins: [mixinInit],
		data() {
			return {
				voiceCancel: false, // 询问录音权限未开启时, app弹窗询问时, touchcancel事件触发, 更改值为true; 为true时, 录音将会停止(解决弹窗询问时允许之后,录音依旧开始记录的问题);
				timer: null,
				intervalTime: 0,
				isRecord: false, //记录状态, 录音中/未开始
				isRecordEnd: false, // 录音结束, 更新ui
				voiceTempPath: '', // 录音临时文件
				audioPlay: false,
			}
		},
		onLoad() {
			let self = this;
			innerAudioContext.onEnded(() => {
				console.log('播放结束')
				self.audioPlay = false;
			})
			
			recorderManager.onStop(function(res) {
				console.log("录音停止" + JSON.stringify(res))
				self.voiceTempPath = res.tempFilePath;
			});
		},
		watch: {
			modalName() {
				let self = this;
				if (this.modalName == 'toastModal') {
					setTimeout(function() {
						self.modalName = "";
					}, 1500);
				}
			}
		},
		computed: {
			...mapGetters(['token']),
			intIntervalTime() {
				return Math.round(this.intervalTime)
			}
		},
		methods: {
			async touchStartHandle() { // 长按--查询录音权限是否开启
				let self = this;
				this.voiceCancel = false;
				// #ifdef APP-PLUS
				if (uni.getSystemInfoSync().platform == "android") {
					let result = await permision.requestAndroidPermission('android.permission.RECORD_AUDIO');
					console.log('权限管理222222', result)
					if (result == 1) {
						console.log('权限管理----', result)

						this.recordVoiceHandle();
						this.voiceCancel = false;
					} else {
						console.log('权限管理++++', result)
						console.log('未给录音权限');
						this.voiceCancel = true;
					}
				}
				if (uni.getSystemInfoSync().platform == "ios") {
					if (permision.judgeIosPermission('record')) {
						this.recordVoiceHandle();
						this.voiceCancel = false;
					} else {
						this.voiceCancel = true;
					}
				}
				// #endif

				// #ifdef MP-WEIXIN
				uni.authorize({
					scope: 'scope.record',
					success: () => {
						console.log('ok')
						self.recordVoiceHandle();
						self.voiceCancel = false;
					},
					fail: () => {
						console.log('fail');
					}
				})
				// #endif
			},
			recordVoiceHandle() {
				let self = this;
				console.log('10101010010000000', this.voiceCancel)
				if (self.voiceCancel) {
					return false;
				}
				self.timer = setInterval(() => {
					self.intervalTime += 0.5;
					if (self.intervalTime >= 60) {
						self.modalShow('toastModal', '录音最多录制6秒');
						recorderManager.stop();
						clearInterval(this.timer);
						this.timer = null;
						this.isRecordEnd = true;
						this.isRecord = false;
						return false;
					}
					if (self.intervalTime >= 0.5 && !self.isRecord) {
						console.log('录音开始');
						self.intervalTime = 0;
						self.isRecord = true;
						recorderManager.start({
							format: "mp3",
							duration: 60000
						})
					}
				}, 500)
			},
			touchCancelHandle() {
				console.log('touchCancel')
				this.voiceCancel = true;
				recorderManager.stop();
				clearInterval(this.timer);
				this.timer = null;
				this.isRecord = false;
			},
			touchEndHandle() {
				let self = this;
				console.log('111111111111111', this.voiceCancel)
				if (self.intervalTime <= 0.5) {
					self.modalShow('toastModal', '录音太短了')
					console.log('录音太短了');
					recorderManager.stop();
					clearInterval(self.timer);
					self.timer = null;
					self.isRecord = false;

					self.voiceCancel = true;
				} else {
					clearInterval(this.timer);
					if (this.isRecord) {
						this.isRecordEnd = true;
						// 延迟小段时间停止录音, 体验更好
						setTimeout(function() {
							recorderManager.stop();
							self.isRecord = false;
							console.log(self.isRecord);
						}, 500);
					}
				}

			},
			resetVoiceHandle() {
				this.isRecordEnd = false; // 将标识重置, 说明用户有意重新录制
				this.audioPlay = false; // 是否播放重置
				this.intervalTime = 0;
				// 之前录制的临时路径置空
				this.voiceTempPath = '';
			},
			playVoiceHandle() {
				//播放录制的音频
				let self = this;
				if (this.audioPlay) {
					innerAudioContext.pause();
					this.audioPlay = false;
				} else {
					if (this.voiceTempPath) {
						innerAudioContext.src = this.voiceTempPath;
						innerAudioContext.play();
						this.audioPlay = true;
						console.log(innerAudioContext.paused);
					}
				}
			},
			sendVoiceHandle() {
				// 发送录制的音频
				let self = this;
				uni.uploadFile({
					url: 'https://api.meetu.letwx.com/v2/sys/upload-voice?token=' + self.token,
					filePath: self.voiceTempPath,
					name: 'voicefile',
					formData: {
						'name': 'voicefile',
						'formData': JSON.stringify({
							'sort': 0
						})
					},
					success: (uploadFileRes) => {
						console.log('upVoiceok', JSON.parse(uploadFileRes.data));
						let voiceNetworkPath = JSON.parse(uploadFileRes.data).data.voiceUrl;
						self.$http1.post('signal/send', {
							type: 2,
							content: voiceNetworkPath,
							seconds: self.intIntervalTime,
						}).then(res => {
							console.log('语音信号', res);
							this.modalShow('toastModal', '信号已发往星球')
							getApp().globalData.sendSignal = true;
							setTimeout(function() {
								uni.navigateBack({
									detail: 1
								})
							}, 1500);
						})
					},
					fail: (err) => {
						console.log('err', err);
					}
				});
			}
		},
		onHide() {
			console.log('onHide')
		}
	}
</script>

<style lang="scss">
	#sendVoicePage {
		.voiceRecordTosat {
			background: rgba(0, 0, 0, 0.2);
			width: 300rpx;
			height: 200rpx;
			border-radius: 10rpx;
			line-height: 200rpx;

			.cuIcon-voice {
				font-size: 100rpx;
				margin-right: 20rpx;
			}

			.voiceAni {
				@keyframes stretchdelay {
					0% {
						background-color: #666666;
					}
					100%{
						background-color: #FFFFFF;
					}
				}

				.rect {
					height: 8rpx;
					border-radius: 6upx;
					margin: 10rpx 0;
				}
				.rect1, .rect2, .rect3, .rect4,{
					background-color: #666666;
					animation: stretchdelay 1.2s infinite ease-in-out;
				}
				
				.rect1 {
					width: 50rpx;
					animation-delay: -0.8s;
				}
				
				.rect2 {
					width: 46rpx;
					animation-delay: -0.9s;
				}

				.rect3 {
					width: 42rpx;
					animation-delay: -1.0s;
				}

				.rect4 {
					width: 38rpx;
					animation-delay: -1.1s;
					
				}

				.rect5 {
					width: 34rpx;
					background-color: #FFFFFF;
				}
			}
		}

		.voice_action {
			position: fixed;
			bottom: 100upx;
			left: 0;
			width: 100%;

			.voice_init {
				width: 220upx;
				height: 220upx;
				line-height: 220upx;
				background-color: #FFFFFF;
				color: #333333;
				margin: 20rpx auto 0;
			}

			.voice_handle {
				margin-top: 20upx;
				display: flex;
				align-items: center;
				justify-content: space-around;

				.voice_reset,
				.voice_send {
					width: 150upx;
					height: 150upx;
					line-height: 150upx;
					color: #FFFFFF;
				}

				.voice_reset {
					background: linear-gradient(to right, #DA61EC, #D04795);
				}

				.voice_send {
					background: linear-gradient(to right, #16BDBB, #2464CE);
				}

				.voice_play {
					width: 220upx;
					height: 220upx;
					line-height: 220upx;
					background-color: #FFFFFF;
				}
			}
		}
	}
</style>
