<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd" style="background:#EDF1F9;">
       <ul class="padding15">
         <li class="rel_item">
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
              <p class="fs14">已授权</p>
            </div>
            <div class="weui-flex__item">
              <switch bindchange="switch2Change" />
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
<style>
.rel_item{
  height:297rpx;
  border-radius:20rpx;
  background:#FFF;
}
.stock_top {
  padding-bottom:30rpx;
  border-bottom:1rpx solid #ECEEF2;
}
</style>
