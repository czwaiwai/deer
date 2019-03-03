<!-- index.vue -->
<template>
<div class="container">
  <div class="page shop_info">
    <div class="page_bd">
       <div class="weui-cells route_cell weui-cells_after-title ">
          <div @click="routeToShop" class="weui-cell ">
            <div class="weui-cell__hd">
              <image class="shop_info_cell_img" src="../../static/img/shopManage/head.png" ></image>
            </div>
            <div class="weui-cell__bd "></div>
            <div class="weui-cell__ft weui-cell__ft_in-access">更换logo</div>
          </div>
            <div @click="routeToShop" class="weui-cell ">
              <div class="weui-cell__hd">
                <div class="color_cir"></div>
               </div>
              <div class="weui-cell__bd "></div>
              <div class="weui-cell__ft weui-cell__ft_in-access">更换背景</div>
            </div>
            <div @click="routeToShop" class="weui-cell ">
                <div class="weui-cell__bd ">门店名称</div>
                <div class="weui-cell__ft weui-cell__ft_in-access">鹿角巷</div>
            </div>
            <div @click="routeToShop" class="weui-cell ">
                <div class="weui-cell__bd ">门店地址</div>
                <div class="weui-cell__ft weui-cell__ft_in-access">广州市天河区万达广场</div>
            </div>
            <div @click="routeToShop" class="weui-cell ">
                <div class="weui-cell__bd ">联系人</div>
                <div class="weui-cell__ft weui-cell__ft_in-access">张先生</div>
            </div>
            <div @click="routeToShop" class="weui-cell ">
                <div class="weui-cell__bd">联系电话</div>
                <div class="weui-cell__ft weui-cell__ft_in-access">13566542976</div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    return {
    }
  },

  computed: {},

  created () {},

  methods: {
    routeToShop (e) {
      console.log(e)
    }
  }
}
</script>
<style>
.shop_info_cell_img {
  width:60rpx;
  height:60rpx;
}
.color_cir {
  width:60rpx;
  height:60rpx;
  background:rgba(46,208,193,1);
  border-radius:50%;
}
.shop_info .weui-cell{
  height: 112rpx;
}
.shop_info  .weui-cells:after {
    bottom: 0;
    left:0;
    right:0;
}
.shop_info .weui-cell:before {
  left:0;
  right:0;
}
</style>
