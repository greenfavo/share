import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  addBook (opts) {
    return Vue.http.post(`/api/book`, opts, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: true
    })
  },
  // 获取用户信息
  getUserInfo () {
    return Vue.http.get('/api/userinfo')
  },
  // 上传文件
  upload (opts) {
    return Vue.http.post('/api/image', opts)
  }
}
