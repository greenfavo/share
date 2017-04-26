<template>
  <div class="">
    <mu-list>
      <mu-list-item :title="item.title ||'有人想借你的书'" class="list"
        v-for="(item, index) in messages"
        @click="dialog=true;curIndex=index"
        :describeText="item.date|dateFormat">
        <mu-badge :content="item.type" primary slot="after"/>
      </mu-list-item>
      <mu-divider v-for="(item, index) in messages" v-if="index!==(messages.length-1)"/>
      <mu-list-item  v-if="messages.length===0">暂无消息</mu-list-item>
    </mu-list>
    <notify-card :dialog="dialog" @close="handleClose" :info="curMesssage"/>
  </div>
</template>

<script type="text/javascript">
import NotifyCard from '../components/NotifyCard'
import { dateFormat } from '../utils'

export default {
  data () {
    return {
      dialog: false,
      curIndex: 0
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages || []
    },
    curMesssage () {
      return this.messages[this.curIndex] || {}
    }
  },
  filters: {
    dateFormat
  },
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.commit('SET_BACK_TITLE', '消息')
    this.$store.dispatch('getMessages')
  },
  components: {
    NotifyCard
  },
  methods: {
    handleClose ({ reply }) {
      this.dialog = false
      if (reply) {
        this.$store.dispatch('getMessages')
      }
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
