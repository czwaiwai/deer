<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd" style="background:#EDF1F9;">
      <div v-for="(item,index) in list" :key="index" class="item_wrap">
        <div class="weui-cells no_before_border no_after_border route_cell weui-cells_after-title ">
            <div class="weui-cell my_head_cell " style="height:186rpx;">
              <div class="weui-cell__hd">
                <image class="img_120" src="../../static/img/home/head.png" ></image>
              </div>
              <div class="weui-cell__bd padding-left15">
                <p class="fs15 dark_16" >{{item.account}}</p>
              </div>
              <div @click="handleDel(item)" class="weui-cell__ft ">
                <image class="del_icon" src="../../static/img/other/del.png"></image>
              </div>
            </div>
            <div class="weui-cell " @click="routeTo('../merchantUpdate/main?subMid='+ item.sub_mid)" style="height:113rpx;">
              <div class="weui-cell__bd padding-left15">
                <p class="fs15 dark_16" >编辑信息</p>
              </div>
              <div class="weui-cell__ft  weui-cell__ft_in-access "></div>
            </div>
            <div class="weui-cell " @click="routeTo('../relatedShop/main?subMid='+ item.sub_mid)" style="height:113rpx;">
              <div class="weui-cell__bd padding-left15">
                <p class="fs15 dark_16" >门店授权</p>
              </div>
              <div class="weui-cell__ft  weui-cell__ft_in-access"></div>
            </div>
        </div>
      </div>
    </div>
    <div class="page_ft">
      <button @click="routeTo('../merchantUpdate/main')" class="ft_btn">创建子账号</button>
    </div>
  </div>
  <van-dialog id="van-dialog" />
</div>
</template>

<script>
import Dialog from '../../../static/vant/dialog/dialog'
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
      let res = await this.$api.merSubList({
        page: 1,
        per_page: 10
      })
      this.list = res.list
    },
    routeTo (url) {
      return wx.navigateTo({url})
    },
    async handleDel (item) {
      let action = await Dialog.confirm({
        title: '提示',
        message: '你确定要删除此账号么？'
      })
      console.log(action)
      await this.$api.merSubDel({
        sub_mid: item.sub_mid
      })
      this.mounted()
    }
  }
}
</script>
<style scoped>
.del_icon{
  width:44rpx;
  height:44rpx;
}
.item_wrap{
  padding: 30rpx 30rpx 0 30rpx;
}
.item_wrap .weui-cells {
  border-radius:20rpx;
}
</style>
