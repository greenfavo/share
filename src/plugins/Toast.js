let Toast = {}
Toast.install = function (Vue, options) {
  let opt = {
    defaultType: 'info', // 消息类型
    duration: 3000 // 持续时间
  }
  for (let property in options) {
    opt[property] = options[property] // 使用options配置
  }

  Vue.prototype.$msg = (type, message) => {
    if (type) {
      opt.defaultType = type // 如果有传type，位置则设为该type
    }
    if (document.getElementsByClassName('toast').length) {
      // 如果toast还在，则不执行
      return
    }
    let iconMap = {
      'info': 'priority_high',
      'success': 'done',
      'error': 'clear'
    }
    let ToastTpl = Vue.extend({
      template: `
        <div class="toast">
          <div class="toast-icon ${opt.defaultType}">
            <mu-icon value="${iconMap[opt.defaultType]}" color="white"/>
          </div>
          <span>${message}</span>
        </div>`
    })
    let tpl = new ToastTpl().$mount().$el
    document.body.appendChild(tpl)

    setTimeout(function () {
      document.body.removeChild(tpl)
    }, opt.duration)
  }
}
module.exports = Toast
