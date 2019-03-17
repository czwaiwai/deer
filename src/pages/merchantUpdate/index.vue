<!-- index.vue -->
<template>
<div class="container">
  <form class="form_wrap"  @submit="handleSubmit" report-submit="true">
  <div class="page">
    <div class="page_bd add_acct">
        <div class="input_item padding15-h weui-flex">
            <div class="padding-right15 fs15">账号</div>
            <div class="weui-flex__item"> <input class="add_input" name="account" v-model="formObj.account" type="number" placeholder="请输入手机号" /></div>
        </div>
        <div class="input_item padding15-h relative  weui-flex">
            <div class="padding-right15 fs15">密码</div>
            <div class="weui-flex__item"> 
              <input class="login_input" name="password" v-model="formObj.password" :password="!showPwd" type="text" placeholder="请输入密码" />
            </div>
            <div @click="handleEye" class="input_item_ft pwd_ft_wrap">
              <image v-if="showPwd" class="eye_icon" mode="aspectFit"  src="../../static/img/other/eye_show_icon.png"></image>
              <image v-if="!showPwd" class="eye_icon" mode="aspectFit"  src="../../static/img/other/eye_close_icon.png"></image>
            </div>
        </div>
    </div>
    <div class="page_ft">
      <button v-if="updateType==='create'" form-type="submit"  class="ft_btn">确定关联</button>
      <div  v-if="updateType==='update'"  class="weui-flex">
        <div class="weui-flex__item">
          <button @click="handleDel" class="ft_btn del_btn">删除账号</button>
        </div>
        <div class="weui-flex__item">
          <button form-type="submit"  class="ft_btn">确定编辑</button>
        </div>
      </div>
    </div>
  </div>
  </form>
  <van-dialog id="van-dialog" />
</div>
</template>

<script>
import Dialog from '../../../static/vant/dialog/dialog'
export default {
  name: 'detail',
  components: {},
  data () {
    return {
      formObj: {
        account: '',
        password: ''
      },
      updateType: 'create',
      showPwd: false
    }
  },

  computed: {},

  created () {},
  onLoad (query) {
    this.subMid = query.subMid || ''
    this.updateType = 'create'
    if (this.subMid) {
      this.updateType = 'update'
    }
  },
  methods: {
    handleEye () {
      this.showPwd = !this.showPwd
    },
    async handleSubmit (e) {
      let res = await this.$api.merSubSave({
        sub_id: this.subMid,
        ...this.formObj
      })
      console.log(res)
      this.$toast('操作成功')
      this.$wx.refreshPrevent()
      this.$wx.back()
    },
    async handleDel () {
      let action = await Dialog.confirm({
        title: '提示',
        message: '你确定要删除此账号么？'
      })
      console.log(action)
      await this.$api.merSubDel({
        sub_mid: this.subMid
      })
      this.$wx.refreshPrevent()
      this.$wx.back()
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
.ft_btn.del_btn {
  background:#162641;
}
</style>
