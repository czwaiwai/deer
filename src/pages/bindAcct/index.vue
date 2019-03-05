<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd">
      <div class="top_bl text-center">
        <image class="img_150" src="../../static/img/home/head.png"></image>
        <p class="fs18">Miss米奇</p>
        <p class="fs13 dark_8e">待绑定</p>
      </div>
      <form @submit="handleSubmit">
          <div class="padding15-h">
              <input class="login_input" name="username" v-model="formObj.username" type="number" placeholder="请输入手机号" />
          </div>
          <div class="padding15-h relative">
              <input class="login_input" name="pwd" v-model="formObj.pwd"  type="text" placeholder="请输入验证码" />
              <button class="sms_btn main_color fs15">获取验证码</button>
          </div>
          <div class="padding15-h" style="padding-top:30rpx;"><button form-type="submit" class="login_btn" >绑定</button></div>
       </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'detail',
  components: {},
  data () {
    return {}
  },

  computed: {},

  created () {},

  methods: {}
}
</script>
<style scoped>
.sms_btn {
  position:absolute;
  top:0;
  right:30rpx;
  background:transparent;
  z-index:1;
  height:118rpx;
  line-height:118rpx;
}
.sms_btn:after {
  border:none;
}
.top_bl {
    height:406rpx;
    padding-top:54rpx;
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
