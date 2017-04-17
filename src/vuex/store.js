import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

const state = {
  isShowNavBar: true, // 是否显示导航栏
  backTitle: '返回', // 后退按钮标题
  userInfo: {}
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
  }
}

const actions = {
  getUserInfo ({ commit }) {
    api.getUserInfo().then((data) => {
      console.log(data)
      commit('GET_USER_INFO', data)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
