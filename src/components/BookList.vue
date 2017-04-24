<template>
  <div>
    <!-- <p class="subHeader">
      <span>推荐</span>
      <span>更多></span>
    </p> -->
    <mu-circular-progress :size="40"  v-if="loading" />
    <section  v-for="item in books">
      <router-link :to="`/book/${item['_id']}`" class="bookSec" tag="div">
        <img :src="item.cover" class="cover" />
        <ul class="mL20">
          <li><b>{{item.name}}</b></li>
          <li class="light">{{item.author}}</li>
          <li class="light">{{item.summary|sliceWord(55)}}</li>
          <p class="location">
            <mu-icon value="location_on" />{{item.area}}
          </p>
        </ul>
      </router-link>
    </section>
    <p class="txtCenter pB20" @click="loadMore" v-show="showMore">加载更多</p>
    <p class="txtCenter pB20" v-show="!showMore">没有更多图书了</p>
  </div>
</template>

<script type="text/javascript">
import { sliceWord } from '../utils'

export default {
  data () {
    return {
      loading: false,
      showMore: true
    }
  },
  computed: {
    books () {
      console.log('books: ', this.$store.state.books)
      return this.$store.state.books || []
    }
  },
  mounted () {
    this.loadData()
  },
  filters: {
    sliceWord
  },
  methods: {
    loadData (timestamp = '') {
      this.loading = true
      this.$store.dispatch('getBooks', timestamp).then(() => {
        this.loading = false
      }, (error) => {
        if (error.body.data === '没有更多图书了') {
          this.showMore = false
        }
      })
    },
    loadMore () {
      let timestamp = this.books.slice(-1)[0].date
      console.log(timestamp)
      this.loadData(timestamp)
    }
  }
}
</script>
