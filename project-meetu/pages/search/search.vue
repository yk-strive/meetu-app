<template>
	<view id="searchPage" class="bg_page_1">
		<custom-nav :isBack="true"></custom-nav>
		<image class="img_bg abs-center" src="../../static/meetu-img/xingqiu.png" mode="aspectFill"></image>
		<image class="img_change" @tap.stop="searchChange" src="../../static/meetu-img/huan.png"></image>
		<view class="search_view">
			<view v-if="isSearch" class="text-center text-white padding-top-lg">信号搜寻中, 请期待~~</view>
			<view class="search_item" v-show="item.isDisplay" v-for="item,index in searchValue" :key="index"
			 :class="starsAni ? 'star-boxs' : 'animation-slide-bottom'"
			 :style="[{left: item.left + 'px'}, {top:item.top + 'px'}, {animationDelay: (index + 1)*0.1 + 's'}]" @click="openStarHandle(item, index)">
				<image class="img_star" src="../../static/meetu-img/star.png"></image>
				<image class="img_avatar round abs-center" :src="item.headimgurl" mode="aspectFill"></image>
			</view>
		</view>

		<cu-modal :modalName="modalName" @hideModal="hideModal" @dialogConfirm="dialogConfirm" :toastText="toastText"
		 :dialogText="dialogText" :dialogSureText="dialogSureText">
			<block slot="modal">
				<view class="open_star">
					<!-- 信息展示 -->
					<view class="action_one wh-100 padding-lg">
						<view class="user_info">
							<view class="avatar">
								<image class="wh-100 round" :src="openItem.headimgurl" mode="aspectFill"></image>
								<image class="img_vip" v-if="openItem.isvip == 1" src="../../static/meetu-img/vip.png" mode="aspectFill"></image>
							</view>
							<view>
								<view class="name text-sm text-left text-letter-df">
									<text>{{openItem.nickname}}</text>
									<image :src="openItem.sex==1 ? '../../static/meetu-img/male.png' : '../../static/meetu-img/famale.png'"></image>
								</view>
								<view class="text-xxs text-black-m text-left text-letter-df">
									<text>从 未知星球 发来信号</text>
								</view>
							</view>
						</view>
						<view class="star_info text-sm text-letter-df text-left">
							<text v-if="openItem.type == 1">{{openItem.content}}</text>
							<image class="wh-100" v-if="openItem.type == 3" :src="openItem.content" mode="aspectFill"></image>
							<view class="voice flex-df" v-if="openItem.type == 2" @click="playVoiceHandle(openItem.content)">
								<image :src="voicePlay ? '../../static/meetu-img/xh.gif' : '../../static/meetu-img/xh.png'" mode="aspectFill"></image>
								<text>{{openItem.seconds}}s</text>
							</view>
						</view>
						<view class="btn">
							<button class="cu-btn text-sm" @tap.stop="neglectHandle()">忽略</button>
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
	import mixinInit from '../../mixins/init.js';
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	export default {
		name: 'serach',
		components: {
			cuModal
		},
		mixins: [mixinInit],
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
				isSearch: true,  // 展示搜索时的提示
				
				searchValue: [],
				isNewSignal: false, // 是否用新的信号(>5)
				
				openItem: null, // 打开某一星星的内容
				openNum: 0,  // 打开星星的次数
				showActionTwo: false,
				textareaValue: '',
				voicePlay: false, 
				
				starsAni: false,
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
			setTimeout(function() {
				self.starsAni = true;
			}, 1500);
		},
		
		// 存储-- searchInfo: {searchValue: [], page: }
		onShow() {
			let self = this;
			const query = uni.createSelectorQuery();
			query.select('.search_view').boundingClientRect(data => {
				// console.log(data);
				self.maxWNum = data.width / self.searchItemW;
				self.maxHNum = data.height / self.searchItemW;
				self.initData();
			}).exec();
		},
		watch: {
			isNewSignal() {
				if (this.isNewSignal) {
					this.api_SignalReceive();
				}
			}
		},
		methods: {
			api_SignalReceive() {
				let self = this;
				this.$http1.post('signal/receive',{
					page: self.page
				}).then(res=>{
					this.isSearch = false;
					self.clog('搜寻结果'+self.page, res);
					this.randomLocationLeft();
					this.randomLocationTop();
					if (res.data && res.data.length > 0) {
						for (var i = 0; i < res.data.length; i++) {
							res.data[i].isDisplay = true; // 每一项添加isDisplay--true展示, false隐藏
							
							// 每一项的位置的补充, 方便页面卸载/隐藏时 直接存储.
							res.data[i].top = this.tempTopNum[i];
							res.data[i].left = this.tempLeftNum[i];
						}
						self.searchValue = res.data;
						this.page += 1;
					} else {
						// self.clog('没有搜寻结果++'+self.page);
						// if(self.page == 1) {
						// 	this.modalShow('toastModal', '没有更多信号了');
						// } else {
							self.page = 1;
							self.api_SignalReceive();
						// }
					}
				}).catch(err=>{
					console.log(err)
					this.modalShow('toastModal', err.msg);
				})
			},
			
			api_SignalRefresh() {
				console.log('刷星');
				let self = this;
				this.$http1.post('signal/refresh').then(res=>{
					self.clog('刷新信号', res);
					if(res.data.number >= 5) { // 有超过5条的新信号了
						this.page = 1;
						this.isNewSignal = true;
					} else {
						this.isNewSignal = false;
						this.api_SignalReceive();
					}
				}).catch(err=>{
					if (err.code == '300010') {
						this.modalName = 'dialogModal';
						this.dialogText = err.msg;
						this.dialogSureText = '充值星豆';
					}
				})
			},
			
			api_SignalNeglect(signalId) {
				this.$http1.post('signal/neglect', {
					signal_id: signalId
				}).then(res=>{
					this.modalName = '';
					this.stopVoiceHandle();
					this.openItem = null;
				})
			},
			
			api_SignalReply(signalId,content) {
				this.$http1.post('signal/reply', {
					signal_id: signalId,
					content: content
				}).then(res=>{
					// 提交消息完成,textarea值置空, 隐藏弹窗, 回应消息UI状态重置
					this.textareaValue = '';
					this.modalName = '';
					// this.hideModal('hide');
					this.showActionTwo = false;
					this.stopVoiceHandle();
					this.openItem = null;
					setTimeout(() => {
						this.modalShow('toastModal', '回复成功');
					}, 100);
				})
			},
			initData() { // 页面初始
				/**
				 * 搜索信号原则 (因为有搜索次数限制/次数用完星豆消耗的机制, 所以需要这样做.)
				 * 	第一次进入时(没有存储搜索信息-即App下载后第一次进入该页面时)
				 * 		请求搜索信号接口, 获取数据
				 *	其余情况进入
				 * 		获取存储的数据, 页面展示
				 * 按照这个原则, 在 页面隐藏onHide(手机Home键,手机进入后台程序)/页面卸载onUnload(uni-back,手机返回按钮) 时,
				 * 		需要保存当前的数据.
				 * 按钮刷一刷
				 * 		需要先请求 api_SignalRefresh, 会返回number, 
				 * 			number有数据且&&>5时, 就从第一页page=1开始请求.
				 * 			number无数据 || <5, page++
				 * */
				if (uni.getStorageSync('searchInfo')) {
					let searchInfo = JSON.parse(uni.getStorageSync('searchInfo'));
					this.clog('存储的搜索信息', searchInfo);
					this.isSearch = false;
					this.searchValue = searchInfo.searchValue;
					this.page = searchInfo.page
				} else {
					this.api_SignalReceive();
				}
			},
			
			saveData() {
				let self = this;
				let searchInfo = {
					searchValue: self.searchValue,
					page: self.page
				}
				uni.setStorage({
					key: 'searchInfo',
					data: JSON.stringify(searchInfo)
				})
			},
			
			randomLocationLeft() { // 获取随机left的位置
				this.tempLeftNum = this.selectRandom(5, 1, this.maxWNum - 1).map(num=>{
					return num*this.searchItemW
				});
				console.log(this.tempLeftNum)
			},
			
			randomLocationTop() { // 获取随机top的位置
				this.tempTopNum = this.selectRandom(5, 1, this.maxWNum - 1).map(num=>{
					return num*this.searchItemH
				});
			},
			
			selectRandom (num, from, to) {
			    let arr = [];
			    let json = {};
			    let needNum;
			
			    if (from - to >= 0) {
			        console.log(111)
			        return '起始值要小于末尾值'
			    }
			
			    if (to - from == to) {
			        needNum = parseInt(to) + 1;
				} else {
			        needNum = to - from;
			    }
			    if (num > needNum) {
			        return
			    } else {
			        while (arr.length < num) {
			          let ranNum = Math.ceil(Math.random() * needNum);
			          if (!json[ranNum]) {
			            json[ranNum] = 1;
			            arr.push(ranNum)
			          }
			        }
			        return arr;
			    }
			},

			searchChange() { // 点击--换一换(请求接口)
				this.tempLeftNum = [];
				this.tempTopNum = [];
				this.searchValue = [];
				this.isSearch = true;
				this.openNum = 0;
				this.api_SignalRefresh();
			},

			openStarHandle(item,index) { // 打开信号
				this.modalName = 'Modal';
				this.openItem = item;
				this.openNum += 1;
				// this.searchValue.splice(index, 1, null);
				this.searchValue[index].isDisplay = false;
				
				if (this.openNum >= this.searchValue.length) {
					// this.searchChange();
				}
			},
			neglectHandle() { //忽略信息
				this.api_SignalNeglect(this.openItem.id);
			},
			hideModal() { // 隐藏cu-modal -- 这里只做星豆不足,dialog提示关闭/ 其余打开信号--在忽略和回复接口成功时进行关闭
				if (this.modalName == 'dialogModal') {
					this.modalName = '';
				}
			},
			
			dialogConfirm() {
				this.modalName = "";
				uni.navigateTo({
					url: '../user/coin',
					animationDuration: 300,
					animationType: 'fade-in'
				})
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
			stopVoiceHandle() { // 停止语音播放
				if (this.openItem && this.openItem.contenttype == 'voice') {
					if (!innerAudioContext.paused) {
						innerAudioContext.stop();
					}
					innerAudioContext.src = '';
					this.voicePlay = false;
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
				this.api_SignalReply(this.openItem.id, this.textareaValue);
				// 提交消息完成,textarea值置空, 隐藏弹窗, 回应消息UI状态重置
				// this.textareaValue = '';
				// this.hideModal('hide');
				// this.showActionTwo = false;
			}
		},
		onHide() {
			console.log('----隐藏----')
			this.stopVoiceHandle();
			this.saveData();
		},
		// onBackPress() {
		// 	console.log('----页面返回----');
		// },
		onUnload() {
			this.stopVoiceHandle();
			this.saveData();
			console.log('----页面卸载----');
		}
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

			.star-boxs{
				animation: star-boxs 2s linear both infinite;
			}
			.search_item {
				position: absolute;
				width: 50rpx;
				height: 50rpx;
				border-radius: 50%;
				box-shadow: 0 0 10rpx 8rpx rgba(144,74,219,1);
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
				@keyframes star-boxs {
					0% {
						box-shadow: 0 0 10rpx 8rpx rgba(144,74,219,1);
					}
				
					50% {
						box-shadow: 0 0 10rpx 8rpx rgba(144,74,219,0.2);
					}
				
					100% {
						box-shadow: 0 0 10rpx 8rpx rgba(144,74,219,1);
					}
				}
			}
		}

		.cu-modal.Modal {
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
						position: relative;
						.img_vip {
							position: absolute;
							bottom: 16rpx;
							right: 20rpx;
							z-index: 6;
						}
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
