import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isShowNavBar: true // 是否显示导航栏
}

const mutations = {
  SHOW_NAVBAR (state) {
    state.isShowNavBar = true
  },
  HIDDEN_NAVBAR (state) {
    state.isShowNavBar = false
  }
}

const actions = {
  showNavBar ({ commit }) {
    commit('SHOW_NAVBAR')
  },
  hiddenNavBar ({ commit }) {
    commit('HIDDEN_NAVBAR')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
