<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd">
      <div class="scan_hd weui-flex">
        <div class="weui-flex__item">待领取</div>
        <div class="flex_item_center">
          <image class="img_54 vertical-middle " src="../../static/img/home/head.png"></image>
          <span class="padding-left fs13 vertical-middle ">Miss米奇</span>
        </div>
      </div>
      <div class="scan_bd">
        <div>
          <image class="img_360" src="../../static/img/other/good.png"></image>
        </div>
        <p class="fs18">夏日条纹薄荷绿包包</p>
      </div>
      <div class="scan_ft">
        <p class="fs14 dark_8e">门店号：MD902930</p>
        <p class="fs14 dark_8e">兑换门店：鹿角巷天河北门店</p>
      </div>
      <div class="scan_tip">
        <p class="fs14 dark_8e">注：确认兑换后，现场进行发放</p>
      </div>
    </div>
    <div class="page_ft">
      <button  class="ft_btn">确定兑换</button>
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
<style>
.scan_hd{
  height:153rpx;
  padding: 0 30rpx;
  border-bottom:1rpx solid #ECEEF2;
}
.scan_hd .weui-flex__item {
  line-height:153rpx;
  font-size:48rpx;
}
.scan_bd {
  padding: 72rpx 30rpx;
  border-bottom:1rpx solid #ECEEF2;
}
.scan_ft {
  padding:54rpx 30rpx;
  border-bottom:1rpx solid #ECEEF2;
}
.scan_ft p, .scan_tip p {
  line-height:1;
}
.scan_ft p + p {
  padding-top:36rpx;
}
.scan_tip {
  padding:54rpx 30rpx;
}
</style>
