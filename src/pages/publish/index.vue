<template>
  <div class="container">
    <div class="page flex_item" style="overflow:hidden;">
      <div class="page_bd">
        <scroll-view scroll-y style="height:100%;" >
          <form class="form-container">
            <input type="text" class="form-control" v-model="motto" placeholder="标题（不超过30个字）" />
            <textarea class="form-control" v-model.lazy="motto" placeholder="描述（不超过140个字）" />
            <i-cell-group>
                <i-cell title="编写正文" is-link></i-cell>
                <i-cell title="添加封面" is-link url="/pages/dashboard/index"></i-cell>
                <i-cell title="选择模版" is-link url="/pages/dashboard/index"></i-cell>
                <i-cell title="背景音乐" is-link url="/pages/dashboard/index"></i-cell>
                <i-cell title="所在地点" is-link url="/pages/dashboard/index"></i-cell>
                <i-cell title="分类标签" is-link url="/pages/dashboard/index"></i-cell>
                <i-cell title="公开">
                    <switch slot="footer" checked />
                </i-cell>
                <i-cell title="私密">
                    <switch slot="footer" checked />
                </i-cell>
            </i-cell-group>
          </form>
          </scroll-view>
      </div>

    </div>
    <div class="page_ft flex">
      <div class="show_btn flex_item">预览</div>
      <div class="sure_btn flex_item">发布</div>
    </div>
  </div>
</template>

<script>
// Use Vuex
export default {
  data: function () {
    return {
      motto: ''
    }
  },
  methods: {}
}
</script>

<style>
.form-container {
  overflow:hidden;
}
.form-container .form-control {
  border-bottom:0.5px solid #f0f0f0;
}
.form-container input.form-control {
  height:40px;
  line-height:40px;
  padding: 0 10px;
} 
.form-container textarea.form-control {
  height:80px;
  box-sizing: border-box;
  padding:5px 10px;
  line-height:1.4;
  width:100%;
} 
.page_bd {
  height:100%;
}
.page_ft {
  height:50px;
  line-height:50px;
}

.page_ft .show_btn{
  background:#000;
  color:#FFF;
  text-align:center;
}
.page_ft .sure_btn {
  background:orange;
  color:#FFF;
  text-align:center;
}
</style>
