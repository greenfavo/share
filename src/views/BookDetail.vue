<template>
  <div class="mT20">
    <div class="detail">
      <div class="desc">
        <img src="../assets/cover/2.jpg" />
        <ul>
          <li>书名:要塞</li>
          <li>作者:[法]圣埃克苏佩里</li>
          <li>ISBN:123454786</li>
          <li>出版社: 新华出版社</li>
          <li>出版日期: 2016-06</li>
          <li>主人: 李焕</li>
        </ul>
      </div>
      <p>简介:小王子作者圣埃克苏佩里的最后遗作</p>
    </div>
    <mu-raised-button label="借阅"  primary fullWidth/>
    <comment-list class="comment"></comment-list>
  </div>
</template>

<script type="text/javascript">
import CommentList from '../components/CommentList'
import BackNav from '../components/BackNav'
import { mapState } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('hiddenNavBar')
  },
  components: {
    CommentList,
    BackNav
  },
  computed: mapState({
    isShowTopBar: state => state.isShowTopBar
  })
}
</script>

<style scoped>
.detail {
  padding: 0 15px;
}
.desc{
  display: flex;
  justify-content:space-between;
}
img{
  width: 150px;
  height: 100%;
}
.comment {
  margin-bottom: 56px;
}
</style>
