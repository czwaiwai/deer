import http from '@/utils/request'
// 小程序 保存 formid
// /mer/wechat/ma-formid
export function maFormId (data) {
    return http.post('/mer/wechat/ma-formid', data)
  }