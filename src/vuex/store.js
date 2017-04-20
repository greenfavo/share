import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

const state = {
  isShowNavBar: true, // 是否显示导航栏
  backTitle: '返回', // 后退按钮标题
  userInfo: {},
  wechatConfig: {
    debug: false,
    jsApiList: ['scanQRCode']
  },
  book: {}
}

const mutations = {
  SHOW_NAVBAR (state) {
    state.isShowNavBar = true
  },
  HIDDEN_NAVBAR (state) {
    state.isShowNavBar = false
  },
  SET_BACK_TITLE (state, title) {
    state.backTitle = title
  },
  GET_USER_INFO (state, userInfo) {
    state.userInfo = userInfo
  },
  GET_WECHAT_CONFIG (state, config) {
    state.wechatConfig = Object.assign({}, state.wechatConfig, config)
    window.wx.config(state.wechatConfig)
  },
  GET_BOOK_BY_ISBN (state, book) {
    state.book = book
  }
}

const actions = {
  getUserInfo ({ commit }) {
    api.getUserInfo().then((res) => {
      res = res.body
      if (res.result === 'ok') {
        commit('GET_USER_INFO', res.data)
      } else {
        console.log(res.data)
      }
    })
  },
  getWechatConfig ({ commit }) {
    api.getWechat().then((res) => {
      res = res.body
      if (res.result === 'ok') {
        commit('GET_WECHAT_CONFIG', res.data)
      } else {
        console.log(res.data)
      }
    })
  },
  getBookByISBN ({ commit }, isbn) {
    api.getBookByISBN(isbn).then((res) => {
      res = res.body
      if (res.result === 'ok') {
        commit('GET_BOOK_BY_ISBN', res.data)
      } else {
        console.log(res)
      }
    }, (err) => {
      console.log(err)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
