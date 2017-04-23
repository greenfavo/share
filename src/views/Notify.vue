<template>
  <div class="">
    <mu-list>
      <!-- <mu-list-item title="有人评论了你的书" class="list" describeText="2017-04-12">
        <mu-badge content="评论" primary slot="after"/>
      </mu-list-item>
      <mu-divider /> -->
      <mu-list-item title="有人想借你的书" class="list"
        v-for="item in messages"
        @click="dialog=true;curMesssage=item" :describeText="item.date|dateFormat">
        <mu-badge content="item.type" primary slot="after"/>
      </mu-list-item>
      <mu-divider v-for="(item, index) in messages" v-if="index!==(messages.length-1)"/>
      <!-- <mu-list-item title="图书借阅申请中" class="list" describeText="2017-04-12">
        <mu-badge content="申请" primary slot="after"/>
      </mu-list-item>
      <mu-divider />
      <mu-list-item title="有人还了你的书" class="list" describeText="2017-04-12">
        <mu-badge content="还书" primary slot="after"/>
      </mu-list-item> -->
      <mu-list-item  v-if="messages.length===0">暂无消息</mu-list-item>
    </mu-list>
    <notify-card :dialog="dialog" @close="dialog=false" :info="curMesssage"/>
  </div>
</template>

<script type="text/javascript">
import NotifyCard from '../components/NotifyCard'
import { dateFormat } from '../utils'

export default {
  data () {
    return {
      dialog: false,
      curMesssage: {}
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages || []
    }
  },
  filters: {
    dateFormat
  },
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.commit('SET_BACK_TITLE', '新消息')
    this.$store.dispatch('getMessage')
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
