<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd">
      <form bindsubmit="bindFormSubmit">
        <div class="padding15">
          <div class="textarea_wrap padding15">
            <textarea placeholder="点击输入内容" maxlength="250" name="textarea" />
          </div>
          <div class="img_list_wrap">
            <ul>
              <li>
                <image class="img_add" src="../../static/img/other/img_add.png"></image>
              </li>
              <li>
                <image class="img_add" src="../../static/img/other/img_add.png"></image>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
    <div class="page_ft">
      <button class="ft_btn">立即发布</button>
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
      formObj: {
        content: ''
      }
    }
  },

  computed: {},

  created () {},

  methods: {}
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
