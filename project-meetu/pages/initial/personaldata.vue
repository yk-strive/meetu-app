<template>
	<view id="personaldata_page" class="bg_page_2">
		<!-- text-title="完善个人资料" text-right="星豆记录" -->
		<custom-nav :isBack="isEditInfo?true:false" :textTitle="isEditInfo?'修改个人信息':''"></custom-nav>
		<scroll-view scroll-y="true">
			<view class="avatar_box">
				<image class="abs-center avatar_bg" src="../../static/meetu-img/face.png" mode="aspectFill"></image>
				<view class="avatar abs-center round">
					<image class="wh-100" v-bind:src="userInfo ? userInfo.headimgurl : ''" v-on:click="chooseImage" mode="aspectFill"></image>
				</view>
			</view>
			<form action="" v-on:submit="submitInfo">
				<view class="form_list">
					<view class="cu-form-group">
						<view class="title">昵称</view>
						<input class="text-right" :value="userInfo.nickname" name="nickname"></input>
					</view>
					<view class="cu-form-group">
						<view class="title">性别<text class="text-sm">（修改后不可更改）</text></view>
						<view class="right text-right text-white text-lg" @tap="togglePicker('selector')">{{sex}}</view>
						<w-picker v-if="selectList.length!=0" mode="selector" :defaultVal="sex" @confirm="onConfirm" ref="selector"
						 themeColor="#f00" :selectList="selectList"></w-picker>
					</view>
					<view class="cu-form-group">
						<view class="title">生日</view>
						<view class="right text-right text-white text-lg" @tap="togglePicker('date')">{{pickerBirthdayInfo.result}}</view>
						<w-picker mode="date" startYear="1959" endYear="2030" :defaultVal="pickerBirthdayInfo.checkArr" :current="false" @confirm="onConfirm"
						 :disabledAfter="true" ref="date" themeColor="#f00"></w-picker>
					</view>
					<view class="cu-form-group">
						<view class="title">地区</view>
						<view class="right text-right text-white text-lg" @tap="togglePicker('region')">{{pickerRegionInfo.result}}</view>
						<w-picker mode="region" :defaultVal="pickerRegionInfo.checkArr" :areaCode="pickerRegionInfo.checkValue" :hideArea="true" @confirm="onConfirm"
						 ref="region" :timeout="true"></w-picker>
						 <!--  :defaultVal="pickerRegionInfo.checkArr"  -->
					</view>
					<view class="cu-form-group">
						<view class="title">邀请码<text class="text-sm">（选填）</text></view>
						<input class="text-right" value="" name="invitecode"></input>
					</view>
				</view>
				<view class="submit_box">
					<image class="abs-h-center" src="../../static/meetu-img/sure.png" mode="widthFix"></image>
					<button class="submit round abs-h-center" form-type="submit"></button>
				</view>
			</form>
		</scroll-view>

	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	import pictureTailor from "@/components/picture-tailor/pictureTailor.vue";
	// 以下路径需根据项目实际情况填写
	import {
		mapGetters,mapMutations
	} from 'vuex'
	export default {
		name: 'personaldata',
		components: {
			wPicker,
			pictureTailor
		},
		data() {
			return {
				isEditInfo: false,
				userInfo: null,
				ischangeHeadimg: false,
				selectList: [{
					label: "男",
					value: 0
				}, {
					label: "女",
					value: 1
				}],
				mode: 'date',
				defaultVal: [0, 0, 0, 0, 0, 0, 0],
				sex: '',
				// date: '选择生日', //生日birthday
				// region: '选择地区',
				// regionArr: null,
				
				/*picker 插件选择之后传递过来的值, 
					chenkArr-选择的每一项的值, 
					defaultVal-选择对应的索引, 
					result-选择每一项拼接起来的值
					checkValue-选择每一项对应的地区code--在地区选择中出现. 
						这里chackValue自己进行本地存储(key--regionValueCode), 页面进入先获取,有的话picker弹起会在当前位置*/
				pickerBirthdayInfo: { 
					checkArr: ['1990', '01', '01'],
					defaultVal: [],
					result: '选择生日'
				},
				pickerRegionInfo: {
					checkArr: ["北京市", "市辖区"],
					checkValue: ["11", "1101"], //"14", "1408"
					defaultVal: [],
					result: '选择地区'
				},
			}
		},
		computed: {
			...mapGetters(['token'])
		},
		onLoad(options) {
			this.isEditInfo = options.type && options.type == 'edit' ? true : false;
			this.api_UserInfo();
		},
		onReady() {
			
		},
		methods: {
			...mapMutations(['changeVal']),
			api_UserInfo() {
				this.$http1.post('user/info').then(res => {
					// console.log('------userinfo-----', res);
					this.userInfo = res.data;
					this.sex = res.data.sex == 1 ? '男' : '女';
					this.pickerBirthdayInfo.result = res.data.birthday ? res.data.birthday : this.pickerBirthdayInfo.result;
					this.pickerRegionInfo.result = res.data.province + '' + res.data.city;
				}).catch(err => {
					console.log('userinfo-err', err);
				})
			},
			getUid(tempFilePath) {
				return tempFilePath.substring(tempFilePath.indexOf('/')+1, tempFilePath.lastIndexOf('.'));
			},
			chooseImage() {
				let self = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: (res) => {
						let tempFilePath = res.tempFilePaths[0];
						plus.zip.compressImage({
								src: tempFilePath,
								dst: "_doc/" + self.getUid(tempFilePath) +".jpg",
								overwrite: true,
								quality: 20
							},
							function(event) {
								uni.uploadFile({
									url: 'https://api.meetu.letwx.com/v2/sys/upload-img?token='+self.token,
									filePath: event.target,
									name: 'imgfile',
									formData: {
										'name': 'imgfile',
										'formData': JSON.stringify({
											'sort': 0
										})
									},
									success: (uploadFileRes) => {
										// console.log('upok',JSON.parse(uploadFileRes.data));
										self.userInfo.headimgurl = JSON.parse(uploadFileRes.data).data.imgUrl;
										self.ischangeHeadimg = true;
									},
									fail: (err) => {
										console.log('err', err);
									}
								});
							},
							function(error) {
								console.log('plus-error', error)
							});
					}
				})
			},
			togglePicker(mode) {
				if (mode == 'selector' && this.userInfo.isedit == 1) { //isedit==1说明已经修改过性别,则不允许再修改
					return;
				}
				this.mode = mode;
				this.$refs[mode].show();
			},
			onConfirm(val) {
				//如果页面需要调用多个mode类型，可以根据mode处理结果渲染到哪里;
				console.log(val);
				switch (this.mode) {
					case "date":
						this.pickerBirthdayInfo = val;
						break;
					case "selector":
						this.sex = val.result;
						break;
					case "region":
						this.pickerRegionInfo = val;
						// this.regionArr = val.checkArr
						break;
				}
			},
			submitInfo(e) {
				let self = this;
				let tempInfo = {};
				if (e.detail.value.nickname != this.userInfo.nickname && e.detail.value.nickname!='') {
					tempInfo.nickname = e.detail.value.nickname;
				}
				if (e.detail.value.invitecode) {
					tempInfo.code = e.detail.value.invitecode;
				}
				if (this.sex != (this.userInfo.sex == 1 ? '男' : '女')) {
					tempInfo.sex = this.sex == '男' ? 1 : 2;
				}
				if (this.pickerBirthdayInfo.result != this.userInfo.birthday && this.userInfo.birthday == null) {
					tempInfo.birthday = this.pickerBirthdayInfo.result;
				}
				if (this.pickerRegionInfo.checkArr[0] != this.userInfo.province) {
					tempInfo.province = this.pickerRegionInfo.checkArr[0];
				}
				if (this.pickerRegionInfo.checkArr[1] != this.userInfo.city) {
					tempInfo.city = this.pickerRegionInfo.checkArr[1];
				}
				if (this.ischangeHeadimg) {
					tempInfo.headimgurl = this.userInfo.headimgurl;
				}
				console.log(tempInfo);

				this.$http1.post('user/edit', tempInfo).then(res=>{
					uni.setStorageSync('firstPerfectInfo', true);
					if (this.isEditInfo) {
						for (let key in tempInfo) {
							this.userInfo[key] = tempInfo[key];
						}
						this.$store.dispatch('changeVal', {stateKey: 'userInfo', newValue: self.userInfo})
					} else {
						uni.redirectTo({
							url: '../home/index',
						})
					}
				}).catch(err=>{
					console.log('edit-err', err);
				})
			}
		}
	}
</script>

<style lang="scss">
	#personaldata_page {
		overflow-y: scroll;

		scroll-view {
			height: calc(100% - 128upx);
		}

		.avatar_box {
			position: relative;
			width: 100%;
			height: 346upx;

			image.avatar_bg {
				width: 326upx;
				height: 100%;
			}

			.avatar {
				width: 180upx;
				height: 180upx;
				overflow: hidden;
				top: 53%;
			}
		}

		.form_list {
			margin: 80upx 78upx;

			.cu-form-group+.cu-form-group {
				border-top: none;
			}

			.cu-form-group {
				padding: 30upx 0 0;
				background-color: transparent;
				border-bottom: 2upx solid #593DA5;

				.title {
					color: #735CB1;
					font-size: 32upx;
					letter-spacing: 4upx;
				}

				input {
					height: 90upx;
					font-size: 32upx;
					color: #FFFFFF;
				}

				.right {
					flex: 1;
					position: relative;
					padding-right: 40upx;
					overflow: hidden;
					line-height: 100upx;

					&::after {
						font-family: cuIcon;
						display: block;
						content: "\E6A3";
						position: absolute;
						font-size: 34rpx;
						color: #8799a3;
						line-height: 100rpx;
						width: 60rpx;
						text-align: center;
						top: 0;
						bottom: 0;
						right: -20rpx;
						margin: auto;
					}
				}
			}

		}

		.submit_box {
			position: relative;
			height: 160upx;

			image,
			button {
				width: 110upx;
				height: 110upx;
			}

			button.submit {
				opacity: 0;
			}
		}
	}

	.bg-gradual-blue {
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		color: #ffffff;
	}
</style>
