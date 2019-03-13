import toast from './toast'
import config from '../config'
import sign from './sign'
function request (url, method = 'GET', data = {}, header) {
  if (!header) {
    header = {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.baseUrl + url,
      method: method,
      data: sign(data),
      header: header,
      success (res) {
        if (res.data.code === 200) {
          resolve(res.data)
        } else {
          reject(res.msg)
        }
      },
      fail (err) {
        console.log(err)
        toast('网络请求失败~')
      }
    })
  })
}
let first = true
const http = {
  get (url, data, isHideLoad) {
    if (first) {
      // request('/mer/wechat/ma-key',)
      first = false
    }
    return request(url, 'GET', data)
  },
  post (url, data, isHideLoad) {
    return request(url, 'POST', data)
  }
}
export default http
