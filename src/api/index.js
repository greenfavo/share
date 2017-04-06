import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const server = 'http://localhost:8080'

export default {
  addBook (opts) {
    return Vue.http.post(`${server}/book`, opts, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: true
    })
  }
}
