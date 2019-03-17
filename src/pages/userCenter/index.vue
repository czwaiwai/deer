<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd user_center">
       <div class="weui-cells  weui-cells_after-title ">
          <div class="weui-cell my_head_cell ">
            <div class="weui-cell__hd">
              <img class="my_cell_img" :src="user.avatar || '../../static/img/home/head.png'" />
            </div>
            <div class="weui-cell__bd padding-left15">
              <p class="fs15 dark_16" >{{user.nickname}}</p>
              <p class="fs12 dark_8e">主账号 B302</p>
            </div>
            <div class="weui-cell__ft ">
              <button @click="updateUser" class="user_center_update_btn">更新</button>
            </div>
          </div>
        </div>
    </div>
    <div class="page_ft">
      <button @click="HandleLogout" class="logout_btn">退出</button>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'userCenter',
  components: {},
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      user: 'user'
    })
  },

  created () {},
  methods: {
    updateUser () {
      let that = this
      wx.getUserInfo({
        success (res) {
          const userInfo = res.userInfo
          that.$api.userUpdate({
            nickname: userInfo.nickName,
            avatar: userInfo.avatarUrl
          }).then(res => {
            that.$store.commit('setUser', {
              ...that.user,
              ...userInfo
            })
            that.$toast('更新成功')
          })
        }
      })
    },
    async HandleLogout (e) {
      let res = await this.$api.logout()
      console.log(res)
      this.$store.dispatch('logout').then(res => {
        wx.navigateTo({ url: '../login/main' })
      })
    }
  }
}
</script>
<style scoped>
.my_cell_img {
  height:120rpx;
  width:120rpx;
}
.my_head_cell{
  height:237rpx;
}
.user_center .weui-cells:before {
    border-top: none;
  }
.user_center .weui-cells:after {
 border:none;
}
.user_center .weui-cell:before {
 border:none;
}
.user_center_update_btn {
  width:150rpx;
  height:66rpx;
  color:#FFF;
  font-size:30rpx;
  line-height: 66rpx;
  border:none;
  background:rgba(46,208,193,1);
  border-radius:33rpx;
}
.logout_btn {
  background:#1CD1C2;
  color:#FFF;
  border:none;
  border-radius:0;
}
</style>
