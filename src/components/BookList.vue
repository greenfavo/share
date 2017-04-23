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
          <li class="light">{{item.summary|sliceWord(50)}}</li>
          <p class="location">
            <mu-icon value="location_on" />{{item.area}}
          </p>
        </ul>
      </router-link>
    </section>
     <!-- <section  v-for="n in 16">
      <router-link :to="`/book/3123`" class="bookSec" tag="div">
        <img src="../assets/cover/1.jpg" class="cover" />
        <ul class="mL20">
          <li><b>小王子</b></li>
          <li class="light">维多利亚</li>
          <li class="light">{{'给成年人才看得懂的童话故事了了了了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了了啦啦啦啦啊啊啊啊啊啊啊啊啊啊啊啊' |sliceWord(44)}}</li>
          <p class="location">
            <mu-icon value="location_on" />南书院
          </p>
        </ul>
      </router-link>
    </section> -->
    <p class="txtCenter pB20" @click="loadMore" v-show="books.length>10">加载更多</p>
  </div>
</template>

<script type="text/javascript">
import { sliceWord } from '../utils'

export default {
  data () {
    return {
      loading: false
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
      })
    },
    loadMore () {
      let timestamp = this.books.slice(-1).timestamp
      this.loadData(timestamp)
    }
  }
}
</script>
