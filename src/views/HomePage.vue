<template>
  <div>
    <person-cover
      :nickname="userInfo.nickname"
      :avatar="userInfo.headimgurl"
      :score="userInfo.score || 100"/>
    <div class="main">
      <h2>TA的可借图书</h2>
      <book-grid type="private" :books="books"></book-grid>
    </div>
  </div>
</template>

<script>
import PersonCover from '../components/PersonCover'
import BookGrid from '../components/BookGrid'

export default {
  components: {
    PersonCover,
    BookGrid
  },
  computed: {
    userId () {
      return this.$route.params.id
    },
    userInfo () {
      let userInfo = this.$store.state.userInfos && this.$store.state.userInfos[this.userId] || {}
      if (userInfo) {
        this.$store.commit('SET_BACK_TITLE', userInfo.nickname)
      }
      return userInfo
    },
    books () {
      return this.$store.state.userBook && this.$store.state.userBook['private'] || []
    }
  },
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    if (!this.$store.state.userInfos[this.userId]) {
      this.$store.dispatch('getUserInfo', this.userId)
    }
    this.$store.dispatch('getUserBook', this.userId)
  }
}
</script>
<style scoped>
h2 {
  font-size: 14px;
  font-weight: normal;
}
</style>
