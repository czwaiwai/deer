<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <scroll-view class="page_bd" scroll-y @scrolltolower="lower">
        <div class="detail_top">
          <div class="weui-flex text-center">
            <div class="weui-flex__item">
              <p class="dark_e8 fs12">今日关注</p>
              <p class="main_color main_txt">{{info.today_scans}}</p>
            </div>
            <div class="weui-flex__item border_left">
              <p class="dark_e8 fs12">昨日关注</p>
              <p class="main_color main_txt">{{info.yesterday_scans}}</p>
            </div>
            <div class="weui-flex__item border_left">
              <p class="dark_e8 fs12">粉丝数</p>
              <p class="main_color main_txt">{{info.total_scans}}</p>
            </div>
          </div>
        </div>
        <div class="section light_bg">
          <ul>
            <li v-for="(item, index) in list" :key="index" class="list_item weui-flex ">
              <image class="img_72 img_cir flex_item_center" :src="item.avatar || '../../static/img/home/head.png'"></image>
              <div class="weui-flex__item padding-left15 fs15 dark_8e">{{item.nickname}}</div>
              <div class="dark_8e fs15">{{item.scan_date}}</div>
            </li>
            <!-- <li class="list_item weui-flex ">
              <image class="img_72 flex_item_center" src="../../static/img/home/head.png"></image>
              <div class="weui-flex__item padding-left15 fs15 dark_8e">Miss米多</div>
              <div class="dark_8e fs15">2019-02-10</div>
            </li> -->

          </ul>
        </div>
        <load-more v-if="loadType==='loading'" :loading="true" tip="正在加载"></load-more>
        <load-more v-if="loadType==='end'" :loading="false" tip="没有更多数据"></load-more>
        <load-more v-if="loadType==='empty'" :loading="false" tip="暂无数据"></load-more>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import loadmore from '@/utils/loadmore'
export default {
  name: 'detail',
  mixins: [loadmore],
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
    this.pageSize = 20
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.scanUsers({
        store_id: this.storeId,
        per_page: this.pageSize,
        page: this.page
      })
      let { users, ...info } = res
      let { list, ...other } = users
      this.info = { ...info, ...other }
      // this.list = list
      return this.listProcess(list)
    }
  }
}
</script>
<style scoped>
.page_bd {
  background: #edf1f9;
}
.detail_top {
  background: #fff;
  height: 200rpx;
  margin-bottom: 20rpx;
  padding: 65rpx 0;
}
.detail_top .weui-flex__item {
  position: relative;
}
.detail_top .weui-flex__item.border_left:after {
  content: "";
  border-left: 1rpx solid #eceef2;
  position: absolute;
  left: 0;
  top: 10rpx;
  height: 70rpx;
}
.main_txt {
  font-size: 48rpx;
  font-weight: bold;
  line-height: 1.2;
}
.list_hd {
  font-size: 30rpx;
  color: #101010;
  height: 113rpx;
  line-height: 113rpx;
  border-bottom: 1rpx solid #eceef2;
}
.list_item {
  font-size: 30rpx;
  height: 132rpx;
  color: #8e97a8;
  line-height: 132rpx;
  padding: 0 30rpx;
  border-bottom: 1rpx solid #eceef2;
}
</style>
