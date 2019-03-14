let rules = []
let errorList = {} // 用来存储验证对象的错误信息
let animation = wx.createAnimation({
  duration: 400,
  timingFunction: 'step-start', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
  //  delay: 1000,
  // transformOrigin: '50% 50% 0',
  success: function (res) {
    // err.defaultTimes=1;
  }
})
let times = 0
function addRule (validObj) {
  rules.push(validObj)
}
// "tel|1|2|3" ,第一个为验证器名称，后面为追加的参数
function getRule (name) {
  let len = rules.length
  let realName = name
  let msg = ''
  let param
  if (name.indexOf('|') > -1) {
    let arr = name.split('|')
    let tmp = arr.shift().trim()
    let tmpArr = tmp.match(/^([^@]+)@?([^\\|]+)?/)
    realName = tmpArr[1]
    msg = tmpArr[2]
    if (arr.length > 1) {
      param = arr
    } else {
      param = arr.shift()
    }
  } else {
    let tmpArr = name.match(/^([^@]+)@?([^\\|]+)?/)
    realName = tmpArr[1]
    msg = tmpArr[2]
  }
  for (let i = 0; i < len; i++) {
    if (realName === rules[i].name) {
      let obj = rules[i]
      obj.textName = msg
      obj.param = param
      return obj
    }
  }
}

function actionRule (mValid, val) {
  if (mValid) {
    let res = mValid.validFunc(val, mValid.param)
    if (typeof res === 'boolean' && res) {
      // 当结果为真时
      return null
    } else {
      let errMsg = mValid.errMsg
      if (mValid.textName) {
        if (errMsg.indexOf('{text}') > -1) {
          errMsg.replace(/{text}/g, mValid.textName)
        } else {
          errMsg = mValid.textName
        }
      }
      if (typeof res === 'string') {
        errMsg = res
      }
      return {
        val: val,
        validName: mValid.name,
        errMsg: errMsg
      }
    }
  } else {
    throw new Error('不存在这个验证器,请检查验证器名称是否有误')
  }
}
/*
  *@param val 为验证值
  *@param rule 针对当前值所有的验证方法
  *@return {err:true,errMsg:"错误提示"} 返回错误提示err为true表示有错误，err为fails表示没有错误
*/
function singleValid (val, rule) {
  if (!rule) return
  if (typeof rule === 'string') {
    // 当rule为字符串时;查找存贮的rule验证器
    let mValid = getRule(rule)
    return actionRule(mValid, val)
  }
  if (rule instanceof Array && rule.length > 0) {
    let len = rule.length
    let res = null
    for (let i = 0; i < len; i++) {
      if (typeof rule[i] === 'string') {
        res = actionRule(getRule(rule[i]), val)
        if (res) {
          return res
        }
      }
      if (typeof rule[i] === 'object') {
        let ruleObj = getRule(rule[i].name) || {} // 查找相关定义的rule
        let mValid = Object.assign({}, ruleObj, rule[i]) // 得到rule选择器
        res = actionRule(mValid, val)
        if (res) {
          return res
        }
      }
    }
  } else {
    throw new Error('rule不是字符串，或者不是长度大于1的数组')
  }
}
function isEmptyObject (e) {
  var t
  for (t in e) return !1
  return !0
}
function hasErr () {
  return !isEmptyObject(errorList)
}
function getOneErr () {
  if (!isEmptyObject(errorList)) {
    let keys = Object.keys(errorList)
    return errorList[keys[0]].errMsg
  }
  return ''
}
function setFormStyle (validNameArr, app, errorList) {
  let err = {}
  err.defaultTimes = 0
  clearTimeout(times)
  animation
    .opacity(0.8)
    .translate(0, 0)
    .step()
  err.animation = animation.export()
  validNameArr.forEach(context => {
    if (errorList[context]) {
      err[context + 'Err'] = true
    } else {
      err[context + 'Err'] = false
    }
  })
  err['allError'] = getOneErr()
  app.data.formErrObj = err
  app.setData({
    formErrObj: err
  })
  times = setTimeout(() => {
    err.defaultTimes++
    err.animation = animation
      .opacity(0)
      .translate(0, -36)
      .step({ duration: 300, timingFunction: 'linear' })
      .export()
    app.setData({
      formErrObj: err
    })
  }, 1300)
}
/*
*@param valObj为form表单返回对象
*@param rules为要验证的规则
*@param app为app对象设置表单中的样式
*/
function validator (valObj, rules, isAll, app) {
  // valObj为form中获取到的结构及结果
  let valKeyArr = Object.keys(valObj) // 用户名
  errorList = [] // 重置错误信息
  for (var i = 0; i < valKeyArr.length; i++) {
    let context = valKeyArr[i]
    let val = valObj[context]
    let rule = rules[context]
    let singleRes = singleValid(val, rule)
    if (singleRes && typeof singleRes === 'object') {
      errorList.push(singleRes)
    }
    if (errorList.length > 0 && !isAll) {
      break
    }
  }
  // valKeyArr.forEach(context => {
  //   console.log(context, 'haha')

  // })
  if (app) {
    setFormStyle(valKeyArr, app, errorList)
  }
  return errorList
}

export default {
  addRule: addRule,
  hasErr: hasErr,
  getOneErr: getOneErr,
  validator: validator
}
