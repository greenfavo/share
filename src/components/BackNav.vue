<template>
  <mu-appbar title="返回" >
    <mu-icon-button icon='arrow_back' slot="left" @click="goBack"/>
    <!-- <mu-icon-button icon='share' slot="right"/> -->
  </mu-appbar>
</template>

<script type="text/javascript">
  export default {
    methods: {
      goBack () {
        window.history.go(-1)
      }
    }
  }
</script>
