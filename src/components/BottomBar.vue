<template>
<mu-paper class="bottom">
  <mu-bottom-nav :value="bottomNav" >
    <mu-bottom-nav-item value="explore" title="发现" icon="explore" to="explore" />
    <mu-bottom-nav-item value="shelf" title="书架" icon="library_books" to="shelf" />
    <mu-bottom-nav-item value="mine" title="我的" icon="person" to="mine" />
  </mu-bottom-nav>
</mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'explore'
    }
  },
  watch: {
    '$route' (val) {
      if (val.name) {
        this.bottomNav = val.name
      }
    }
  }
}
</script>

<style scoped>
  .bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
</style>
