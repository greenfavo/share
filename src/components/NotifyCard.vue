<template>
  <mu-dialog :open="dialog" title="有人想借你的书" @close="close" slot="title">
    <!-- 借阅卡片 -->
    <mu-card slot="default">
      <mu-card-header :title="info.borrowUserName" subTitle="申请人">
        <mu-avatar :src="info.borrowUserHead" slot="avatar"/>
      </mu-card-header>
      <mu-card-media :title="info.borrowBookName" :subTitle="info.borrowBookAuthor">
        <img :src="info.borrowBookCover" />
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
