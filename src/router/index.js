// 初始化路由对象,提供给main.js使用;
// 导入vue-router.js路由插件;
import VueRouter from 'vue-router'
import Vue from 'vue'
// 使用vue-router.js插件
Vue.use(VueRouter)

// 初始化路由对象;
const router = new VueRouter({
  // 定义路由配置规则;
  routes: []
})

// 导出路由对象;
export default router
