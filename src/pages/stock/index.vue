<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <div class="page_bd bg">
        <div v-for="(item, index) in list" :key="index" class="padding15-h padding-top15">
          <div @click="routeTo('../stockDetail/main?storeId='+ item.store_id)"
               class="stock_wrap ">
            <div class="weui-flex stock_top">
              <div>
                <img :src="item.store_image || '../../static/img/home/shop_icon.png'" class="img_120"/>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  components: {},
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
      let res = await this.$api.merStock()
      this.list = res.list
      // stockGoodsList({
      //   page: 1,
      //   per_page: 10
      // })
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
