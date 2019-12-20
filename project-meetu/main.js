import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import customNav from './components/custom-nav.vue'
Vue.component('custom-nav',customNav)

import customNav2 from './components/custom-nav2.vue';
Vue.component('custom-nav2',customNav2)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
