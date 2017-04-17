<template>
  <div class="main">
    <mu-text-field label="ISBN"  errorText="你已经添加过这本书!" labelFloat fullWidth/>
    <mu-text-field label="书名" labelFloat fullWidth/>
    <mu-text-field label="作者" labelFloat fullWidth/>
    <mu-text-field label="简介" labelFloat fullWidth/>
    <mu-text-field label="出版社" labelFloat fullWidth/>
    <mu-date-picker hintText="出版日期" maxDate="2017-02-08" fullWidth style="lineHeight:72px"/>
    <mu-text-field label="手机号" labelFloat fullWidth/>
    <mu-text-field label="微信号" labelFloat fullWidth/>
    <mu-text-field label="微信号" labelFloat fullWidth/>
    <div class="col2">
      <span class="mR20 light">封面</span>
      <Upload/>
    </div>
    <mu-raised-button label="确定" primary fullWidth @click="handleAdd()"/>
  </div>
</template>

<script type="text/javascript">
import Upload from '../components/Upload'
import api from '../api/index'

export default {
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.commit('SET_BACK_TITLE', '添加图书')
  },
  components: {
    Upload
  },
  methods: {
    handleAdd () {
      let opts = {
        ISBN: '123456',
        name: '呐喊',
        author: '鲁迅',
        publish: '春风文艺出版社',
        publish_date: '2010-11-30',
        summary: '鲁迅经典之作'
      }
      api.addBook(opts).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.col2 {
  display: flex;
  /*justify-content: space-between;*/
  margin-bottom: 20px;
}
</style>
