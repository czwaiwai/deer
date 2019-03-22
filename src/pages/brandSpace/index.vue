<!-- index.vue -->
<template>
  <div class="container">
    <div class="page">
      <scroll-view class="page_bd bg" scroll-y @scrolltolower="lower">
        <div class="brand_hd padding15">
          <div class="brand_main_bl padding15">
            <div style="height:260rpx;">
              <div class="brand_img_wrap">
                <image class="img_150 img_cir" :src="info.store_logo || '../../static/img/home/head.png'"></image>
              </div>
              <p class="text-center fs18">{{info.store_name}}</p>
            </div>
            <div class="weui-flex brand_bottom lodash  ">
              <image class="address_icon" src="../../static/img/other/address_icon.png"></image>
              <div class="weui-flex__item padding-left15 fs12 dark_8e">{{info.store_addr}}</div>
              <div class="fs12 dark_8e">0.6km</div>
            </div>
          </div>
        </div>
        <div class="brand_list">
          <div class="light_bg" style="padding-top: 120rpx;"></div>
          <ul>
            <li v-for="(item,index) in list" :key="index" class="brsp_item">
              <div v-show="item.delShow" class="hide_del_btn" @click.stop="handleDel(item)">
                <span>
                  <image class="del_img" src="../../static/img/other/del_space.png"></image> 删除
                </span>
              </div>
              <div class="weui-flex">
                <image class="img_72 flex_item_center" :src="item.avatar || '../../static/img/home/head.png'"></image>
                <div class="weui-flex__item  flex_item_center fs13 padding-left15">{{item.nickname}}</div>
                <image @click="item.delShow=!item.delShow" class="img_more flex_item_center" src="../../static/img/other/more_icon.png"></image>
              </div>
              <div class="space_cont padding15-v">
                <p class="fs13">{{item.context}}</p>
              </div>
              <div v-if="item.images " class="img_show_list">
                <div v-if="item.images.length === 1" class="img_mode_00">
                  <image @click="handlePreImg(item.images, subIndex)" mode="aspectFill" lazy-load="true" v-for="(img,subIndex) in item.images" :key="subIndex" class="img_item" :src="img ||'../../static/img/other/goods_01.png'"></image>
                </div>
                <div v-if="item.images.length === 2" class="img_mode_01">
                  <image @click="handlePreImg(item.images, subIndex)" mode="aspectFill" lazy-load="true" v-for="(img,subIndex) in item.images" :key="subIndex" class="img_item" :src="img ||'../../static/img/other/goods_01.png'"></image>
                </div>
                <div v-if="item.images.length === 3" class="img_mode_02">
                  <image @click="handlePreImg(item.images, subIndex)" mode="aspectFill" lazy-load="true" v-for="(img,subIndex) in item.images" :key="subIndex" class="img_item" :src="img ||'../../static/img/other/goods_01.png'"></image>
                </div>
                <div v-if="item.images.length === 4" class="img_mode_03">
                  <image @click="handlePreImg(item.images, subIndex)" mode="aspectFill" lazy-load="true" v-for="(img,subIndex) in item.images" :key="subIndex" class="img_item" :src="img ||'../../static/img/other/goods_01.png'"></image>
                </div>
                <div v-if="item.images.length === 5" class="img_mode_04">
                  <image @click="handlePreImg(item.images, subIndex)" mode="aspectFill" lazy-load="true" v-for="(img,subIndex) in item.images" :key="subIndex" class="img_item" :src="img ||'../../static/img/other/goods_01.png'"></image>
                </div>
                <div v-if="item.images.length === 6 || item.images.length === 7|| item.images.length === 8|| item.images.length === 9" class="img_mode_04">
                  <image @click="handlePreImg(item.images, subIndex)" mode="aspectFill" lazy-load="true" v-for="(img,subIndex) in item.images" :key="subIndex" class="img_item" :src="img ||'../../static/img/other/goods_01.png'"></image>
                </div>
              </div>
              <div class="weui-flex padding-top">
                <div>
                  <image class="img_like vertical-middle" src="../../static/img/other/like_red.png"></image>
                  <span class="dark_8e  padding-left15 vertical-middle fs13">{{item.total_likes}}</span>
                </div>
                <div class="weui-flex__item"></div>
              </div>
            </li>
            <!-- <li class="brsp_item">
            <div class="weui-flex">
              <image class="img_72 flex_item_center" src="../../static/img/home/head.png"></image>
              <div class="weui-flex__item  flex_item_center fs13 padding-left15">Miss米奇</div>
              <image class="img_more flex_item_center" src="../../static/img/other/more_icon.png"></image>
            </div>
            <div class="space_cont padding15-v" >
              <p class="fs13">本店推出新品，首杯免费试喝，欢迎品尝，活动时间持续到11月底。</p>
            </div>
            <div class="img_show_list">
              <div class="img_mode_02">
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
              </div> 
            </div>
            <div class="weui-flex padding-top">
              <div>
                <image class="img_like vertical-middle" src="../../static/img/other/like_red.png"></image>
                <span class="dark_8e  padding-left15 vertical-middle fs13">2000</span>
              </div>
              <div class="weui-flex__item"></div>
            </div>
          </li>
          <li class="brsp_item">
            <div class="weui-flex">
              <image class="img_72 flex_item_center" src="../../static/img/home/head.png"></image>
              <div class="weui-flex__item  flex_item_center fs13 padding-left15">Miss米奇</div>
              <image class="img_more flex_item_center" src="../../static/img/other/more_icon.png"></image>
            </div>
            <div class="space_cont padding15-v" >
              <p class="fs13">本店推出新品，首杯免费试喝，欢迎品尝，活动时间持续到11月底。</p>
            </div>
            <div class="img_show_list">
              <div class="img_mode_03">
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
              </div> 
            </div>
            <div class="weui-flex padding-top">
              <div>
                <image class="img_like vertical-middle" src="../../static/img/other/like_red.png"></image>
                <span class="dark_8e  padding-left15 vertical-middle fs13">2000</span>
              </div>
              <div class="weui-flex__item"></div>
            </div>
          </li>
          <li class="brsp_item">
            <div class="weui-flex">
              <image class="img_72 flex_item_center" src="../../static/img/home/head.png"></image>
              <div class="weui-flex__item  flex_item_center fs13 padding-left15">Miss米奇</div>
              <image class="img_more flex_item_center" src="../../static/img/other/more_icon.png"></image>
            </div>
            <div class="space_cont padding15-v" >
              <p class="fs13">本店推出新品，首杯免费试喝，欢迎品尝，活动时间持续到11月底。</p>
            </div>
            <div class="img_show_list">
              <div class="img_mode_01">
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
              </div> 
            </div>
            <div class="weui-flex padding-top">
              <div>
                <image class="img_like vertical-middle" src="../../static/img/other/like_red.png"></image>
                <span class="dark_8e  padding-left15 vertical-middle fs13">2000</span>
              </div>
              <div class="weui-flex__item"></div>
            </div>
          </li>
          <li class="brsp_item">
            <div class="weui-flex">
              <image class="img_72 flex_item_center" src="../../static/img/home/head.png"></image>
              <div class="weui-flex__item  flex_item_center fs13 padding-left15">Miss米奇</div>
              <image class="img_more flex_item_center" src="../../static/img/other/more_icon.png"></image>
            </div>
            <div class="space_cont padding15-v" >
              <p class="fs13">本店推出新品，首杯免费试喝，欢迎品尝，活动时间持续到11月底。</p>
            </div>
            <div class="img_show_list">
              <div class="img_mode_05">
                <image class="img_item" src="../../static/img/other/goods_01.png"></image>
              </div> 
            </div>
            <div class="weui-flex padding-top">
              <div>
                <image class="img_like vertical-middle" src="../../static/img/other/like_red.png"></image>
                <span class="dark_8e  padding-left15 vertical-middle fs13">2000</span>
              </div>
              <div class="weui-flex__item"></div>
            </div>
          </li> -->
          </ul>
        </div>
        <load-more v-if="loadType==='loading'" class="dark_8e" :loading="true" tip="正在加载"></load-more>
        <div v-if="loadType==='end'" class="padding15">
          <p class="text-center dark_ca fs13 padding-bottom15">米奇猩让幸运伴随你</p>
        </div>
        <div v-if="loadType==='empty'" class="padding15">
          <p class="text-center dark_ca fs13 padding-bottom15">米奇猩让幸运伴随你</p>
        </div>
      </scroll-view>
      <div>
        <button @click="routeTo('../brandSpaceAdd/main?storeId='+ storeId)" class="cir_btn_ding">发布</button>
      </div>
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
      info: {},
      list: []
    }
  },

  computed: {},

  created () { },
  onLoad (query) {
    this.storeId = query.storeId
    this.refresh()
  },
  // mounted () {
  // },
  methods: {
    async getPageData () {
      let res = await this.$api.spaceIndex({
        store_id: this.storeId,
        page: this.page,
        per_page: this.pageSize
      })
      let { list, ...info } = res
      this.info = info
      // this.list = list
      this.listProcess(list.map(item => {
        item.delShow = false
        return item
      }))
    },
    async handleDel (item) {
      await this.$api.suDel({
        su_id: item.id
      })
      this.list.splice(this.list.indexOf(item), 1)
    },
    async handlePreImg (images, index) {
      await this.$wx.previewImage(images[index], images)
    },
    routeTo (url) {
      return wx.navigateTo({ url })
    }
  }
}
</script>
<style scoped>
.hide_del_btn {
  position: absolute;
  width: 140rpx;
  background: #8d96a9;
  color: #fff;
  text-align: center;
  right: 140rpx;
  border-radius: 20rpx;
}
.brand_hd {
  background: #3acfc1;
  height: 330rpx;
}
.brand_main_bl {
  width: 690rpx;
  height: 276rpx;
  position: relative;
  margin-top: 100rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 13rpx 24rpx 0 rgba(202, 204, 219, 0.3);
  border-radius: 30rpx;
}
.brand_img_wrap {
  width: 180rpx;
  height: 180rpx;
  border-radius: 100%;
  border: 3rpx solid #fff;
  margin: -120rpx auto 0 auto;
  text-align: center;
  line-height: 300rpx;
}
.brand_img_wrap image {
  margin: auto;
}
.address_icon {
  width: 30rpx;
  height: 38rpx;
}
.brand_bottom {
  height: 106rpx;
  padding: 36rpx 0;
  position: relative;
}
.lodash:before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 3rpx;
  background-image: linear-gradient(
    to right,
    #caccdb 0%,
    #caccdb 50%,
    transparent 50%
  );
  background-size: 32rpx 3rpx;
  background-repeat: repeat-x;
}
.cir_btn_ding {
  width: 119rpx;
  height: 119rpx;
  background: #2ed0c1;
  border-radius: 50%;
  font-size: 30rpx;
  color: #fff;
  line-height: 119rpx;
  position: absolute;
  bottom: 100rpx;
  right: 30rpx;
  padding: 0;
}
.cir_btn_ding:after {
  border: none;
}
.brsp_item {
  padding: 30rpx;
  position: relative;
  background: #fff;
  margin-bottom: 18rpx;
}
.img_like {
  width: 39rpx;
  height: 34rpx;
}
.img_more {
  width: 79rpx;
  height: 42rpx;
}
.del_img {
  width: 40rpx;
  height: 40rpx;
}
.img_show_list {
  position: relative;
}

.img_item {
  width: 227rpx;
  height: 227rpx;
  margin-bottom: 6rpx;
}
.img_mode_00 .img_item {
  width: 456rpx;
  height: 456rpx;
}

.img_mode_01 {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-basis: auto;
  justify-content: space-between;
}
.img_mode_01 .img_item:first-child {
  width: 456rpx;
  height: 456rpx;
}
.img_mode_02 {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-basis: auto;
  justify-content: space-between;
}
.img_mode_02 .img_item:first-child {
  width: 456rpx;
  height: 456rpx;
}
.img_mode_02 .img_item:last-child {
  position: absolute;
  right: 0;
  bottom: 0;
}

.img_mode_03 {
  display: flex;
  flex-wrap: wrap;
  flex-basis: auto;
  justify-content: space-between;
}
.img_mode_03 {
  padding-right: 233rpx;
}

.img_mode_04 {
  display: flex;
  flex-wrap: wrap;
  flex-basis: auto;
  justify-content: space-between;
}
.img_mode_04 .img_item {
  width: 227rpx;
  height: 227rpx;
  margin-bottom: 6rpx;
}
</style>
