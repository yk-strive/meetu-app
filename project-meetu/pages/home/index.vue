<template>
	<view id="homePage" class="bg_page_1">
		<custom-nav :isBack="false"></custom-nav>
		<view class="AppName text-white text-lg">{{appName}}</view>
		<view class="avatar round" @tap.stop="linkUser">
			<image class="wh-100" v-bind:src="userInfo.headimgurl"></image>
		</view>
		
		<view class="home_bottom_act">
			<view v-if="showSendToast" class="toast abs-center text-white text-xxs">
				<text>给茫茫宇宙发射一个信号寻找远方的回应</text>
			</view>
			<view class="home_action">
				<view class="action_item" v-on:click="linkAction('search')">
					<image src="../../static/meetu-img/home_action1.png" mode="aspectFill"></image>
				</view>
				<view class="action_item" v-on:click="linkAction('send')">
					<image src="../../static/meetu-img/home_action2.gif" mode="aspectFill"></image>
				</view>
				<view class="action_item" v-on:click="linkAction('chatList')">
					<image src="../../static/meetu-img/home_action3.png" mode="aspectFill"></image>
					<view v-if="notreadNum>0" class="cu-tag badge">{{notreadNum}}</view>
				</view>
			</view>
			<view class="action_num text-center text-white text-xxs">
				今日剩余次数：<text v-if="userNumber">{{userNumber.signal_config-userNumber.signal_number}}/{{userNumber.signal_config}}</text> 
			</view>
		</view>
		
		<cu-modal :modalName="modalName" @hideModal="hideModal">
			<block slot="bottomModal">
				<view class="modal_info">
					<view class="modal_info_item" @tap.stop="linkAction('sendText')">
						<view class="img_box round">
							<image class="abs-center" src="../../static/meetu-img/home_modal_text.png" mode="aspectFill"></image>
						</view>
						<view class="send_type text-letter-df text-df text-center">
							<text>发布文字信号</text>
						</view>
						<view class="send_type_tip text-letter-df text-xxs text-black-m text-center padding-bottom-xs">
							<text>文字黑洞</text>
						</view>
						<view class="send_type_tip text-letter-df text-xxs text-black-m text-center">
							<text>有什么话想对ta说</text>
						</view>
					</view>
					<view class="modal_info_item"  @tap.stop="linkAction('sendVoice')">
						<view class="img_box round">
							<image class="abs-center" src="../../static/meetu-img/home_modal_voice.png" mode="aspectFill"></image>
						</view>
						<view class="send_type text-letter-df text-df text-center">
							<text>发布语音信号</text>
						</view>
						<view class="send_type_tip text-letter-df text-xxs text-black-m text-center padding-bottom-xs">
							<text>星球传呼机</text>
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
	import cuModal from "@/meetu-ui/components/cu-modal.vue";
	import { mapGetters } from 'vuex';
	export default {
		name: 'homeIndex',
		components: {
			cuModal
		},
		data() {
			return {
				modalName: '', // 弹窗类型-modal/bottomModal
				appName: 'Meet U',
				showSendToast: false,
				userNumber: null,
				notreadNum: 0
			}
		},
		computed: {
			...mapGetters(['userInfo'])
		},
		onLoad() {
			this.api_UserInfo();
			this.api_UserNumber();
		},
		onReady() {
			if(uni.getStorageSync('homeSendToast')) {
				this.showSendToast = false;
			} else {
				this.showSendToast = true;
			}
		},
		methods: {
			api_UserInfo(){
				this.$http1.post('user/info').then(res=>{
					// this.userinfo = res.data;
					this.$store.dispatch('changeVal', {stateKey: 'userInfo', newValue: res.data})
				}).catch(err=>{
					console.log('userinfo-err', err);
				})
			},
			api_UserNumber() {//操作剩余次数
				this.$http1.post('user/number').then(res=>{
					console.log('userNumber', res.data);
					this.userNumber = res.data;
				}).catch(err=>{
					
				})
			},
			linkUser() {
				uni.navigateTo({
					url: '../user/index',
					animationDuration: 300,
					animationType: 'slide-in-bottom'
				})
			},
			linkAction(type) {
				switch (type){
					case 'search':
						uni.navigateTo({
							url: '../search/search',
							animationDuration: 300,
							animationType: 'slide-in-bottom'
						})
						break;
					case 'send':
						if(!uni.getStorageSync('homeSendToast')) {
							uni.setStorageSync('homeSendToast', true);
							this.showSendToast = false;
						} 
						this.modalName = 'bottomModal';
						break;
					case 'chatList':
						uni.navigateTo({
							url: '../chat/list',
							animationDuration: 300,
							animationType: 'slide-in-bottom'
						})
						break;
					case 'sendText':
						this.modalName = '';
						uni.navigateTo({
							url: '../send/text',
							animationDuration: 300,
							animationType: 'slide-in-bottom'
						})
						break;
					case 'sendVoice':
						this.modalName = '';
						uni.navigateTo({
							url: '../send/voice',
							animationDuration: 300,
							animationType: 'slide-in-bottom'
						})
						break;
				}
			},
			hideModal() {
				this.modalName = '';
			}
		}
	}
</script>

<style lang="scss">
	#homePage {
		.AppName {
			padding-left: 50upx;
		}
		.avatar {
			position: fixed;
			top: 140upx;
			right: 50upx;
			width: 120upx;
			height: 120upx;
			overflow: hidden;
			box-shadow: 0 0  12upx 12upx #69417C;
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
						width: 77upx;
						height: 80upx;
					}
				}
				.action_item:nth-child(2) {
					image {
						width: 130upx;
						height: 152.6upx;
					}
				}
				.action_item:nth-child(3) {
					image {
						width: 77upx;
						height: 64upx;
					}
					.badge  {
						right: 28%;
						top: -20upx;
					}
				}
			}
			.action_num {
				margin-top: 20upx;
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
	}
</style>