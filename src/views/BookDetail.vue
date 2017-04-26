<template>
  <div class="mT20">
    <div class="detail">
      <div class="desc">
        <img :src="bookInfo.cover" class="cover"/>
        <ul class="mL20">
          <li>书名:{{bookInfo.name}}</li>
          <li>作者:{{bookInfo.author}}</li>
          <li v-if="bookInfo.translator">译者: {{bookInfo.translator}}</li>
          <li>ISBN:{{bookInfo.ISBN}}</li>
          <li>出版社: {{bookInfo.publish}}</li>
          <li >
            <span class="userName">
              主人:
            </span>
            <router-link :to="`/user/${bookInfo.ownerId}`">
              <mu-avatar :src="bookInfo.headimgurl" :size="30"/>
            </router-link>
          </li>
        </ul>
      </div>
      <p class="location">
        <mu-icon value="location_on" />{{bookInfo.area}}
      </p>
      简介:
      <div v-show="showAll">
        {{bookInfo.summary}}
        <mu-flat-button :label="showAll? '收起' : '展开'" primary
          v-if="bookInfo.summary.length>65"
          @click="showAll=!showAll" />
      </div>
      <div v-show="!showAll">
        {{bookInfo.summary|sliceWord(65)}}
        <mu-flat-button :label="showAll? '收起' : '展开'" primary
          v-if="bookInfo.summary.length>65"
          @click="showAll=!showAll" />
      </div>
      <br/>
      <mu-raised-button :label="btnTxt"  primary fullWidth
        v-show="!isOwner"
        @click="handleBorrow"
        :disabled="disabled"/>
    </div>
    <comment-list class="comment" :comments="bookInfo.comments.reverse()" ></comment-list>
  </div>
</template>

<script type="text/javascript">
import CommentList from '../components/CommentList'
import BackNav from '../components/BackNav'
import { sliceWord, getCookie } from '../utils'
import api from '../api'

export default {
  data () {
    return {
      id: this.$route.params.id,
      showAll: false,
      btnTxt: '借阅',
      disabled: false
    }
  },
  components: {
    CommentList,
    BackNav
  },
  filters: {
    sliceWord
  },
  computed: {
    bookInfo () {
      let book = this.$store.state.bookInfos && this.$store.state.bookInfos[this.id] || {}
      if (book) {
        this.$store.commit('SET_BACK_TITLE', book.name)
        return book
      }
    },
    isOwner () {
      return this.bookInfo.ownerId === getCookie('userId')
    }
  },
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.dispatch('getBookInfo', this.id)
  },
  methods: {
    handleBorrow () {
      this.disabled = true
      let opts = {
        receiverId: this.bookInfo.ownerId,
        type: '借阅',
        bookId: this.id
      }
      api.sendMessage(opts).then(res => {
        res = res.body
        if (res.result === 'ok') {
          this.$msg('success', '你的借阅申请已发送给图书主人')
          this.btnTxt = '借阅申请中...'
        } else {
          this.$msg('error', '请求出错，请重试')
          this.disabled = false
        }
      }, (error) => {
        this.$msg('error', error.body.data)
        this.disabled = false
      })
    }
  }
}
</script>

<style scoped>
.detail {
  padding: 0 15px;
}
.desc{
  display: flex;
  justify-content:space-around;
}
.comment {
  margin-bottom: 56px;
}
.userName {
  position: relative;
  bottom: 10px;
  padding-right: 5px;
}
</style>
