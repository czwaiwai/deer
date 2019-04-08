<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <!-- <div class="page_bd" style="background:#EDF1F9;"> -->
      <scroll-view class="page_bd" scroll-y style="background:#EDF1F9;" @scrolltolower="lower">
        <ul class="act_list">
          <li v-for="(item,index) in list" :key="index" class="act_item">
            <div class="act_item_bd weui-flex">
              <img class="img_150 img_cir" :src="item.image || '../../static/img/logo.png'" />
              <div class="weui-flex__item padding-left15">
                <p class="fs15 padding-bottom15">{{item.active_name}}</p>
                <p class="dark_8e fs12">价值：¥{{item.price}}</p>
                <p class="dark_8e fs12">积分：{{item.integral}}</p>
              </div>
            </div>
            <div class="act_item_line weui-flex padding15-v">
              <div class="weui-flex__item dark_8e text-left fs12">开始时间：{{item.start_time}}</div>
              <div class="weui-flex__item dark_8e text-right fs12">结束时间：{{item.end_time}}</div>
            </div>
            <div class="act_item_line weui-flex " style="height:95rpx;">
              <div class="weui-flex__item flex_item_center text-left dark_8e fs12">送出数量：{{item.out_num}}</div>
              <!-- <button @click="handleUpDown(item)" v-if="status===0" class="act_btn flex_item_center">上线</button> -->
              <button :hover="true" hover-class="btnhover" @click="handleUpDown(item)" v-if="status===1" class="act_btn flex_item_center">下线</button>
            </div>
          </li>
          <!-- <li class="act_item">
            <div class="act_item_bd weui-flex">
              <image class="img_150" src="../../static/img/other/act_goods.png"></image>
              <div class="weui-flex__item padding-left15">
                <p class="fs15 padding-bottom15">草莓水果茶一杯</p>
                <p class="dark_8e fs12">价值：¥26</p>
                <p class="dark_8e fs12">积分：15</p>
              </div>
            </div>
            <div class="act_item_line weui-flex padding15-v">
              <div class="weui-flex__item dark_8e text-left fs12">开始时间：2019-01-01</div>
              <div class="weui-flex__item dark_8e text-right fs12">结束时间：2019-03-31</div>
            </div>
            <div class="act_item_line weui-flex " style="height:95rpx;">
              <div class="weui-flex__item flex_item_center text-left dark_8e fs12">送出数量：1</div>
              <button class="act_btn flex_item_center">下线</button>
            </div>
          </li>
          <li class="act_item">
            <div class="act_item_bd weui-flex">
              <image class="img_150" src="../../static/img/other/act_goods.png"></image>
              <div class="weui-flex__item padding-left15">
                <p class="fs15 padding-bottom15">草莓水果茶一杯</p>
                <p class="dark_8e fs12">价值：¥26</p>
                <p class="dark_8e fs12">积分：15</p>
              </div>
            </div>
            <div class="act_item_line weui-flex padding15-v">
              <div class="weui-flex__item dark_8e text-left fs12">开始时间：2019-01-01</div>
              <div class="weui-flex__item dark_8e text-right fs12">结束时间：2019-03-31</div>
            </div>
            <div class="act_item_line weui-flex " style="height:95rpx;">
              <div class="weui-flex__item flex_item_center text-left dark_8e fs12">送出数量：1</div>
              <button class="act_btn flex_item_center">下线</button>
            </div>
          </li> -->
        </ul>
        <load-more v-if="loadType==='loading'" class="dark_8e" :loading="true" tip="正在加载"></load-more>
        <div v-if="loadType==='end'" class="padding15">
          <p class="text-center dark_ca fs13 padding-bottom15">米多猩让幸运伴随你</p>
        </div>
        <div v-if="loadType==='empty'" class="padding15">
          <p class="text-center dark_ca fs13 padding-bottom15">米多猩让幸运伴随你</p>
        </div>
      </scroll-view>
      <!-- </div> -->
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
      status: 1,
      list: []
    }
  },

  computed: {},

  created () { },
  onLoad (query) {
    this.status = parseInt(query.status)
    this.storeId = query.storeId
    if (this.status === 1) {
      this.$wx.setTitle('进行中的活动')
    } else {
      this.$wx.setTitle('已结束的活动')
    }
  },
  mounted () {
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.listActive({
        status: this.status,
        store_id: this.storeId,
        page: this.page,
        per_page: this.pageSize
      })
      this.listProcess(res.list)
    },
    async handleUpDown (item) {
      await this.$api.closeActive({
        id: item.id
      })
      this.$toast('操作成功')
      let index = this.list.indexOf(item)
      this.list.splice(index, 1)
    }
  }
}
</script>
<style>
.act_list {
  padding: 30rpx;
}
.act_btn:after {
  border: none;
  margin: 0;
}
.act_btn {
  width: 120rpx;
  height: 60rpx;
  background: rgba(58, 207, 193, 1);
  border-radius: 10rpx;
  color: #fff;
  font-size: 28rpx;
  line-height: 60rpx;
}
.act_list .act_item {
  background: #fff;
  border-radius: 20rpx;
  padding: 0 30rpx;
  margin-bottom: 30rpx;
}
.act_item .act_item_bd {
  padding: 40rpx 0;
}
.act_list .act_item_line {
  border-top: 1rpx solid #edf1f9;
}
</style>
