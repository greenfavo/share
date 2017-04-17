<template>
  <!-- 校园认证 -->
  <div class="main txtCenter" v-if="!isVertify">
    <p>已认证</p>
    <mu-raised-button label="取消认证" primary fullWidth />
  </div>
  <div class="main" v-else>
    <mu-text-field label="学号" labelFloat fullWidth />
    <mu-text-field label="密码" type="password" labelFloat fullWidth />
    <mu-raised-button label="确定" primary fullWidth />
  </div>
</template>
<script>
export default {
  mounted () {
    this.$store.commit('HIDDEN_NAVBAR')
    this.$store.commit('SET_BACK_TITLE', '校园认证')
  },
  data () {
    return {
      isVertify: false
    }
  }
}
</script>
