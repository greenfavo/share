<template>
  <mu-list>
    <mu-sub-header>评论</mu-sub-header>
    <mu-list-item >
      <mu-avatar :src="avatar" slot="leftAvatar"/>
      <mu-text-field hintText="说点什么..."/>
      <mu-icon-button icon="send" slot="right"></mu-icon-button>
    </mu-list-item>
    <mu-list-item :title="item.name" v-for="item in comments">
      <mu-avatar :src="item.avatar" slot="leftAvatar"/>
      <span slot="describe">
        {{item.content}}
      </span>
      <!-- <span slot="right" class="time">2016-11-15</span> -->
      <mu-radio slot="right" uncheckIcon="favorite_border" checkedIcon="favorite" v-model="item.isAgree"></mu-radio>
    </mu-list-item>
  </mu-list>
</template>

<script>
import avatar1 from '../assets/cover/1.jpg'
import avatar2 from '../assets/cover/2.jpg'
import avatar3 from '../assets/cover/3.jpg'
import avatar4 from '../assets/cover/4.jpg'
export default {
  data () {
    return {
      avatar: avatar1,
      comments: [
        {
          avatar: avatar1,
          name: '小明',
          content: '写的真好,非常棒,剧情跌宕起伏,细节描写很好,男女主角历尽千辛万苦终于在一起了,赞',
          isAgree: 'true'
        },
        {
          avatar: avatar2,
          name: '琳琳',
          content: '抄袭的',
          isAgree: 'false'
        },
        {
          avatar: avatar3,
          name: '拉拉',
          content: '真不错',
          isAgree: 'false'
        },
        {
          avatar: avatar4,
          name: '林瑾',
          content: '很好',
          isAgree: 'false'
        }
      ]
    }
  }

}
</script>
<style scoped>
  .sendComment {
    display: flex;
    justify-content: space-around;
  }
  .time{
    width: 100px;
    font-size: 12px;
  }
</style>
