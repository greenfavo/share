<template>
  <div class="wrap">
    <person-cover
      :nickname="userInfo.nickname"
      :avatar="userInfo.headimgurl"
      :score="userInfo.score || 100"/>
    <mu-list>
      <mu-sub-header>消息通知</mu-sub-header>
      <mu-list-item title="系统通知">
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
      <mu-divider  />
      <mu-list-item title="书友私信">
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-divider />

    <mu-list>
      <mu-list-item title="校园认证" to="vertify">
        <mu-icon value="navigate_next" slot="right" />
      </mu-list-item>
      <mu-divider  />
      <mu-list-item title="联系方式">
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
import PersonCover from '../components/PersonCover'
import { getCookie } from '../utils'

export default {
  components: {
    PersonCover
  },
  computed: {
    userId () {
      return getCookie('userId') || ''
    },
    userInfo () {
      return this.$store.state.userInfos && this.$store.state.userInfos[this.userId]
    }
  },
  mounted () {
    this.$store.commit('SHOW_NAVBAR')
    if (!this.$store.state.userInfos[this.userId]) {
      this.$store.dispatch('getUserInfo', this.userId)
    }
  }
}
</script>
