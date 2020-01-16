import Vue from 'vue'
import store from '@/store/index.js'
import App from './App'

Vue.prototype.$store = store;

Vue.config.productionTip = false

import { http_v1 } from "@/common/luch-request/index.js";
Vue.prototype.$http1 = http_v1;

import customNav from './components/custom-nav.vue'
Vue.component('custom-nav',customNav)

import cuModal from "./meetu-ui/components/cu-modal.vue";
Vue.component('cu-modal',cuModal)

App.mpType = 'app'

String.prototype.byteLength = function() {
	let b = 0; 
	let len = this.length;
	if (len) {
		for (let i = 0; i < len; i++) {
			if (this.charCodeAt(i) > 255) {
				b += 2;
			} else {
				b++;
			}
		}
		return b;
	} else {
		return 0;
	}
}
// 数组去重, 这里只针对于数组为对象
Array.prototype.filterRepeat = function(attr) {
	let len = this.length;
	if (len > 0) {
		let tempArr = [];
		let tempObj = {};
		for (let i = 0; i < len; i++) {
			if (!tempObj[this[i][attr]]) {
				tempArr.push(this[i]);
				tempObj[this[i][attr]] = true;
			}
		}
		return tempArr;
	}
}
const app = new Vue({
	store,
    ...App
})
app.$mount()
