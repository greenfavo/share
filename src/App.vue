<template>
  <div id="app">
    <top-bar v-show="isShowNavBar"></top-bar>
    <back-nav v-show="!isShowNavBar"></back-nav>
    <router-view></router-view>
    <bottom-bar v-show="isShowNavBar"></bottom-bar>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import BackNav from './components/BackNav'
import BottomBar from './components/BottomBar'
import './assets/style.css'
import { mapState } from 'vuex'
import { getCookie } from '../utils'

export default {
  name: 'app',
  components: {
    TopBar,
    BottomBar,
    BackNav
  },
  computed: mapState({
    isShowNavBar: state => state.isShowNavBar
  }),
  mounted () {
    this.$store.commit('SET_VERTIFY', getCookie('verify'))
  }
}
</script>
