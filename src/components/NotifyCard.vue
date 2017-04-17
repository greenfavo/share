<template>
  <mu-dialog :open="dialog" title="有人想借你的书" @close="close" slot="title">
    <!-- 借阅卡片 -->
    <mu-card slot="default">
      <mu-card-header title="小明" subTitle="申请人">
        <mu-avatar :src="avatar" slot="avatar"/>
      </mu-card-header>
      <mu-card-media title="白夜行" subTitle="东野圭吾">
        <img src="../assets/cover/3.jpg" />
      </mu-card-media>
    </mu-card>

    <mu-raised-button slot="actions" @click="close"  label="拒绝"/>
    <mu-raised-button slot="actions" primary @click="close" label="同意"/>
  </mu-dialog>
</template>
<script type="text/javascript">
import Avatar from '../assets/cover/1.jpg'

export default {
  data () {
    return {
      avatar: Avatar
    }
  },
  props: {
    dialog: {
      type: Boolean,
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
