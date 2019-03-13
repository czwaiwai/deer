function toast (str, icon, time = 2000) {
  wx.showToast({
    title: str,
    icon: icon || 'none',
    duration: time
  })
}
export default toast
