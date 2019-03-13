<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd bg">
      <div class="padding15-h padding-top15">
        <div @click="routeTo('../stockDetail/main')" class="stock_wrap ">
          <div class="weui-flex stock_top">
            <div>
              <image  src="../../static/img/home/shop_icon.png" class="img_120"></image>
            </div>
            <div class="weui-flex__item padding-left15 flex_item_center">
              <p class="fs14">鹿角巷天河北门店</p>
              <p class="fs12 dark_8e">天河区天河路北路99号 B302</p>
            </div>
          </div>
          <div class="weui-flex text-center padding-top">
            <div class="weui-flex__item">
              <p class="fs24">20</p>
              <p  class="fs12 dark_8e" >已兑换</p>
            </div>
            <div class="weui-flex__item">
              <p  class="fs24" >80</p>
              <p  class="fs12 dark_8e">剩余库存</p>
            </div>
            <div class="weui-flex__item">
              <p  class="fs24" >100</p>
              <p  class="fs12 dark_8e">累计库存</p>
            </div>
          </div>
        </div>
      </div>
      <div class="padding15-h padding-top15">
        <div class="stock_wrap ">
          <div class="weui-flex stock_top">
            <div>
              <image src="../../static/img/home/shop_icon.png" class="img_120"></image>
            </div>
            <div class="weui-flex__item padding-left15 flex_item_center">
              <p class="fs14">鹿角巷天河北门店</p>
              <p class="fs12 dark_8e">天河区天河路北路99号 B302</p>
            </div>
          </div>
          <div class="weui-flex text-center padding-top">
            <div class="weui-flex__item">
              <p class="fs24">20</p>
              <p  class="fs12 dark_8e" >已兑换</p>
            </div>
            <div class="weui-flex__item">
              <p  class="fs24" >80</p>
              <p  class="fs12 dark_8e">剩余库存</p>
            </div>
            <div class="weui-flex__item">
              <p  class="fs24" >100</p>
              <p  class="fs12 dark_8e">累计库存</p>
            </div>
          </div>
        </div>
      </div>


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

  methods: {
    routeTo (url) {
      return wx.navigateTo({url})
    }
  }
}
</script>
<style scoped>
.stock_wrap {
  height:360rpx;
  padding: 40rpx 30rpx; 
  background:#FFF;
  border-radius:20rpx;
}
.stock_wrap  .fs24{
  line-height:1.4;
}
.stock_top {
  padding-bottom:30rpx;
  border-bottom:1rpx solid #ECEEF2;
}
</style>
