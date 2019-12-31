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

const app = new Vue({
	store,
    ...App
})
app.$mount()
