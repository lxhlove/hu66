<template>
  <div class="container">
    <el-container class="wrapper">
      <el-aside :width="isCollapse ? '64px':'200px'">
        <!-- logo -->
        <div class="logo" :class="{miniLogo:isCollapse}"></div>
        <!-- 导航侧边栏 -->
        <!-- 导航菜单容器 -->
        <!--   default-active:默认激活的菜单项 -->
        <!-- active-text-color="#ffd04b":激活时 的文字颜色 -->
        <el-menu
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-active="$route.path"
          background-color="#002033"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <!-- 菜单项 -->
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/article">
            <i class="el-icon-document"></i>
            <span slot="title">内容管理</span>
          </el-menu-item>
          <el-menu-item index="/image">
            <i class="el-icon-picture"></i>
            <span slot="title">素材管理</span>
          </el-menu-item>
          <el-menu-item index="/publish">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="/comment">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">评论管理</span>
          </el-menu-item>
          <el-menu-item index="/fans">
            <i class="el-icon-present"></i>
            <span slot="title">粉丝管理</span>
          </el-menu-item>
          <el-menu-item index="setting">
            <i class="el-icon-setting"></i>
            <span slot="title">个人设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <!-- 图标 -->
          <span class="el-icon-s-fold" @click="toggleMenu()"></span>
          <!-- 内容 -->
          <span class="text">江苏传智播客科技教育有限公司</span>
          <!-- 下拉菜单区域 -->
          <el-dropdown class="my-dropped">
            <span class="el-dropdown-link">
              <img src="../../assets/images/avatar.jpg" alt />
              下拉菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
              <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <!-- 添加二级路由的出口,组件的显示的位置 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleMenu () {
      // 切换侧边栏导航的展开与收起;
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped lang='less'>
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background: #002033;
  }
  .el-header {
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    .el-icon-s-fold {
      font-size: 24px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      margin-left: 10px;
    }
    .my-dropped {
      float: right;
      .el-dropdown-link {
        font-weight: bold;
      }
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
    }
  }
}
.logo {
  width: 100%;
  height: 60px;
  background: #002244 url(../../assets/images/logo_admin.png) no-repeat center /
    140px auto;
}
.miniLogo{
  background-image: url(../../assets/images/logo_admin_01.png);
  background-size:36px auto;
}
.el-menu{
  border-right:none;
}
</style>
