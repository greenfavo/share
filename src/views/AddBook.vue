<template>
  <div class="main">
    <mu-toast v-if="toast" message="添加失败，请重试" @close="hideToast"/>
    <mu-text-field label="ISBN" labelFloat fullWidth v-model="ISBN" required/>
    <mu-text-field label="书名" labelFloat fullWidth v-model="name"/>
    <mu-text-field label="作者" labelFloat fullWidth v-model="author"/>
    <mu-text-field label="译者" labelFloat fullWidth v-model="translator"/>
    <mu-text-field label="简介" labelFloat fullWidth v-model="summary"/>
    <mu-text-field label="出版社" labelFloat fullWidth v-model="publish"/>
    <mu-select-field v-model="area"  label="区域" fullWidth
    :maxHeight="200">
      <mu-menu-item
        v-for="area,index in list"
        :key="index" :value="area"
        :title="area"/>
    </mu-select-field>
    <div class="col2">
      <span class="mR20 light">封面</span>
      <Upload @uploadSuccess="handleUpload" :cover="bookInfo.image || ''"/>
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
      disabled: false,
      toast: false,
      ISBN: '',
      name: '',
      author: '',
      translator: '',
      publish: '',
      summary: '',
      cover: '' // 图书封面
    }
  },
  computed: {
    from () {
      return this.$route.query.from || ''
    },
    bookInfo () {
      return this.$store.state.book
    }
  },
  watch: {
    'bookInfo' (val) {
      if (val && this.from === 'scan') {
        console.log('图书信息', this.bookInfo)
        this.ISBN = this.$route.query.isbn
        this.name = this.bookInfo.title
        this.author = this.bookInfo.author.join(',')
        this.translator = this.bookInfo.translator.join(',')
        this.publish = this.bookInfo.publisher
        this.summary = this.bookInfo.summary
        this.cover = this.bookInfo.image
      }
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
      this.disabled = true
      let opts = {
        ISBN: this.ISBN,
        name: this.name,
        author: this.author,
        publish: this.publish,
        translator: this.translator,
        summary: this.summary,
        cover: this.cover,
        area: this.area
      }
      api.addBook(opts).then((res) => {
        this.disabled = false
        if (res.body.result === 'ok') {
          this.$router.push('shelf')
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
