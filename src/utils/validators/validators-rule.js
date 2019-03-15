// // var validators= require('./validators.js');
// import validators from 'validators'
export default [
  {
    name: 'required',
    errMsg: '当前为必填项',
    validFunc: function (val) {
      return val !== ''
    }
  },
  {
    name: 'integer',
    errMsg: '必须为整数',
    validFunc: (val) => {
      return /^\d+$/.test(val)
    }
  },
  {
    name: 'mobileTel',
    errMsg: '无效的手机号码',
    validFunc: function (val) {
      if (/^1\d{10}$/.test(val)) {
        return true
      }
      return false
    }
  },
  {
    name: 'pwd',
    errMsg: '密码太短',
    validFunc: function (val, param) {
      return (val + '').length >= param
    }
  },
  {
    name: 'msmCode',
    errMsg: '无效的短信校验码',
    validFunc: function (val) {
      let tmp = val + ''
      return tmp.length === 4
    }
  },
  {
    name: 'needTrue',
    errMsg: '请浏览并同意计划条款',
    validFunc: function (val) {
      if (typeof val === 'boolean' && val) {
        return true
      }
      return false
    }
  },
  {
    name: 'amount',
    errMsg: '请输入有效金额',
    validFunc: function (val) {
      if (/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(val)) {
        return true
      } else {
        return false
      }
    }
  },
  {
    name: 'onlyTwo',
    errMsg: '金额仅允许两位小数',
    validFunc: function (val) {
      if ((val + '').indexOf('.') > -1) {
        return /\.[\d]{1,2}$/.test(val)
      }
      return true
    }
  },
  {
    name: 'nickname',
    errMsg: '请不要输入特殊字符',
    validFunc: function (val) {
      if (/^[\w\u4e00-\u9fa5\uf900-\ufa2d()（）-]*$/.test(val)) {
        return true
      }
      return false
    }
  }
]
