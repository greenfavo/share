<template>
  <div>
    <mu-circular-progress :size="40"  v-if="loading" />
    <router-link class="bookSec" tag="section"
      v-for="item in books"
      :to="`/book/${item['_id']}`" >
      <img :src="item.cover" class="cover" />
      <ul class="mL20 desc">
        <li><b>{{item.name}}</b></li>
        <li class="light">{{item.author}}</li>
        <li class="light">{{item.summary|sliceWord(55)}}</li>
        <li class="location">
          <mu-icon value="location_on" />{{item.area}}
        </li>
      </ul>
    </router-link>
    <p class="txtCenter pB20" @click="loadMore" v-show="showMore">加载更多</p>
    <p class="txtCenter pB20" v-show="!showMore">到底了</p>
  </div>
</template>

<script type="text/javascript">
import { sliceWord } from '../utils'

export default {
  data () {
    return {
      loading: true,
      showMore: true
    }
  },
  computed: {
    books () {
      let res = this.$store.state.books || {}
      let books = this.$store.state.books && this.$store.state.books.data || []
      if (res.result === '没有更多图书了' || books.length < 10) {
        this.showMore = false
      }
      return books
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
      this.$store.dispatch('getBooks', timestamp).then((res) => {
        this.loading = false
      })
    },
    loadMore () {
      let timestamp = this.books.slice(-1)[0].date
      this.loadData(timestamp)
    }
  }
}
</script>
