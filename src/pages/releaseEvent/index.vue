<!-- index.vue -->
<template>
  <div class="container">
    <form class="form_wrap"  @submit="handleSubmit" report-submit="true">
      <div class="page">

        <div class="page_bd">

          <div @click="handleUploadImg"
               class="form_item weui-flex">
            <div class="form_item_hd flex_item_center"
                 style="padding-top:10rpx;">
              <img class="img_60"
                     :src="formObj.image" />
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
              <input v-model="formObj.active_name" name="active_name"
                     placeholder="请输入奖品名称"
                     placeholder-style="color:#CACCDB">
            </div>
            <div class="form_item_ft"></div>
          </div>
          <div class="form_item weui-flex">
            <div class="form_item_hd fs15 flex_item_center">奖品价值</div>
            <div class="weui-flex__item form_item_bd">
              <input v-model="formObj.price" name="price" placeholder="请输入奖品价值" placeholder-style="color:#CACCDB">
            </div>
            <div class="form_item_ft"></div>
          </div>
          <div class="form_item weui-flex">
            <div class="form_item_hd fs15 flex_item_center">开始时间</div>
            <picker @change="handleDateStart" class="weui-flex__item form_item_bd" mode="date"  >
                <div v-if="!formObj.start_time" class="span_placeholder fs15">请选择开始时间</div>
                <div v-else class="fs15">{{formObj.start_time}}</div>
            </picker>
            <div class="form_item_ft flex_item_center">
              <image class="dirt_right" src="../../static/img/other/right_icon.png"></image>
            </div>
          </div>
          <div class="form_item weui-flex">
            <div class="form_item_hd fs15 flex_item_center">结束时间</div>
             <picker @change="handleDateEnd" class="weui-flex__item form_item_bd" mode="date"  :start="formObj.start_time"   >
                <div v-if="!formObj.end_time" class="span_placeholder fs15">请选择结束时间</div>
                <div v-else class="fs15">{{formObj.end_time}}</div>
            </picker>
            <div class="form_item_ft flex_item_center">
              <image class="dirt_right" src="../../static/img/other/right_icon.png"></image>
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
          <button form-type="submit"  class="ft_btn">立即发布</button>
        </div>

      </div>
    </form>
   <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import validators from '@/utils/validators'
import Dialog from '../../../static/vant/dialog/dialog'
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
    console.log(query, 'query===')
    this.formObj.store_id = this.storeId = query.storeId
  },
  methods: {
    handleDateStart (e) {
      this.formObj.start_time = e.mp.detail.value
    },
    handleDateEnd (e) {
      console.log(e)
      this.formObj.end_time = e.mp.detail.value
      console.log(this.formObj, ' date----')
    },
    handleUploadImg () {
      console.log('执行了么')
      this.$wx.uploadImg().then(url => {
        this.formObj.image = url
      })
    },
    async handleSubmit (e) {
      console.log(this.formObj, '-----')
      let errArr = validators.validator(this.formObj, {
        active_name: 'required@奖品名称不能为空',
        image: 'required@奖品图片不能为空',
        integral: ['required@需要积分不能为空', 'integer@需要积分必须为数字'],
        price: ['required@送出数量不能为空', 'amount@奖品价值请输入有效金额'],
        out_num: ['required@送出数量不能为空', 'integer@送出数量必须为数字'],
        start_time: 'required@开始时间不能为空',
        end_time: 'required@结束时间不能为空'
      })
      this.formObj.start_time = this.formObj.start_time + ' 00:00:00'
      this.formObj.end_time = this.formObj.end_time + ' 00:00:00'
      if (errArr && errArr[0]) {
        return this.$toast(errArr[0].errMsg)
      }
      let res = await this.$api.saveActive(this.formObj)
      console.log(res)
      await Dialog.alert({
        title: '标题',
        message: '弹窗内容'
      })
      this.$wx.back()
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
