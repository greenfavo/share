<template>
  <div class="">
    <mu-tabs :value="activeTab" @change="handleTabChange">
       <mu-tab value="private" title="个人图书"/>
       <mu-tab value="borrow" title="借阅图书"/>
       <mu-tab value="lend" title="借出图书" />
   </mu-tabs>
   <div class="main">
     <div v-if="activeTab==='private'">
       <book-grid ></book-grid>
       <mu-float-button icon="add" secondary class="addBookBtn" />
     </div>
     <book-grid v-if="activeTab==='borrow'"></book-grid>
     <book-grid v-if="activeTab==='lend'"></book-grid>
  </div>
</template>

<script type="text/javascript">
import BookGrid from '../components/BookGrid'

export default {
  components: {
    BookGrid
  },
  data () {
    return {
      activeTab: 'private'
    }
  },
  mounted () {
    this.$store.dispatch('showNavBar')
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
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
