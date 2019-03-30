<template>
  <div class="tabbar">
    <div class="weui-flex ">
      <div @click="handleClick(item)" v-for="(item,index) in list" :key="index" class="weui-flex__item text-center">
        <image class="tab_img" :class="item.notxt?'tab_center_img':item.value" :src="item.value === value?item.urlHover:item.url"></image>
        <p v-if="!item.notxt" class="tab_txt">{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mytabbar',
  props: {
    value: {
      type: String
    },
    list: {
      type: Array,
      default: () => [

      ]
    }
  },
  methods: {
    handleClick (item) {
      this.$emit('input', item.value)
    }
  }
}
</script>
<style  scoped>
.tabbar {
  border-top: 1rpx solid #e3e3e3;
  padding-top: 10rpx;
  height: 98rpx;
  overflow: hidden;
}
.tab_img {
  width: 42rpx;
  height: 42rpx;
  line-height: 42rpx;
}
.tab_img.home {
  width: 47rpx;
  height: 42rpx;
}
.tab_img.tab_center_img {
  margin-top: 5rpx;
  width: 180rpx;
  height: 66rpx;
}
.tab_txt {
  font-size: 22rpx;
  line-height: 22rpx;
}
</style>
