<!-- index.vue -->
<template>
<div class="container">
  <div class="page shop_manage">
    <div class="page_bd">
       <div class="shop_mg_top_bl text-center">
           <div><image  src="../../static/img/shopManage/head.png" class="shop_mg_head_img"></image></div>
           <h3 class="fs18  dark_18">鹿角巷天河北门店</h3>
           <p class="fs13 dark_8e">天河区天河路北路99号</p>
       </div>
       <div class="setion">
            <div class="weui-flex padding15-h padding-bottom15 ">
                <div class="weui-flex__item weui-flex shop_mg_bl">
                    <div><image class="shop_mg_icon" src="../../static/img/shopManage/icon_05.png" ></image></div>
                    <div class="weui-flex__item padding-left15 item_center shop_mg_big_fs">门店信息</div>
                </div>
                <div style="padding:15rpx;"></div>
                <div class="weui-flex__item weui-flex shop_mg_bl">
                    <div><image class="shop_mg_icon" src="../../static/img/shopManage/icon_06.png" ></image></div>
                    <div class="weui-flex__item padding-left15 item_center shop_mg_big_fs">品牌动态</div>
                </div>
            </div>
            <div class="weui-flex padding15-h padding-bottom15 ">
                <div class="weui-flex__item weui-flex shop_mg_bl">
                    <div><image class="shop_mg_icon" src="../../static/img/shopManage/icon_03.png" ></image></div>
                    <div class="weui-flex__item padding-left15 item_center shop_mg_big_fs">好物推荐</div>
                </div>
                <div style="padding:15rpx;"></div>
                <div class="weui-flex__item weui-flex shop_mg_bl">
                    <div><image class="shop_mg_icon" src="../../static/img/shopManage/icon_04.png" ></image></div>
                    <div class="weui-flex__item padding-left15 item_center shop_mg_big_fs">积分礼物</div>
                </div>
            </div>
            <div class="weui-flex padding15-h padding-bottom15 ">
                <div class="weui-flex__item weui-flex shop_mg_bl">
                    <div><image class="shop_mg_icon" src="../../static/img/shopManage/icon_01.png" ></image></div>
                    <div class="weui-flex__item padding-left15 item_center shop_mg_big_fs">运营活动</div>
                </div>
                <div style="padding:15rpx;"></div>
                <div class="weui-flex__item weui-flex shop_mg_bl">
                    <div><image class="shop_mg_icon" src="../../static/img/shopManage/icon_02.png" ></image></div>
                    <div class="weui-flex__item padding-left15 item_center shop_mg_big_fs">粉丝关注</div>
                </div>
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
      formObj: {
        username: '',
        pwd: '',
        autoLogin: ''
      }
    }
  },

  computed: {},

  created () {},

  methods: {
    handleSubmit (e) {
      console.log(e)
      console.log(this.formObj)
    }
  }
}
</script>
<style>
.shop_mg_top_bl {
    height:424rpx;
    padding-top:72rpx;
}
.shop_mg_bl{
  height:150rpx;
  padding: 30rpx;
  box-shadow:0 10rpx 30rpx rgba(202,204,220,0.5);
  border-radius:20rpx;
}
.shop_mg_big_fs {
  font-size:30rpx;
  color:rgba(83,91,99,1);
}
/* .shop_mg_bl_small {
  background:rgba(237,241,249,1);
  border-radius:10rpx;
  font-size:26rpx;
  height:54rpx;
  color:rgba(142,151,168,1);
  padding: 0 30rpx;
  line-height:54rpx;
}
.shop_mg_bl_top_fs {
  font-size:26rpx;
  color:rgba(142,151,168,1);
} */
.shop_mg_head_img{
  width:150rpx;
  height:150rpx;
}
.shop_mg_icon {
  width:90rpx;
  height:90rpx;
}
</style>
