<template>
  <div class="gridlist-demo-container mT20">
    <mu-grid-list class="gridlist-demo">
      <!-- <mu-sub-header>图片展示</mu-sub-header> -->
      <mu-grid-tile v-for="tile in list">
        <img :src="tile.image"/>
        <span slot="title">{{tile.title}}</span>
        <!-- <span slot="subTitle">by <b>{{tile.author}}</b></span> -->
        <span slot="subTitle">应还日期:2017-02-15</span>
        <!-- <mu-checkbox uncheckIcon="favorite_border" checkedIcon="favorite" slot="action"/> -->
      </mu-grid-tile>
    </mu-grid-list>
  </div>
</template>

<script>
import breakfast from '../assets/cover/1.jpg'
import burger from '../assets/cover/2.jpg'
import camera from '../assets/cover/3.jpg'
import hats from '../assets/cover/4.jpg'

export default {
  data () {
    return {
      list: [{
        image: breakfast,
        title: 'Breakfast',
        author: 'Myron'
      }, {
        image: burger,
        title: 'Burger',
        author: 'Linyu'
      }, {
        image: camera,
        title: 'Camera',
        author: 'ruolin'
      }, {
        image: hats,
        title: 'Hats',
        author: 'kakali'
      }]
    }
  }
}
</script>

<style scoped>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
