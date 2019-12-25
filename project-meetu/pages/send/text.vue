<template>
	<view id="sendTextPage" class="bg_page_1">
		<custom-nav :isBack="true" textTitle="发布文字信号"></custom-nav>
		<form @submit="submitSendText">
			<view class="padding">
				<textarea class="text-white margin-top-xl" name="sendtext" maxlength="300" placeholder="请输入想说的话" />
			</view>
			<view class="btn_send flex-df">
				<button class="bg-color-main cu-btn round text-letter-df" form-type="submit">确认发送</button>
			</view>
		</form>
		<cu-modal :modalName="modalName" :toastText="toastText"></cu-modal>
	</view>
</template>

<script>
	export default {
		name: 'sendText',
		components: {
			
		},
		data() {
			return {
				modalName: '',
				toastText: ''
			}
		},
		watch: {
			modalName() {
				let self = this;
				if (this.modalName == 'toastModal') {
					setTimeout(function() {
						self.modalName = "";
					}, 1500);
				}
			}
		},
		methods: {
			submitSendText(e) {
				
				let sendText = e.detail.value.sendtext;
				if(!sendText) {
					this.modalName = "toastModal";
					this.toastText = "不能发送空内容";
					return false;
				}
				this.$http1.post('signal/send',{
					type: 1,
					content: sendText,
				}).then(res=>{
					this.modalName = "toastModal";
					this.toastText = "信号已发往星球";
					getApp().globalData.sendSignal = true;
					setTimeout(function() {
						uni.navigateBack({
							detail: 1
						})
					}, 1500);
				})
			}
		},
	}
</script>

<style lang="scss">
	.btn_send {
		position: fixed;
		bottom: 100upx;
		width: 100%;
		height: 100upx;
		button{
			width: 356upx;
			height: 100upx;	
		}
	}
</style>
