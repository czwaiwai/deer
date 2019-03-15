import config from '../config'
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
    wx.choodeImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: config.baseUrl + '/mer/upload/image',
          filePath: tempFilePaths[0],
          name: 'image_file',
          formData: {
            type: 'image'
          },
          success: resolve,
          fail: reject
        })
      },
      fail (err) {
        reject(err)
      }
    })
  })
}
const wxHelper = {
  login,
  uploadImg,
  scanCode
}
export default wxHelper
