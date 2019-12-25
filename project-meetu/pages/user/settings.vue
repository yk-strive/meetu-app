<template>
	<view id="settingsPage" class="bg_page_3">
		<custom-nav :isBack="true" textTitle="设置"></custom-nav>
		<view class="settings-wrap">
			<view class="action">
				<view class="cu-list menu">
					<view class="cu-item arrow" v-for="item,index in actionList" :key="index" @click="actionTapHandle(item.navUrl)">
						<view class="content text-white">
							<text class="icon-text text-letter-df">{{item.text}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="out-app flex-df">
				<button class="cu-btn bg-color-main round text-letter-df" @click="actionTapHandle('outApp')">退出登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from "vuex"
	export default {
		name: '',
		data() {
			return {
				actionList: [
					{
						text: '编辑个人资料',
						navUrl: 'edit'
					},
					{
						text: '联系客服',
						navUrl: 'content'
					},
					{
						text: '吐个槽',
						navUrl: 'opinion'
					},
					{
						text: '关于我们',
						navUrl: 'about'
					}
				]
			}
		},
		methods: {
			...mapMutations(['outApp']),
			actionTapHandle(navUrl) {
				switch(navUrl) {
					case 'edit':
						uni.navigateTo({
							url: '../initial/personaldata?type=edit',
							animationDuration: 300,
							animationType: 'fade-in'
						});
						break;
					case 'content':
						break;
					case 'opinion':
						break;
					case 'about':
						break;
					case 'outApp':
						this.outApp();
						uni.reLaunch({
							url: '../initial/wxoauth'
						});
						break;
				}
			}
		},
	}
</script>

<style lang="scss">
	.settings-wrap {
		.action {
			margin-top: 90rpx;
		}
		
		.out-app {
			position: fixed;
			bottom: 200rpx;
			width: 100%;
			button {
				width: 350rpx;
				height: 94rpx;
			}
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
		}
	}
</style>
