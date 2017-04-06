<template>
  <div class="">
    <mu-tabs :value="activeTab" @change="handleTabChange">
       <mu-tab value="private" title="个人图书"/>
       <mu-tab value="borrow" title="借阅图书"/>
       <mu-tab value="lend" title="借出图书" />
   </mu-tabs>
    <div class="main mT20">
      <div v-if="activeTab==='private'">
        <book-grid ></book-grid>
        <mu-float-button icon="add" secondary class="addBookBtn" ref="button" @click="toggle"/>
        <mu-popover :trigger="trigger" :open="open" @close="handleClose" :anchorOrigin="{vertical:'top',horizontal:'left'}">
         <mu-menu>
           <mu-menu-item title="手动添加" href="#/addBook"/>
           <mu-menu-item title="扫码添加" />
         </mu-menu>
        </mu-popover>
      </div>
     <book-grid v-if="activeTab==='borrow'"></book-grid>
     <book-grid v-if="activeTab==='lend'"></book-grid>
    </div>
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
      activeTab: 'private',
      open: false,
      trigger: null
    }
  },
  mounted () {
    this.$store.dispatch('showNavBar')
    this.trigger = this.$refs.button.$el
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
