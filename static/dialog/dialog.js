// components/Dialog/dialog.js
import onfire from './onfire'
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    // 弹窗标题
    title: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题' // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    dialogType: {
      type: String,
      value: 'confirm'
    },
    // 弹窗内容
    content: {
      type: String,
      value: ''
    },
    // 弹窗取消按钮文字
    cancelText: {
      type: String,
      value: '取消'
    },
    // 弹窗确认按钮文字
    confirmText: {
      type: String,
      value: '确定'
    },
    scope: {
      type: String,
      value: ''
    }
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    // 弹窗显示控制
    isShow: false
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    /*
     * 公有方法
     */

    // 隐藏弹框
    hideDialog () {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    // 展示弹框
    showDialog (type, cb) {
      this.setData({
        isShow: !this.data.isShow,
        dialogType: type || 'confirm'
      })
      if (typeof cb === 'function') {
        onfire.one('dialogClick', (res) => {
          this.setData({
            isShow: !this.data.isShow
          })
          if (res === 'cancel') {
            cb(false)
          } else {
            cb(true)
          }
        })
      } else {
        return new Promise((resolve, reject) => {
          onfire.one('dialogClick', (res) => {
            this.setData({
              isShow: !this.data.isShow
            })
            if (res === 'cancel') {
              reject(false)
            } else {
              resolve(true)
            }
          })
        })
      }
    },
    alert (cb) {
      return this.showDialog('alert', cb)
    },
    confirm (cb) {
      return this.showDialog('confirm', cb)
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _cancelEvent () {
      // 触发取消回调
      onfire.fire('dialogClick', 'cancel')
      // this.triggerEvent("cancelEvent")
    },
    _confirmEvent (e) {
      // 触发成功回调
      if (this.data.scope) { // 授权按钮
        console.log(e, '点击了确认授权')
        if (e.detail.authSetting[this.data.scope]) {
          console.log('用户成功授权')
          onfire.fire('dialogClick', 'confirm')
        } else {
          console.log('用户不肯授权')
          onfire.fire('dialogClick', 'cancel')
        }
      } else { // 普通的确定逻辑
        onfire.fire('dialogClick', 'confirm')
      }
    }
  }
})
