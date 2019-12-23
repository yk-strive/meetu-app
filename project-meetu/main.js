import Vue from 'vue'
import App from './App'
import store from '@/store/index.js'

Vue.config.productionTip = false

import { http_v1 } from "@/common/luch-request/index.js";
Vue.prototype.$http1 = http_v1;

import customNav from './components/custom-nav.vue'
Vue.component('custom-nav',customNav)

import customNav2 from './components/custom-nav2.vue';
Vue.component('custom-nav2',customNav2)

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
