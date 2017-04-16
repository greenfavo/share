<template>
  <div class="">
    <mu-list>
      <mu-sub-header>私信列表</mu-sub-header>
      <mu-list-item title="Mike Li" class="list" afterText="2016-01-22">
        <mu-avatar :src="avatar" slot="leftAvatar"/>
        <div slot="describe">
          还有3天就要还书了,你看完了吗?
        </div>
      </mu-list-item>
      <mu-divider />

    </mu-list>
    <mu-list>
      <mu-sub-header>系统通知</mu-sub-header>
      <mu-list-item title="有人评论了你的图书" class="list">
        <mu-badge content="评论" primary slot="after"/>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="有人想借你的图书" class="list">
        <mu-badge content="借阅" primary slot="after"/>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="你的举报已处理" class="list">
        <mu-badge content="举报" primary slot="after"/>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script type="text/javascript">
import Avatar from '../assets/cover/3.jpg'

export default {
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.commit('SET_BACK_TITLE', '新消息')
  },
  data () {
    return {
      avatar: Avatar
    }
  }
}
</script>

<style scoped>
.wrap {
  background-color: white;
  padding: 0 15px;
}
</style>
