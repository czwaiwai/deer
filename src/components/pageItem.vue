<!-- pageItem.vue -->
<template>
  <scroll-view class="page_bd" scroll-y @scrolltolower="lower">
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
          <!-- <div class="weui-flex__item">数量</div> -->
          <div class="weui-flex__item">累计</div>
        </li>
        <li v-for="(item,index) in list" :key="index" class="list_item weui-flex text-center">
          <div class="weui-flex__item dark_e8">{{item.day}}</div>
          <!-- <div class="weui-flex__item">
          </div> -->
          <div class="weui-flex__item dark_e8">{{item.value}}</div>
        </li>
      </ul>
    </div>
    <load-more v-if="loadType==='loading'" :loading="true" tip="正在加载"></load-more>
    <load-more v-if="loadType==='end'" :loading="false" tip="没有更多数据"></load-more>
    <load-more v-if="loadType==='empty'" :loading="false" tip="暂无数据"></load-more>
  </scroll-view>
</template>

<script>
import loadmore from '@/utils/loadmore'
export default {
  // name: 'pageItem',
  mixins: [loadmore],
  components: {},
  data () {
    return {
      info: {},
      list: []
    }
  },
  props: {
    storeId: {
      type: String,
      default: '1'
    },
    type: {
      type: String,
      defalut: 'goods'
    },
    tab: {
      type: Number,
      default: 1
    },
    cate: {
      type: String,
      default: 'receives'
    }
  },
  watch: {
    tab (val) {
      if (val) {
        console.log(val, 'val')
        this.init()
      }
    }
  },
  computed: {},
  // onLoad (query) {
  //   this.info = this.$store.getters.parentData
  //   this.storeId = query.storeId
  // },
  mounted () {
    console.log('我执行了么')
    this.init()
  },
  methods: {
    init () {
      this.page = 1
      this.pageSize = 10
      this.loadType = 'loading'
      this.isLoading = false
      this.list = []
      this.info = this.$store.getters.parentData
      this.getPageData()
    },
    async getPageData () {
      try {
        let res = await this.$api.dailyStatistics({
          // store_id: this.storeId,
          // category: 'receives'
          page: this.page,
          per_page: this.pageSize,
          type: this.type,
          store_id: this.storeId,
          category: this.cate
        })
        this.listProcess(res.list)
        console.log(res)
      } catch (e) {
        this.toEnd()
      }
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
  height: 107rpx;
  color: #8e97a8;
  line-height: 107rpx;
  border-bottom: 1rpx solid #eceef2;
}
</style>
