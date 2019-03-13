const loading = {
  show (msg = '加载中') {
    wx.showLoading({
      title: msg
    })
  },
  hide () {
    wx.hideLoading()
  }
}
export default loading
