<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd add_acct">
      <form  @submit="handleSubmit">
        <div class="input_item padding15-h weui-flex">
            <div class="padding-right15 fs15">账号</div>
            <div class="weui-flex__item"> <input class="add_input" name="username" v-model="formObj.username" type="number" placeholder="请输入手机号" /></div>
        </div>
        <div class="input_item padding15-h relative  weui-flex">
            <div class="padding-right15 fs15">密码</div>
            <div class="weui-flex__item"> 
              <input class="login_input" name="pwd" v-model="formObj.pwd" :password="!showPwd" type="text" placeholder="请输入验证码" />
              <!-- <input class="login_input" name="pwd" v-model="formObj.pwd"  type="text" placeholder="请输入验证码" /> -->
              <!-- <button class="sms_btn main_color fs15">获取验证码</button> -->
            </div>
            <div @click="handleEye" class="input_item_ft pwd_ft_wrap">
              <image v-if="showPwd" class="eye_icon" mode="aspectFit"  src="../../static/img/other/eye_show_icon.png"></image>
              <image v-if="!showPwd" class="eye_icon" mode="aspectFit"  src="../../static/img/other/eye_close_icon.png"></image>
            </div>
        </div>
      </form>
    </div>
    <div class="page_ft">
      <button  class="ft_btn">确定关联</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'detail',
  components: {},
  data () {
    return {
      formObj: {
        username: '',
        pwd: ''
      },
      showPwd: false
    }
  },

  computed: {},

  created () {},

  methods: {
    handleEye () {
      this.showPwd = !this.showPwd
    }
  }
}
</script>
<style class="scoped">
.input_item{
  height:112rpx;
  line-height:111rpx;
}
.input_item .weui-flex__item {
  border-bottom:1rpx solid #ECEEF2;
  padding-left:30rpx;
}
.input_item_ft {
  border-bottom:1rpx solid #ECEEF2;
  padding-left:30rpx;
}
.input_item input{
  font-size:30rpx;
  height:111rpx;
  line-height:111rpx;
}
.eye_icon{
  width:57rpx;
  height:57rpx;
}
.pwd_ft_wrap  {
  line-height:140rpx;
}
</style>
