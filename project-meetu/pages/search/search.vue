<template>
	<view id="searchPage" class="bg_page_1">
		<custom-nav :isBack="true"></custom-nav>
		<image class="img_bg abs-center" src="../../static/meetu-img/xingqiu.png" mode="aspectFill"></image>
		<image class="img_change" @tap.stop="searchChange" src="../../static/meetu-img/huan.png"></image>
		<view class="search_view">
			<view v-if="isSearch" class="text-center text-white padding-top-lg">信号搜寻中, 请期待~~</view>
			<view class="search_item animation-slide-bottom" v-show="item" v-for="item,index in searchValue" :key="index" :style="[{left: tempLeftNum[index] + 'px'}, {top:tempTopNum[index] + 'px'}, {animationDelay: (index + 1)*0.1 + 's'}]"
			 @click="openStarHandle(item, index)">
				<image class="img_star" src="../../static/meetu-img/star.png"></image>
				<image class="img_avatar round abs-center" :src="item.avatar"></image>
			</view>
		</view>

		<cu-modal :modalName="modalName" @hideModal="hideModal">
			<block slot="modal">
				<view class="open_star">
					<!-- 信息展示 -->
					<view class="action_one wh-100 padding-lg">
						<view class="user_info">
							<view class="avatar">
								<image class="wh-100 round" :src="openItem.avatar"></image>
							</view>
							<view>
								<view class="name text-sm text-left text-letter-df">
									<text>{{openItem.name}}</text>
									<image :src="openItem.sex==1 ? '../../static/meetu-img/female.png' : '../../static/meetu-img/male.png'"></image>
								</view>
								<view class="text-xxs text-black-m text-left text-letter-df">
									<text>从 未知星球 发来信号</text>
								</view>
							</view>
						</view>
						<view class="star_info text-sm text-letter-df text-left">
							<text v-if="openItem.contenttype == 'text'">{{openItem.content}}</text>
							<image class="wh-100" v-if="openItem.contenttype == 'img'" :src="openItem.content" mode="aspectFill"></image>
							<view class="voice" v-if="openItem.contenttype == 'voice'" @click="playVoiceHandle(openItem.content)">
								<image :src="voicePlay ? '../../static/meetu-img/xh.gif' : '../../static/meetu-img/xh.png'" mode="aspectFill"></image>
							</view>
						</view>
						<view class="btn">
							<button class="cu-btn text-sm" @tap.stop="hideModal('hide')">忽略</button>
							<button class="cu-btn text-sm" @tap.stop="actionTwoToggle('open')">回应</button>
						</view>
					</view>
					<!-- 回应信息 -->
					<view class="action_two wh-100" :class="[showActionTwo?'animation-right-in':'', !showActionTwo?'animation-right-out':'']">
						<form @submit="submitSendHandle">
							<textarea v-model="textareaValue" name="sendtext" placeholder="请跟ta打个招呼吧～" />
							<view class="btn">
								<image class="back fl" src="../../static/meetu-img/back.png" @click="actionTwoToggle('close')"></image>
								<button class="cu-btn fr submit" form-type="submit">发送</button>
							</view>
						</form>
					</view>
				</view>
			</block>
		</cu-modal>
	</view>
</template>

<script>
	import cuModal from "@/meetu-ui/components/cu-modal.vue";
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	export default {
		name: 'serach',
		components: {
			cuModal
		},
		data() {
			return {
				searchItemW: uni.upx2px(74),
				searchItemH: uni.upx2px(74),
				maxWNum: 0, // search_view的宽 能包含多少个 searchItemW 的最大值
				maxHNum: 0, // search_view的高 能包含多少个 searchItemH 的最大值
				tempLeftNum: [], // 存储每一次搜寻到的信号 位置信息(left)
				tempTopNum: [], // 存储每一次搜寻到的信号 位置信息(top)
				// 以上是和信号位置信息相关

				modalName: '',
				isSearch: true,
				searchValue: [],
				openItem: null, // 打开某一星星的内容
				openNum: 0,  // 打开星星的次数
				showActionTwo: false,
				textareaValue: '',
				voicePlay: false, 
			}
		},
		onLoad() {
			let self = this;
			innerAudioContext.onEnded(() => {
				console.log('播放结束')
				self.voicePlay = false;
			});
		},
		onReady() {
			let self = this;
			const query = uni.createSelectorQuery();
			query.select('.search_view').boundingClientRect(data => {
				// console.log(data);
				self.maxWNum = data.width / self.searchItemW;
				self.maxHNum = data.height / self.searchItemW;
			}).exec();

			this.searchChange();
		},
		methods: {
			randomLocationLeft() { // 获取随机left的位置
				let left_random = this.getRandomIntInclusive(1, this.maxWNum - 1) * this.searchItemW;
				if (this.tempLeftNum.length === 0) {
					this.tempLeftNum.push(left_random);
				} else {
					if (this.tempLeftNum.indexOf(left_random) != -1) {
						this.randomLocationLeft();
					} else {
						this.tempLeftNum.push(left_random);
					}
				}

			},
			
			randomLocationTop() { // 获取随机top的位置
				let top_random = this.getRandomIntInclusive(1, this.maxHNum - 1) * this.searchItemH;
				if (this.tempTopNum.length === 0) {
					this.tempTopNum.push(top_random);
				} else {
					if (this.tempTopNum.indexOf(top_random) != -1) {
						this.randomLocationTop();
					} else {
						this.tempTopNum.push(top_random);
					}
				}
			},

			getRandomIntInclusive(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
			},

			searchChange() { // 点击--换一换(请求接口)
				this.tempLeftNum = [];
				this.tempTopNum = [];
				this.searchValue = [];
				this.isSearch = true;
				this.openNum = 0;
				setTimeout(() => {
					this.isSearch = false;
					this.searchValue = [{
							name: '测试1',
							avatar: '../../static/logo.png',
							sex: 1 ,
							contenttype: 'text',
							content: '命运！不配做我的对手！ |  将这混乱的时代拉回正轨！ | 虽然身为坦克，但是依然不缺少一代王者的霸气！'
						},
						{
							name: '测试2',
							avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
							sex: 1,
							contenttype: 'text',
							content: '不是你记忆中的荆轲，但致命的程度，没两样！ | 不知道你的名字，但清楚你的死期！命运！不配做我的对手！ |  将这混乱的时代拉回正轨！ | 虽然身为坦克，但是依然不缺少一代王者的霸气'
						},
						{
							name: '测试3',
							avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
							sex: 1,
							contenttype: 'img',
							content: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1239991101,3265901600&fm=173&app=25&f=JPEG?w=640&h=360&s=E8D0618C427785C61AD9A18903003082'
						},
						{
							name: '测试4',
							avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
							sex: 1,
							contenttype: 'voice',
							content: '../../static/temp.mp3'
						},
						{
							'name': '测试5',
							avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
							sex: 0,
							contenttype: 'voice',
							content: '../../static/temp.mp3'
						},
					]
					for (var i = 0; i < this.searchValue.length; i++) {
						this.randomLocationLeft();
						this.randomLocationTop();
					}
					// console.log(this.tempLeftNum);
					// console.log(this.tempTopNum);
				}, 2000);
			},

			openStarHandle(item,index) { // 打开信号
				this.modalName = 'Modal';
				this.openItem = item;
				this.openNum += 1;
				this.searchValue.splice(index, 1, null);
				
				if (this.openNum >= 5) {
					this.searchChange();
				}
			},

			hideModal(type) { // 隐藏cu-modal
				if (type) {
					this.modalName = '';
					setTimeout(()=> {
						if (this.openItem.contenttype == 'voice') { // 声音信号隐藏弹窗时的处理
							if (!innerAudioContext.paused) {
								innerAudioContext.stop();
							}
							innerAudioContext.src = '';
							this.voicePlay = false;
						}
						this.openItem = null;
					}, 300);
				}
			},
		
			playVoiceHandle(voiceContent) { // 播放星星信号--语音
				if (this.voicePlay) {
					innerAudioContext.pause();
					this.voicePlay = false;
				} else {
					if (voiceContent) {
						innerAudioContext.src = voiceContent;
						innerAudioContext.play();
						this.voicePlay = true;
					}
				}
			},
			
			actionTwoToggle(type) { // 展示回应消息UI
				if (type == 'open') {
					this.showActionTwo = true;
				} else {
					this.showActionTwo = false;
				}
			},
			
			submitSendHandle(e) { // 提交回应消息
				// console.log(e);
				
				// 提交消息完成,textarea值置空, 隐藏弹窗, 回应消息UI状态重置
				this.textareaValue = '';
				this.hideModal('hide');
				this.showActionTwo = false;
			}
		},
	}
</script>

<style lang="scss">
	@import "../../meetu-ui/animation.css";

	#searchPage {
		.img_bg {
			width: 100%;
			top: 55%;
		}

		.img_change {
			position: fixed;
			bottom: 50upx;
			left: 50%;
			transform: translateX(-50%);
			width: 216upx;
			height: 64upx;
		}

		.search_view {
			width: 100%;
			height: 50%;
			padding: 100upx 50upx;
			position: relative;

			.search_item {
				position: absolute;
				// width: 74upx;
				// height: 74upx;
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				box-shadow: 0 0 10rpx 8rpx #904ADB;
				.img_star {
					width: 74upx;
					height: 72upx;
					position:absolute;
					top:44%;
					left:49%;
					transform:translate(-50%, -50%);
				}

				.img_avatar {
					width: 40upx;
					height: 40upx;
				}
			}
		}

		.cu-modal {
			background: rgba(0, 0, 0, 0.4);

			.cu-dialog {
				width: 526rpx;
				height: 432rpx;
				box-shadow: 0 0 6rpx 6rpx #4D2797;
			}
		}

		.open_star {
			width: 526rpx;
			height: 432rpx;
			position: relative;

			.action_one {
				position: absolute;
				.user_info {
					display: flex;
					align-items: center;
					.avatar {
						width: 100rpx;
						height: 100rpx;
						margin-right: 30rpx;
					}
					.name {
						color: #3A1091;
						padding-bottom: 10rpx;
						image {
							width: 24rpx;
							height: 24rpx;
							margin-left: 10rpx;
						}
					}
				}
				
				.star_info {
					height: 170rpx;
					padding: 4rpx 6rpx;
					overflow-y: scroll;
					image {
						margin: 6rpx 0;
					}
					.voice {
						width: 60%;
						height: 80rpx;
						margin: 40rpx auto 0;
						border-radius: 100rpx;
						background-color: #DDDDDD; 
						text-align: center;
						image {
							width: 70rpx;
							height: 26rpx;
							margin-top: 26rpx;
						}
					}
				}
				
				.btn {
					button {
						width: 190rpx;
						height: 70rpx;
						margin-top: 24rpx;
						letter-spacing: 10rpx;
						color: #FFFFFF;
						border-radius: 36rpx;
					}
					button:nth-child(1) {
						background-color: #7B50D0;
						margin-right: 30rpx;
					}
					button:nth-child(2) {
						background-color: #EB2774;
						margin-left: 30rpx;
					}
				}
			}
			.action_two {
				position: absolute;
				top: 0;
				transform: translateX(100%);
				z-index: 3;
				padding: 35rpx 30rpx;
				background-color: #FFFFFF;
				textarea {
					width: 466rpx;
					height: 278rpx;
					padding: 10rpx;
					border: 2rpx solid #D2D2D2;
					border-radius: 10rpx;
					text-align: left;
				}
				.btn {
					margin-top: 30rpx;
					.back {
						width: 30rpx;
						height: 52rpx;
						padding-top: 9rpx;
					}
					.submit {
						width: 190rpx;
						height: 70rpx;
						letter-spacing: 10rpx;
						color: #FFFFFF;
						border-radius: 36rpx;
						background-color: #EB2774;
					}
				}
			}
		
			.animation-right-in {
				animation-name: slide-right-in
			}
			.animation-right-out {
				animation-name: slide-right-out
			}
			@keyframes slide-right-in {
				0% {
				    opacity: 0;
				    transform: translateX(100%)
				}
				
				100% {
				    opacity: 1;
				    transform: translateX(0)
				}
			}
			@keyframes slide-right-out {
				0% {
				    opacity: 1;
				    transform: translateX(0)
				}
				
				100% {
				    opacity: 0;
				    transform: translateX(100%)
				}
			}
		}
	}
</style>
