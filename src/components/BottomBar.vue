<template>
<mu-paper class="bottom">
  <mu-bottom-nav :value="bottomNav"  @change="handleChange">
    <mu-bottom-nav-item value="explore" title="发现" icon="explore" href="#/explore" />
    <mu-bottom-nav-item value="shelf" title="书架" icon="library_books"  href="#/shelf"/>
    <mu-bottom-nav-item value="mine" title="我的" icon="person" href="#/mine" />
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
  methods: {
    handleChange (val) {
      this.bottomNav = val
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
