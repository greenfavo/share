<template>
  <div class="main">
     <mu-toast v-if="toast" message="添加失败，请重试" @close="hideToast"/>
     <!-- <mu-circular-progress :size="60" :strokeWidth="3" /> -->
    <mu-text-field label="ISBN" labelFloat fullWidth v-model="ISBN"/>
    <mu-text-field label="书名" labelFloat fullWidth v-model="name"/>
    <mu-text-field label="作者" labelFloat fullWidth v-model="author"/>
    <mu-text-field label="简介" labelFloat fullWidth v-model="summary"/>
    <mu-text-field label="出版社" labelFloat fullWidth v-model="publish"/>
    <mu-date-picker hintText="出版日期" :maxDate="new Date()" fullWidth style="lineHeight:72px" v-model="publish_date"/>
    <mu-select-field v-model="area"  label="区域" fullWidth
    :maxHeight="200">
      <mu-menu-item
        v-for="area,index in list"
        :key="index" :value="area"
        :title="area"/>
    </mu-select-field>
    <div class="col2">
      <span class="mR20 light">*封面</span>
      <Upload @uploadSuccess="handleUpload"/>
    </div>
    <mu-raised-button label="确定" primary fullWidth @click="handleAdd()" :disabled="disabled"/>

  </div>
</template>

<script type="text/javascript">
import Upload from '../components/Upload'
import api from '../api/index'

export default {
  data () {
    return {
      area: '火之舞',
      list: [
        '火之舞', '南一门', '南二门', '南三门', '一二食堂之间',
        '体育馆前', '西篮球场', '南区操场', '南湖操场',
        '南湖园', '南书院', '美院圆楼', '北区公寓篮球场', '教工食堂'
      ],
      disabled: true,
      toast: false,
      ISBN: '',
      name: '',
      author: '',
      publish: '',
      publish_date: '',
      summary: '',
      cover: '' // 图书封面
    }
  },
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
        ISBN: this.ISBN,
        name: this.name,
        author: this.author,
        publish: this.publish,
        publish_date: this.publish_date,
        summary: this.summary,
        cover: this.cover,
        area: this.area
      }
      for (let item in opts) {
        if (item) {
          this.disabled = false
        } else {
          this.disabled = true
        }
      }
      api.addBook(opts).then((res) => {
        if (res.body.result === 'ok') {
          this.$route.push('/shelf')
        } else {
          this.showToast()
          console.log(res.body.data)
        }
      })
    },
    handleUpload (url) {
      this.cover = url
    },
    showToast () {
      this.toast = true
      if (this.toastTimer) clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
    },
    hideToast () {
      this.toast = false
      if (this.toastTimer) clearTimeout(this.toastTimer)
    }
  }
}
</script>

<style scoped>
.col2 {
  display: flex;
  margin-bottom: 20px;
}
</style>
