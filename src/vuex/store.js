import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

const state = {
  isShowNavBar: true, // 是否显示导航栏
  backTitle: '返回', // 后退按钮标题
  userInfos: {},
  vertify: false,
  wechatConfig: {
    debug: false,
    jsApiList: ['scanQRCode']
  },
  book: {}, // 扫码获取的图书
  books: [], // 所有书籍
  bookInfos: {}, // 图书详情信息
  userBook: {},
  messages: []
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
  GET_USER_INFOS (state, userInfo) {
    Vue.set(state.userInfos, userInfo.id, userInfo)
  },
  GET_WECHAT_CONFIG (state, config) {
    state.wechatConfig = Object.assign({}, state.wechatConfig, config)
    window.wx.config(state.wechatConfig)
  },
  GET_BOOK_BY_ISBN (state, book) {
    state.book = book
  },
  GET_ALL_BOOKS (state, books) {
    state.books = [...state.books, ...books]
  },
  SET_VERTIFY (state, isVertify) {
    state.vertify = isVertify
  },
  SET_BOOK_INFOS (state, book) {
    Vue.set(state.bookInfos, book['_id'], book)
    console.log('bookinfos: ', state.bookinfos)
  },
  GET_USER_BOOK (state, {book, type}) {
    type = type || 'private'
    Vue.set(state.userBook, type, book)
  },
  GET_MESSAGES (state, msg) {
    state.messages = msg
  }
}

const actions = {
  getUserInfo ({ commit }, userId = '') {
    api.getUserInfo(userId).then((res) => {
      res = res.body
      if (res.result === 'ok') {
        commit('GET_USER_INFOS', res.data)
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
  },
  getBooks ({ commit }, timestamp = '') {
    api.getBooks(timestamp).then((res) => {
      res = res.body
      if (res.result === 'ok') {
        commit('GET_ALL_BOOKS', res.data)
      } else {
        throw new Error(res.data)
      }
    })
  },
  getBookInfo ({ commit }, id) {
    api.getBookInfo(id).then((res) => {
      res = res.body
      if (res.result === 'ok') {
        commit('SET_BOOK_INFOS', res.data)
      } else {
        throw new Error('fail')
      }
    })
  },
  getUserBook ({ commit, state }, {userId, type = ''}) {
    api.getUserBook(userId, type).then((res) => {
      res = res.body
      if (res.result === 'ok') {
        commit('GET_USER_BOOK', {book: res.data, type})
      }
    })
  },
  getMessages ({ commit }) {
    api.getMessages().then(res => {
      res = res.body
      if (res.result === 'ok') {
        commit('GET_MESSAGES', res.data)
      }
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
