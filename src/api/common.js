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

// 商户授权-登录
// /mer/login
export function merLogin (data) {
  return http.post('/mer/login', data)
}
// 更新用户信息
// /mer/user-update
export function userUpdate (data) {
  return http.post('/mer/user-update', data)
}
// 商户授权-退出
// /mer/logout
export function logout (data) {
  return http.post('/mer/logout', data)
}
// 小程序 保存 formid
// /mer/wechat/ma-formid
export function maFormId (data) {
  return http.post('/mer/wechat/ma-formid', data)
}
