import Vue from 'vue'
import App from './App'
import '../static/weui/weui.css'
import '../static/tool/tool.css'
import http from './utils/request'
import loading from './utils/loading'
import toast from './utils/toast'
import store from './store/index'
import wxHelper from './utils/wxHelper'
Vue.wx = Vue.prototype.$wx = wxHelper
Vue.http = Vue.prototype.$http = http
Vue.toast = Vue.prototype.$toast = toast
Vue.loading = Vue.prototype.$loading = loading
Vue.store = Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)

app.$mount()
