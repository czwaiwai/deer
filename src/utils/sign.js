import md5 from 'js-md5'
import config from '../config'
export default myEncrypt
function myEncrypt (prm, secret = config.secret) {
  let basePrm = Object.assign({}, prm)
  let parmsNames = ['app', 'act', 'sign', 's', 'image_file']
  for (let k in parmsNames) {
    let key = parmsNames[k]
    if (prm.hasOwnProperty(key)) delete prm[key]
  }
  // 按升序排列的参数键值对
  let keyArr = Object.keys(prm).sort()
  let str = ''
  for (let k in keyArr) {
    let key = keyArr[k]
    let val = prm[key]
    str += key + val
  }
  console.log('signstr', str)
  basePrm.sign = md5(secret + md5(str))
  return basePrm
}
