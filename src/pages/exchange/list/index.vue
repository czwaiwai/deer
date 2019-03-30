<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <scroll-view v-if="list.length ===1" class="page_bd single_view" scroll-y>
        <div class="single_top_wrap weui-flex">
          <div class="weui-flex__item">
            <h1 class="fs24">{{info.store_name}}</h1>
            <p class="fs12 dark_8e">门店编号：{{info.store_no}}</p>
          </div>
          <div>
            <a @click="routeTo('../detail/main?storeId='+info.id, info)" class="main_color fs12">查看明细</a>
          </div>
        </div>
        <div class="padding15-h">
          <div class="section">
            <div class="weui-flex padding-bottom72 ">
              <div class="hd">
                <image class="img_84" src="../../../static/img/center/today.png"></image>
              </div>
              <div class="padding-left15 weui-flex__item flex_item_center bd fs24">{{info.today_receives}}</div>
              <div class="ft fs13 dark_8e flex_item_center">今日兑换</div>
            </div>
            <div class="weui-flex padding-bottom72 ">
              <div class="hd">
                <image class="img_84" src="../../../static/img/center/yesterday.png"></image>
              </div>
              <div class="padding-left15 weui-flex__item flex_item_center bd fs24">{{info.yesterday_receives}}</div>
              <div class="ft fs13 dark_8e flex_item_center">今日兑换</div>
            </div>
            <div class="weui-flex">
              <div class="hd">
                <image class="img_84" src="../../../static/img/center/total.png"></image>
              </div>
              <div class="padding-left15 weui-flex__item  flex_item_center bd fs24">{{info.total_receives}}</div>
              <div class="ft fs13 dark_8e flex_item_center">今日兑换</div>
            </div>
          </div>
        </div>
        <div class="padding15" style="padding-top:130rpx;">
          <p class="fs12 dark_8e padding-bottom5" v-for="(sub,index) in info.devices" :key="index">设备编号：{{sub.device_no}}
            <span v-if="sub.is_display" class="float_right">投放中</span>
            <span v-if="!sub.is_display" class="float_right">待投放</span>
          </p>
        </div>
      </scroll-view>
      <scroll-view v-if="list.length >1" class="page_bd bg" scroll-y>
        <div class="top_wrap light_bg">
          <div class="top_bd"></div>
          <div class="top_main">
            <div class="weui-flex">
              <div class="weui-flex__item">
                <p class="small_txt">今日兑换</p>
                <p class="big_txt">{{homeTotal.today_receives}}</p>
              </div>
              <div class="weui-flex__item">
                <p class="small_txt">昨日兑换</p>
                <p class="big_txt">{{homeTotal.yesterday_receives}}</p>
              </div>
              <div class="weui-flex__item">
                <p class="small_txt">累计兑换</p>
                <p class="big_txt">{{homeTotal.total_receives}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <ul class="ul_list " style="padding-bottom:40rpx;">
            <li v-for="(item,index) in list" :key="index" class="li_item light_bg ">
              <p class="title fs15">{{item.store_name}}</p>
              <div class="weui-flex padding42">
                <div class="weui-flex__item fs12 dark_e8">门店编号：{{item.store_no}}</div>
                <a @click="routeTo('../detail/main?storeId='+item.id, item)" class="main_color fs12">查看明细</a>
              </div>
              <div class="item_nums weui-flex text-center ">
                <div class="weui-flex__item">
                  <p class="main_txt">{{item.today_receives}}</p>
                  <p class="sub_txt dark_8e fs12">今日</p>
                </div>
                <div class="weui-flex__item">
                  <p class="main_txt">{{item.yesterday_receives}}</p>
                  <p class="sub_txt dark_8e fs12">昨日</p>
                </div>
                <div class="weui-flex__item">
                  <p class="main_txt">{{item.total_receives}}</p>
                  <p class="sub_txt dark_8e fs12">累计</p>
                </div>
              </div>
              <div style="padding-top:36rpx;">
                <div class="weui-flex" v-for="(sub,subIndex) in item.devices" :key="subIndex">
                  <div class="weui-flex__item dark_8e fs12">设备编号：{{sub.device_no}}</div>
                  <div class="dark_8e fs12">
                    <span v-if="sub.is_display">投放中</span>
                    <span v-if="!sub.is_display">待投放</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'detail',
  components: {},
  data () {
    return {
      info: {},
      list: []
    }
  },

  computed: {
    ...mapGetters({
      homeTotal: 'homeTotal'
    })
  },

  created () { },
  mounted () {
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.categoryStatistics({
        category: 'receives'
      })
      this.list = res
      this.info = this.list[0]
      // let {stores, ...info} = res
      // this.list = stores
      // this.info = info
    },
    routeTo (url, item) {
      if (item) {
        this.$store.commit('parentData', item)
      }
      return wx.navigateTo({ url })
    }
  }
}
</script>
<style scoped>
.float_right {
  float: right;
}
.single_top_wrap {
  padding: 50rpx 30rpx 80rpx 30rpx;
}
.padding-bottom72 {
  padding-bottom: 72rpx;
}
.single_view .section {
  padding: 75rpx 0;
  border-top: 1rpx solid #eceef2;
  border-bottom: 1rpx solid #eceef2;
}
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
