<template>
	<view class="w-picker">
		<view class="mask" :class="{'show':showPicker}" @tap="maskTap" @touchmove.stop.prevent catchtouchmove="true"></view>
		<view class="w-picker-cnt" :class="{'show':showPicker}">
			<view class="w-picker-hd" @touchmove.stop.prevent catchtouchmove="true">
				<view class="w-picker-btn" @tap="pickerCancel">取消</view>
				<view class="w-picker-btn" :style="{'color':themeColor}" @tap="pickerConfirm">确定</view>
			</view>
			<view class="w-picker-view" v-if="mode=='date'">
				<picker-view :indicator-style="itemHeight" :value="pickVal" @change="bindChange" @touchstart="touchStart" @touchend="touchEnd">
					<picker-view-column>
						<view class="w-picker-item" v-for="(item,index) in data.years" :key="index">{{item}}年</view>
					</picker-view-column>
					<picker-view-column>
						<view class="w-picker-item" v-for="(item,index) in data.months" :key="index">{{item}}月</view>
					</picker-view-column>
					<picker-view-column>
						<view class="w-picker-item" v-for="(item,index) in data.days" :key="index">{{item}}日</view>
					</picker-view-column>
				</picker-view>
			</view>
			<view class="w-picker-view" v-if="mode=='selector'">
				<picker-view :indicator-style="itemHeight" :value="pickVal" @change="bindChange" @touchstart="touchStart" @touchend="touchEnd">
					<picker-view-column>
						<view class="w-picker-item" v-for="(item,index) in data" :key="index">{{item.label}}</view>
					</picker-view-column>
				</picker-view>
			</view>
			<view class="w-picker-view" v-if="mode=='region'">
				<picker-view :indicator-style="itemHeight" :value="pickVal" @change="bindChange" @touchstart="touchStart" @touchend="touchEnd">
					<picker-view-column>
						<view class="w-picker-item" v-for="(item,index) in data.provinces" :key="index">{{item.label}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="w-picker-item" v-for="(item,index) in data.citys" :key="index">{{item.label}}</view>
					</picker-view-column>
					<picker-view-column v-if="!hideArea">
						<view class="w-picker-item" v-for="(item,index) in data.areas" :key="index">{{item.label}}</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
	import provinces from './city-data/province.js';
	import citys from './city-data/city.js';
	import areas from './city-data/area.js';
	import initPicker from "./w-picker.js";

	function oneOf(value, validList) {
		for (let i = 0; i < validList.length; i++) {
			if (value === validList[i]) {
				return true;
			}
		}
		throw new Error('mode无效，请选择有效的mode!');
		return false;
	}
	export default {
		props: {
			mode: {
				type: String,
				validator(mode) {
					let modeList = ['half', 'date', 'dateTime', 'yearMonth', 'time', 'region', 'selector', 'limit', 'limitHour',
						'range', 'linkage'
					]; //过滤无效mode;
					return oneOf(mode, modeList);
				},
				default () {
					return "date"
				}
			},
			themeColor: {
				type: String,
				default () {
					return "#f5a200"
				}
			},
			startYear: {
				type: [String, Number],
				default () {
					return "1970"
				}
			},
			endYear: {
				type: [String, Number],
				default () {
					return new Date().getFullYear() + ''
				}
			},
			defaultVal: {
				type: Array,
				default () {
					return [0, 0, 0, 0, 0, 0, 0]
				}
			},
			areaCode: {
				type: Array,
				default () {
					return null
				}
			},
			hideArea: { //隐藏省市区三级联动   地区列
				type: Boolean,
				default: false
			},
			current: {
				type: Boolean,
				default: false
			},
			selectList: {
				type: Array,
				default () {
					return [];
				}
			},
			disabledAfter: {
				type: Boolean,
				default: false
			},
			timeout: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			mode() {
				this.initData();
			},
			selectList() {
				this.initData();
			},
			linkList() {
				this.initData();
			}
		},
		data() {
			return {
				showPicker: false,
				itemHeight: `height: ${uni.upx2px(88)}px;`,
				pickVal: [],
				data: {},
				checkArr: [],
				checkValue: [],
				resultStr: '',
				result: [],
				confirmFlag: true
			}
		},
		methods: {
			touchStart() {
				if (this.timeout) {
					this.confirmFlag = false;
				}
			},
			touchEnd() {
				if (this.timeout) {
					setTimeout(() => {
						this.confirmFlag = true;
					}, 500)
				}
			},
			getRegionVal(value, useCode) {
				let province = value[0];
				let city = value[1];
				let a = 0,
					b = 0,
					c = 0,
					dval = [];
				let _this = this;
				provinces.map((v, k) => {
					if (useCode ? v.value == province : v.label == province) {
						a = k;
					}
				})
				citys[a].map((v, k) => {
					if (useCode ? v.value == city : v.label == city) {
						b = k;
					}
				})
				if (!_this.hideArea) {
					let area = value[2];
					areas[a][b].map((v, k) => {
						if (useCode ? v.value == area : v.label == area) {
							c = k;
						}
					})
					dval = [a, b, c];
				} else {
					dval = [a, b];
				}
				return dval;
			},
			useCurrent() {
				let aToday = new Date();
				let tYear = aToday.getFullYear().toString();
				let tMonth = this.formatNum(aToday.getMonth() + 1).toString();
				let tDay = this.formatNum(aToday.getDate()).toString();
				let tHours = this.formatNum(aToday.getHours()).toString();
				let tMinutes = this.formatNum(aToday.getMinutes()).toString();
				let tSeconds = this.formatNum(aToday.getSeconds()).toString();
				if (this.current) {
					return [tYear, tMonth, tDay, tHours, (Math.floor(tMinutes / this.step) * this.step).toString(), tSeconds];
				} else {
					return this.defaultVal;
				}
			},
			formatNum(num) {
				return num < 10 ? '0' + num : num + '';
			},
			maskTap() {
				this.$emit("cancel", {
					checkArr: this.checkArr,
					defaultVal: this.pickVal
				});
				this.showPicker = false;
			},
			show() {
				this.showPicker = true;
			},
			hide() {
				this.showPicker = false;
			},
			pickerCancel() {
				this.$emit("cancel", {
					checkArr: this.checkArr,
					defaultVal: this.pickVal
				});
				this.showPicker = false;
			},
			pickerConfirm(e) {
				if (!this.confirmFlag) {
					return;
				}
				switch (this.mode) {
					case "range":
						break;
					case "limit":
						break;
					case "region":
					case "linkage":
						this.$emit("confirm", {
							checkArr: this.checkArr,
							checkValue: this.checkValue,
							defaultVal: this.pickVal,
							result: this.resultStr
						});
						break;
					default:
						this.$emit("confirm", {
							checkArr: this.checkArr,
							defaultVal: this.pickVal,
							result: this.resultStr
						});
						break;
				}
				this.showPicker = false;
			},
			bindChange(val) {
				let _this = this;
				let arr = val.detail.value;
				let year = "",
					month = "",
					day = "",
					hour = "",
					minute = "",
					second = "",
					note = [],
					province, city, area;
				let checkArr = _this.checkArr;
				let days = [];
				let months = [];
				let mode = _this.mode;
				let col1, col2, col3, d, a, h, m;
				let xDate = new Date().getTime();
				switch (mode) {
					case "limitHour":
						break;
					case "limit":
						break;
					case "range":
						break;
					case "half":
						break;
					case "date":
						year = _this.data.years[arr[0]] || _this.data.years[_this.data.years.length - 1];
						month = _this.data.months[arr[1]] || _this.data.months[_this.data.months.length - 1];
						day = _this.data.days[arr[2]] || _this.data.days[_this.data.days.length - 1];
						if (year != checkArr[0]) {
							months = initPicker.date.initMonths(year, _this.disabledAfter);
							days = initPicker.date.initDays(year, month, _this.disabledAfter);
							if (_this.disabledAfter) {
								arr[1] = arr[1] > (months.length - 1) ? months.length - 1 : arr[1];
								arr[2] = arr[2] > (days.length - 1) ? days.length - 1 : arr[2];
								month = _this.data.months[arr[1]] || _this.data.months[_this.data.months.length - 1];
								day = _this.data.days[arr[2]] || _this.data.days[_this.data.days.length - 1];
							}
							_this.data.days = days;
							_this.data.months = months;
						};
						if (month != checkArr[1]) {
							days = initPicker.date.initDays(year, month, _this.disabledAfter);
							arr[2] = arr[2] > (days.length - 1) ? days.length - 1 : arr[2];
							day = _this.data.days[arr[2]] || _this.data.days[_this.data.days.length - 1];
							_this.data.days = days;
						};
						_this.checkArr = [year, month, day];
						_this.resultStr = `${year+'-'+month+'-'+day}`;
						break;
					case "yearMonth":
						break;
					case "dateTime":
						break;
					case "time":
						break;
					case "linkage":
						break;
					case "region":
						province = _this.data.provinces[arr[0]] || _this.data.provinces[0];
						city = _this.data.citys[arr[1]] || _this.data.citys[0];
						if (!_this.hideArea) {
							area = _this.data.areas[arr[2]] || _this.data.areas[0];
						}

						if (province.label != checkArr[0]) {
							_this.data.citys = citys[arr[0]] || citys[0];
							if (!_this.hideArea) {
								_this.data.areas = areas[arr[0]][0] || areas[0][0];
							}
							arr[1] = 0;
							arr[2] = 0;
							city = _this.data.citys[arr[1]] || _this.data.citys[0];
							if (!_this.hideArea) {
								area = _this.data.areas[arr[2]] || _this.data.areas[0];
							}
						};
						if (city.label != checkArr[1] && !_this.hideArea) {
							_this.data.areas = areas[arr[0]][arr[1]] || areas[0][0];
							arr[2] = 0;
							area = _this.data.areas[arr[2]] || _this.data.areas[0];
						};
						if (!_this.hideArea) {
							_this.checkArr = [province.label, city.label, area.label];
							_this.checkValue = [
								_this.data.provinces[arr[0]] ? _this.data.provinces[arr[0]].value : _this.data.provinces[0].value,
								_this.data.citys[arr[1]] ? _this.data.citys[arr[1]].value : _this.data.citys[0].value,
								_this.data.areas[arr[2]] ? _this.data.areas[arr[2]].value : _this.data.areas[0].value
							];
							_this.resultStr = province.label + city.label + area.label;
						} else {
							_this.checkArr = [province.label, city.label];
							_this.checkValue = [
								_this.data.provinces[arr[0]] ? _this.data.provinces[arr[0]].value : _this.data.provinces[0].value,
								_this.data.citys[arr[1]] ? _this.data.citys[arr[1]].value : _this.data.citys[0].value
							];
							_this.resultStr = province.label + city.label;
						};
						break;
					case "selector":
						_this.checkArr = _this.data[arr[0]] || _this.data[_this.data.length - 1];
						_this.resultStr = _this.data[arr[0]] ? _this.data[arr[0]].label : _this.data[_this.data.length - 1].label;
						break;
				}
				_this.$nextTick(() => {
					_this.pickVal = arr;
				})
			},
			initData() {
				let _this = this;
				let data = {};
				let mode = _this.mode;
				let year, month, day, hour, minute, second, province, city, area;
				let col1, col2, col3;
				let dVal = [];
				switch (mode) {
					case "linkage":
						break;
					case "region":
						if (_this.areaCode) {
							dVal = _this.getRegionVal(_this.areaCode, true);
						} else {
							dVal = _this.getRegionVal(_this.defaultVal);
						}
						
						if (_this.hideArea) {
							data = {
								provinces: provinces,
								citys: citys[dVal[0]]
							};
						} else {
							data = {
								provinces: provinces,
								citys: citys[dVal[0]],
								areas: areas[dVal[0]][dVal[1]]
							};
						};
						break;
					case "selector":
						let idx = 0;
						data = _this.selectList;
						_this.selectList.map((v, k) => {
							if (v.label == this.defaultVal[0]) {
								idx = k;
							}
						})
						dVal = [idx];
						break;
					case "limit":
						break;
					case "limitHour":
						break;
					case "range":
						break;
					default:
						data = initPicker.date.init(_this.startYear, _this.endYear, _this.mode, _this.step, _this.useCurrent(), _this.current,
							_this.disabledAfter);
						dVal = data.defaultVal || _this.defaultVal;
						break;
				}
				_this.data = data;
				switch (mode) {
					case "date":
						year = data.years[dVal[0]] || data.years[data.years.length - 1];
						month = data.months[dVal[1]] || data.months[data.months.length - 1];
						day = data.days[dVal[2]] || data.days[data.days.length - 1];
						_this.checkArr = [year, month, day];
						_this.resultStr = `${year+'-'+month+'-'+day}`;
						break;
					case "region":
						province = data.provinces[dVal[0]];
						city = data.citys[dVal[1]];
						if (!_this.hideArea) {
							area = data.areas[dVal[2]];
							_this.checkArr = [province.label, city.label, area.label];
							_this.checkValue = [province.value, city.value, area.value];
							_this.resultStr = province.label + city.label + area.label;
						} else {
							_this.checkArr = [province.label, city.label];
							_this.checkValue = [province.value, city.value];
							_this.resultStr = province.label + city.label;
						}
						break;
					case "selector":
						_this.checkArr = data[dVal[0]] || data[data.length - 1];
						_this.resultStr = data[dVal[0]].label || data[data.length - 1].label;
						break;
				}
				_this.$nextTick(() => {
					_this.pickVal = dVal;
				})
			}
		},
		mounted() {
			this.initData();
		}
	}
</script>

<style lang="scss">
	.w-picker {
		position: relative;
		z-index: 888;

		.mask {
			position: fixed;
			z-index: 1000;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.6);
			visibility: hidden;
			opacity: 0;
			transition: all 0.3s ease;
		}

		.mask.show {
			visibility: visible;
			opacity: 1;
		}

		.w-picker-cnt {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			transition: all 0.3s ease;
			transform: translateY(100%);
			z-index: 3000;
		}

		.w-picker-cnt.show {
			transform: translateY(0);
		}

		.w-picker-hd {
			display: flex;
			align-items: center;
			padding: 0 30upx;
			height: 88upx;
			background-color: #fff;
			position: relative;
			text-align: center;
			font-size: 32upx;
			justify-content: space-between;

			.w-picker-btn {
				font-size: 30upx;
			}
		}

		.w-picker-hd:after {
			content: ' ';
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			height: 1px;
			border-bottom: 1px solid #e5e5e5;
			color: #e5e5e5;
			transform-origin: 0 100%;
			transform: scaleY(0.5);
		}

		.w-picker-item {
			text-align: center;
			width: 100%;
			height: 88upx;
			line-height: 88upx;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 30upx;
		}

		.w-picker-view {
			width: 100%;
			height: 476upx;
			overflow: hidden;
			background-color: rgba(255, 255, 255, 1);
			z-index: 666;
		}

		picker-view {
			height: 100%;
		}
	}
</style>
