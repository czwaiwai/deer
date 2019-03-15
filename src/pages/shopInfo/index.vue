<!-- index.vue -->
<template>
  <div class="container">
    <div class="page shop_info">
      <div class="page_bd">
        <div class="weui-cells route_cell weui-cells_after-title ">
          <div @click="routeToShop"
               class="weui-cell ">
            <div class="weui-cell__hd">
              <image v-if="info.logo"
                     class="shop_info_cell_img"
                     :src="info.logo"></image>
            </div>
            <div class="weui-cell__bd "></div>
            <div class="weui-cell__ft weui-cell__ft_in-access">更换logo</div>
          </div>
          <div @click="routeToShop"
               class="weui-cell ">
            <div class="weui-cell__hd">
              <div class="color_cir"
                   :style="{'background': info.bg_image}"></div>
            </div>
            <div class="weui-cell__bd "></div>
            <div class="weui-cell__ft weui-cell__ft_in-access">更换背景</div>
          </div>
          <div @click="routeToShop"
               class="weui-cell ">
            <div class="weui-cell__bd ">门店名称</div>
            <div class="weui-cell__ft weui-cell__ft_in-access">{{info.store_name}}</div>
          </div>
          <div @click="routeToShop"
               class="weui-cell ">
            <div class="weui-cell__bd ">门店地址</div>
            <div class="weui-cell__ft weui-cell__ft_in-access">{{info.store_addr}}</div>
          </div>
          <div @click="routeToShop"
               class="weui-cell ">
            <div class="weui-cell__bd ">联系人</div>
            <div class="weui-cell__ft weui-cell__ft_in-access">{{info.contact}}</div>
          </div>
          <div @click="routeToShop"
               class="weui-cell ">
            <div class="weui-cell__bd">联系电话</div>
            <div class="weui-cell__ft weui-cell__ft_in-access">{{info.phone}}</div>
          </div>
        </div>
      </div>
      <div class="page_ft">
        <button class="ft_btn">更新门店信息</button>
      </div>
    </div>
  </div>
</template>

<script>
import { merStoreInfo } from '@/api'
export default {
  name: 'login',
  components: {},
  data () {
    return {
      info: {}
    }
  },

  computed: {},

  onLoad (query) {
    this.storeId = query.storeId
    console.log(query.id, 'option.query')
  },
  mounted () {
    this.getPageData()
  },
  methods: {
    async getPageData () {
      let res = await merStoreInfo({
        store_id: this.storeId
      })
      this.info = res
      console.log(res)
    },
    routeToShop (e) {
      console.log(e)
    }
  }
}
</script>
<style>
.shop_info_cell_img {
  width: 60rpx;
  height: 60rpx;
}
.color_cir {
  width: 60rpx;
  height: 60rpx;
  background: rgba(46, 208, 193, 1);
  border-radius: 50%;
}
.shop_info .weui-cell {
  height: 112rpx;
}
.shop_info .weui-cells:after {
  bottom: 0;
  left: 0;
  right: 0;
}
.shop_info .weui-cell:before {
  left: 0;
  right: 0;
}
</style>
