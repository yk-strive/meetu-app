<template>
	<view id="wxoauth_page">
		<view class="app_info text-center text-lg">
			<image class="" src="../../static/meetu-img/logo.png" mode="aspectFill"></image>
			<view class="padding-top padding-bottom-sm">
				<text>Meet U</text>
			</view>
			<view class="">
				<text>孤独星球遇见最契合的灵魂</text>
			</view>
		</view>
		<view class="oauth_btn">
			<!-- #ifdef APP-PLUS -->
			<button class="cu-btn block round" v-on:click="getUserInfo">
				<text class="cuIcon-weixin"></text> 
				<text class="text-lg">微信账号登录</text>
			</button>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN | MP-QQ | MP-BAIDU -->
			<button class="cu-btn block round" open-type="getUserInfo" v-on:getuserinfo="getUserInfo">
				<text class="cuIcon-weixin"></text> 
				<text class="text-lg">微信账号登录</text>
			</button>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		name: 'wxoauth',
		data() {
			return {

			}
		},
		methods: {
			getUserInfo(e) {
				// #ifdef APP-PLUS
					// 需要做登录处理
				// #endif
				
				// #ifdef MP-WEIXIN | MP-QQ | MP-BAIDU 
					// 
				// #endif
				
				//slide-in-right | slide-in-left | slide-in-top | slide-in-bottom | pop-in | fade-in | zoom-out | zoom-fade-out | none
				uni.navigateTo({
					url: './personaldata',
					animationDuration: 300,
					animationType: 'slide-in-right'
				})
			}
		},
	}
</script>

<style lang="scss">
	#wxoauth_page {
		.app_info {
			padding-top: 400upx;
			image {
				width: 190upx;
				height: 190upx;
			}
		}
		.oauth_btn {
			position: absolute;
			z-index: 2;
			bottom: 20%;
			left: 50%;
			transform: translateX(-50%);
			width: 430upx;
			height: 110upx;
			button {
				height: 100%;
				line-height: 1;
				background-color: #00BB31;
				color: #FFFFFF;
				text:nth-child(1) {
					font-size: 90upx;
					padding-right: 16upx;
					padding-bottom: 14upx;
				}
				text:nth-child(2) {
					letter-spacing: 4upx;
				}
			}
		}
	}
</style>
