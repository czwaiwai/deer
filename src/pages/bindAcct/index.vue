<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <div class="page_bd">
        <div class="top_bl text-center">
          <img class="img_150 img_cir" :src="info.avatar || '../../static/img/home/head.png'" />
          <p class="fs18">{{info.nickname}}</p>
          <p v-if="info.bind_status" class="fs13 dark_8e">已绑定</p>
          <p v-else class="fs13 dark_8e">待绑定</p>
        </div>
        <form report-submit="true" @submit="handleSubmit">
          <div class="padding15-h">
            <input class="login_input" name="phone" v-model="formObj.phone" type="number" placeholder="请输入手机号" />
          </div>
          <div class="padding15-h relative">
            <input class="login_input" name="code" v-model="formObj.code" type="text" placeholder="请输入验证码" />
            <button @click="sendMsg" class="sms_btn main_color fs15">{{btnTxt}}</button>
          </div>
          <div class="padding15-h" style="padding-top:30rpx;">
            <button form-type="submit" class="login_btn">
              <span v-if="info.bind_status">解绑</span>
              <span v-else>绑定</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'detail',
  components: {},
  data () {
    return {
      info: {},
      formObj: {
        phone: '',
        code: ''
      },
      sendTimes: 60,
      btnTxt: '获取验证码',
      btnLock: false
    }
  },

  computed: {
    ...mapGetters({
      user: 'user'
    })
  },

  created () { },
  mounted () {
    this.formObj = {
      phone: '',
      code: ''
    }
    this.btnLock = false
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.merCenter()
      res.bind_status = parseInt(res.bind_status)
      this.info = res
    },
    async sendMsg () {
      if (this.btnLock) return
      this.btnLock = true
      // /mer/check-smscode
      await this.$api.sendSmscode({
        phone: this.formObj.phone,
        type: this.info.bind_status ? 0 : 1
      })
      this.interval()
    },
    interval () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.sendTimes = 60
      this.timer = setInterval(() => {
        console.log(this.sendTimes)
        if (this.sendTimes <= 0) {
          this.btnLock = false
          clearInterval(this.timer)
          this.btnTxt = `再次获取验证码`
        } else {
          this.sendTimes--
          this.btnTxt = `${this.sendTimes}后可重新发送`
        }
      }, 1000)
    },
    async handleSubmit (e) {
      this.$api.maFormId({
        form_id: e.mp.detail.formId
      })
      let res = await this.$api.checkSmscode({
        phone: this.formObj.phone,
        code: this.formObj.code,
        type: this.info.bind_status ? 0 : 1
      })
      console.log(res)
      this.$toast('操作成功')
      this.$wx.back()
    }
  }
}
</script>
<style scoped>
.sms_btn {
  position: absolute;
  top: 0;
  right: 30rpx;
  background: transparent;
  z-index: 5;
  height: 118rpx;
  line-height: 118rpx;
}
.sms_btn:after {
  border: none;
}
.top_bl {
  height: 406rpx;
  padding-top: 54rpx;
}
.login_input {
  background: #edf1f9;
  height: 120rpx;
  font-size: 30rpx;
  border-radius: 10rpx;
  padding-left: 54rpx;
  margin-bottom: 40rpx;
}
.login_check {
  font-size: 24rpx;
}
.login_btn {
  background: #2ed0c1;
  height: 120rpx;
  line-height: 120rpx;
  color: #fff;
}
</style>
