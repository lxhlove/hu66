// main.js:入口文件;
// 职责1:引入需要进行依赖的模块;
// 职责2:创建一个Vue根实例
import Vue from 'vue'
import App from './App.vue'

// 引入element-ui插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导vue-router插件模块;
import router from '@/router'

Vue.config.productionTip = false
// 使用element-ui插件
Vue.use(ElementUI)

new Vue({
  // 配置路由插件;
  router,
  render: h => h(App)
}).$mount('#app')
