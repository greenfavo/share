<template>
  <div >
    <!-- <p class="subHeader">
      <span>推荐</span>
      <span>更多></span>
    </p> -->
    <section  v-for="n in list">
      <router-link to="/book?id=1" class="bookSec" tag="div">
        <img src="../assets/cover/2.jpg" class="cover" />
        <ul>
          <li><b>要塞</b></li>
          <li class="light">[法]圣埃克苏佩里</li>
          <li class="light">小王子作者圣埃克苏佩里的最后遗作</li>
        </ul>
      </router-link>
    </section>
    <mu-infinite-scroll
      :scroller="scroller" loadingText="加载中..."
      :loading="loading" @load="loadMore"/>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push('item' + (i + 1))
    }
    return {
      list,
      num: 2,
      loading: false,
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 6; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 6
        this.loading = false
      }, 2000)
    }
  }
}
</script>
