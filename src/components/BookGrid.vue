<template>
  <div class="gridlist-demo-container">
    <mu-grid-list class="gridlist-demo" v-if="books.length>0">
      <mu-grid-tile v-for="(item, index) in books" cols="1" rows="1.5">
        <img :src="item.cover"  class="cover"
          @click="openBottomSheet(item);curIndex=index"/>
        <span slot="title">{{item.name}}</span>
        <span slot="subTitle" v-if="type==='private'">{{item.author}}</span>
        <span slot="subTitle" v-else>应还日期:{{item.date|dateFormat}}</span>
      </mu-grid-tile>
    </mu-grid-list>
    <p v-else>暂无图书</p>
    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
      <mu-list @itemClick="closeBottomSheet">
        <mu-sub-header>
          操作
        </mu-sub-header>
        <mu-list-item title="查看详情" :to="`/book/${curId}`" />
        <mu-list-item title="删除"
          @click="handleDelete"
          v-if="type==='private' && isLoginUer"/>
        <mu-list-item title="还书" v-if="type==='borrow'" @click="returnBook"/>
      </mu-list>
    </mu-bottom-sheet>
  </div>
</template>

<script>
import { dateFormat } from '../utils'
import api from '../api'

export default {
  data () {
    return {
      bottomSheet: false,
      curId: '',
      curIndex: 0
    }
  },
  props: {
    type: String,
    books: Array
  },
  computed: {
    isLoginUer () {
      if (this.$route.params.id) {
        return false
      }
      return true
    }
  },
  methods: {
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet (item) {
      this.bottomSheet = true
      this.curId = item['_id']
    },
    handleDelete () {
      api.deleteBook(this.curId).then(res => {
        res = res.body
        if (res.result === 'ok') {
          this.$msg('success', '删除成功')
          this.books.splice(this.curIndex, 1)
        } else {
          this.$msg('error', res.data)
        }
      }, (error) => {
        this.$msg('error', error.body.data)
      })
    },
    // 还书处理
    returnBook () {
      let bookInfo = this.books[this.curIndex]
      let opts = {
        receiverId: bookInfo.owerId,
        type: '还书',
        bookId: bookInfo['_id']
      }
      api.sendMessage(opts).then(res => {
        res = res.body
        if (res.result === 'ok') {
          this.$msg('success', '你的还书申请已发送给图书主人')
        } else {
          this.$msg('error', res.data)
        }
      }, (error) => {
        this.$msg('error', error.body.data)
      })
    }
  },
  filters: {
    dateFormat
  }
}
</script>

<style scoped>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
img {
  width: 200px;
  height: 400px;
}
</style>
