<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd">
        <div class="weui-cells no_before_border  route_cell weui-cells_after-title ">
          <div v-for="(item, index) in list" :key="index" class="weui-cell  ">
            <div class="weui-cell__hd">
              <img  class="img_90" :src="item.avatar || '../../static/img/home/head.png'" />
            </div>
            <div class="weui-cell__bd padding-left15">
              <p class="fs15 dark_16" >{{item.nickname}}</p>
              <p class="fs12 dark_8e">{{item.created_at}}</p>
            </div>
            <div class="weui-cell__ft error_color">{{item.amount}}</div>
          </div>
          <div  class="weui-cell  ">
            <div class="weui-cell__hd">
              <image class="img_90" src="../../static/img/home/head.png" ></image>
            </div>
            <div class="weui-cell__bd padding-left15">
              <p class="fs15 dark_16" >Miss米奇</p>
              <p class="fs12 dark_8e">2018-10-10 16:00:00</p>
            </div>
            <div class="weui-cell__ft error_color">-100</div>
          </div>
          <div  class="weui-cell  ">
            <div class="weui-cell__hd">
              <image class="img_90" src="../../static/img/home/head.png" ></image>
            </div>
            <div class="weui-cell__bd padding-left15">
              <p class="fs15 dark_16" >Miss米奇</p>
              <p class="fs12 dark_8e">2018-10-10 16:00:00</p>
            </div>
            <div class="weui-cell__ft error_color">-100</div>
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

  created () {},
  mounted () {
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await this.$api.withdrawList({
        page: 1,
        per_page: 20
      })
      this.list = res.list
      console.log(res)
    }
  }
}
</script>
<style></style>
