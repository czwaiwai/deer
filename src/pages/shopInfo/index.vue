<!-- index.vue -->
<template>
  <div class="container">
    <div class="page shop_info">
      <div class="page_bd">
        <div class="weui-cells route_cell weui-cells_after-title ">
          <div @click="handleUploadImg"
               class="weui-cell ">
            <div class="weui-cell__hd">
              <image v-if="formObj.logo"
                     class="shop_info_cell_img"
                     :src="formObj.logo"></image>
            </div>
            <div class="weui-cell__bd "></div>
            <div class="weui-cell__ft weui-cell__ft_in-access">更换logo</div>
          </div>
          <div  class="weui-cell ">
            <div class="weui-cell__hd">
              <div class="color_cir"
                   :style="{'background': info.bg_image}"></div>
            </div>
            <div class="weui-cell__bd "></div>
            <div class="weui-cell__ft weui-cell__ft_in-access">更换背景</div>
          </div>
          <div class="weui-cell ">
            <div class="weui-cell__hd ">门店名称</div>
            <div class="weui-cell__bd "><input class="store_input" v-model="formObj.store_name" type="text" placeholder="请输入门店名称" /></div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
          <div  class="weui-cell ">
            <div class="weui-cell__hd ">门店地址</div>
            <div class="weui-cell__bd "><input class="store_input"  v-model="formObj.store_addr" type="text" placeholder="请输入门店地址" /></div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
          <div  class="weui-cell ">
            <div class="weui-cell__hd ">联系人</div>
            <div class="weui-cell__bd "><input class="store_input"  v-model="formObj.contact" type="text" placeholder="请输入门店联系人" /></div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
          <div  class="weui-cell ">
            <div class="weui-cell__hd">联系电话</div>
            <div class="weui-cell__bd "><input class="store_input"  v-model="formObj.phone" type="text" placeholder="请输入门店联系电话" /></div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
        </div>
      </div>
      <div class="page_ft">
        <form  @submit="handleSubmit" report-submit="true">
          <button  form-type="submit"  class="ft_btn">更新门店信息</button>
        </form>
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
      info: {},
      formObj: {
        store_id: '',
        store_name: '',
        store_addr: '',
        logo: '',
        bg_image: '',
        contact: '',
        phone: ''
      }
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
      this.formObj = {...res}
      console.log(res)
    },
    routeToShop (e) {
      console.log(e)
    },
    handleUploadImg () {
      this.$wx.uploadImg().then(url => {
        this.formObj.logo = url
      })
    },
    async handleSubmit (e) {
      let res = await this.$api.saveStore({
        store_id: this.formObj.id,
        ...this.formObj
      })
      this.$toast('更新成功')
      console.log(res)
    }
  }
}
</script>
<style>
.store_input {
  text-align:right;
}
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
