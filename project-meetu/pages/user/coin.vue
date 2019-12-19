<template>
	<view id="coinPage" class="bg_page_3">
		<custom-nav :isBack="true" textTitle="我的星豆" textRight="星豆记录" @right="navRightHandle"></custom-nav>
		<view class="coin-wrap">
			<view class="coin_info">
				<view class="num text-center coin-color">
					<text>600</text>
					<text class="padding-left-sm padding-right-xs">x</text>
					<image class="coin-img" src="../../static/meetu-img/dou.png" mode="aspectFill"></image>
				</view>
				<view class="recharge flex-df margin-top">
					<button class="cu-btn round text-white" @click="showTechargeModal">充值</button>
				</view>
			</view>
			<view class="coin_action">
				<view class="text-white">免费获得星豆</view>
				<view class="action_item flex-df radius" v-for="item,index in actionList" :key="index">
					<view class="icon_box round flex-df">
						<image :src="item.icon"></image>
					</view>
					<view class="content">
						<view class="text-white">{{item.title}}</view>
						<view class="text-xs padding-top-xs desc">{{item.desc}}</view>
					</view>
					<view class="add_num coin-color">
						<text>+<text class="text-xxl">{{item.grade}}</text></text>
					</view>
				</view>
			</view>
		</view>
		
		<cu-modal :modalName="modalName" @hideModal="hideModal">
			<block slot="bottomModal">
				<view class="recharge_modal">
					<view class="title text-center text-lg">
						<text>星币充值</text>
					</view>
					<view class="action_item flex-df" v-for="item,index in rechargePrice" :key="index" @click.stop="rechargeHandle(item)">
						<view class="coin">
							<image class="coin-img" src="../../static/meetu-img/dou.png"></image>
							<text class="padding-left-xs text-xxl">{{item.coin}}</text>
						</view>
						<view class="discount" v-if="item.isDiscount == 1">
							<text class="text-black-m">限时赠送</text>
							<text class="coin-discount-color">+<text class="text-xxl">{{item.discountCoin}}</text></text>
						</view>
						<view class="price text-xl">
							<text class="text-price">{{item.price}}</text>
						</view>
						<view class="discount_tip" v-if="item.isDiscount == 1">
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
	export default {
		name: 'coin', // 虚拟币-星豆
		components: {
			cuModal
		},
		data() {
			return {
				modalName: '',
				actionList: [
					{
						icon: '../../static/meetu-img/i7.png',
						title: '每日登录',
						desc: '每天进入app页面',
						grade: '5'
					},
					{
						icon: '../../static/meetu-img/i8.png',
						title: '看视频广告',
						desc: '每天最多8次',
						grade: '5'
					},
					{
						icon: '../../static/meetu-img/i9.png',
						title: '邀请好友',
						desc: '每邀请一位好友获得',
						grade: '10'
					}
				],
				rechargePrice: [
					{
						isDiscount: 0, // 是否优惠 0-不
						price: '12',
						coin: '60'
					},
					{
						isDiscount: 0, // 是否优惠 0-不
						price: '28',
						coin: '150'
					},
					{
						isDiscount: 1, // 是否优惠 0-不
						discountCoin: '30', // 优惠-赠送星豆
						price: '98',
						coin: '480'
					},
					{
						isDiscount: 1, // 是否优惠 0-不
						discountCoin: '100', // 优惠-赠送星豆
						price: '198',
						coin: '980'
					},
					{
						isDiscount: 1, // 是否优惠 0-不
						discountCoin: '510', // 优惠-赠送星豆
						price: '388',
						coin: '1980'
					}
				]
			}
		},
		methods: {
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
				this.modalName = '';
			},
			rechargeHandle(item) {
				console.log(item);
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
