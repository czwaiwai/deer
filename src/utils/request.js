import toast from './toast'
import config from '../config'
import sign from './sign'
import store from '../store'
function request (url, method = 'GET', data = {}, header) {
  if (!header) {
    header = {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
  console.log(store.getters, 'getters----')
  if (url !== '/mer/wechat/ma-key') {
    data.token = store.getters.token
  }
  if (
    ['/mer/wechat/ma-key', '/mer/wechat/ma-oauth', '/mer/login'].indexOf(
      url
    ) === -1
  ) {
    data = sign(data)
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.baseUrl + url,
      method: method,
      data: data,
      header: header,
      success (res) {
        console.log(res, '返回的结果')
        let { code, data, msg } = res.data
        if (code === 1) {
          if (data && data.token) {
            store.commit('setToken', data.token)
          }
          resolve(data)
        } else {
          if (code === 202) {
            store.commit('setLogin', false)
            store.commit('setToken', '')
            wx.reLaunch({ url: '/pages/login/main' })
          }
          if ([0, 204, 401, 111].includes(code)) {
            toast(msg)
          }
          reject(msg)
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
