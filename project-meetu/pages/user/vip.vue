<template>
	<view id="vipPage" class="bg_page_3">
		<custom-nav :isBack="true" textTitle="升级VIP"></custom-nav>
		<view class="vip_wrap">
			<view class="vipInfo bg-color-main radius">
				<view class="avatar round">
					<image class="wh-100 round" :src="userInfo.headimgurl" mode="aspectFill"></image>
				</view>
				<view class="margin-left-lg">
					<view class="flex-df">
						<text class="text-letter-df">{{userInfo.nickname}}</text>
						<image class="img_vip" mode="aspectFill" src="../../static/meetu-img/vip.png"></image>
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
		<cu-modal :modalName="modalName" :toastText="toastText"></cu-modal>
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
			}
		},
		onLoad() {
			this.api_GetVipProperty()
		},
		methods: {
			api_GetVipProperty() {
				this.$http1.post('points/vip-property', {}, {
					custom: {
						istoken: false
					}
				}).then(res => {
					this.vipProperty = res.data;
					console.log('------Vip--------', JSON.stringify(this.vipProperty))
				})
			},

			vipPropertyChange(index) {
				this.selectPropertyItem = this.vipProperty[index];
			},

			vipPay() {
				let self = this;
				self.$http1.post('wxapay/pay-params', {
					order_sn: "O20200103B92B3E8" //res.data.order_sn
				}).then(res=>{
					self.clog('支付', res)
					if (res.data.error == 0) {
						uni.requestPayment({
							provider: 'wxpay',
							timeStamp: res.data.params.timeStamp,
							nonceStr: res.data.params.nonceStr,
							package: res.data.params.package,
							singType: 'MD5',
							paySign: res.data.params.sign,
							orderInfo: res.ordernum,
							service: 3,
							_debug: 1,
							success: (res) => {
								console.log('------success-----', res);
							},
							fail: (err) => {
								console.log('------fail-----', err);
							}
						})
					} else {
						self.modalShow('toastModal', res.msg);
					}
				}).catch(err=>{
					self.clog('支付失败', err)
				})
				// this.$http1.post('order/create', {
				// 	fee: 0.1,
				// 	type: 2, // 1-星豆, 2-vip
				// 	property: self.selectPropertyItem.id,
				// 	pay_type: 1, // 1-微信, 2-支付宝, 3-银联  暂时只对接微信
				// 	status: 'unpaid'
				// }).then(res=>{
				// 	self.clog('下单', res)
				// 	if (res.code === 0) {
						
				// 	} else {
				// 		self.modalShow('toastModal', res.msg);
				// 	}
				// })
			},
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
					padding: 0 10rpx;
					display: flex;
					justify-content: flex-start;
					flex-wrap: wrap;

					.rechargeItem {
						position: relative;
						display: flex;
						flex-direction: column;
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
