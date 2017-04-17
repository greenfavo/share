<template>
  <div class="wrap">
    <person-cover />
    <mu-list>
      <mu-sub-header>消息通知</mu-sub-header>
      <mu-list-item title="系统通知">
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
      <mu-divider inset />
      <mu-list-item title="书友私信">
        <mu-icon value="navigate_next" slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-divider />

    <mu-list>
      <mu-list-item title="校园认证" to="vertify">
        <mu-icon value="navigate_next" slot="right" />
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
import PersonCover from '../components/PersonCover'

export default {
  components: {
    PersonCover
  },
  mounted () {
    this.$store.commit('SHOW_NAVBAR')
    this.$store.dispatch('getUserInfo')
  }
}
</script>
