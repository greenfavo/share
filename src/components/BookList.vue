<template>
  <div>
    <!-- <p class="subHeader">
      <span>推荐</span>
      <span>更多></span>
    </p> -->
    <mu-circular-progress :size="40"  v-if="books.length === 0" />
    <section  v-for="item in books">
      <router-link :to="`/book/${item._id}`" class="bookSec" tag="div">
        <img :src="item.cover" class="cover" />
        <ul class="mL20">
          <li><b>{{item.name}}</b></li>
          <li class="light">{{item.author}}</li>
          <li class="light ellipsis">{{item.summary}}</li>
        </ul>
      </router-link>
    </section>
    <p class="txtCenter pB20" @click="loadMore" v-show="books.length>10">加载更多</p>
  </div>
</template>

<script type="text/javascript">
export default {
  computed: {
    books () {
      console.log('books: ', this.$store.state.books)
      return this.$store.state.books || []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      this.$store.dispatch('getBooks')
    },
    loadMore () {
    }
  }
}
</script>
