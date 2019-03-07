<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd" style="background:#EDF1F9;">
       <ul class="padding15">
         <li class="rel_item">
          <div class="weui-flex stock_top padding-top15 padding15-h">
            <div>
              <image  src="../../static/img/home/shop_icon.png" class="img_120"></image>
            </div>
            <div class="weui-flex__item padding-left15 flex_item_center">
              <p class="fs14">鹿角巷天河北门店</p>
              <p class="fs12 dark_8e">天河区天河路北路99号 B302</p>
            </div>
          </div>
          <div class="weui-flex " style="height:98rpx;padding:15rpx;">
            <div class="weui-flex__item padding-left" >
              <p class="fs14" style="line-height:70rpx;">已授权</p>
            </div>
            <div class="weui-flex__item text-right padding-right">
              <switch bindchange="switch2Change" color="#2ED0C1" />
            </div>
          </div>
         </li>
         <li class="rel_item">
          <div class="weui-flex stock_top padding-top15 padding15-h">
            <div>
              <image  src="../../static/img/home/shop_icon.png" class="img_120"></image>
            </div>
            <div class="weui-flex__item padding-left15 flex_item_center">
              <p class="fs14">鹿角巷天河北门店</p>
              <p class="fs12 dark_8e">天河区天河路北路99号 B302</p>
            </div>
          </div>
          <div class="weui-flex " style="height:98rpx;padding:15rpx;">
            <div class="weui-flex__item padding-left" >
              <p class="fs14" style="line-height:70rpx;">已授权</p>
            </div>
            <div class="weui-flex__item text-right padding-right">
              <switch bindchange="switch2Change" color="#2ED0C1" />
            </div>
          </div>
         </li>
       </ul>
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
      switch2Change: ''
    }
  },

  computed: {},

  created () {},

  methods: {}
}
</script>
<style scoped>
.rel_item{
  height:297rpx;
  border-radius:20rpx;
  background:#FFF;
  margin-bottom:30rpx;
}
.stock_top {
  padding-bottom:30rpx;
  height:198rpx;
  border-bottom:1rpx solid #ECEEF2;
}
</style>
