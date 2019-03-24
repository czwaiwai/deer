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
          <div  @click="handleUploadBgImg" class="weui-cell ">
            <div class="weui-cell__hd">
              <image v-if="formObj.bg_image" class="shop_info_cell_img" :src="formObj.bg_image"></image>
            </div>
            <div class="weui-cell__bd "></div>
            <div class="weui-cell__ft weui-cell__ft_in-access">更换背景</div>
          </div>
          <div class="weui-cell ">
            <div class="weui-cell__hd ">门店名称</div>
            <div class="weui-cell__bd "><input class="store_input" v-model="formObj.store_name" type="text" placeholder="请输入门店名称" /></div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </div>
          <div  @click="handleLocation" class="weui-cell ">
            <div class="weui-cell__hd ">门店地址</div>
            <div open-type="" class="weui-cell__bd text-right">
              {{formObj.store_addr}}
              <!-- <input class="store_input"  v-model="formObj.store_addr" type="text" placeholder="请输入门店地址" /> -->
              </div>
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
    <auth-dialog id='myDialog' 
      title='提示' 
      cancelText='取消' 
      confirmText='去开启'
      scope='scope.userLocation'>
        <div><span>您禁止访问"查询地址"的权限\n请开启此项权限</span></div>
    </auth-dialog>
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
        latitude: '',
        longitude: '',
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
    // console.log(this.$wx.getPage().selectAllComponents())
    this.dialog = this.$mp.page.selectComponent('#myDialog')
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
    handleUploadBgImg () {
      this.$wx.uploadImg().then(url => {
        this.formObj.bg_image = url
      })
    },
    handleLocation () {
      let self = this
      wx.getSetting({
        success (res) {
          if (!res.authSetting['scope.userLocation']) {
            console.log('为什么没有弹出')
            wx.authorize({
              scope: 'scope.userLocation',
              success () {
                self.$wx.chooseLocation().then(res => {
                  console.log(res, '-------')
                  self.formObj.store_addr = res.address
                  self.formObj.latitude = res.latitude
                  self.formObj.longitude = res.longitude
                })
              },
              fail (e) {
                self.dialog.confirm(bool => {
                  if (bool) {
                    console.log('说明授权了, 可以打开chooseAddress', bool)
                    self.$wx.chooseLocation().then(res => {
                      console.log(res, '-------')
                      self.formObj.store_addr = res.address
                      self.formObj.latitude = res.latitude
                      self.formObj.longitude = res.longitude
                    })
                  } else {
                    console.log(bool, '用户不想授权')
                  }
                })
              }
            })
          } else {
            self.$wx.chooseLocation().then(res => {
              console.log(res, '-------')
              self.formObj.store_addr = res.address
              self.formObj.latitude = res.latitude
              self.formObj.longitude = res.longitude
            })
          }
        }
      })
    },
    async handleSubmit (e) {
      let res = await this.$api.saveStore({
        store_id: this.formObj.id,
        ...this.formObj
      })
      this.$toast('更新成功')
      setTimeout(() => {
        this.$wx.refreshPrevent()
        this.$wx.back()
      }, 1500)
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
