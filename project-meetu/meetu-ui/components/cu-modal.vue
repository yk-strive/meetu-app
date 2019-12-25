<template>
	<view class="custom-modal">
		<view class="cu-modal" :class="modalName=='Modal'?'show':''" @tap.stop="hideModal">
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
		<view class="cu-modal toast-modal" :class="modalName =='toastModal' ?'show':''">
			<view class="cu-dialog">
				<view class="padding-xl">
					<!-- <slot name="bottomModal"></slot> -->
					<text>{{toastText}}</text>
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
			}
		},
		
		methods: {
			hideModal() {
				this.$emit('hideModal');
			}
		}
	}
</script>

<style>
</style>
