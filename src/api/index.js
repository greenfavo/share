import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  // 添加图书
  addBook (opts) {
    return Vue.http.post('/api/book', opts, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  // 获取用户信息
  getUserInfo () {
    return Vue.http.get('/api/userinfo')
  },
  // 上传文件
  upload (opts) {
    return Vue.http.post('/api/image', opts)
  },
  // 获取微信js-sdk签名
  getWechat () {
    let url = window.location.href.split('#')[0]
    return Vue.http.get('/api/jssdk', {
      params: {
        url: encodeURIComponent(url)
      }
    })
  },
  // 通过isbn获取图书信息
  getBookByISBN (isbn) {
    return Vue.http.get(`/api/isbn/${isbn}`)
  }
}
