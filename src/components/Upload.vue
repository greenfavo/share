<template>
<mu-circular-progress :size="40"  v-if="loading"/>
<div v-else>
  <input type="file" accept="image/*" style="display:none;"  id="file" @change="handleChange">
  <label for="file" class="imgContainer">
    <img :src="url" alt="封面图" v-if="url"/>
    <mu-icon value="add" :size="100" color="#ccc" v-else/>
  </label>
</div>
</template>

<script>
import api from '../api'

export default {
  data () {
    return {
      url: '',
      loading: false
    }
  },
  props: {
    cover: String
  },
  mounted () {
    if (this.cover) {
      this.url = this.cover
    }
  },
  methods: {
    handleChange (e) {
      let file = e.target.files[0]
      let fd = new window.FormData()
      fd.append('file', file)
      this.loading = true
      api.upload(fd).then((res) => {
        this.loading = false
        res = res.body
        if (res.result === 'ok') {
          this.url = res.data.webpUrl
          this.$emit('uploadSuccess', res.data.webpUrl)
        } else {
          this.$emit('uploadError', res.data)
        }
      })
    }
  }
}
</script>

<style>
.imgContainer {
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
img{
  width: 100px;
  height: 100px;
}
</style>
