<template>
	<view id="userIndexPage" class="bg_page_3">
		<custom-nav :isBack="true" textRight="cuIcon-settings" @right="actionTapHandle('./settings')"></custom-nav>
		<view class="user-wrap">
			<view class="userinfo">
				<view class="avatar flex-df">
					<view class="avatar_bg">
						<image class="wh-100" src="../../static/meetu-img/tx.png" mode="aspectFill"></image>
					</view>
					<view class="cu-avatar round">
						<image class="round" :src="userInfo.headimgurl" mode="aspectFill"></image>
					</view>
				</view>
				<view class="nickname flex-df text-white text-lg">
					<text>{{userInfo.nickname}}</text>
					<image class="img_vip" v-if="userInfo.isvip" src="../../static/meetu-img/vip.png" mode="aspectFill"></image>
					<image class="sex" :src="userInfo.sex==1?'../../static/meetu-img/male.png':'../../static/meetu-img/female.png'" mode="aspectFill"></image>
				</view>
				<view class="singleid flex-df text-xxs text-white text-letter-df margin-top-sm">
					<text>星球ID：</text>
					<text>{{userInfo.planetId}}</text>
					<text class="padding-left-sm" @click="actionTapHandle('copyId')">复制</text>
				</view>
			</view>
			<view class="action">
				<view class="cu-list menu">
					<view class="cu-item arrow" v-for="item,index in actionList" :key="index" @click="actionTapHandle(item.navUrl)">
						<view class="content text-white">
							<!-- <text class="cuIcon-emoji icon-test text-xl"></text> -->
							<image :src="item.imgUrl" mode="aspectFill"></image>
							<text class="icon-text text-letter-df">{{item.text}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		name: 'userIndex',
		data() {
			return {
				actionList: [{
						imgUrl: '../../static/meetu-img/i3.png',
						text: '我的文字信号',
						navUrl: './signal?navId=text'
					},
					{
						imgUrl: '../../static/meetu-img/i4.png',
						text: '我的语音信号',
						navUrl: './signal?navId=voice'
					},
					{
						imgUrl: '../../static/meetu-img/i5.png',
						text: '我的星豆',
						navUrl: './coin'
					},
					{
						imgUrl: '../../static/meetu-img/i6.png',
						text: '购买VIP',
						navUrl: './vip'
					}
				]
			}
		},
		computed: {
			...mapGetters(['userInfo'])
		},
		methods: {
			actionTapHandle(navUrl) {
				let self = this;
				if (navUrl == 'copyId') {
					//TODO
					uni.setClipboardData({
					    data: self.userInfo.planetId,
					    success: function () {
					        // uni.hideToast()
					    }
					});
					return;
				}
				uni.navigateTo({
					url: navUrl,
					animationDuration: 300,
					animationType: 'fade-in'
				})
			}
		},
	}
</script>

<style lang="scss">
	.user-wrap {
		.userinfo {

			// flex-direction: column;
			.avatar {
				position: relative;

				.avatar_bg {
					width: 371rpx;
					height: 335rpx;
				}

				.cu-avatar {
					position: absolute;
					width: 218rpx;
					height: 218rpx;
				}
			}

			.nickname {
				image {
					margin-left: 10rpx;
				}
				.sex {
					width: 24rpx;
					height: 24rpx;
				}
			}

			.singleid {
				text:nth-child(2) {
					color: #299ABE;
				}
			}
		}
	}

	.action {
		margin-top: 90rpx;
	}

	.cu-list.menu>.cu-item {
		min-height: 120rpx;
		padding: 0 50rpx;
		background-color: transparent;

		&::after {
			border-bottom: none;
		}

		&.arrow::before {
			right: 50rpx;
			color: #FFFFFF;
		}
		.content {
			.icon-text {
				vertical-align: middle;
				padding-left: 36rpx;
			}
		}
	}

</style>
