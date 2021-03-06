import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const API = '/api'

export default {
  // 添加图书
  addBook (opts) {
    return Vue.http.post(`${API}/book`, opts, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  // 获取用户信息
  getUserInfo (userId = '') {
    return Vue.http.get(`${API}/userinfo?userId=${userId}`)
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
  },
  // 校园认证
  vertify (opts) {
    return Vue.http.post(`${API}/cert`, opts, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  // 取消校园认证
  cancleVertify () {
    return Vue.http.delete(`${API}/cert`)
  },
  // 获取图书详情
  getBookInfo (id) {
    return Vue.http.get(`${API}/book?bookId=${id}`)
  },
  // 添加图书评论
  addComment (opts) {
    return Vue.http.post(`${API}/comment`, opts)
  },
  // 获取某个用户的图书
  getUserBook (userId, type = '') {
    return Vue.http.get(`${API}/books/user/${userId}?type=${type}`)
  },
  // 申请借阅
  applyBorrow (bookId) {
    return Vue.http.post(`${API}/propose/${bookId}`)
  },
  // 获取消息列表
  getMessage () {
    return Vue.http.get(`${API}/proposes`)
  }
}
