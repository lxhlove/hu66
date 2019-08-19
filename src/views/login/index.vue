<template>
  <!-- 定义登录页组件 -->
  <div class="container">
    <el-card class="my-card">
      <!-- logo区域 -->
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 表单区域 -->
      <!-- rules:指定校验规则 -->
      <!-- prop:指定需要进行校验的字段名 -->
      <!-- validator:指定自定义校验函数,先声明在使用 -->
      <!-- ref:操作DOM元素 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon>
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            style="width:236px;margin-right:10px"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 添加自定义校验函数;
    const checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号格式错误'))
      } // 叫验失败
      callback() // 校验成功
    }
    return {
      loginForm: {
        // 字段参考接口文档;
        mobile: '13911111111',
        code: '246810'
      },
      // 定义校验规则对象;
      loginRules: {
        // 添加校验规则;
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 对表单整体进行校验
      this.$refs.loginForm.validate(valid => {
        // 判断校验是否成功;
        if (valid) {
          console.log('success')
          // 校验成功发起登陆请求;
          this.$http
            .post(
              'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
              this.loginForm
            )
            .then(res => {
              // res是响应对象,响应数据属于响应主体
              // console.log(res.data)
              // 请求成功;
              // 请求成功,储存用户信息;

              this.$router.push('/')
            })
            .catch(() => {
              // 请求失败;
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  //cover:等比缩放,铺满容器
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .my-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>
