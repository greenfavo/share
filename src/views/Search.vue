<template>
  <div class="main">
    <p>共找到4条和<strong>{{this.searchTxt}}</strong>相关的图书</p>
    <section  v-for="n in 4">
      <router-link to="/book?id=1" class="bookSec" tag="div">
        <img src="../assets/cover/2.jpg" class="cover" />
        <ul>
          <li><b>要塞</b></li>
          <li class="light">[法]圣埃克苏佩里</li>
          <li class="light">小王子作者圣埃克苏佩里的最后遗作</li>
        </ul>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchTxt: this.$route.query.searchTxt || ''
    }
  },
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.commit('SET_BACK_TITLE', '搜索')
  }
}
</script>
