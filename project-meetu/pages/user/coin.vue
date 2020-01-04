<template>
	<view id="coinPage" class="bg_page_3">
		<custom-nav :isBack="true" textTitle="我的星豆" textRight="星豆记录" @right="navRightHandle"></custom-nav>
		<view class="coin-wrap">
			<view class="coin_info">
				<view class="num text-center coin-color">
					<text>{{userInfo.totalpoints}}</text>
					<text class="padding-left-sm padding-right-xs">x</text>
					<image class="coin-img" src="../../static/meetu-img/dou.png" mode="aspectFill"></image>
				</view>
				<view class="recharge flex-df margin-top">
					<button class="cu-btn round text-white" @click="showTechargeModal">充值</button>
				</view>
			</view>
			<view class="coin_action">
				<view class="text-white">免费获得星豆</view>
				<view class="action_item flex-df radius" v-for="item,index in pointsList" :key="index" @tap.stop="pointsTapHandle(item)">
					<view class="icon_box round flex-df">
						<image :src="item.icon"></image>
					</view>
					<view class="content">
						<view class="text-white">{{item.name}}</view>
						<view class="text-xs padding-top-xs desc">{{item.describe}}</view>
					</view>
					<view class="add_num coin-color">
						<text>+<text class="text-xxl">{{item.value}}</text></text>
					</view>
				</view>
			</view>
		</view>
		
		<cu-modal :modalName="modalName" :toastText="toastText" :dialogText="dialogText" :dialogSureText="dialogSureText" @hideModal="hideModal" @dialogConfirm="dialogConfirm">
			<block slot="bottomModal">
				<view class="recharge_modal">
					<view class="title text-center text-lg">
						<text>星币充值</text>
					</view>
					<view class="action_item flex-df" v-for="item,index in pointsPropery" :key="index" @tap.stop="properyHandle(item)">
						<view class="coin">
							<image class="coin-img" src="../../static/meetu-img/dou.png"></image>
							<text class="padding-left-xs text-xxl">{{item.value}}</text>
						</view>
						<view class="discount" v-if="item.giving>0">
							<text class="text-black-m">限时赠送</text>
							<text class="coin-discount-color">+<text class="text-xxl">{{item.giving}}</text></text>
						</view>
						<view class="price text-xl">
							<text class="text-price">{{item.money}}</text>
						</view>
						<view class="discount_tip" v-if="item.giving>0">
							<text>限时特惠</text>
						</view>
					</view>
				</view>
			</block>
		</cu-modal>
	</view>
</template>

<script>
	import cuModal from "@/meetu-ui/components/cu-modal.vue";
	import mixinInit from "../../mixins/init.js";
	import { mapGetters} from "vuex";
	export default {
		name: 'coin', // 虚拟币-星豆
		components: {
			cuModal
		},
		mixins: [mixinInit],
		computed: {
			...mapGetters(['userInfo'])
		},
		data() {
			return {
				modalName: '',
				pointsList: [],
				pointsPropery: [],
				payOk: false,
				orderSn: null,
				orderInfo: null,
			}
		},
		watch: {
			payOk(newValue, oldValue) {
				if (this.payOk) {
					this.api_UserInfo();
				}
			}
		},
		onLoad() {
			this.api_PointsList();
			this.api_PointsProperty()
		},
		methods: {
			api_PointsList() {
				let self = this;
				this.$http1.post('points/list', {
					page: self.page
				}).then(res=>{
					// self.clog('星豆任务列表', res);
					self.pointsList = res.data;
				})
			},
			api_PointsProperty() {
				let self = this;
				this.$http1.post('points/property', {}, {
					custom: {istoken: false}
				}).then(res=>{
					// self.clog('星豆规格', res);
					self.pointsPropery = res.data;
				})
			},
			api_UserInfo() {
				this.$http1.post('user/info').then(res => {
					this.$store.dispatch('changeVal', {
						stateKey: 'userInfo',
						newValue: res.data
					})
				}).catch(err => {
					console.log('userinfo-err', err);
				})
			},
			async api_OrderCreate(item) {
				let self = this;
				if (!item) {
					self.modalShow('toastModal', '请选择充值规格');
					return false;
				}
				let rstOrder = await self.$http1.post('order/create', {
					fee: item.money,
					type: 1, // 1-星豆, 2-vip
					property: item.id,
					pay_type: 1, // 1-微信, 2-支付宝, 3-银联  暂时只对接微信
					status: 'unpaid'
				})
				self.clog('下单', rstOrder)
				if (rstOrder.code == 0) {
					this.orderSn = rstOrder.data.order_sn;
					return rstOrder.data.order_sn
				} else {
					self.modalShow('toastModal', rstOrder.msg);
					return false;
				}
			},
			
			async api_OrderCancel() {
				if (!this.orderSn) {
					return false;
				}
				let self = this;
				let orderCancel = await this.$http1.post('order/cancel', {
					order_sn: self.orderSn
				});
				if (orderCancel.code == 0) {
					this.orderSn = null;
					self.modalShow('toastModal', '订单删除成功');
				}
			},
			
			async api_WxPay(orderSn) {
				if (!orderSn) {
					return false;
				}
				let self = this;
				let rstWxPayParams = await self.$http1.post('wxapay/pay-params', {
					order_sn: orderSn
				});
				self.clog('微信支付', rstWxPayParams)
				if (rstWxPayParams.code == 0) {
					let orderInfo = rstWxPayParams.data.params;
					this.orderInfo = orderInfo;
					uni.requestPayment({
						provider: 'wxpay',
						orderInfo: orderInfo,
						success: (res) => {
							// self.modalShow('toastModal', '155---' + res);
							self.payOk = true;
							self.modalShow('toastModal', '支付成功');
						},
						fail: (err) => {
							self.clog('Uni-pay-fail', err);
							// self.modalShow('toastModal', '158----' + err.errMsg);
							if (err.errMsg.indexOf("payment微信:-2") != -1) {
								self.modalName = 'dialogModal';
								self.dialogText = '你取消了支付, 是否继续支付?';
								self.dialogSureText = '继续支付';
							} else {
								elf.modalShow('toastModal', err.errMsg);
							}
						}
					})
				} else {
					
				}
			},
			navRightHandle() {
				uni.navigateTo({
					url: './coinrecord',
					animationDuration: 300,
					animationType: 'fade-in'
				})
			},
			showTechargeModal() {
				this.modalName = 'bottomModal';
			},
			hideModal() {
				if (this.modalName == 'bottomModal') {
					this.modalName = '';
				}
				if (this.modalName == 'dialogModal') {
					this.modalName = '';
					this.orderInfo = null;
					this.api_OrderCancel();
				}
			},
			async properyHandle(item) { // 星豆充值规格点击
				console.log(item);
				let orderSn = await this.api_OrderCreate(item);
				if (orderSn) {
					await this.api_WxPay(orderSn);
				}
			},
			
			dialogConfirm() { // 继续支付
				let self = this;
				console.log('继续支付', self.orderInfo);
				uni.requestPayment({
					provider: 'wxpay',
					orderInfo: self.orderInfo,
					success: (res) => {
						self.payOk = true;
						this.modalName = '';
						self.modalShow('toastModal', '支付成功');
					},
					fail: (err) => {
						self.clog('Uni-pay-fail', err);
						// self.modalShow('toastModal', '158----' + err.errMsg);
						if (self.modalName == 'dialogModal') {
							return false;
						}
						if (err.errMsg.indexOf("payment微信:-2") != -1) {
							self.modalName = 'dialogModal';
							self.dialogText = '你取消了支付, 是否继续支付?';
							self.dialogSureText = '继续支付';
						} else {
							self.modalShow('toastModal', err.errMsg);
						}
					}
				})
			},
			
			pointsTapHandle(item) { // 免费得星豆点击
				
			}
		},
	}
</script>

<style lang="scss">
	.coin-discount-color {
		color: #FF3C00;
	}
	.coin-img {
		width: 48rpx;
		height: 42rpx;
	}
	.coin-wrap {
		.coin_info {
			padding: 100rpx 0 130rpx;
			.num {
				text {
					font-size: 56rpx;
				}
			}
			.recharge {
				button {
					background-color: #1768E4;
					width: 236rpx;
					height: 70rpx;
				}
			}
		}
		.coin_action {
			padding: 0 35rpx;
			.action_item {
				min-height: 174rpx;
				justify-content: space-around;
				margin: 44rpx 0;
				padding: 0 30rpx;
				background-color: rgba(58, 62, 156, .3);
				box-shadow: -1rpx 0 6rpx 6rpx rgba(0, 0, 0, .1);
				.icon_box {
					width: 100rpx;
					height: 100rpx;
					background-color: #21173B;
					&:nth-child(1) {
						image {
							width: 50rpx;
							height: 42rpx;
						}
					}
					&:nth-child(2) {
						image {
							width: 52rpx;
							height: 50rpx;
						}
					}
					&:nth-child(3) {
						image {
							width: 50rpx;
							height: 48rpx;
						}
					}
				}
				.content {
					width: 66%;
					.desc {
						color: #635684;
					}
				}
			}
		}
	}

	.recharge_modal {
		.action_item {
			position: relative;
			min-height: 110rpx;
			justify-content: space-between;
			margin: 30rpx 0;
			padding: 0 34rpx;
			border-radius: 20rpx;
			background-color: #F3F3F3;
			.coin {
				max-width: 30%;
			}
			.discount {
				width: 52%;
				text-align: left;
			}
			.discount_tip {
				position: absolute;
				right: 0;
				top: 0;
				background-color: #FF3C00;
				border-top-right-radius: 20rpx;
				border-bottom-left-radius: 20rpx;
				font-size: 18rpx;
				color: #FFFFFF;
				padding: 4rpx 20rpx;
			}
		}
	}
</style>
