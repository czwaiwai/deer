<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <scroll-view class="page_bd" scroll-y @scrolltolower="lower">
        <div class="weui-cells no_before_border  route_cell weui-cells_after-title ">
          <div v-for="(item, index) in list" :key="index" class="weui-cell  ">
            <div class="weui-cell__hd">
              <img class="img_90" :src="item.avatar || '../../static/img/home/head.png'" />
            </div>
            <div class="weui-cell__bd padding-left15">
              <p class="fs15 dark_16">{{item.nickname}}</p>
              <p class="fs12 dark_8e">{{item.created_at}}</p>
            </div>
            <div class="weui-cell__ft error_color">{{item.amount}}</div>
          </div>
          <!-- <div class="weui-cell  ">
            <div class="weui-cell__hd">
              <image class="img_90" src="../../static/img/home/head.png"></image>
            </div>
            <div class="weui-cell__bd padding-left15">
              <p class="fs15 dark_16">Miss米多</p>
              <p class="fs12 dark_8e">2018-10-10 16:00:00</p>
            </div>
            <div class="weui-cell__ft error_color">-100</div>
          </div>
          <div class="weui-cell  ">
            <div class="weui-cell__hd">
              <image class="img_90" src="../../static/img/home/head.png"></image>
            </div>
            <div class="weui-cell__bd padding-left15">
              <p class="fs15 dark_16">Miss米多</p>
              <p class="fs12 dark_8e">2018-10-10 16:00:00</p>
            </div>
            <div class="weui-cell__ft error_color">-100</div>
          </div> -->
        </div>
        <load-more v-if="loadType==='loading'" :loading="true" tip="正在加载"></load-more>
        <load-more v-if="loadType==='end'" :loading="false" tip="没有更多数据"></load-more>
        <load-more v-if="loadType==='empty'" :loading="false" tip="暂无数据"></load-more>
      </scroll-view>
      <!-- <div class="page_bd">

      </div> -->
    </div>
  </div>
</template>

<script>
import loadmore from '@/utils/loadmore'
export default {
  name: 'detail',
  mixins: [loadmore],
  components: {},
  data () {
    return {
      list: []
    }
  },

  computed: {},

  created () { },
  mounted () {
    // this.page = 1
    // this.pageSize = 10
    // this.loadType = 'loading'
    // this.isLoading = false
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.withdrawList({
        page: this.page,
        per_page: this.pageSize
      })
      let list = res.list
      console.log(res)
      return this.listProcess(list)
    }
    // listProcess (list) {
    //   this.list = [...this.list, ...list]
    //   if (list.length < (this.pageSize || 10)) {
    //     this.loadType = 'end'
    //   }
    //   if (this.list.length === 0) {
    //     this.loadType = 'empty'
    //   }
    // },
    // lower () {
    //   if (['empty', 'end'].includes(this.loadType)) return
    //   if (this.isLoading) return
    //   this.page++
    //   this.getPageData().then(res => {
    //     this.isLoading = false
    //   }).catch(err => {
    //     console.log(err)
    //     this.isLoading = false
    //   })
    // }
  }
}
</script>
<style></style>
