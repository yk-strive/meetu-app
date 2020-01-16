<template>
	<!-- #ifdef MP-WEIXIN -->
	<view class="custom-nav" :style="[{height:CustomBar + 'px'}]">
		<view class="custom-nav-bar cf" :style="style">
			<view class="back fl" v-if="isBack">
				<text class="cuIcon-pullleft text-white" @tap="BackPage"></text>
			</view>
			<view class="content text-white">
				<text class="title text-lg text-cut" v-if="textTitle">{{textTitle ? textTitle : ''}}</text>
				<scroll-view scroll-x="true" class="scroll-tabs" v-if="tabsInfo">
					<view class="scroll-tabs-list">
						<view class="scroll-tabs-item" v-for="(item,index) in tabsInfo.tabsList" :key="index" @tap="tabSelect(item)">
							<text :class="item.id==tabsInfo.tabCur?'cur':''">{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
				<text class="right text-sm text-cut text-right" v-if="textRight" v-on:click="rightHandle">
					<text v-if="textRight.indexOf('cuIcon')!=-1" class="text-lg" :class="textRight"></text>
					<text v-else>{{textRight ? textRight : ''}}</text>
				</text>
			</view>
		</view>
	</view>
	<!-- #endif -->
	<!-- #ifdef APP-PLUS -->
		<view class="app-custom-nav">
			<view class="app-custom-nav-bar">
				<view class="back flex-df" v-if="isBack">
					<text class="cuIcon-pullleft text-white" @tap="BackPage"></text>
				</view>
				<view class="action">
					<view v-if="textTitle" class="page_title text-white text-cut">
						<text>{{textTitle}}</text>
					</view>
					<view v-if="tabsInfo" class="content">
						<scroll-view scroll-x="true" class="scroll-tabs">
							<view class="scroll-tabs-lists">
								<view class="scroll-tabs-item" v-for="(item,index) in tabsInfo.tabsList" :key="index" @tap="tabSelect(item)">
									<text :class="item.id==tabsInfo.tabCur?'cur':''">{{item.name}}</text>
								</view>
							</view>
						</scroll-view>
					</view>
					<view v-if="textRight" class="right text-white" v-on:click="rightHandle">
						<text v-if="textRight.indexOf('cuIcon')!=-1" class="text-xl" :class="textRight"></text>
						<text v-else>{{textRight ? textRight : ''}}</text>
					</view>
				</view>
			</view>
		</view>
	<!-- #endif -->
	<!-- 
		页面使用: 根据情况传值 和 处理事件
		<custom-nav :isBack="true" text-title="完善个人资料" :tabsList="tabsList" text-right="星豆记录"
			@right="rightClickHandle" @tabsChange="tabsChange"></custom-nav> 
	-->
</template>

<script>
	import Vue from 'vue';
	const statusBar = Vue.prototype.StatusBar;
	const customBar = Vue.prototype.CustomBar;
	export default {
		data() {
			return {
				StatusBar: statusBar,
				CustomBar: customBar,
			};
		},
		name: 'custom-nav',
		computed: {
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				return style
			}
		},
		props: {
			isBack: {
				type: [Boolean, String],
				default: true
			},
			textRight: {
				type: String,
				default: ''
			},
			textTitle: {
				type: String,
				default: '',
			},
			tabsInfo: {
				type: Object,
				default: null
			}
		},
		methods: {
			BackPage() {
				let chatListPageEnterMode = getApp().globalData.chatListPageOpenMode;
				if (chatListPageEnterMode) {
					uni.redirectTo({
						url:'/pages/home/index'
					})
				} else {
					uni.navigateBack({
						delta: 1
					});
				}
			},
			rightHandle() {
				if (!this.textRight) {
					return false;
				}
				this.$emit('right');
			},
			tabSelect(item) {
				this.$emit('tabChange', item);
			}
		}
	}
</script>

<style lang="scss">
	.custom-nav {
		position: relative;

		.custom-nav-bar {
			position: fixed;
			width: 100%;
			z-index: 9999;
			/* #ifdef MP-WEIXIN */
			padding-right: 220rpx;
			/* #endif */

			/* #ifdef MP-ALIPAY */
			padding-right: 150rpx;

			/* #endif */
			.back {
				padding-left: 36rpx;
				padding-top: 20rpx;

				text.cuIcon-pullleft {
					font-size: 64rpx;
				}
			}

			.content {
				padding-top: 24rpx;
				display: flex;
				align-items: center;

				.title {
					padding-left: 36rpx;
					flex: 2;
				}

				.scroll-tabs {
					flex: 2;
					height: 60rpx;

					.scroll-tabs-list {
						display: flex;
						align-items: center;
						justify-content: space-around;

						.scroll-tabs-item {
							flex: 1;
							position: relative;
							text-align: center;
							font-size: 28rpx;
						}

						.cur {
							position: relative;
							font-size: 34rpx;

							&::before {
								content: '';
								position: absolute;
								left: 50%;
								bottom: -14rpx;
								transform: translate(-50%, -50%);
								width: 50%;
								height: 4rpx;
								border-radius: 10rpx;
								background-color: #FFFFFF;
							}
						}
					}

				}

				.right {
					flex: 1;
					/* #ifdef APP-PLUS*/
					padding-right: 30rpx;
					/* #endif */
				}
			}
		}
	}

	.app-custom-nav {
		width: 100%;
		height: 180rpx;
		position: relative;
		.app-custom-nav-bar {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 9999;
			width: 100%;
			height: 180rpx;
			display: flex;
			align-items: flex-end;
			// border-bottom: 2rpx solid red;
			.back {
				height: 100rpx;
				padding-left: 40rpx;
				font-size: 70rpx;
			}

			.action {
				width: 100%;
				height: 100rpx;
				display: flex;
				align-items: center;

				.page_title {
					font-size: 36rpx;
					padding-left: 40rpx;
				}

				.content {
					width: 100%;
					.scroll-tabs {
						width: 100%;
						.scroll-tabs-lists {
							display: flex;
							justify-content: space-around;
							.scroll-tabs-item {
								height: 100rpx;
								line-height: 3;
								color: #FFFFFF;
								font-size: 30rpx;
								.cur {
									position: relative;
									font-size: 34upx;
									line-height: 2.5;
									&::before {
										content: '';
										position: absolute;
										left: 50%;
										bottom: -20rpx;
										transform: translate(-50%, -50%);
										width: 50%;
										height: 6rpx;
										border-radius: 10rpx;
										background-color: #FFFFFF;
									}
								}
							}
						}
					}
				}

				.right {
					position: absolute;
					right: 0;
					font-size: 28rpx;
					padding-right: 40rpx;
				}
			}
		}
	}
</style>
