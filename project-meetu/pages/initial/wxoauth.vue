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
		<cu-modal :modalName="modalName" :toastText="toastText"></cu-modal>
	</view>
</template>

<script>
	import mixinInit from '../../mixins/init.js';
	export default {
		name: 'wxoauth',
		data() {
			return {

			}
		},
		mixins: [mixinInit],
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
								custom: {
									istoken: false,
									v2: true
								}
							}).then(res => {
								console.log('----登录----', res)
								self.$store.dispatch('changeVal', {
									stateKey: 'token',
									newValue: res.data.token
								});
								self.$store.dispatch('changeVal', {
									stateKey: 'dailyLogin',
									newValue: res.data.daily_login
								});
								self.upCid();
								if (res.data.old_user == 1) {
									uni.setStorage({
										key: 'oldUser',
										data: res.data.old_user
									});
									uni.redirectTo({
										url: '../home/index',
										animationDuration: 300,
										animationType: 'fade-in'
									})
								} else {
									uni.redirectTo({
										url: './personaldata',
										animationDuration: 300,
										animationType: 'fade-in'
									})
								}
							}).catch(err => {
								console.log('app-err', err);
							})
						}
					}
				})
			},
			upCid() {
				setTimeout(() => {
					const clientInfo = plus.push.getClientInfo();
					console.log('-----clientInfo-----', clientInfo);
					if (clientInfo.clientid) {
						this.$http1.post('user/upload-cid', {
							client_id: clientInfo.clientid
						}, {
							custom: {istoken: true,v2: true}
						}).then(res => {
							console.log(res);
							uni.showToast({
							    title: 'CID提交了',
							    duration: 2000
							});
						})
					} else {
						uni.showToast({
						    title: 'CID为空',
						    duration: 2000
						});
					}
				}, 100)
			},
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
