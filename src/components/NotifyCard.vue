<template>
  <mu-dialog :open="dialog" :title="info.title" @close="close" slot="title">
    <!-- 借阅卡片 -->
    <mu-card slot="default">
      <mu-card-header title="书友" :subTitle="info.organizer.nickname">
        <mu-avatar :src="info.organizer.headimgurl" slot="avatar"/>
      </mu-card-header>
      <mu-card-media :title="info.book.name" :subTitle="info.book.author">
        <img :src="info.book.cover" class="cover" />
      </mu-card-media>
    </mu-card>
    <template v-if="info.type!='借阅申请' || info.type!='还书申请'">
      <mu-raised-button slot="actions" @click="close(false)"  label="拒绝"/>
      <mu-raised-button slot="actions" primary @click="close(true)" label="同意"/>
    </template>
    <mu-raised-button v-else slot="actions" primary @click="close(false)" label="确定"/>
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
      api.handleMessage(opts).then(res => {
        res = res.body
        if (res.result === 'ok') {
          this.$msg('success', res.data)
        } else {
          this.$msg('error', res.data)
        }
      }, (error) => {
        this.$msg('error', error.body.data)
      })
      this.$emit('close')
    }
  }
}
</script>
