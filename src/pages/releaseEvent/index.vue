<!-- index.vue -->
<template>
  <div class="container">
    <form class="form_wrap"
          @submit="handleSubmit"
          report-submit="true">
      <div class="page">

        <div class="page_bd">

          <div @click="handleUploadImg"
               class="form_item weui-flex">
            <div class="form_item_hd flex_item_center"
                 style="padding-top:10rpx;">
              <image class="img_60"
                     src="../../static/img/shopManage/head.png"></image>
            </div>
            <div class="weui-flex__item form_item_bd">
              <div class="span_placeholder fs15">请上传活动奖品图</div>
            </div>
            <div class="form_item_ft flex_item_center">
              <image class="dirt_right"
                     src="../../static/img/other/right_icon.png"></image>
            </div>
          </div>
          <div class="form_item weui-flex">
            <div class="form_item_hd fs15 flex_item_center">奖品名称</div>
            <div class="weui-flex__item form_item_bd">
              <input v-model="formObj.active_name"
                     placeholder="请输入奖品名称"
                     placeholder-style="color:#CACCDB">
            </div>
            <div class="form_item_ft"></div>
          </div>
          <div class="form_item weui-flex">
            <div class="form_item_hd fs15 flex_item_center">奖品价值</div>
            <div class="weui-flex__item form_item_bd">
              <input v-model="formObj.price"
                     placeholder="请输入奖品价值"
                     placeholder-style="color:#CACCDB">
            </div>
            <div class="form_item_ft"></div>
          </div>
          <div class="form_item weui-flex">
            <div class="form_item_hd fs15 flex_item_center">开始时间</div>
            <div class="weui-flex__item form_item_bd">
              <div class="span_placeholder fs15">请选择开始时间</div>
            </div>
            <div class="form_item_ft flex_item_center">
              <image class="dirt_right"
                     src="../../static/img/other/right_icon.png"></image>
            </div>
          </div>
          <div class="form_item weui-flex">
            <div class="form_item_hd fs15 flex_item_center">结束时间</div>
            <div class="weui-flex__item form_item_bd">
              <div class="span_placeholder fs15">请选择结束时间</div>
            </div>
            <div class="form_item_ft flex_item_center">
              <image class="dirt_right"
                     src="../../static/img/other/right_icon.png"></image>
            </div>
          </div>
          <div class="form_item weui-flex">
            <div class="form_item_hd fs15 flex_item_center">送出数量</div>
            <div class="weui-flex__item form_item_bd">
              <input name="out_num"
                     v-model="formObj.out_num"
                     placeholder="请输入送出数量"
                     placeholder-style="color:#CACCDB">
            </div>
            <div class="form_item_ft"></div>
          </div>
          <div class="form_item weui-flex">
            <div class="form_item_hd fs15 flex_item_center">需要积分</div>
            <div class="weui-flex__item form_item_bd">
              <input name="integral"
                     v-model="formObj.integral"
                     placeholder="请输入需要积分"
                     placeholder-style="color:#CACCDB">
            </div>
            <div class="form_item_ft"></div>
          </div>

        </div>
        <div class="page_ft">
          <button form-type="submit"
                  class="ft_btn">立即发布</button>
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
      formObj: {
        active_name: '',
        image: '',
        detail: '',
        store_id: '',
        integral: '',
        price: '',
        out_num: '',
        start_time: '',
        end_time: ''
      }
    }
  },

  computed: {},

  created () { },
  onLoad (query) {
    this.formObj.store_id = this.storeId = query.storeId
  },
  methods: {
    handleUploadImg () {
      console.log('执行了么')
      this.$wx.uploadImg().then(res => {
        console.log(res)
      })
    },
    handleSubmit () {

    }
  }
}
</script>
<style scoped>
.form_item {
  height: 112rpx;
  position: relative;
}
.form_item:after {
  content: " ";
  position: absolute;
  bottom: 0;
  right: 0px;
  height: 1px;
  border-top: 1rpx solid #eceef2;
  color: #eceef2;
  left: 180rpx;
}
.form_item_hd {
  width: 180rpx;
  padding-left: 30rpx;
}
.span_placeholder {
  color: #caccdb;
}
.form_item_bd {
  padding: 30rpx;
}
.form_item_bd input.input-placeholder {
  color: #caccdb;
}
.form_item_bd input {
  font-size: 30rpx;
}
.form_item_ft {
  padding-right: 30rpx;
}
.dirt_right {
  width: 15rpx;
  height: 27rpx;
}
</style>
