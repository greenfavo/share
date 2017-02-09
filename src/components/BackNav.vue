<template>
  <mu-appbar :title="title" >
    <mu-icon-button icon='arrow_back' slot="left" @click="goBack"/>
    <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="发现" href="#/explore"/>
      <mu-menu-item title="书架" href="#/shelf"/>
      <mu-menu-item title="我的" href="#/mine"/>
    </mu-icon-menu>
  </mu-appbar>
</template>

<script type="text/javascript">
  export default {
    methods: {
      goBack () {
        window.history.go(-1)
      }
    },
    computed: {
      title () {
        return this.$store.state.backTitle
      }
    }
  }
</script>
