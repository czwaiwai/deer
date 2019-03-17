<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <div class="page_bd">
        <div class="top_bl text-center">
          <h1 style="padding-top:150rpx;font-size:66rpx;">米奇猩</h1>
          <p class="fs15 dark_8e">商户助手</p>
        </div>
        <form @submit="handleSubmit"
              report-submit="true">
          <div class="padding15-h">
            <input class="login_input"
                   name="username"
                   v-model="formObj.username"
                   type="number"
                   placeholder="请输入手机号" />
          </div>
          <div class="padding15-h">
            <input class="login_input"
                   name="pwd"
                   v-model="formObj.pwd"
                   password
                   type="text"
                   placeholder="请输入密码" />
          </div>
          <div class="padding15-h">
            <checkbox-group @change="handleCheck">
              <label class="checkbox login_check">
                <checkbox  name="autoLogin"  value="1" />
                记住账号密码
              </label>
            </checkbox-group>
          </div>
          <div class="padding15-h padding-top15">
            <div>
              <button form-type="submit"
                      open-type="getUserInfo"
                      @getuserinfo="bindGetUserInfo"
                      class="login_btn">登录</button>
            </div>
            <!-- <div v-if="!canAuth">
              <button class="login_btn"
                      form-type="submit">登录</button>
            </div> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// maOauth, merLogin
import { mapGetters } from 'vuex'
import validators from '@/utils/validators'
import { maKey, maFormId, maOauth, merLogin } from '@/api/common'
export default {
  name: 'login',
  components: {},
  data () {
    return {
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      formId: '',
      formObj: {
        username: '',
        pwd: '',
        autoLogin: ''
      }
    }
  },

  computed: {
    ...mapGetters({
      user: 'user',
      token: 'token',
      account: 'account',
      isLogin: 'isLogin'
    }),
    canAuth () {
      return this.formObj.username && this.formObj.pwd
    }
  },
  onLoad () {
    if (this.isLogin) {
      wx.redirectTo({
        url: '../index/main'
      })
    }
    // this.checkLocalToken().then(res => {
    //   if (this.isLogin) {
    //     wx.redirectTo({
    //       url: '../index/main'
    //     })
    //   }
    // })
    this.formObj.username = this.account
  },
  created () { },

  methods: {
    // 检查本地token是否有效
    checkLocalToken () {
      return new Promise((resolve, reject) => {
        wx.checkSession({
          success: (res) => {
            let token = this.token
            if (!token) {
              this.$store.commit('setToken', '')
              this.$store.commit('setLogin', false)
              reject(res)
            }
            resolve(token)
          },
          fail: (res) => {
            console.log('登录状态已过期，需要重新登录')
            this.$store.commit('setToken', '')
            this.$store.commit('setLogin', false)
            reject(res)
          }
        })
      })
    },
    handleCheck (e) {
      this.formObj.autoLogin = e.mp.detail.value[0] || 0
    },
    formHandle (form, user) {
      let userInfo = (user && user.UserInfo) ? user.UserInfo : ''
      this.triggerEvent('submit', {
        formId: form.detail.formId,
        userInfo: userInfo,
        auth: true
      })
    },
    formNoLoginHandle (e) {
      this.allReady('form', e)
    },
    validator () {
      let errs = validators.validator(this.formObj, {
        username: ['required@请输入手机号'],
        pwd: ['required@请输入密码', 'pwd|5']
      })
      if (errs && errs.length > 0) {
        this.$toast(errs[0].errMsg)
        return false
      } else {
        return true
      }
    },
    bindGetUserInfo (e) {
      if (!e.mp.detail.userInfo) {
        console.log('未允许授权')
        this.$toast('未允许授权')
      } else {
        console.log(this.user, this.token)
        // if (this.user && this.token) {
        //   if (!this.validator()) return
        //   if (this.formObj.autoLogin) {
        //     this.$store.commit('setAccount', this.formObj.autoLogin)
        //   }
        //   this.promise = this.loginAction().then(res => this.loginSucc(res))
        // } else {
        this.promise = this.$wx.login()
          .then(code => maKey({ code }))
          .then(res => maOauth({
            encryptedData: e.mp.detail.encryptedData,
            iv: e.mp.detail.iv
          }))
          .then(user => {
            this.$store.commit('setUser', user)
            return this.loginAction()
          })
          .then(res => this.loginSucc(res))
        // }
      }
    },
    loginAction () {
      if (!this.validator()) return Promise.reject(new Error('验证失败'))
      if (this.formObj.autoLogin) {
        this.$store.commit('setAccount', this.formObj.autoLogin)
      }
      return merLogin({
        account: this.formObj.username,
        password: this.formObj.pwd,
        remember: this.formObj.autoLogin
      })
    },
    loginSucc (res) {
      this.$store.commit('setLogin', true)
      this.$toast('登陆成功~')
      const url = '../index/main'
      wx.redirectTo({ url })
    }
    // if (!this.data.isLogin) {
    //   // login(e).then(res => {
    //   //   this.setData({
    //   //     isLogin: true
    //   //   })
    //   //   this.allReady('user', res)
    //   // }).catch(err => {
    //   //   // 授权失败时重置并放弃提交
    //   //   console.log(err)
    //   //   this.fns = {}
    //   // })
    // }
  },
  allReady (typeName, res) {
    if (!this.fns) {
      this.fns = {}
    }
    this.fns[typeName] = res
    if (this.fns['user'] && this.fns['form']) {
      this.formHandle(this.fns['form'], this.fns['user'])
      this.fns = {}
    }
  },
  handleSubmit (e) {
    setTimeout(() => {
      if (this.promise) {
        this.promise.then(res => {
          this.formId = e.target.formId
          maFormId({
            form_id: this.formId
          })
        })
      }
    }, 15)
  }
}
</script>
<style>
.top_bl {
  height: 406rpx;
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
