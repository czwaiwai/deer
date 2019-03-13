<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd" style="background:#EDF1F9;">
      <div class="item_wrap">
        <div class="weui-cells no_before_border no_after_border route_cell weui-cells_after-title ">
            <div class="weui-cell my_head_cell " style="height:186rpx;">
              <div class="weui-cell__hd">
                <image class="img_120" src="../../static/img/home/head.png" ></image>
              </div>
              <div class="weui-cell__bd padding-left15">
                <p class="fs15 dark_16" >Miss米奇</p>
              </div>
              <div class="weui-cell__ft ">
                <image class="del_icon" src="../../static/img/other/del.png"></image>
              </div>
            </div>
            <div class="weui-cell " @click="routeTo('../merchantUpdate/main')" style="height:113rpx;">
              <div class="weui-cell__bd padding-left15">
                <p class="fs15 dark_16" >编辑信息</p>
              </div>
              <div class="weui-cell__ft  weui-cell__ft_in-access "></div>
            </div>
            <div class="weui-cell " @click="routeTo('../relatedShop/main')" style="height:113rpx;">
              <div class="weui-cell__bd padding-left15">
                <p class="fs15 dark_16" >门店授权</p>
              </div>
              <div class="weui-cell__ft  weui-cell__ft_in-access"></div>
            </div>
        </div>
      </div>
      <div class="item_wrap">
        <div class="weui-cells no_before_border no_after_border route_cell weui-cells_after-title ">
            <div class="weui-cell my_head_cell " style="height:186rpx;">
              <div class="weui-cell__hd">
                <image class="img_120" src="../../static/img/home/head.png" ></image>
              </div>
              <div class="weui-cell__bd padding-left15">
                <p class="fs15 dark_16" >Miss米奇</p>
              </div>
              <div class="weui-cell__ft ">
                <image class="del_icon" src="../../static/img/other/del.png"></image>
              </div>
            </div>
            <div class="weui-cell " style="height:113rpx;">
              <div class="weui-cell__bd padding-left15">
                <p class="fs15 dark_16" >编辑信息</p>
              </div>
              <div class="weui-cell__ft  weui-cell__ft_in-access "></div>
            </div>
            <div class="weui-cell " style="height:113rpx;">
              <div class="weui-cell__bd padding-left15">
                <p class="fs15 dark_16" >门店授权</p>
              </div>
              <div class="weui-cell__ft  weui-cell__ft_in-access"></div>
            </div>
        </div>
      </div>
    </div>
    <div class="page_ft">
      <button  class="ft_btn">创建子账号</button>
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
.del_icon{
  width:44rpx;
  height:44rpx;
}
.item_wrap{
  padding: 30rpx 30rpx 0 30rpx;
}
.item_wrap .weui-cells {
  border-radius:20rpx;
}
</style>
