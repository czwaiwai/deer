<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.page {
  height:100%;
  display:flex;
  flex-direction: column;
}
.page_bd {
  flex:1;
  height: 100%;
  overflow:auto;
}

.flex{
  display:flex;
}
.flex_column {
  flex-direction: column;
}
.flex_item_center {
  align-self: center;
}
.flex_item {
  flex:1;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
