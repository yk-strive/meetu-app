<template>
	<view id="chatPage" class="bg_page_3">
		<custom-nav :isBack="true" :textTitle="'与' + oppositeinfo.name + '的对话'"></custom-nav>
		<scroll-view scroll-y="true" >
			<view></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'chat',
		data() {
			return {
				oppositeinfo: null,
			}
		},
		onLoad(options) {
			this.oppositeinfo = JSON.parse(options.oppositeinfo);
		}
	}
</script>

<style lang="scss">
	
</style>
