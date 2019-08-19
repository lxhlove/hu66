// 初始化路由对象,提供给main.js使用;
// 导入vue-router.js路由插件;
import VueRouter from 'vue-router'
import Vue from 'vue'

// 定义登录页面组件的路由;
import Login from '@/views/login'
// 定义首页组件的路由;
import Home from '@/views/home'
// 导入欢迎页面组件的路由;
import Welcome from '@/views/welcome'
// 导入内容管理组件的路由;
import Article from '@/views/article'
// 导入404组件的路由;
import NotFound from '@/views/404'
// 使用vue-router.js插件
Vue.use(VueRouter)

// 初始化路由对象;
const router = new VueRouter({
  // 定义路由配置规则;(组件对应的路径)
  routes: [
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      component: Home,
      // 定义二级路由配置规则;
      // 配置欢迎页面的路由规则
      children: [
        { path: '/', name: 'welcome', component: Welcome },
        // 配置内容管理页面的路由规则;
        { path: '/article', name: 'article', component: Article }
      ]
    },
    // 配置404页面页面的路由规则;
    { path: '*', name: '404', component: NotFound }
  ]
})

// 导出路由对象;
export default router
