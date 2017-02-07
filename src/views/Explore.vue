<template>
  <div class="">
    <mu-text-field type="search" fullWidth  hintText="搜索图书或作者" icon="search"/>
    <div class="main">
      <book-list></book-list>
      <book-list></book-list>
      <book-list></book-list>
    </div>
  </div>
</template>

<script type="text/javascript">
import BookList from '../components/BookList'
export default {
  components: {
    BookList
  },
  mounted () {
    this.$store.dispatch('showNavBar')
  }
}
</script>
