import http from '@/utils/request'
// import { isFunction } from 'util'

// 品牌空间-首页
// /mer/space-index
export function spaceIndex (data) {
  return http.get('/mer/space-index', data)
}
// 品牌空间 - 发布动态
// /mer/su-publish
export function suPublish (data) {
  return http.post('/mer/su-publish', data)
}

// 保存活动功能（新增和更新）
// /mer/save-active
export function saveActive (data) {
  return http.post('/mer/save-active', data)
}

// 活动下架
// /mer/close-active
export function closeActive (data) {
  return http.post('/mer/close-active', data)
}

// 活动列表
// /mer/list-active
export function listActive (data) {
  return http.post('/mer/list-active', data)
}
// 每日统计（支持收益，兑换，品牌点赞和到店扫码）
// /mer/daily-statistics
export function dailyStatistics (data) {
  return http.post('/mer/daily-statistics', data)
}

// 统计
// /mer/mer-statistics
export function merStatistics (data) {
  return http.get('/mer/statistics', data)
}
// 收入统计接口
// /mer/mer-income-statistics
export function merIncomeStatistics (data) {
  return http.get('/mer/income-statistics', data)
}
// 兑换扫码品牌统计接口
// /mer/category-statistics
export function categoryStatistics (data) {
  return http.get('/mer/category-statistics', data)
}

// 商户门店
// /mer/mer-store
export function merStore (data) {
  return http.get('/mer/mer-store', data)
}

// 门店保存
// /mer/save-store
export function saveStore (data) {
  return http.post('/mer/save-store', data)
}

// 门店信息获取接口
// /mer/store
export function merStoreInfo (data) {
  return http.get('/mer/store', data)
}

// 门店好物推荐
// /mer/store-goods
export function storeGoods (data) {
  return http.post('/mer/store-goods', data)
}

// 门店好物推荐详细信息
// /mer/goods-detail
export function goodsDetail (data) {
  return http.post('/mer/goods-detail', data)
}

// 门店积分礼品
// /mer/store-gift
export function storeGift (data) {
  return http.post('/mer/store-gift', data)
}

// 门店积分礼品详细信息
// /mer/gift-detail
export function giftDetail (data) {
  return http.post('/mer/gift-detail', data)
}

// 粉丝关注
// /mer/scan-users
export function scanUsers (data) {
  return http.post('/mer/scan-users', data)
}

// 扫码兑奖-详情
// /mer/scan-detail
export function scanDetail (data) {
  return http.get('/mer/scan-detail', data)
}
// 扫码兑奖-提交
// /mer/scan-receive
export function scanReceive (data) {
  return http.post('/mer/scan-receive', data)
}

// 我的-个人中心页
// /mer/mer-center
export function merCenter (data) {
  return http.get('/mer/mer-center', data)
}

// 发送验证码
// /mer/send-smscode
export function sendSmscode (data) {
  return http.post('/mer/send-smscode', data)
}
// 验证验证码
// /mer/check-smscode
export function checkSmscode (data) {
  return http.post('/mer/check-smscode', data)
}

// 我的-我的钱包-提现（提交）
// /mer/withdraw
export function withdraw (data) {
  return http.post('/mer/withdraw', data)
}
// 我的-我的钱包 - 提现明细
// /mer/withdraw-list
export function withdrawList (data) {
  return http.get('/mer/withdraw-list', data)
}

// 我的-库存管理
// /mer/mer-stock
export function merStock (data) {
  return http.get('/mer/mer-stock', data)
}
// 我的-库存详情 - 商品
// /mer/stock-goods-list
export function stockGoodsList (data) {
  return http.get('/mer/stock-goods-list', data)
}
// 我的-库存详情 - 礼品
// /mer/stock-gift-list
export function stockGiftList (data) {
  return http.get('/mer/stock-gift-list', data)
}

// 我的-商户管理 (子商户列表)
// /mer/mer-sub-list
export function merSubList (data) {
  return http.get('/mer/mer-sub-list', data)
}

// 我的-商户管理 - 删除
// /mer/mer-sub-del
export function merSubDel (data) {
  return http.post('/mer/mer-sub-del', data)
}

// 我的-商户管理 - 编辑
// /mer/mer-sub-save
export function merSubSave (data) {
  return http.post('/mer/mer-sub-save', data)
}
// 我的-门店授权-门店列表 (可关联门店)
// /mer/auth-store-list
export function authStoreList (data) {
  return http.get('/mer/auth-store-list', data)
}

// 我的-门店授权（操作）
// /mer/auth-store
export function authStore (data) {
  return http.post('/mer/auth-store', data)
}
