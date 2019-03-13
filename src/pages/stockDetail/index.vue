<!-- index.vue -->
<template>
<div class="container">
  <div class="page ">
    <div class="page_bd bg">
      <div class="weui-flex padding15 text-center">
        <div class="weui-flex__item">
          <button class="stock_btn active">商品</button>
        </div>
        <div class="weui-flex__item">
          <button class="stock_btn">礼品</button>
        </div>
      </div>
      <div class="padding15">
        <ul class="goods">
          <li class="goods_item">
            <div class="weui-flex goods_bd">
              <image class="img_150" src="../../static/img/other/good.png" ></image>
              <div class="weui-flex__item padding-left15">
                <p class="fs14">夏日条纹薄荷绿包包</p>
                <p class="error_color fs14 padding-bottom">收益: 20元/件</p>
                <p class="dark_8e fs12">售价: ¥26  |  返积分: 15</p>
              </div>
            </div>
            <div class="goods_ft weui-flex text-center">
              <div class="weui-flex__item dark_8e fs12">可兑换: 30</div>
              <div class="weui-flex__item dark_8e fs12">已兑换: 30</div>
              <div class="weui-flex__item dark_8e fs12">预计收益: 60</div>
            </div>
          </li>
          <li class="goods_item">
            <div class="weui-flex goods_bd">
              <image class="img_150" src="../../static/img/other/good.png" ></image>
              <div class="weui-flex__item padding-left15">
                <p class="fs14">夏日条纹薄荷绿包包</p>
                <p class="error_color fs14 padding-bottom">收益: 20元/件</p>
                <p class="dark_8e fs12">售价: ¥26  |  返积分: 15</p>
              </div>
            </div>
            <div class="goods_ft weui-flex text-center">
              <div class="weui-flex__item dark_8e fs12">可兑换: 30</div>
              <div class="weui-flex__item dark_8e fs12">已兑换: 30</div>
              <div class="weui-flex__item dark_8e fs12">预计收益: 60</div>
            </div>
          </li>
          <li class="goods_item">
            <div class="weui-flex goods_bd">
              <image class="img_150" src="../../static/img/other/good.png" ></image>
              <div class="weui-flex__item padding-left15">
                <p class="fs14">夏日条纹薄荷绿包包</p>
                <p class="error_color fs14 padding-bottom">收益: 20元/件</p>
                <p class="dark_8e fs12">售价: ¥26  |  返积分: 15</p>
              </div>
            </div>
            <div class="goods_ft weui-flex text-center">
              <div class="weui-flex__item dark_8e fs12">可兑换: 30</div>
              <div class="weui-flex__item dark_8e fs12">已兑换: 30</div>
              <div class="weui-flex__item dark_8e fs12">预计收益: 60</div>
            </div>
          </li>
        </ul>
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

  methods: {}
}
</script>
<style scoped>
.stock_btn {
  width:180rpx;
  height:66rpx;
  color:#8E97A8;
  border: 1rpx solid #8E97A8;
  background:transparent;
  line-height:66rpx;
  border-radius:33rpx;
}
.stock_btn.active {
  border: 1rpx solid #3ACFC1;
  color:#FFF;
  background:#3ACFC1;
}
.goods {

}
.goods_item  {
  background:#FFF;
  border-radius:20rpx;
  margin-bottom:30rpx;
}
.goods_item .weui-flex__item p + p{
  padding-top:10rpx;
}
.goods_bd {
  padding:40rpx 30rpx;
}
.goods_ft {
  border-top:1rpx solid #ECEEF2;
  line-height:1;
  padding: 30rpx 0;
  /* padding: 0 30 */
}
</style>
