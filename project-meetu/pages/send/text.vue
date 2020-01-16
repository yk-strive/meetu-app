<template>
	<view id="sendTextPage" class="bg_page_1">
		<custom-nav :isBack="true" textTitle="发布文字信号"></custom-nav>
		<form @submit="submitSendText">
			<view class="padding">
				<textarea class="text-white" :focus="true" name="sendtext" maxlength="300" placeholder="请输入想说的话" placeholder-style="color: #FFFFFF"/>
			</view>
			<view class="btn_send flex-df">
				<button class="bg-color-main cu-btn round text-letter-df" form-type="submit">确认发送</button>
			</view>
		</form>
		<cu-modal :modalName="modalName" :toastText="toastText"></cu-modal>
	</view>
</template>

<script>
	import mixinInit from "../../mixins/init.js";
	export default {
		name: 'sendText',
		mixins: [mixinInit],
		components: {
			
		},
		data() {
			return {

			}
		},
		onLoad() {
			plus.key.showSoftKeybord()
		},
		methods: {
			submitSendText(e) {
				
				let sendText = e.detail.value.sendtext;
				if(!sendText) {
					this.modalShow('toastModal', '不能发送空内容')
					return false;
				}
				this.$http1.post('signal/send',{
					type: 1,
					content: sendText,
				}).then(res=>{
					getApp().globalData.sendSignal = true;
					uni.navigateBack({
						detail: 1
					})
				})
			}
		},
	}
</script>

<style lang="scss">
	textarea {
		padding-left: 20rpx;
	}
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
