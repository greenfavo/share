<template>
  <!-- 校园认证 -->
  <div class="main txtCenter" v-if="isVertify">
    <p>已认证</p>
    <mu-raised-button label="取消认证" primary fullWidth @click="cancelVertify"/>
  </div>
  <div class="main" v-else>
    <mu-text-field label="学号" labelFloat fullWidth v-model="username"/>
    <mu-text-field label="密码" type="password" labelFloat fullWidth v-model="password"/>
    <mu-raised-button label="确定" primary fullWidth @click="handleVertify"/>
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
      password: ''
    }
  },
  computed: {
    isVertify () {
      return this.$store.state.vertify || false
    }
  },
  methods: {
    handleVertify () {
      if (!this.username || !this.password) {
        return
      }
      let opts = {
        username: this.username,
        password: this.password
      }
      api.vertify(opts).then((res) => {
        res = res.body
        if (res.result === 'ok') {
          this.$store.commit('SET_VERTIFY', true)
        }
      })
    },
    cancelVertify () {
      api.cancleVertify().then((res) => {
        res = res.body
        if (res.result === 'ok') {
          this.$store.commit('SET_VERTIFY', false)
        }
      })
    }
  }
}
</script>
