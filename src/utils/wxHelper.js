import config from '../config'
import sign from './sign'
import store from '../store/index'
function login (e) {
  return new Promise((resolve, reject) => {
    wx.login({
      success (res) {
        if (res.code) {
          resolve(res.code)
        } else {
          reject(new Error('登陆失败'))
        }
      }
    })
  })
}
function scanCode () {
  return new Promise((resolve, reject) => {
    wx.scanCode({
      success: resolve,
      fail: reject
    })
  })
}
function uploadImg (data) {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      success (res) {
        const tempFilePaths = res.tempFilePaths
        const params = sign({
          type: 'image',
          token: store.getters.token
        })
        wx.uploadFile({
          url: config.baseUrl + '/mer/upload/image',
          filePath: tempFilePaths[0],
          name: 'image_file',
          formData: params,
          success (res) {
            let json = JSON.parse(res.data)
            if (json.code === 1) {
              resolve(json.data.url)
            } else {
              reject(json.msg)
            }
          },
          fail: reject
        })
      },
      fail (err) {
        reject(err)
      }
    })
  })
}
function back (times = 1) {
  wx.navigateBack({
    delta: times
  })
}
function setTitle (title = ' ') {
  wx.setNavigationBarTitle({
    title: title
  })
}
function refreshPrevent () {
  console.log('返回上一页')
  var pages = getCurrentPages()
  console.log(pages, 'pages -------')
  var prevPage = pages[pages.length - 2] // 上一个页面
  prevPage.onLoad(prevPage.options)
}
const wxHelper = {
  login,
  uploadImg,
  scanCode,
  refreshPrevent,
  setTitle,
  back
}
export default wxHelper
