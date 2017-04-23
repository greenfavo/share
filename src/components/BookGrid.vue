<template>
  <div class="gridlist-demo-container">
    <mu-grid-list class="gridlist-demo" v-if="books.length>0">
      <mu-grid-tile v-for="item in books" >
        <img :src="item.cover"  @click="openBottomSheet(item)" class="cover" />
        <span slot="title">{{item.name}}</span>
        <span slot="subTitle" v-if="type==='private'">{{item.author}}</span>
        <span slot="subTitle" v-else>应还日期:04-30</span>
      </mu-grid-tile>
    </mu-grid-list>
    <p v-else>暂无图书</p>
    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
      <mu-list @itemClick="closeBottomSheet">
        <mu-sub-header>
          操作
        </mu-sub-header>
        <mu-list-item title="查看详情" :to="`/book/${curId}`" />
        <mu-list-item title="删除" v-if="type==='private'"/>
        <mu-list-item title="编辑" v-if="type==='private'"/>
        <mu-list-item title="还书" v-if="type==='borrow'"/>
      </mu-list>
    </mu-bottom-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomSheet: false,
      curId: ''
    }
  },
  props: {
    type: String,
    books: Array
  },
  methods: {
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet (item) {
      this.bottomSheet = true
      this.curId = item['_id']
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
