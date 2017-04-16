<template>
  <div>
    <person-cover />
    <div class="main">
      <h2>TA的闲置图书</h2>
      <book-grid></book-grid>
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
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.commit('SET_BACK_TITLE', '小书童')
  }
}
</script>
<style scoped>
h2 {
  font-size: 14px;
  font-weight: normal;
}
</style>
