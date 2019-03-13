import http from '@/utils/request'

// 小程序获取token
// /mer/wechat/ma-key
export function maKey (data) {
  return http.get('/mer/wechat/ma-key', data)
}
// 小程序授权登录
// /mer/wechat/ma-oauth
export function maOauth (data) {
  return http.post('/mer/wechat/ma-oauth', data)
}

// 小程序 保存 formid
// /mer/wechat/ma-formid
export function maFormId (data) {
  return http.post('/mer/wechat/ma-formid', data)
}
