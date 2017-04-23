<template>
  <div class="">
    <mu-tabs :value="activeTab" @change="handleTabChange">
       <mu-tab value="private" title="个人图书"/>
       <mu-tab value="borrow" title="借阅图书"/>
       <mu-tab value="lend" title="借出图书" />
   </mu-tabs>
    <div class="main mT20">
      <div v-if="activeTab==='private'">
        <book-grid :type="activeTab" :books="books"></book-grid>
        <mu-float-button icon="add" secondary class="addBookBtn" ref="button" @click="toggle"/>
        <mu-popover :trigger="trigger" :open="open" @close="handleClose" :anchorOrigin="{vertical:'top',horizontal:'left'}">
         <mu-menu>
           <mu-menu-item title="扫码添加" @click="handleScan"/>
           <mu-menu-item title="手动添加" href="#/addBook"/>
         </mu-menu>
        </mu-popover>
      </div>
     <book-grid v-if="activeTab==='borrow'" :type="activeTab" :books="borrowBook"></book-grid>
     <book-grid v-if="activeTab==='lend'" :type="activeTab" :books="lendBook"></book-grid>
    </div>
  </div>
</template>

<script type="text/javascript">
import BookGrid from '../components/BookGrid'
import { getCookie } from '../utils'

export default {
  components: {
    BookGrid
  },
  data () {
    return {
      activeTab: 'private',
      open: false,
      trigger: null
    }
  },
  watch: {
    'activeTab' (val) {
      if (val) {
        this.$store.dispatch('getUserBook', {userId: this.userId, type: val})
      }
    }
  },
  computed: {
    userId () {
      return getCookie('userId')
    },
    books () {
      return this.$store.state.userBook && this.$store.state.userBook['private'] || []
    },
    lendBook () {
      return this.$store.state.userBook && this.$store.state.userBook['lend'] || []
    },
    borrowBook () {
      return this.$store.state.userBook && this.$store.state.userBook['borrow'] || []
    }
  },
  mounted () {
    this.$store.commit('SHOW_NAVBAR')
    this.trigger = this.$refs.button.$el
    this.$store.dispatch('getWechatConfig')
    this.$store.dispatch('getUserBook', {userId: this.userId})
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    toggle () {
      this.open = !this.open
    },
    handleClose (e) {
      this.open = false
    },
    // 微信扫码处理
    handleScan () {
      window.wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success: (res) => {
          let result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
          let isbn = result.split(',')[1]
          console.log(isbn)
          this.$store.dispatch('getBookByISBN', isbn).then(() => {
            this.$router.push({
              'path': 'addBook',
              'query': {'from': 'scan', 'isbn': isbn}
            })
          }, (err) => {
            console.log('actions error', err)
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.addBookBtn{
  position: fixed;
  bottom: 80px;
  right: 15px;
}
</style>
