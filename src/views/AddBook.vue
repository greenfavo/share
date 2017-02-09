<template>
  <div class="main">
    <mu-text-field label="ISBN"  errorText="你已经添加过这本书!" labelFloat fullWidth/>
    <mu-text-field label="书名" labelFloat fullWidth/>
    <mu-text-field label="作者" labelFloat fullWidth/>
    <mu-text-field label="简介" labelFloat fullWidth/>
    <mu-text-field label="出版社" labelFloat fullWidth/>
    <mu-date-picker hintText="出版日期" maxDate="2017-02-08" fullWidth style="lineHeight:72px"/>
    <div class="col2">
      <span class="mR20 light">封面</span>
      <Upload/>
    </div>
    <mu-raised-button label="确定" primary fullWidth/>
  </div>
</template>

<script type="text/javascript">
import Upload from '../components/Upload'

export default {
  mounted () {
    this.$store.dispatch('hiddenNavBar')
    this.$store.dispatch('set_back_title', '添加图书')
  },
  components: {
    Upload
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
