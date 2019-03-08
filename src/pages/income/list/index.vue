<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd">
      <div class="top_wrap">
        <div class="top_bd">
          <!-- <div style="overflow:hidden;">
            <div style="height:69rpx;border-radius:0 0 750rpx 750rpx;background:#FFF;"></div>
          </div> -->
        </div>
        <div class="top_main">
          <div class="weui-flex">
            <div class="weui-flex__item" >
              <p class="small_txt">待提收益</p>
              <p class="big_txt">100</p>
            </div>
            <div class="weui-flex__item" >
              <p class="small_txt">已提收益</p>
              <p class="big_txt">100</p>
            </div>
            <div class="weui-flex__item" >
              <p class="small_txt">收益预期</p>
              <p class="big_txt">100</p>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        
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
<style>
.top_bd {
  width:750rpx;
  height:180rpx;
  background:rgba(58,207,193,1);
}
.top_main {
  margin:-110rpx auto 0 auto;
  width:690rpx;
  height:222rpx; 
  background:#FFF;
  box-shadow:0px 13px 24px 0px rgba(202,204,219,0.3);
  border-radius:30px;
  padding:66rpx 30rpx;
  text-align:center;
}
.top_main .small_txt {
  font-size:26rpx;
  color:rgba(142,151,168,1);
}
.top_main .big_txt {
  font-size:48rpx;
  font-weight:bold;
  color:rgba(22,38,65,1);
}
</style>
