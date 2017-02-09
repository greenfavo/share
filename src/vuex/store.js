import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isShowNavBar: true, // 是否显示导航栏
  backTitle: '返回' // 后退按钮标题
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
  }
}

const actions = {
  showNavBar ({ commit }) {
    commit('SHOW_NAVBAR')
  },
  hiddenNavBar ({ commit }) {
    commit('HIDDEN_NAVBAR')
  },
  set_back_title ({ commit }, title) {
    commit('SET_BACK_TITLE', title)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
