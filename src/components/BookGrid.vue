<template>
  <div class="gridlist-demo-container">
    <mu-grid-list class="gridlist-demo">
      <mu-grid-tile v-for="item in list">
        <img :src="item.image"  @click="openBottomSheet(item)"/>
        <span slot="title">{{item.title}}</span>
        <span slot="subTitle" v-if="type==='private'">鲁迅</span>
        <span slot="subTitle" v-else>应还日期:04-25</span>
      </mu-grid-tile>
    </mu-grid-list>

    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
      <mu-list @itemClick="closeBottomSheet">
        <mu-sub-header>
          操作
        </mu-sub-header>
        <mu-list-item title="查看详情" to="book" />
        <mu-list-item title="删除" v-if="type==='private'"/>
        <mu-list-item title="编辑" v-if="type==='private'"/>
      </mu-list>
    </mu-bottom-sheet>
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
        title: '是你路过我的倾城时光',
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
      }],
      bottomSheet: false,
      curId: ''
    }
  },
  props: {
    type: String
  },
  methods: {
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet (item) {
      this.bottomSheet = true
      this.curId = item.id
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
img {
  width: 200px;
  height: 400px;
}
</style>
