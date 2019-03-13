<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd" style="background:#EDF1F9;">
      <ul class="act_list">
        <li class="act_item">
          <div class="act_item_bd weui-flex">
            <image class="img_150" src="../../static/img/other/act_goods.png"></image>
            <div class="weui-flex__item padding-left15">
              <p class="fs15 padding-bottom15">草莓水果茶一杯</p>
              <p class="dark_8e fs12">价值：¥26</p>
              <p class="dark_8e fs12">积分：15</p>
            </div>
          </div>
          <div class="act_item_line weui-flex padding15-v">
            <div class="weui-flex__item dark_8e text-left fs12">开始时间：2019-01-01</div>
            <div class="weui-flex__item dark_8e text-right fs12">结束时间：2019-03-31</div>
          </div>
          <div class="act_item_line weui-flex " style="height:95rpx;">
            <div class="weui-flex__item flex_item_center text-left dark_8e fs12">送出数量：1</div>
            <button class="act_btn flex_item_center">下线</button>
          </div>
        </li>
        <li class="act_item">
          <div class="act_item_bd weui-flex">
            <image class="img_150" src="../../static/img/other/act_goods.png"></image>
            <div class="weui-flex__item padding-left15">
              <p class="fs15 padding-bottom15">草莓水果茶一杯</p>
              <p class="dark_8e fs12">价值：¥26</p>
              <p class="dark_8e fs12">积分：15</p>
            </div>
          </div>
          <div class="act_item_line weui-flex padding15-v">
            <div class="weui-flex__item dark_8e text-left fs12">开始时间：2019-01-01</div>
            <div class="weui-flex__item dark_8e text-right fs12">结束时间：2019-03-31</div>
          </div>
          <div class="act_item_line weui-flex " style="height:95rpx;">
            <div class="weui-flex__item flex_item_center text-left dark_8e fs12">送出数量：1</div>
            <button class="act_btn flex_item_center">下线</button>
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
    return {}
  },

  computed: {},

  created () {},

  methods: {}
}
</script>
<style>
.act_list {
  padding:30rpx;
}
.act_btn:after{
  border:none;
  margin:0;
}
.act_btn {
  width:120rpx;
  height:60rpx;
  background:rgba(58,207,193,1);
  border-radius:10rpx;
  color:#FFF;
  font-size: 28rpx;
  line-height:60rpx;
}
.act_list .act_item {
  background:#FFF;
  border-radius:20rpx;
  padding:0 30rpx;
  margin-bottom:30rpx;
}
.act_item .act_item_bd{
  padding: 40rpx  0;
}
.act_list .act_item_line {
  border-top:1rpx solid #EDF1F9;
}
</style>
