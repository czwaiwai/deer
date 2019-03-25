<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <sroll-view class="page_bd bg" scroll-y @scrolltolower="lower">
        <div v-for="(item, index) in list" :key="index" class="padding15-h padding-top15">
          <div @click="routeTo('../stockDetail/main?storeId='+ item.store_id)" class="stock_wrap ">
            <div class="weui-flex stock_top">
              <div>
                <img :src="item.store_image || '../../static/img/logo.png'" class="img_120 img_cir" />
              </div>
              <div class="weui-flex__item padding-left15 flex_item_center">
                <p class="fs14">{{item.store_name}}</p>
                <p class="fs12 dark_8e">{{item.store_addr}}</p>
              </div>
            </div>
            <div class="weui-flex text-center padding-top">
              <div class="weui-flex__item">
                <p class="fs24">{{item.received_num}}</p>
                <p class="fs12 dark_8e">已兑换</p>
              </div>
              <div class="weui-flex__item">
                <p class="fs24">{{item.lave_stock}}</p>
                <p class="fs12 dark_8e">剩余库存</p>
              </div>
              <div class="weui-flex__item">
                <p class="fs24">{{item.total_stock}}</p>
                <p class="fs12 dark_8e">累计库存</p>
              </div>
            </div>
          </div>
        </div>
        <load-more v-if="loadType==='loading'" class="dark_8e" :loading="true" tip="正在加载"></load-more>
        <load-more v-if="loadType==='end'" class="dark_8e" :loading="false" tip="没有更多数据"></load-more>
        <load-more v-if="loadType==='empty'" class="dark_8e" :loading="false" tip="暂无数据"></load-more>
      </sroll-view>
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
      list: []
    }
  },

  computed: {},

  created () { },
  mounted () {
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.merStock({
        page: this.page,
        per_page: this.pageSize
      })
      return this.listProcess(res.list)
    },
    routeTo (url) {
      return wx.navigateTo({ url })
    }
  }
}
</script>
<style scoped>
.stock_wrap {
  height: 360rpx;
  padding: 40rpx 30rpx;
  background: #fff;
  border-radius: 20rpx;
}
.stock_wrap .fs24 {
  line-height: 1.4;
}
.stock_top {
  padding-bottom: 30rpx;
  border-bottom: 1rpx solid #eceef2;
}
</style>
