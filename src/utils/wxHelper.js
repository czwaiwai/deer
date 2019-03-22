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
function showLoading (msg) {
  wx.showLoading({
    title: msg || '加载中'
  })
  return Promise.resolve(true)
}
function hideLoading () {
  wx.hideLoading()
  return Promise.resolve(true)
}
function spaceChooseImgs (count = 9) {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: count,
      sizeType: ['compressed'],
      success (res) {
        if (res.errMsg === 'chooseImage:ok') {
          resolve(res.tempFilePaths)
        } else {
          reject(res.errMsg)
        }
      }
    })
  })
}
function chooseLocation () {
  return new Promise((resolve, reject) => {
    wx.chooseLocation({
      success (res) {
        if (res.address) {
          resolve(res)
        } else {
          reject(new Error('没有地址信息'))
        }
      },
      fail: reject
    })
  })
}
async function spaceUploadImgs (paths) {
  let arr = []
  for (let i = 0; i < paths.length; i++) {
    try {
      let img = await fileUpload(paths[i])
      arr.push(img)
    } catch (err) {
      console.log(err)
      return arr
    }
  }
  return arr
}
function fileUpload (path) {
  return new Promise((resolve, reject) => {
    const params = sign({
      type: 'image',
      token: store.getters.token
    })
    wx.uploadFile({
      url: config.baseUrl + '/mer/upload/image',
      filePath: path,
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
function previewImage (curr, urls) {
  return new Promise((resolve, reject) => {
    wx.previewImage({
      urls: urls,
      current: curr,
      success: resolve,
      fail: reject
    })
  })
}
function getPage () {
  const pages = getCurrentPages()
  return pages[pages.length - 1]
}
function refreshPrevent () {
  var pages = getCurrentPages()
  var prevPage = pages[pages.length - 2] // 上一个页面
  prevPage.onLoad(prevPage.options)
}
const wxHelper = {
  login,
  uploadImg,
  getPage,
  hideLoading,
  showLoading,
  fileUpload,
  chooseLocation,
  spaceChooseImgs,
  spaceUploadImgs,
  previewImage,
  scanCode,
  refreshPrevent,
  setTitle,
  back
}
export default wxHelper
