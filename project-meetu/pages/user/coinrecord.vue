<template>
	<view id="coinrecordPage" class="bg_page_3">
		<custom-nav :isBack="true" :tabsList="tabsList"></custom-nav>
		<view class="coinrecord_wrap">
			<view class="coinrecord_item flex-df">
				<view class="record_info">
					<view class="text-df text-white">登录APP</view>
					<view class="text-sm margin-top-sm">2019-12-09 17:25</view>
				</view>
				<view class="record_grade coin-color">
					<text>+<text class="text-xxl">5</text></text>
				</view>
			</view>
			<view class="coinrecord_item flex-df">
				<view class="record_info">
					<view class="text-df text-white">登录APP</view>
					<view class="text-sm margin-top-sm">2019-12-09 17:25</view>
				</view>
				<view class="record_grade coin-color">
					<text>+<text class="text-xxl">5</text></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'coinrecord',
		data() {
			return {
				tabsList: [
					{
						id: '0',
						name: '获得星豆'
					},
					{
						id: '1',
						name: '消耗星豆'
					}
				]
			}
		},
	}
</script>

<style lang="scss">
	.coinrecord_wrap {
		padding-top: 40rpx;
		.coinrecord_item {
			justify-content: space-between;
			min-height: 130rpx;
			margin: 40rpx 0;
			padding: 0 40rpx;
			.record_info {
				view:nth-child(2) {
					color: #5D4C8B;
				}
			}
		}
	}
</style>
