<!-- index.vue -->
<template>
  <div class="container">
    <form class="form_wrap" @submit="handleSubmit" report-submit="true">
      <div class="page">
        <div class="page_bd">
          <div class="padding15">
            <div class="textarea_wrap padding15">
              <textarea v-model="formObj.content" placeholder="点击输入内容" maxlength="250" name="textarea" />
              </div>
          <div class="img_list_wrap">
            <ul>
              <li v-for="(item, index) in images" :key="index">
                <span @click="handleDelImage(index)" class="del_test_btn"><image class="del_img" src="../../static/img/other/del_space.png" ></image></span>
                <img class="img_add" @click="handlePreImg(images, index)" mode="aspectFill"  :src="item"  >
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

  created () { },
  onLoad (query) {
    this.formObj.content = ''
    this.images = []
    this.storeId = query.storeId
  },
  mounted () {
    // this.getPageData()
  },
  methods: {
    handleDelImage (index) {
      this.images.splice(index, 1)
    },
    async handlePreImg (images, index) {
      await this.$wx.previewImage(images[index], images)
    },
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
      if (this.images.length === 0) {
        return this.$toast('添加图片更吸引人哦~')
      }
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
.del_test_btn {
  width: 60rpx;
  height: 60rpx;
  position: absolute;
  padding: 3px;
  right: 0;
  background: rgba(236, 32, 32, 0.4);
  text-align: center;
  z-index: 2;
}
.del_img {
  width: 50rpx;
  height: 50rpx;
}
.textarea_wrap {
  width: 690rpx;
  height: 360rpx;
  border: 4rpx solid rgba(237, 241, 249, 1);
  border-radius: 20rpx;
}
.textarea_wrap textarea {
  font-size: 30rpx;
  width: 100%;
}
.img_list_wrap {
  padding: 30rpx 0;
}
.img_list_wrap ul {
  display: flex;
  flex-wrap: wrap;
  flex-basis: auto;
}
.img_list_wrap li {
  width: 180rpx;
  height: 180rpx;
  position: relative;
  margin-right: 30rpx;
  margin-bottom: 30rpx;
}
.img_add {
  width: 180rpx;
  height: 180rpx;
  border-radius: 10rpx;
}
</style>
