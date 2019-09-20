<template>
  <view class="uni-flex uni-column content">
    <view class="flex-item">
      <Mheader></Mheader>
    </view>
    <view class="flex-item tab">
      <view class="tab-item" @tap="switchPage('正在')">
        正在热播
      </view>
      <view class="tab-item" @tap="switchPage('推荐')">
        推荐
      </view>
      <view class="tab-item" @tap="switchPage('搜索')">
        搜索
      </view>
      <view class="tab-item" @tap="switchPage('我的')">
        我听过的
      </view>
    </view>
    <view class="flex-item page-swich">
      <view v-show='current == "正在"'>
        <Hot :hotsong='songList' ></Hot>
      </view>
      <view v-show='current == "推荐" '>
        <Recommend></Recommend>
      </view>
      <view v-show='current == "搜索" '>
        <Search></Search>
      </view>
      <view v-show='current == "我的" '>
        <My></My>
      </view>
    </view>
    <view class="flex-item bottom">
      <Bmusic :songList='songList'></Bmusic>
    </view>
  </view>
</template>

<script>
  import Bmusic from '../../components/bmusic.vue'
  import Mheader from '../../components/header.vue'
  import Hot from '../../components/hot.vue'
  import Recommend from '../../components/recommend.vue'
  import Search from '../../components/search.vue'
  import My from '../../components/my.vue'
  export default {
    data() {
      return {
        current: '正在',
        songList: []
      }
    },
    onLoad() {
      uni.request({
        url: 'http://127.0.0.1:3000/top/list?idx=1',
        method: 'GET',
        data: {},
        success: res => {
          // 截取100条
          const data = res.data.playlist.tracks.splice(0, 100)
          this.songList = data.map(item => {
            let sin = ''
            item.ar.forEach((itm, idx) => {
              if (idx == 0) {
                sin = itm.name
              } else {
                sin = sin + '/' + itm.name
              }
            })
            return {
              name: item.name,
              singer: item.ar.length == 1 ? item.ar[0].name : sin,
              id: item.id,
              picurl: item.al.picUrl
            }
          })
        },
        fail: () => {},
        complete: () => {}
      });
    },
    methods: {
      switchPage(val) {
        this.current = val
      }
    },
    components: {
      Bmusic,
      Mheader,
      Hot,
      Recommend,
      Search,
      My
    }
  }
</script>

<style>
  page {
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
  }

  .content {
    background-color: rgba(0, 0, 0, .3);
    height: 100vh;
    width: 100%;
  }
  .tab {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 30upx;
    height: 6vh;
    background-color: white;
  }

  .tab-item {
    line-height: 6vh;
  }

  .bottom {
    width: 100%;
  }

  .page-swich {
    width: 100%;
    height: 74vh;
    padding:0 10upx;
    box-sizing: border-box;
  }
</style>
