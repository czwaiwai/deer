<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <scroll-view class="page_bd bg" scroll-y @scrolltolower="lower">
        <div class="padding15">
          <ul class="goods">
            <li v-for="(item, index) in list" :key="index" class="goods_item">
              <div class="weui-flex goods_bd">
                <img class="img_150" :src="item.image || '../../static/img/other/good.png'" />
                <div class="weui-flex__item padding-left15">
                  <p class="fs14">{{item.gift_name}}</p>
                  <p class="dark_8e fs14 padding-bottom">售价: ¥{{item.price}}</p>
                  <p class="dark_8e fs12">闯关积分: {{item.need_integral}}</p>
                </div>
              </div>
              <div class="goods_ft weui-flex text-center">
                <div class="weui-flex__item dark_8e fs12">可兑换: {{item.stock}}</div>
                <div class="weui-flex__item dark_8e fs12">已兑换: {{item.received_num}}</div>
                <div class="weui-flex__item dark_8e fs12">累计库存: {{item.allot_num}}</div>
              </div>
            </li>
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
  name: 'storeGift',
  mixins: [loadmore],
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
      let res = await this.$api.giftDetail({
        store_id: this.storeId,
        page: this.page,
        per_page: this.pageSize
      })
      let { list, ...info } = res
      this.info = info
      return this.listProcess(list)
    },
    routeTo (url) {
      return wx.navigateTo({ url })
    }
  }
}
</script>
<style scoped>
.stock_btn {
  width: 180rpx;
  height: 66rpx;
  color: #8e97a8;
  border: 1rpx solid #8e97a8;
  background: transparent;
  line-height: 66rpx;
  border-radius: 33rpx;
}
.stock_btn:after {
  border: none;
}
.stock_btn.active {
  border: 1rpx solid #3acfc1;
  color: #fff;
  background: #3acfc1;
}
.goods_item {
  background: #fff;
  border-radius: 20rpx;
  margin-bottom: 30rpx;
}
.goods_item .weui-flex__item p + p {
  padding-top: 10rpx;
}
.goods_bd {
  padding: 40rpx 30rpx;
}
.goods_ft {
  border-top: 1rpx solid #eceef2;
  line-height: 1;
  padding: 30rpx 0;
  /* padding: 0 30 */
}
</style>
