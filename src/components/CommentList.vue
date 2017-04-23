<template>
  <mu-list>
    <mu-sub-header>评论</mu-sub-header>
    <mu-list-item >
      <mu-avatar :src="loginUserAvatar" slot="leftAvatar"/>
      <mu-text-field hintText="这本书好看吗" v-model="content"/>
      <mu-icon-button icon="send" slot="right" @click="handleComment" :disabled="disabled"/>
    </mu-list-item>
    <mu-list-item :title="item.userName" v-for="item in comments"
      :afterText="item.date|dateFormat">
      <router-link :to="`/user/${item.userId}`" slot="leftAvatar">
        <mu-avatar :src="item.headimgurl"/>
      </router-link>
      <span slot="describe">
        {{item.content}}
      </span>
    </mu-list-item>
    <mu-list-item v-if="comments.length === 0">暂无评论</mu-list-item>
  </mu-list>
</template>

<script>
import { dateFormat, getCookie } from '../utils'
import api from '../api'

export default {
  data () {
    return {
      disabled: false
    }
  },
  props: {
    comments: Array
  },
  computed: {
    loginUserAvatar () {
      return getCookie('headimgurl')
    }
  },
  filters: {
    dateFormat
  },
  methods: {
    handleComment () {
      if (!this.content) {
        this.$msg('info', '评论内容不能为空')
        return
      }
      this.disabled = true
      let opts = {
        bookId: this.$route.params.id,
        content: this.content
      }
      api.addComment(opts).then((res) => {
        res = res.body
        if (res.result === 'ok') {
          this.$msg('success', '评论成功！')
          this.content = ''
          this.comments.unshift(res.data)
        }
        this.disabled = false
      }, (error) => {
        error = error.body
        this.$msg('error', error.data)
        this.disabled = false
      })
    }
  }
}
</script>
<style scoped>
  .sendComment {
    display: flex;
    justify-content: space-around;
  }
  .time{
    width: 100px;
    font-size: 12px;
  }
</style>
