<template>
  <mu-dialog :open="dialog" :title="info.title" @close="close" slot="title">
    <!-- 消息详情卡片 -->
    <mu-card slot="default">
      <mu-card-header title="书友" :subTitle="info.organizer.nickname">
        <mu-avatar :src="info.organizer.headimgurl" slot="avatar"/>
      </mu-card-header>
      <mu-card-media :title="info.book.name" :subTitle="info.book.author">
        <img :src="info.book.cover" class="cover" />
      </mu-card-media>
    </mu-card>
    <mu-raised-button v-if="showBtns" slot="actions" @click="close('false')"  label="拒绝"/>
    <mu-raised-button v-if="showBtns" slot="actions" primary @click="close('true')" label="同意"/>
    <mu-raised-button v-if="!showBtns" slot="actions" primary @click="close('false')" label="确定"/>
  </mu-dialog>
</template>
<script type="text/javascript">
import api from '../api'

export default {
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    info: {
      type: Object,
      required: true
    }
  },
  computed: {
    showBtns () { // 显示两个按钮
      if (this.info.type !== '借阅申请' || this.info.type !== '还书申请') {
        return true
      }
      return false
    }
  },
  methods: {
    close (reply) {
      let opts = {
        bookId: this.info.bookId,
        organizerId: this.info.organizerId,
        receiverId: this.info.receiverId,
        type: this.info.type,
        date: this.info.date,
        reply
      }
      console.log('reply= ', reply)
      if (reply !== 'true' || reply !== 'false') {
        this.$emit('close', {reply: ''})
        return
      }
      api.handleMessage(opts).then(res => {
        res = res.body
        if (res.result === 'ok') {
          this.$msg('success', res.data)
        } else {
          this.$msg('error', res.data)
        }
        this.$emit('close', {reply})
      }, (error) => {
        this.$msg('error', error.body.data)
      })
    }
  }
}
</script>
