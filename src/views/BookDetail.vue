<template>
  <div class="mT20">
    <!-- <div class="detail">
      <div class="desc">
        <img src="../assets/cover/2.jpg" class="cover"/>
        <ul class="mL20">
          <li>书名:要塞</li>
          <li>作者:[法]圣埃克苏佩里</li>
          <li>译者: 张扬</li>
          <li>ISBN:123454786</li>
          <li>出版社: 新华出版社</li>
          <li >
            <span class="userName">
              主人:
            </span>
            <router-link to="/user/2131">
              <mu-avatar :src="avatar" :size="30"/>
            </router-link>
          </li>
        </ul>
      </div>
      <p class="location">
        <mu-icon value="location_on" />南书院
      </p>
      <div>
        简介:小王子作者圣埃克苏佩里的最后遗作啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦零零落落啦啦啦啦啦啦啦啦
        <mu-flat-button label="收起" primary @click="showAll=!showAll" mini/>
      </div><br/>
      <mu-raised-button label="借阅"  primary fullWidth />
    </div> -->
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
      <div class="flex">
        <p v-show="showAll">{{bookInfo.summary}}</p>
        <p v-show="!showAll">{{bookInfo.summary|sliceWord(70)}}</p>
        <mu-flat-button :label="showAll? '收起' : '展开'" primary
          v-if="bookInfo.summary.length>70"
          @click="showAll=!showAll" />
      </div><br/>
      <mu-raised-button label="借阅"  primary fullWidth />
    </div>
    <comment-list class="comment" :comments="bookInfo.comments" ></comment-list>
  </div>
</template>

<script type="text/javascript">
import CommentList from '../components/CommentList'
import BackNav from '../components/BackNav'
// import Avatar from '../assets/cover/3.jpg'
import { sliceWord } from '../utils'

export default {
  data () {
    return {
      // avatar: Avatar,
      id: this.$route.params.id,
      showAll: false
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
      let book = this.$store.state.bookInfos && this.$store.state.bookInfos[this.id]
      console.log('bookinfo ', book)
      if (book) {
        this.$store.commit('SET_BACK_TITLE', book.name)
        return book
      }
    }
  },
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.dispatch('getBookInfo', this.id)
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
