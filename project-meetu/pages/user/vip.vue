<template>
	<view id="vipPage" class="bg_page_3">
		<custom-nav :isBack="true" textTitle="升级VIP"></custom-nav>
		<view class="vip_wrap">
			<view class="vipInfo bg-color-main radius">
				<view class="avatar round">
					<image class="wh-100 round" :src="userInfo.headimgurl" mode="aspectFill"></image>
				</view>
				<view class="margin-left-lg">
					<view class="text-left">
						<text class="text-letter-df">{{userInfo.nickname}}</text>
						<image v-show="userInfo.isvip" class="img_vip" mode="aspectFill" src="../../static/meetu-img/vip.png"></image>
					</view>
					<view class="text-letter-df margin-top-sm text-xs">
						<text>{{userInfo.isvip ? '有效期至：'+userInfo.expires_in : 'VIP未开通'}}</text>
					</view>
				</view>
			</view>
			<view class="vipPrivilege">
				<view class="title color-pri text-df text-letter-df">会员特权</view>
				<view class="privilegeList">
					<view class="privilegeItem text-center">
						<image src="../../static/meetu-img/i10.png" mode="aspectFill"></image>
						<view class="text-white text-xs text-letter-df">会员标识</view>
					</view>
					<view class="privilegeItem text-center">
						<image src="../../static/meetu-img/i11.png" mode="aspectFill"></image>
						<view class="text-white text-xs text-letter-df">免广告</view>
					</view>
					<view class="privilegeItem text-center">
						<image src="../../static/meetu-img/i12.png" mode="aspectFill"></image>
						<view class="text-white text-xs text-letter-df">无限收发</view>
					</view>
					<view class="privilegeItem text-center">
						<image src="../../static/meetu-img/i13.png" mode="aspectFill"></image>
						<view class="text-white text-xs text-letter-df">无限收发</view>
					</view>
				</view>
			</view>
			<view class="vipRecharge">
				<view class="title color-pri text-df text-letter-df">会员充值</view>
				<view class="rechargeList">
					<view class="rechargeItem margin-bottom-lg" v-for="item,index in vipProperty" :key="item.key" @tap.stop="vipPropertyChange(index)"
					 :class="(index+1)%3==0 ? '' : 'margin-right-xxl'" :style="{border: selectPropertyItem.id==item.id ? '2rpx solid #D04795' : '2rpx solid #FFFFFF'}">
						<view class="recommend text-xxs" v-if="item.id==1">推荐</view>
						<view class="price text-df color-pri text-center">
							<text class="text-price text-bold">{{item.price}}</text>
						</view>
						<view class="time text-xs text-white text-center">
							<text class="">{{item.time}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class="btn-vip flex-df">
				<button class="cu-btn bg-color-main round" @tap.stop="vipPay">立即开通</button>
			</view>
		</view>
		<cu-modal :modalName="modalName" :toastText="toastText" :dialogText="dialogText" :dialogSureText="dialogSureText" @hideModal="hideModal" @dialogConfirm="dialogConfirm"></cu-modal>
	</view>
</template>

<script>
	import {
		mapGetters
	} from "vuex";
	import mixinInit from "../../mixins/init.js";
	export default {
		name: 'vip',
		computed: {
			...mapGetters(['userInfo'])
		},
		mixins: [mixinInit],
		data() {
			return {
				vipProperty: null,
				selectPropertyItem: null,
				orderSn: null,
				orderInfo: null,
				payOk: false,
			}
		},
		onLoad() {
			this.api_GetVipProperty();
		},
		watch: {
			payOk(newValue, oldValue) {
				if (this.payOk) {
					this.api_UserInfo();
				}
			}
		},
		methods: {
			api_GetVipProperty() {
				this.$http1.post('points/vip-property', {}, {
					custom: {
						istoken: false
					}
				}).then(res => {
					this.vipProperty = res.data;
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
			
			async api_OrderCreate() {
				let self = this;
				if (!self.selectPropertyItem) {
					self.modalShow('toastModal', '请选择充值规格');
					return false;
				}
				let rstOrder = await self.$http1.post('order/create', {
					fee: self.selectPropertyItem.price,
					type: 2, // 1-星豆, 2-vip
					property: self.selectPropertyItem.id,
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
			
			vipPropertyChange(index) {
				this.selectPropertyItem = this.vipProperty[index];
			},

			async vipPay() {
				let self = this;
				let orderSn = await self.api_OrderCreate();
				console.log('---VIPpAY----', orderSn)
				if (orderSn) {
					await self.api_WxPay(orderSn);
				}
			},
			
			hideModal() {
				this.modalName = '';
				this.orderInfo = null;
				this.api_OrderCancel();
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
			}
		},
	}
</script>

<style lang="scss">
	#vipPage {
		.color-pri {
			color: #D04795;
		}

		.vip_wrap {
			padding: 10rpx 40rpx 0;

			.vipInfo {
				height: 150rpx;
				padding: 14rpx 30rpx;
				display: flex;
				align-items: center;

				.avatar {
					width: 120rpx;
					height: 120rpx;
				}

				.img_vip {
					margin-left: 6rpx;
				}
			}

			.vipPrivilege {
				margin-top: 60rpx;

				.privilegeList {
					margin-top: 30rpx;
					display: flex;
					justify-content: space-between;

					.privilegeItem {
						image {
							width: 100rpx;
							height: 100rpx;
							margin-bottom: 10rpx;
							;
						}
					}
				}
			}

			.vipRecharge {
				margin-top: 80rpx;

				.rechargeList {
					margin-top: 30rpx;
					// display: flex;
					// justify-content: flex-start;
					// flex-wrap: wrap;

					.rechargeItem {
						position: relative;
						// display: flex;
						// flex-direction: column;
						display: inline-block;
						width: 181rpx;
						height: 172rpx;
						border-radius: 10rpx;

						.price {
							margin-bottom: 20rpx;
							margin-top: 50rpx;
						}

						.recommend {
							position: absolute;
							right: 8rpx;
							top: 6rpx;
							padding: 4rpx 8rpx;
							background: #1D9BF3;
							color: #FFFFFF;
							border-top-left-radius: 50rpx;
							border-top-right-radius: 50rpx;
							border-bottom-right-radius: 50rpx;
						}
					}
				}
			}

			.btn-vip {
				margin-top: 60rpx;

				button {
					width: 350rpx;
					height: 80rpx;
				}
			}
		}
	}
</style>
