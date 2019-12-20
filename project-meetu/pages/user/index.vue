<template>
	<view id="userIndexPage" class="bg_page_3">
		<custom-nav :isBack="true"></custom-nav>
		<view class="user-wrap">
			<view class="userinfo">
				<view class="avatar flex-df">
					<view class="avatar_bg">
						<image class="wh-100" src="../../static/meetu-img/tx.png" mode="aspectFill"></image>
					</view>
					<view class="cu-avatar round" @click="actionTapHandle('./settings')">
						<image class="round" src="../../static/logo.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="nickname flex-df text-white text-lg">
					<text>故事的小黄花</text>
					<image src="../../static/meetu-img/female.png" mode="aspectFill"></image>
				</view>
				<view class="singleid flex-df text-xxs text-white text-letter-df margin-top-sm">
					<text>星球ID：</text>
					<text>mt58662</text>
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
	export default {
		name: '',
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
						navUrl: 'VIP'
					}
				]
			}
		},
		methods: {
			actionTapHandle(navUrl) {
				if (navUrl == 'VIP') {
					//TODO
					
					return;
				}
				if (navUrl == 'copyId') {
					//TODO
					
					return;
				}
				uni.navigateTo({
					url: navUrl,
					animationDuration: 300,
					animationType: 'slide-in-right'
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
					width: 24rpx;
					height: 24rpx;
					margin-left: 10rpx;
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
