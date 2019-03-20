<!-- index.vue -->
<template>
  <div class="container">
    <div class="page ">
      <div class="weui-flex padding15 text-center bg">
        <div class="weui-flex__item">
          <button @click="handleNav(0)" :class="{active:navIndex===0}" class="stock_btn">商品</button>
        </div>
        <div class="weui-flex__item">
          <button @click="handleNav(1)" :class="{active:navIndex===1}" class="stock_btn">礼品</button>
        </div>
      </div>
      <scroll-view v-if="navIndex===0" class="page_bd bg" scroll-y @scrolltolower="lower0">
        <div class="padding15">
          <ul class="goods">
            <li v-for="(item, index) in list0" :key="index" class="goods_item">
              <div class="weui-flex goods_bd">
                <img class="img_150" :src="item.goods_image || '../../static/img/other/good.png'" />
                <div class="weui-flex__item padding-left15">
                  <p class="fs14">{{item.goods_name}}</p>
                  <p class="error_color fs14 padding-bottom">收益: {{item.every_income}}元/件</p>
                  <p class="dark_8e fs12">售价: ¥{{item.price}} | 返积分: {{item.return_integral}}</p>
                </div>
              </div>
              <div class="goods_ft weui-flex text-center">
                <div class="weui-flex__item dark_8e fs12">剩余库存: {{item.lave_stock}}</div>
                <div class="weui-flex__item dark_8e fs12">已兑换: {{item.received_num}}</div>
                <div class="weui-flex__item dark_8e fs12">累计库存: {{item.total_stock}}</div>
              </div>
            </li>
          </ul>
        </div>
        <load-more v-if="loadType0==='loading'" :loading="true" tip="正在加载"></load-more>
        <load-more v-if="loadType0==='end'" :loading="false" tip="没有更多数据"></load-more>
        <load-more v-if="loadType0==='empty'" :loading="false" tip="暂无数据"></load-more>

      </scroll-view>
      <scroll-view v-if="navIndex===1" class="page_bd bg" scroll-y @scrolltolower="lower1">
        <div class="padding15">
          <ul class="goods">
            <li v-for="(item, index) in list1" :key="index" class="goods_item">
              <div class="weui-flex goods_bd">
                <img class="img_150" :src="item.gift_image || '../../static/img/other/good.png'" />
                <div class="weui-flex__item padding-left15">
                  <p class="fs14">{{item.gift_name}}</p>
                  <p class="dark_8e fs12">售价: ¥{{item.price}}</p>
                  <p class="dark_8e fs12"> 返积分: {{item.return_integral}}</p>
                </div>
              </div>
              <div class="goods_ft weui-flex text-center">
                <div class="weui-flex__item dark_8e fs12">剩余库存: {{item.lave_stock}}</div>
                <div class="weui-flex__item dark_8e fs12">已兑换: {{item.received_num}}</div>
                <div class="weui-flex__item dark_8e fs12">累计库存: {{item.total_stock}}</div>
              </div>
            </li>
          </ul>
        </div>
        <load-more v-if="loadType1==='loading'" :loading="true" tip="正在加载"></load-more>
        <load-more v-if="loadType1==='end'" :loading="false" tip="没有更多数据"></load-more>
        <load-more v-if="loadType1==='empty'" :loading="false" tip="暂无数据"></load-more>

      </scroll-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  components: {},
  data () {
    return {
      navIndex: 0,
      listGoods: [],
      listGifts: [],
      list0: [],
      list1: [],
      isLoading0: false,
      isLoading1: false,
      page0: 1,
      page1: 1,
      pageSize: 10,
      loadType0: 'loading',
      loadType1: 'loading'
    }
  },

  computed: {},

  created () { },
  onLoad (query) {
    this.storeId = query.storeId
  },
  mounted () {
    this.navIndex = 0
    if (this.navIndex === 0) {
      this.page0 = 1
      this.list0 = []
      this.loadType0 = 'loading'
      this.isLoading0 = false
      this.getPageData()
    } else {
      this.page1 = 1
      this.list1 = []
      this.isLoading1 = false
      this.loadType1 = 'loading'
      this.getGiftData()
    }
  },
  destoryed () {
    this.page0 = 1
    this.list0 = []
    this.loadType0 = 'loading'
    this.isLoading0 = false
    this.page1 = 1
    this.list1 = []
    this.isLoading1 = false
    this.loadType1 = 'loading'
  },
  methods: {
    handleNav (index) {
      this.navIndex = index
      if (this.navIndex === 0 && this.list0.length === 0) {
        this.getPageData()
      }
      if (this.navIndex === 1 && this.list1.length === 0) {
        this.getGiftData()
      }
    },
    async getPageData () {
      let res = await this.$api.stockGoodsList({
        page: this.page0,
        per_page: this.pageSize,
        store_id: this.storeId
      })
      this.listProcess0(res.list)
      // this.listGoods = res.list
    },
    async getGiftData () {
      let res = await this.$api.stockGiftList({
        page: this.page1,
        per_page: this.pageSize,
        store_id: this.storeId
      })
      this.listProcess1(res.list)
      // this.listGifts = res.list
    },
    listProcess0 (list) {
      this.list0 = [...this.list0, ...list]
      if (list.length < (this.pageSize || 10)) {
        this.loadType0 = 'end'
      }
      if (this.list0.length === 0) {
        this.loadType0 = 'empty'
      }
    },
    listProcess1 (list) {
      this.list1 = [...this.list1, ...list]
      if (list.length < (this.pageSize || 10)) {
        this.loadType1 = 'end'
      }
      if (this.list1.length === 0) {
        this.loadType1 = 'empty'
      }
    },
    lower0 () {
      if (this.isLoading0) return
      this.isLoading0 = true
      if (['empty', 'end'].includes(this.loadType0)) return
      this.page0++
      this.getPageData()
        .then(res => {
          setTimeout(() => {
            this.isLoading0 = false
          }, 100)
        })
        .catch(err => {
          console.log(err)
          setTimeout(() => {
            this.isLoading0 = false
          })
        })
    },
    lower1 () {
      if (this.isLoading1) return
      console.log('真正执行了', this.isLoading1)
      this.isLoading1 = true
      console.log('下拉出发了', this.isLoading1)
      if (['empty', 'end'].includes(this.loadType1)) return
      this.page1++
      this.getGiftData()
        .then(res => {
          console.log('我执行了---', this.isLoading1)
          setTimeout(() => {
            this.isLoading1 = false
          }, 100)
        })
        .catch(err => {
          console.log(err)
          setTimeout(() => {
            this.isLoading1 = false
          })
        })
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
.goods {
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
