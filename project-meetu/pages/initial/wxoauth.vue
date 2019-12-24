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
			<button class="cu-btn block round" v-on:click="appLogin">
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
				console.log(e)

				// #ifdef MP-WEIXIN | MP-QQ | MP-BAIDU 
				
				// #endif

				//slide-in-right | slide-in-left | slide-in-top | slide-in-bottom | pop-in | fade-in | zoom-out | zoom-fade-out | none
			},
			appLogin() {
				let self = this;
				uni.login({
					provider: 'weixin',
					success: (res) => {
						// console.log('login', res.authResult);
						if (res.errMsg == 'login:ok') {
							this.$http1.post('wxa/login', {
								access_token: res.authResult.access_token,
								openid: res.authResult.openid,
								expires_in: res.authResult.expires_in
							}, {
								custom: {istoken: false, v2: true}
							}).then(res=>{
								self.$store.dispatch('changeVal', {stateKey: 'token', newValue: res.data.token});
								uni.navigateTo({
									url: './personaldata',
									animationDuration: 300,
									animationType: 'slide-in-right'
								})
							}).catch(err=>{
								console.log('app-err', err);
							})
						}
					}
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
