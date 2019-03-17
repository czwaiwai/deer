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
              <div class="weui-flex__item">
                <p class="small_txt">可兑换</p>
                <p class="big_txt">{{info.goods_can_reveives}}</p>
              </div>
              <div class="weui-flex__item">
                <p class="small_txt">已兑换</p>
                <p class="big_txt">{{info.goods_already_receives}}</p>
              </div>
              <div class="weui-flex__item">
                <p class="small_txt">累计库存</p>
                <p class="big_txt">{{info.goods_stock}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <ul class="ul_list "
              style="padding-bottom:40rpx;">
            <li class="li_item light_bg ">
              <p class="title fs15">{{info.store_name}}</p>
              <div class="weui-flex padding42">
                <div class="weui-flex__item fs12 dark_e8">门店编号：{{info.store_no}}</div>
                <a @click="routeTo('../detail/main')"
                   class="main_color fs12">查看明细</a>
              </div>
            </li>
            <li class="li_item light_bg ">
              <p class="title fs15">设备编号</p>
              <div class="weui-flex"
                   style="padding-top:36rpx;">
                <div class="weui-flex__item dark_8e fs12">门店编号：MQX009001</div>
                <div class="dark_8e fs12">投放中</div>
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
  name: 'goodThings',
  components: {},
  data () {
    return {
      info: {},
      list: []
    }
  },

  computed: {},

  created () { },
  onLoad (query) {
    this.storeId = query.storeId
  },
  mounted () {
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.storeGoods({
        store_id: this.storeId
      })
      let {devices, ...info} = res
      this.info = info
      this.list = devices
      console.log(res)
    },
    routeTo (url) {
      return wx.navigateTo({ url })
    }
  }
}
</script>
<style scoped>
.top_wrap {
  padding-bottom: 72rpx;
}
.top_bd {
  width: 750rpx;
  height: 180rpx;
  background: rgba(58, 207, 193, 1);
}
.top_main {
  margin: -110rpx auto 0 auto;
  width: 690rpx;
  height: 222rpx;
  background: #fff;
  box-shadow: 0px 13px 24px 0px rgba(202, 204, 219, 0.3);
  border-radius: 30rpx;
  padding: 66rpx 0;
  text-align: center;
}
.top_main .small_txt {
  font-size: 26rpx;
  color: rgba(142, 151, 168, 1);
}
.top_main .big_txt {
  font-size: 48rpx;
  font-weight: bold;
  color: rgba(22, 38, 65, 1);
}
.main_txt {
  font-size: 42rpx;
}
.ul_list {
  background: #edf1f9;
}
.li_item {
  padding: 36rpx 30rpx;
  margin-bottom: 20rpx;
}
.li_item .title {
  line-height: 36rpx;
  padding-bottom: 20rpx;
}
.li_item .item_nums {
  height: 144rpx;
  padding: 22rpx 0;
  background: rgba(247, 249, 252, 1);
  border-radius: 10rpx;
}
.li_item .padding42 {
  padding-bottom: 36rpx;
}
</style>
