import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import customNav from './components/custom-nav.vue'
Vue.component('custom-nav',customNav)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
