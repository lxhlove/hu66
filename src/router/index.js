// 初始化路由对象,提供给main.js使用;
// 导入vue-router.js路由插件;
import VueRouter from 'vue-router'
import Vue from 'vue'

// 定义登录页面组件的路由;
import Login from '@/views/login'
// 使用vue-router.js插件
Vue.use(VueRouter)

// 初始化路由对象;
const router = new VueRouter({
  // 定义路由配置规则;(组件对应的路径)
  routes: [
    { path: '/login', name: 'login', component: Login }
  ]
})

// 导出路由对象;
export default router
