<template>
  <div class="personInfo">
    <img src="../assets/cover.jpg" alt="" />
    <mu-flat-button label="信用积分:100" icon="navigate_next" labelPosition="before" class="score" />
    <div class="avatar">
      <mu-avatar :src="avatar" :size="60"/>
      <span>小书童</span>
    </div>
  </div>
</template>

<script type="text/javascript">
import Avatar from '../assets/cover/1.jpg'

export default {
  data () {
    return {
      avatar: Avatar
    }
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
  position: absolute;;
  left: 40%;
  top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #f2f2f2;
}
</style>
