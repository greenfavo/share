<template>
  <div class="">
    <mu-text-field type="search" fullWidth  hintText="搜索图书或作者" icon="search"
      v-model="searchTxt" @change="handleSearch" @blur="searchTxt=''"/>
    <div class="main">
      <book-list></book-list>
    </div>
  </div>
</template>

<script type="text/javascript">
import BookList from '../components/BookList'
export default {
  data () {
    return {
      searchTxt: ''
    }
  },
  components: {
    BookList
  },
  mounted () {
    this.$store.commit('SHOW_NAVBAR')
  },
  methods: {
    handleSearch () {
      if (!this.searchTxt) {
        return
      }
      this.$router.push({path: 'search', query: {searchTxt: this.searchTxt}})
    }
  }
}
</script>
