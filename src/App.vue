<template>
  <div id="app">
    <top-bar v-show="isShowNavBar"></top-bar>
    <back-nav v-show="!isShowNavBar"></back-nav>
    <!-- <transition name="fade"> -->
      <router-view></router-view>
    <!-- </transition> -->
    <bottom-bar v-show="isShowNavBar"></bottom-bar>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import BackNav from './components/BackNav'
import BottomBar from './components/BottomBar'
import './assets/style.css'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    TopBar,
    BottomBar,
    BackNav
  },
  computed: mapState({
    isShowNavBar: state => state.isShowNavBar
  })
}
</script>
