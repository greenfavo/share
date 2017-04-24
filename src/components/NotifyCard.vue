<template>
  <mu-dialog :open="dialog" :title="info.title" @close="close" slot="title">
    <!-- 借阅卡片 -->
    <mu-card slot="default">
      <mu-card-header title="书友" :subTitle="info.organizer.nickname">
        <mu-avatar :src="info.organizer.headimgurl" slot="avatar"/>
      </mu-card-header>
      <mu-card-media :title="info.book.name" :subTitle="info.book.author">
        <img :src="info.book.cover" />
      </mu-card-media>
    </mu-card>

    <mu-raised-button slot="actions" @click="close"  label="拒绝"/>
    <mu-raised-button slot="actions" primary @click="close" label="同意"/>
  </mu-dialog>
</template>
<script type="text/javascript">
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
    close () {
      this.$emit('close')
    }
  }
}
</script>
