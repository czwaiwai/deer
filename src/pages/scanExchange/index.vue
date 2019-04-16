<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <div class="page_bd">
        <div class="scan_hd weui-flex">
          <div class="weui-flex__item flex_item_center">
            <p class="big_txt" v-if="info.status===0">待领取</p>
            <div class="main_color" v-if="info.status===1">
              <p class="big_txt main_color">已领取</p>
              <p class="fs12 main_color">超过30天未领取，请联系平台退款</p>
            </div>
            <div class="dark_8e" v-if="info.status===-1">
              <p class="big_txt dark_8e">已过期</p>
              <p class="fs12 dark_8e">超过30天未领取，请联系平台退款</p>
            </div>

          </div>
          <div class="flex_item_center">
            <img class="img_54 vertical-middle " :src="info.avatar || '../../static/img/home/head.png'" />
            <span class="padding-left fs13 vertical-middle ">{{info.nickname}}</span>
          </div>
        </div>
        <div class="scan_bd">
          <div>
            <img class="img_360" :src="info.goods_image || '../../static/img/other/good.png'" />
          </div>
          <p class="fs18">{{info.goods_name}}</p>
        </div>
        <div class="scan_ft">
          <p class="fs14 dark_8e">门店号：{{info.store_no}}</p>
          <p class="fs14 dark_8e">兑换门店：{{info.store_addr}}</p>
        </div>
        <div class="scan_tip">
          <p class="fs14 dark_8e">注：确认兑换后，现场进行发放</p>
        </div>
      </div>
      <div class="page_ft">
        <form v-if="info.status===0" @submit="handleSubmit" report-submit="true">
          <button :hover="true" hover-class="btnhover" form-type="submit" class="ft_btn">确定兑换</button>
        </form>
        <button v-else disabled class="ft_btn">确认兑换</button>
      </div>
    </div>
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
      info: {}
    }
  },

  computed: {},

  created () { },
  onLoad (query) {
    this.storeNo = query.store_no || ''
    this.goodsId = query.goods_id || ''
    this.userId = query.user_id || ''
    this.giftId = query.gift_id || ''
    this.activeId = query.active_id || ''
    this.code = query.code || ''
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.scanDetail({
        goods_id: this.goodsId,
        gift_id: this.giftId,
        user_id: this.userId,
        active_id: this.activeId,
        code: this.code,
        store_no: this.storeNo
      })
      this.info = res
      console.log(res)
    },
    async handleSubmit (e) {
      await Dialog.confirm({
        title: '提示',
        message: '你确定要兑换么？'
      })
      let res = await this.$api.scanReceive({
        goods_id: this.goodsId,
        gift_id: this.giftId,
        user_id: this.userId,
        active_id: this.activeId,
        code: this.code,
        store_no: this.storeNo
      })
      this.$toast('兑换成功')
      setTimeout(() => {
        this.$wx.back()
      }, 2000)
      console.log(res)
    }
  }
}
</script>
<style>
.scan_hd {
  height: 153rpx;
  padding: 0 30rpx;
  border-bottom: 1rpx solid #eceef2;
}
.scan_hd .weui-flex__item .big_txt {
  font-size: 48rpx;
}
.scan_bd {
  padding: 72rpx 30rpx;
  border-bottom: 1rpx solid #eceef2;
}
.scan_ft {
  padding: 54rpx 30rpx;
  border-bottom: 1rpx solid #eceef2;
}
.scan_ft p,
.scan_tip p {
  line-height: 1;
}
.scan_ft p + p {
  padding-top: 36rpx;
}
.scan_tip {
  padding: 54rpx 30rpx;
}
</style>
