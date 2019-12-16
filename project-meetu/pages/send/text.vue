<template>
	<view id="sendTextPage" class="bg_page_1">
		<custom-nav :isBack="true" textTitle="发布文字信号"></custom-nav>
		<form @submit="submitSendText">
			<view class="padding">
				<textarea class="text-white" name="sendtext" maxlength="300" placeholder="请输入想说的话" />
			</view>
			<button class="bg-color-main cu-btn round text-letter-df btn_send" form-type="submit">确认发送</button>
		</form>
	</view>
</template>

<script>
	export default {
		name: 'sendText',
		data() {
			return {
				
			}
		},
		methods: {
			submitSendText(e) {
				let sendText = e.detail.value.sendtext;
				console.log(e);
			}
		},
	}
</script>

<style lang="scss">
	.btn_send {
		position: fixed;
		bottom: 100upx;
		left: 50%;
		transform: translateX(-50%);
		width: 356upx;
		height: 100upx;
	}
</style>
