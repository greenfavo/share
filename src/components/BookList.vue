<template>
  <div >
    <p class="subHeader">
      <span>推荐</span>
      <span>更多></span>
    </p>
    <section  v-for="n in 4">
      <router-link to="/book?id=1" class="bookSec" tag="div">
        <img src="../assets/cover/2.jpg" class="cover" />
        <ul>
          <li><b>要塞</b></li>
          <li class="light">[法]圣埃克苏佩里</li>
          <li class="light">小王子作者圣埃克苏佩里的最后遗作</li>
        </ul>
      </router-link>
    </section>
  </div>
</template>

<script type="text/javascript">
export default {
}
</script>

<style scoped>
.subHeader{
  display: flex;
  justify-content: space-between;
  color: gray;
}
.bookSec {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
