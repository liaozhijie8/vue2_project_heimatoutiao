import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入vant组件库
import Vant from 'vant'
import 'vant/lib/index.less'
// 注册插件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
