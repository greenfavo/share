<template>
<div>
  <input type="file" accept="image/*" style="display:none;"  id="file" @change="handleChange">
  <label for="file" class="imgContainer">
    <!-- <img src="../assets/cover/1.jpg" alt="" /> -->
    <mu-icon value="add" :size="100" color="#ccc"/>
  </label>
</div>
</template>

<script>
export default {
  methods: {
    handleChange (e) {
      console.log(e.target.files)
    }
  }
}
</script>

<style>
.imgContainer {
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
img{
  width: 100px;
  height: 100px;
}
</style>
