<template>
  <div class="books-wrap">
    <div class="book"
      v-for="(item, index) in books"
      :style="`backgroundImage:url(${item.cover})`"
      v-if="books.length>0"
      @click="openBottomSheet(item)">
      <footer class="book-foot">
        <h1 class="book-name">{{item.name}}</h1>
        <p class="book-author">{{item.author}}</p>
        <p class="book-date" v-if="type!=='private'">
          应还日期:{{item.date|dateFormat}}
        </p>
      </footer>
    </div>
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
        receiverId: bookInfo.ownerId,
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

<style>
/*.cardList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  position: relative;
  margin-bottom: 5px;
  margin-right: 5px;
}
.desc {
  position: relative;
  background-color: rgba(0,0,0,.4);
  height: 60px;
  padding: 0 4px;
  margin-top: -80px;
}
.title {
  color: white;
}
.subTitle {
  font-size: 1pt;
  margin-top: -11px;
  color: #b6a9a9;
}*/
</style>
