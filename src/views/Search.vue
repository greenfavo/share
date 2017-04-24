<template>
  <div class="main">
    <p>共找到4条和<strong>{{this.searchTxt}}</strong>相关的图书</p>
    <section  v-for="item in books">
      <router-link :to="`/book/${item['_id']}`" class="bookSec" tag="div">
        <img :src="item.cover" class="cover" />
        <ul>
          <li><b>{{item.name}}</b></li>
          <li class="light">{{item.author}}</li>
          <li class="light">{{item.summary | sliceWord(55)}}</li>
        </ul>
      </router-link>
    </section>
  </div>
</template>

<script>
import { sliceWord } from '../utils'

export default {
  data () {
    return {
      searchTxt: this.$route.query.searchTxt || ''
    }
  },
  computed: {
    books () {
      return this.$store.state.searchBooks || []
    }
  },
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.commit('SET_BACK_TITLE', '搜索')
    this.$store.dispatch('getSearchBooks', this.searchTxt)
  },
  filters: {
    sliceWord
  }
}
</script>
