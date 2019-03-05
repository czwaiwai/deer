<!-- index.vue -->
<template>
<div class="container">
  <div class="page">
    <div class="page_bd">
      <ul class="padding15">
        <li>
          <image class="act_banner" src="../../static/img/other/act_banner_02.png"></image>
        </li>
        <li class="banner_wrap">
          <image class="act_banner" src="../../static/img/other/act_banner_01.png"></image>
        </li>
      </ul>
    </div>
    <div class="page_ft">
      <button  class="ft_btn">发布活动</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'releaseAct',
  components: {},
  data () {
    return {}
  },

  computed: {},

  created () {},

  methods: {}
}
</script>
<style>
.banner_wrap {
  padding-top:30rpx;
}
.act_banner{
  width:690rpx;
  height:262rpx;
}
</style>
