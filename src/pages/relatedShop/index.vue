<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <div class="page_bd" style="background:#EDF1F9;">
        <ul class="padding15">
          <li v-for="(item, index) in list" :key="index" class="rel_item">
            <div class="weui-flex stock_top padding-top15 padding15-h">
              <div>
                <img :src="item.store_logo || '../../static/img/home/shop_icon.png'" class="img_120" />
              </div>
              <div class="weui-flex__item padding-left15 flex_item_center">
                <p class="fs14">{{item.store_name}}</p>
                <p class="fs12 dark_8e">{{item.store_addr}}</p>
              </div>
            </div>
            <div class="weui-flex " style="height:98rpx;padding:15rpx;">
              <div class="weui-flex__item padding-left">
                <p v-if="item.status == 1" class="fs14" style="line-height:70rpx;">已授权</p>
                <p v-if="item.status == 0" class="fs14" style="line-height:70rpx;">未授权</p>
              </div>
              <div class="weui-flex__item text-right padding-right">
                <switch :checked="item.status?true:false" @change="handleAuth($event,item)" color="#2ED0C1" />
              </div>
            </div>
          </li>
          <!-- <li class="rel_item">
          <div class="weui-flex stock_top padding-top15 padding15-h">
            <div>
              <image  src="../../static/img/home/shop_icon.png" class="img_120"></image>
            </div>
            <div class="weui-flex__item padding-left15 flex_item_center">
              <p class="fs14">鹿角巷天河北门店</p>
              <p class="fs12 dark_8e">天河区天河路北路99号 B302</p>
            </div>
          </div>
          <div class="weui-flex " style="height:98rpx;padding:15rpx;">
            <div class="weui-flex__item padding-left" >
              <p class="fs14" style="line-height:70rpx;">已授权</p>
            </div>
            <div class="weui-flex__item text-right padding-right">
              <switch bindchange="switch2Change" color="#2ED0C1" />
            </div>
          </div>
         </li> -->
        </ul>
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
  onLoad (query) {
    this.subMid = query.subMid
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.authStoreList({
        page: 1,
        per_page: 10,
        sub_mid: this.subMid
      })
      this.list = res.list
    },
    async handleAuth (e, item) {
      console.log(e, item, '-----')
      let tmp = item.status
      try {
        item.status = item.status ? 0 : 1
        let res = await this.$api.authStore({
          store_id: item.store_id,
          status: item.status,
          sub_mid: this.subMid
        })
        this.$toast('操作成功')
        console.log(res)
      } catch (err) {
        setTimeout(() => {
          item.status = tmp
        }, 300)
      }
    }
  }
}
</script>
<style scoped>
.rel_item {
  height: 297rpx;
  border-radius: 20rpx;
  background: #fff;
  margin-bottom: 30rpx;
}
.stock_top {
  padding-bottom: 30rpx;
  height: 198rpx;
  border-bottom: 1rpx solid #eceef2;
}
</style>
