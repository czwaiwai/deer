<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <div class="my_nav_bar weui-flex text-center">
        <div @click="navChange(1)" class="weui-flex__item " :class="tabIndex===1?'active':''">
          <span class="nav_txt">商品</span>
        </div>
        <div @click="navChange(2)" class="weui-flex__item"  :class="tabIndex===2?'active':''">
          <span  class="nav_txt">礼品</span>
        </div>
        <div @click="navChange(3)" class="weui-flex__item"  :class="tabIndex===3?'active':''">
          <span class="nav_txt">活动</span>
        </div>
      </div>
      <page-item v-if="tabIndex===1" :tab="tabIndex" cate="receives" :storeId="storeId"></page-item>
      <page-item v-if="tabIndex===2" :tab="tabIndex" cate="receives" :storeId="storeId"></page-item>
      <page-item v-if="tabIndex===3" :tab="tabIndex" cate="receives"  :storeId="storeId"></page-item>
      <!-- <div class="page_bd" style=""> -->
      <!-- <scroll-view class="page_bd" scroll-y @scrolltolower="lower">
        <div class="detail_top">
          <div class="weui-flex text-center">
            <div class="weui-flex__item">
              <p class="dark_e8 fs12">今日</p>
              <p class="main_color main_txt">{{info.today_receives}}</p>
            </div>
            <div class="weui-flex__item border_left">
              <p class="dark_e8 fs12">昨日</p>
              <p class="main_color main_txt">{{info.yesterday_receives}}</p>
            </div>
            <div class="weui-flex__item border_left">
              <p class="dark_e8 fs12">累计</p>
              <p class="main_color main_txt">{{info.total_receives}}</p>
            </div>
          </div>
        </div>
        <div class="section light_bg">
          <ul>
            <li class="list_hd weui-flex text-center">
              <div class="weui-flex__item">日期</div>
              <div class="weui-flex__item">类型</div>
              <div class="weui-flex__item">收益</div>
            </li>
            <li v-for="(item,index) in list" :key="index" class="list_item weui-flex text-center">
              <div class="weui-flex__item dark_e8">{{item.day}}</div>
              <div class="weui-flex__item">
                <div v-if="item.type==1" class=" dark_e8">商品兑换</div>
                <div v-if="item.type==2" class=" dark_e8">礼品兑换</div>
              </div>
              <div class="weui-flex__item dark_e8">{{item.value}}</div>
            </li>
          </ul>
        </div>
        <load-more v-if="loadType==='loading'" :loading="true" tip="正在加载"></load-more>
        <load-more v-if="loadType==='end'" :loading="false" tip="没有更多数据"></load-more>
        <load-more v-if="loadType==='empty'" :loading="false" tip="暂无数据"></load-more>
      </scroll-view> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>

import loadmore from '@/utils/loadmore'
import pageItem from '@/components/pageItem'
export default {
  name: 'detail',
  mixins: [loadmore],
  components: {
    pageItem
  },
  data () {
    return {
      storeId: '',
      tabIndex: 1,
      info: {},
      list: []
    }
  },

  computed: {},
  onLoad (query) {
    this.tabIndex = 1
    this.info = this.$store.getters.parentData
    this.storeId = query.storeId
  },
  mounted () {
    // this.page = 1
    // this.list = []
    // this.getPageData()
  },
  onUnload () {
    this.tabIndex = -1
  },
  methods: {
    navChange (index) {
      this.tabIndex = index
    }
    // async getPageData () {
    //   try {
    //     let res = await this.$api.dailyStatistics({
    //       page: this.page,
    //       per_page: 20,
    //       store_id: this.storeId,
    //       category: 'receives'
    //     })
    //     this.listProcess(res.list)
    //     console.log(res)
    //   } catch (e) {
    //     this.toEnd()
    //   }
    // }
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
  height: 107rpx;
  color: #8e97a8;
  line-height: 107rpx;
  border-bottom: 1rpx solid #eceef2;
}
.my_nav_bar {
  height:80rpx;
  font-size:32rpx;
  border-bottom:1rpx solid #eceef2;
}
.my_nav_bar .nav_txt {
  display:inline-block;
  line-height:74rpx;
  border-bottom:4rpx solid #FFF;
}
.my_nav_bar .active .nav_txt {
  border-bottom:6rpx solid #2ed0c1;
}
</style>
