import Vue from 'vue'
import vueLazyload from 'vue-lazyload'
import App from './App'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.use(vueLazyload,{
  preLoad: 1.3,
  loading: './static/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})

app.$mount()
