<template>
  <div class="">
   <!--  <mu-list>
      <mu-sub-header>私信列表</mu-sub-header>
      <mu-list-item title="Mike Li" class="list" afterText="2016-01-22">
        <mu-avatar :src="avatar" slot="leftAvatar"/>
        <div slot="describe">
          还有3天就要还书了,你看完了吗?
        </div>
      </mu-list-item>
      <mu-divider />
    </mu-list> -->
    <mu-list>
      <mu-sub-header>系统通知</mu-sub-header>
      <mu-list-item title="有人评论了你的书" class="list" describeText="2017-04-12">
        <mu-badge content="评论" primary slot="after"/>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="有人想借你的书" class="list" @click="dialog=true" describeText="2017-04-12">
        <mu-badge content="借阅" primary slot="after"/>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="图书借阅申请中" class="list" describeText="2017-04-12">
        <mu-badge content="申请" primary slot="after"/>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="有人还了你的书" class="list" describeText="2017-04-12">
        <mu-badge content="还书" primary slot="after"/>
      </mu-list-item>
    </mu-list>
    <notify-card :dialog="dialog" @close="dialog=false"/>
  </div>
</template>

<script type="text/javascript">
import NotifyCard from '../components/NotifyCard'

export default {
  data () {
    return {
      dialog: false
    }
  },
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.commit('SET_BACK_TITLE', '新消息')
  },
  components: {
    NotifyCard
  }
}
</script>

<style scoped>
.wrap {
  background-color: white;
  padding: 0 15px;
}
</style>
