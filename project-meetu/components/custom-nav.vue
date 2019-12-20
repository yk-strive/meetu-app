<template>
	<view class="custom-nav" :style="[{height:CustomBar + 'px'}]">
		<view class="custom-nav-bar cf" :style="style">
			<view class="back fl" v-if="isBack">
				<text class="cuIcon-pullleft text-white" @tap="BackPage"></text>
			</view>
			<view class="content text-white">
				<text class="title text-lg text-cut" v-if="textTitle">{{textTitle ? textTitle : ''}}</text>
				<scroll-view scroll-x="true" class="scroll-tabs" v-if="tabsList">
					<view class="scroll-tabs-list">
						<view class="scroll-tabs-item" v-for="(item,index) in tabsList" :key="index" @tap="tabSelect(item)">
							<text :class="item.id==TabCur?'cur':''">{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
				<text class="right text-sm text-cut text-right" v-if="textRight" v-on:click="rightHandle">{{textRight ? textRight : ''}}</text>
			</view>
		</view>
	</view>
	<!-- 
		页面使用: 根据情况传值 和 处理事件
		<custom-nav :isBack="true" text-title="完善个人资料" :tabsList="tabsList" text-right="星豆记录"
			@right="rightClickHandle" @tabsChange="tabsChange"></custom-nav> 
	-->
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				TabCur: '1',
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
			tabsList: {
				type: Array,
				default: null
			}
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			},
			rightHandle() {
				console.log(this.textRight)
				if (!this.textRight) {
					return false;
				}
				this.$emit('right');
			},
			tabSelect(item) {
				this.TabCur = item.id;
			}
		}
	}
</script>

<style lang="scss">
	.custom-nav {
		position: relative;
		/* #ifdef APP-PLUS */
		padding-top: 30rpx;
		/* #endif */
		.custom-nav-bar {
			position: fixed;
			width: 100%;
			z-index: 9999;
			/* #ifdef MP-WEIXIN */
			padding-right: 220upx;
			/* #endif */

			/* #ifdef MP-ALIPAY */
			padding-right: 150upx;

			/* #endif */
			.back {
				padding-left: 36upx;
				padding-top: 20upx;

				text.cuIcon-pullleft {
					font-size: 64upx;
				}
			}

			.content {
				padding-top: 24upx;
				display: flex;
				align-items: center;

				.title {
					padding-left: 36upx;
					flex: 2;
				}

				.scroll-tabs {
					flex: 2;
					height: 60upx;

					.scroll-tabs-list {
						display: flex;
						align-items: center;
						justify-content: space-around;

						.scroll-tabs-item {
							flex: 1;
							position: relative;
							text-align: center;
							font-size: 28upx;
						}

						.cur {
							position: relative;
							font-size: 34upx;

							&::before {
								content: '';
								position: absolute;
								left: 50%;
								bottom: -14upx;
								transform: translate(-50%, -50%);
								width: 50%;
								height: 4upx;
								border-radius: 10upx;
								background-color: #FFFFFF;
							}
						}
					}

				}

				.right {
					flex: 1;
					/* #ifdef APP-PLUS*/
					padding-right: 30upx;
					/* #endif */
				}
			}
		}
	}
</style>
