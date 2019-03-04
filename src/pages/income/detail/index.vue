<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd" style="">
      <div class="detail_top">
          <div class="weui-flex text-center">
            <div class="weui-flex__item">
              <p class="dark_e8 fs12">今日</p>
              <p class="main_color main_txt">200</p>
            </div>
            <div class="weui-flex__item border_left">
              <p class="dark_e8 fs12">昨日</p>
              <p class="main_color main_txt">200</p>
            </div>
            <div class="weui-flex__item border_left">
              <p class="dark_e8 fs12">累计</p>
              <p class="main_color main_txt">200</p>
            </div>
          </div>
      </div>
      <div class="section light_bg">
        <ul>
          <li class="list_hd weui-flex text-center">
            <div class="weui-flex__item">日期</div>
            <div class="weui-flex__item">收益</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
          </li>
          <li class="list_item weui-flex text-center">
            <div class="weui-flex__item dark_e8">2019-02-10</div>
            <div class="weui-flex__item dark_e8">100</div>
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
.page_bd {
  background:#EDF1F9;
}
.detail_top{
  background:#FFF;
  height:200rpx;
  margin-bottom:20rpx;
  padding:65rpx 0;
}
.detail_top .weui-flex__item {
  position:relative;
}
.detail_top .weui-flex__item.border_left:after {
  content: '';
  border-left:1rpx solid #ECEEF2;
  position:absolute;
  left:0;
  top:10rpx;
  height:70rpx;

}
.main_txt {
  font-size:48rpx;
  font-weight:bold;
  line-height:1.2;
}
.list_hd {
  font-size:30rpx;
  color:#101010;
  height:113rpx;
  line-height:113rpx;
  border-bottom:1rpx solid #ECEEF2;
}
.list_item {
  font-size:30rpx;
  height:107rpx;
  color:#8E97A8;
  line-height:107rpx;
  border-bottom:1rpx solid #ECEEF2;
}
</style>
