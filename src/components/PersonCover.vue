<template>
  <div class="personInfo">
    <img src="http://onzj7fisz.bkt.clouddn.com/cover.webp" alt="" />
    <mu-flat-button :label="`信用积分:${score}`" icon="navigate_next" labelPosition="before" class="score" />
    <div class="avatar">
      <mu-avatar :src="avatar" :size="60"/>
      <span>{{nickname}}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    nickname: String,
    avatar: String,
    score: Number
  }
}
</script>
<style scoped>
.personInfo{
  position: relative;
}
img{
  width: 100%;
  height: 150px;
}
.score {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 30px;
  color: #f2f2f2;
}
.avatar {
  position: absolute;
  left: 40%;
  top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #f2f2f2;
}
</style>
