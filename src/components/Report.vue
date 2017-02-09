<template>
<div>
  <mu-raised-button label="举报" ref="button" @click="toggle"/>
  <mu-popover :trigger="trigger" :open="open" @close="handleClose" :anchorOrigin="{vertical:'top',horizontal:'left'}">
    <mu-menu>
      <mu-menu-item title="色情" />
      <mu-menu-item title="暴力" />
      <mu-menu-item title="损坏书籍" />
      <mu-menu-item title="虚假图书" />
      <mu-menu-item title="超期还书" />
    </mu-menu>
  </mu-popover>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      trigger: null
    }
  },
  mounted () {
    this.trigger = this.$refs.button.$el
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    handleClose (e) {
      this.open = false
    }
  }
}
</script>
