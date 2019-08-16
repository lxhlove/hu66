// main.js:入口文件;
// 职责1:引入需要进行依赖的模块;
// 职责2:创建一个Vue根实例
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
