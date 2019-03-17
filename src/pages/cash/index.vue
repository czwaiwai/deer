<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd" >
      <form @submit="handleCashSubmit"
          report-submit="true">
        <div class="dark_line"></div>
        <div @click="routeTo('../bindAcct/main')" class="weui-cells no_before_border no_after_border weui-cells_after-title ">
          <div class="weui-cell" style="height:100rpx;">
              <div class="weui-cell__hd fs15">提现至</div>
              <div class="weui-cell__bd "></div>
            </div>
            <div class="weui-cell "   style="height:150rpx;">
              <div class="weui-cell__hd">
                <img class="img_54" :src="info.avatar || '../../static/img/home/head.png'"  >
              </div>
              <div class="weui-cell__bd padding-left15 fs15">{{info.nickname}}</div>
              <div v-if="info.bind_status" class="weui-cell__ft  weui-cell__ft_in-access fs15">已绑定</div>
              <div v-else class="weui-cell__ft  weui-cell__ft_in-access fs15">待绑定</div>
            </div>
        </div>
        <div class="dark_line"></div>
        <div class="weui-cells no_before_border  weui-cells_after-title ">
            <div @click="routeTo('../cashDetail/main')" class="weui-cell" style="height:100rpx;">
              <div class="weui-cell__hd fs15">提现金额</div>
              <div class="weui-cell__bd "></div>
              <div class="weui-cell__ft  weui-cell__ft_in-access fs15">明细</div>
            </div>
            <div class="weui-cell " style="height:201rpx;">
              <div class="weui-cell__hd large_unit"> ¥</div>
              <div class="weui-cell__bd padding-left15">
                <input v-model="formObj.amount" class="weui-input large_txt" type="number" pattern="[0-9]*" placeholder="金额">
              </div>
              <!-- <div class="weui-cell__ft  weui-cell__ft_in-access fs15">待绑定</div> -->
            </div>
        </div>
        <div class="weui-cells__tips padding-top15">待体现金额： ¥{{info.balance}}</div>
        <div class="padding15">
          <button form-type="submit"  class="cash_submit_btn">提现</button>
        </div>
        <div class="weui-cells__tips">每笔提现需要收取1%的手续费</div>
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
    return {
      info: {},
      formObj: {
        amount: ''
      }
    }
  },

  computed: {},

  created () {},
  mounted () {
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.merCenter()
      res.bind_status = parseInt(res.bind_status)
      this.info = res
    },
    async handleCashSubmit () {
      let res = await this.$api.withdraw({
        amount: this.formObj.amount
      })
      console.log(res)
    },
    routeTo (url) {
      return wx.navigateTo({url})
    }
  }
}
</script>
<style>
.cash_submit_btn {
  height:120rpx;
  color:#FFF;
  line-height:120rpx;
  background:rgba(46,208,193,1);
  border-radius:10rpx;
}
.large_unit {
  font-size:54rpx;
}
.large_txt {
  font-size:120rpx;
}
</style>
