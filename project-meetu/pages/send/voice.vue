<template>
	<view id="sendVoicePage" class="bg_page_1">
		<!-- <web-view src="http://q.letwx.com/app/ggchristmas2019-build/index.html"></web-view> -->
		<custom-nav :isBack="true" textTitle="发布语音信号"></custom-nav>
		<view class="voice_action">
			<view class="voice_time text-white text-center">
				<text>{{intIntervalTime}}</text>
			</view>
			<view v-if="!isRecordEnd" class="voice_init round text-xl text-center" @touchstart="voiceStartHandle" @touchend="voiceEndHandle">
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
	</view>
</template>

<script>
	import permision from "@/js_sdk/wa-permission/permission.js"
	import jsfunRecord from '@/components/jsfun-record/jsfun-record.vue'
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	export default {
		name: 'sendVoice',
		components: {
			jsfunRecord
		},
		data() {
			return {
				// recorderManager: null,
				timer: null,
				intervalTime: 0,
				isRecord: false, //记录状态, 录音中/未开始
				isRecordEnd: false,
				voiceTempPath: '',
				audioPlay: false,
			}
		},
		onLoad() {
			let self = this;
			// recorderManager.onStop(function(res) {
			// 	console.log("录音停止" + JSON.stringify(res))
			// 	self.voiceTempPath = res.tempFilePath;
			// });
			innerAudioContext.onEnded(()=>{
				console.log('播放结束')
				self.audioPlay = false;
			})
		},
		computed: {
			intIntervalTime() {
				return Math.round(this.intervalTime)
			}
		},
		methods: {
			voiceStartHandle() {
				// let ua = uni.
				if (uni.getSystemInfoSync().platform == "android") {
					if (permision.requestAndroidPermission('android.permission.RECORD_AUDIO')) {
						this.timer = setInterval(()=> {
							this.intervalTime += 0.5;
							if (this.intervalTime >= 0.5 && !this.isRecord) {
								console.log('录音开始');
								this.intervalTime = 0;
								this.isRecord = true;
								recorderManager.start({
									format: "mp3"
								})
							}
						}, 500)
					}
				}
				if (uni.getSystemInfoSync().platform == "ios") {
					
				}
			},
			voiceEndHandle() {
				let self = this;
				if(this.intervalTime <= 0.5) {
					console.log('录音太短了');
				}
				clearInterval(this.timer);
				if (this.isRecord) {
					this.isRecordEnd = true;
					// 延迟小段时间停止录音, 体验更好
					setTimeout(function() {
						recorderManager.stop();
						self.isRecord = false;
						console.log(self.isRecord);
						recorderManager.onStop(function(res) {
							console.log("录音停止" + JSON.stringify(res))
							self.voiceTempPath = res.tempFilePath;
						});
					}, 500);
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
				let _this = this;
				if (this.audioPlay) {
					innerAudioContext.pause();
					this.audioPlay = false;
				} else {
					if (this.voiceTempPath) {
						innerAudioContext.src = this.voiceTempPath;
						innerAudioContext.play();
						this.audioPlay = true;
					}
				}
			},
			sendVoiceHandle() {
				// 发送录制的音频
			}
		},
	}
</script>

<style lang="scss">
	#sendVoicePage {
		.voice_action {
			position: fixed;
			bottom: 100upx;
			left: 0;
			width: 100%;
			.voice_init {
				width: 180upx;
				height: 180upx;
				line-height: 180upx;
				background-color: #FFFFFF;
				color: #333333;
				margin: 20upx auto;
			}
			.voice_handle {
				margin-top: 20upx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				
				.voice_reset, .voice_send {
					width: 120upx;
					height: 120upx;
					line-height: 120upx;
					color: #FFFFFF;
				}
				.voice_reset {
					background: linear-gradient(to right, #DA61EC, #D04795);
				}
				.voice_send {
					background: linear-gradient(to right, #16BDBB, #2464CE);
				}
				.voice_play {
					width: 180upx;
					height: 180upx;
					line-height: 180upx;
					background-color: #FFFFFF;
				}
			}
		}
	}
</style>
