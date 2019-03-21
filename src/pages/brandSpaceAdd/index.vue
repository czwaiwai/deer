<!-- index.vue -->
<template>
<div class="container">
  <form  class="form_wrap" @submit="handleSubmit" report-submit="true">
  <div class="page">
    <div class="page_bd">
        <div class="padding15">
          <div class="textarea_wrap padding15">
            <textarea v-model="formObj.content" placeholder="点击输入内容" maxlength="250" name="textarea" />
          </div>
          <div class="img_list_wrap">
            <ul>
              <li v-for="(item, index) in images" :key="index">
                <img class="img_add" :src="item" mode="aspectFit" >
              </li>
              <li v-if="images.length < 9" @click="chooseImg">
                <image class="img_add" src="../../static/img/other/img_add.png"></image>
              </li>
            </ul>
          </div>
        </div>
      
    </div>
    <div class="page_ft">
      <button  form-type="submit" class="ft_btn">立即发布</button>
    </div>
  </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'detail',
  components: {},
  data () {
    return {
      images: [],
      tmpImages: [],
      formObj: {
        content: ''
      }
    }
  },

  computed: {},

  created () {},
  onLoad (query) {
    this.formObj.content = ''
    this.images = []
    this.storeId = query.storeId
  },
  mounted () {
    // this.getPageData()
  },
  methods: {
    async chooseImg () {
      let maxUp = 9 - this.images.length
      this.tmpImages = await this.$wx.spaceChooseImgs(maxUp)
      this.$wx.showLoading('图片正在上传...')
      this.tmpImages = await this.$wx.spaceUploadImgs(this.tmpImages)
      this.images = [...this.images, ...this.tmpImages]
      this.$wx.hideLoading()
      console.log(this.images, 'images')
    },
    async uploadImg () {
      let url = await this.$wx.uploadImg()
      this.images.push(url)
    },
    async handleSubmit (e) {
      console.log(e.mp)
      let res = await this.$api.suPublish({
        store_id: this.storeId,
        context: this.formObj.content,
        images: this.images.join(',')
      })
      console.log(res)
      this.$toast('发布成功～')
      this.$wx.refreshPrevent()
      this.$wx.back()
    }
  }
}
</script>
<style scoped>
.textarea_wrap {
  width:690rpx;
  height:360rpx;
  border:4rpx solid rgba(237,241,249,1);
  border-radius:20rpx;
}
.textarea_wrap textarea {
  font-size:30rpx;
  width:100%;
} 
.img_list_wrap {
  padding:30rpx 0;
}
.img_list_wrap ul {
  display:flex;
  flex-wrap:wrap;
  flex-basis:auto;
}
.img_list_wrap li{
  width:180rpx;
  height:180rpx;
  margin-right:30rpx;
  margin-bottom:30rpx;
} 
.img_add {
  width:180rpx;
  height:180rpx;
  border-radius:10rpx;
}
</style>
