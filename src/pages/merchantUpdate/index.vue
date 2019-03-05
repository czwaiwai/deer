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
              <input class="login_input" name="pwd" v-model="formObj.pwd"  type="text" placeholder="请输入验证码" />
              <!-- <button class="sms_btn main_color fs15">获取验证码</button> -->
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
      }
    }
  },

  computed: {},

  created () {},

  methods: {}
}
</script>
<style>
.add_acct .input_item{
  height:112rpx;
}
.add_acct .input_item .weui-flex__item {
  border-bottom:1rpx solid #ECEEF2;
}
</style>
