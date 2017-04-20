import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const API = '/api'

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
    return Vue.http.get(`${API}/userinfo`)
  },
  // 上传文件
  upload (opts) {
    return Vue.http.post(`${API}/image`, opts)
  },
  // 获取微信js-sdk签名
  getWechat () {
    let url = window.location.href.split('#')[0]
    return Vue.http.get(`${API}/jssdk`, {
      params: {
        url: encodeURIComponent(url)
      }
    })
  },
  // 通过isbn获取图书信息
  getBookByISBN (isbn) {
    return Vue.http.get(`${API}/isbn/${isbn}`)
  },
  // 获取所有图书
  getBooks (timestamp = '') {
    return Vue.http.get(`${API}/books`)
  }
}
