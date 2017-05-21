<template>
  <!-- 校园认证 -->
  <div class="main txtCenter" v-if="isVertify">
    <p>已认证</p>
    <mu-raised-button label="取消认证" primary fullWidth @click="cancelVertify"/>
  </div>
  <div class="main" v-else>
    <mu-text-field label="学号" labelFloat fullWidth v-model="username"/>
    <mu-text-field label="密码" type="password" labelFloat fullWidth v-model="password"/>
    <mu-raised-button label="确定" primary fullWidth @click="handleVertify"
      :disabled="disabled"/>
  </div>
</template>
<script>
import api from '../api'

export default {
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.commit('SET_BACK_TITLE', '校园认证')
  },
  data () {
    return {
      username: '',
      password: '',
      disabled: false,
      isVertify: this.$store.state.vertify
    }
  },
  methods: {
    handleVertify () {
      if (!this.username || !this.password) {
        return
      }
      this.disabled = true
      let opts = {
        username: this.username,
        password: this.password
      }
      api.vertify(opts).then((res) => {
        this.disabled = false
        res = res.body
        if (res.result === 'ok') {
          this.isVertify = true
          this.$store.commit('SET_VERTIFY', true)
        } else {
          this.$msg('error', '用户名或密码错误')
        }
      }, (error) => {
        this.disabled = false
        this.$msg('error', error.body.data || '校园认证失败')
      })
    },
    cancelVertify () {
      api.cancleVertify().then((res) => {
        res = res.body
        if (res.result === 'ok') {
          this.isVertify = false
          this.$store.commit('SET_VERTIFY', false)
        } else {
          this.$msg('error', res.data)
        }
      })
    }
  }
}
</script>
