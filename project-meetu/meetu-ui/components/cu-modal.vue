<template>
	<view class="custom-modal">
		<view class="cu-modal Modal" :class="modalName=='Modal'?'show':''" @tap.stop="hideModal">
			<view class="cu-dialog">
				<slot name="modal"></slot>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName =='bottomModal' ?'show':''" @tap.stop="hideModal">
			<view class="cu-dialog">
				<view class="padding-xl">
					<slot name="bottomModal"></slot>
				</view>
			</view>
		</view>

		<!-- 用于APP中提示 -->
		<view class="cu-modal toast-modal" :class="modalName =='toastModal' ?'show':''">
			<view class="cu-dialog">
				<view class="padding-xl">
					<!-- <slot name="bottomModal"></slot> -->
					<text>{{toastText}}</text>
				</view>
			</view>
		</view>

		<view class="cu-modal dialog-modal" :class="modalName=='dialogModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">提示</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					{{dialogText}}
				</view>
				<view class="cu-bar bg-white justify-around">
					<!-- <view class="action"> -->
					<button class="cu-btn line-gray dialog-modal-cancel" @tap="hideModal">取消</button>
					<button class="cu-btn bg-color-main dialog-modal-confirm" @tap="dialogConfirm">{{dialogSureText}}</button>
					<!-- </view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			modalName: {
				type: String,
				default: ''
			},
			toastText: {
				type: String,
				default: ''
			},
			dialogText: {
				type: String,
				default: ''
			},
			dialogSureText: {
				type: String,
				default: '确定'
			}
		},

		methods: {
			hideModal() {
				this.$emit('hideModal');
			},
			dialogConfirm() {
				this.$emit('dialogConfirm');
			},
		}
	}
</script>

<style>
	.cu-modal.dialog-modal .cu-dialog {
		width: 600rpx;
	}

	.cu-modal.bottom-modal .cu-dialog {
		max-height: 850rpx;
		overflow-y: scroll;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
	}

	.cu-modal.bottom-modal .cu-dialog::before {
		content: '';
		position: absolute;
		top: 20rpx;
		left: 50%;
		transform: translateX(-50%);
		width: 160rpx;
		height: 8rpx;
		border-radius: 6rpx;
		background-color: #E5E5E5;
	}

	.bg-white {
		background-color: #ffffff;
		color: #333333;
	}

	.line-gray {
		border: 2rpx solid #dadada;
		color: #333333;
	}

	.justify-end {
		justify-content: flex-end;
	}

	.justify-around {
		justify-content: space-around;
	}

	.dialog-modal-cancel,
	.dialog-modal-confirm {
		width: 200rpx;
	}
</style>
