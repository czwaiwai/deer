<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd">
       <div class="top_bl text-center">
           <h1 style="padding-top:150rpx;font-size:66rpx;">米奇猩</h1>
           <p class="fs15 dark_8e">商户助手</p>
       </div>
       <form @submit="handleSubmit">
            <div class="padding15-h">
                <input class="login_input" name="username" v-model="formObj.username" type="number" placeholder="请输入手机号" />
            </div>
            <div class="padding15-h">
                <input class="login_input" name="pwd" v-model="formObj.pwd" password type="text" placeholder="请输入密码" />
            </div>
            <div  class="padding15-h">
                <label class="checkbox login_check" >
                        <checkbox v-model="autoLogin" name="autoLogin"  value="1" />
                        记住账号密码
                    </label>
            </div>'
            <div class="padding15-h"><button form-type="submit" class="login_btn" >登录</button></div>
            
       </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    return {
      formObj: {
        username: '',
        pwd: '',
        autoLogin: ''
      }
    }
  },

  computed: {},

  created () {},

  methods: {
    handleSubmit (e) {
      console.log(e)
      console.log(this.formObj)
    }
  }
}
</script>
<style>
.top_bl {
    height:406rpx;
}
.login_input {
    background:#EDF1F9;
    height:120rpx;
    font-size:30rpx;
    border-radius:10rpx;
    padding-left:54rpx;
    margin-bottom:40rpx;
}
.login_check {
    font-size:24rpx;
}
.login_btn {
    background:#2ED0C1;
    height:120rpx;
    line-height:120rpx;
    color:#FFF;
}
</style>
