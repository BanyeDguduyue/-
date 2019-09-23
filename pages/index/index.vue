<template>
  <view class="uni-flex uni-column content">
    <view class="mask"></view>
    <view class="bg" :style="{'background-image': imgurl }">

    </view>
    <!-- 用于加载防闪动 -->
    <image :src="getimgbg" class="currimg" @load="onImageLoad"></image>
    <view class="flex-item">
      <Mheader></Mheader>
    </view>
    
    <view class="flex-item tab">
      <view v-for="(item,idx) in tablist" :key='idx' class="tab-item" :class="{active: item.type == current}" @tap="switchPage(item.type)">
        {{item.title}}
      </view>
    </view>
    <view class="flex-item page-swich">
      <view v-show='current == "now"'>
        <Hot :hotsong='songList'></Hot>
      </view>
      <view v-show='current == "recommend" '>
        <Recommend></Recommend>
      </view>
      <view v-show='current == "search" '>
        <Search></Search>
      </view>
      <view v-show='current == "already" '>
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
        current: 'now',
        songList: [],
        imgurl: null,
        tablist: [{
            title: '正在热播',
            type: 'now'
          },
          {
            title: '推荐',
            type: 'recommend'
          },
          {
            title: '搜索',
            type: 'search'
          },
          {
            title: '我听过的',
            type: 'already'
          }
        ]
      }
    },
    computed: {
      // 获取vuex的bg图 用于防闪动
      getimgbg() {
        const url = this.$store.state.bgimgurl
        return url
      }
    },
    onLoad() {
      uni.showLoading({
        title: '正在加载请稍后。。。'
      })
      uni.request({
        url: 'http://39.107.80.8:5000/top/list?idx=1',
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
          uni.hideLoading()
          this.$store.commit('getsonglist', this.songList)
        },
        fail: () => {},
        complete: () => {}
      });
    },
    methods: {
      switchPage(val) {
        this.current = val
      },
      // 等图片加载完毕后再进行加载背景图防止图片是一点一点加载的
      onImageLoad(ev) {
        const url = this.$store.state.bgimgurl
        
        this.$store.commit('changeAvatar', url)
        
        this.imgurl = `url(${url})`
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
    position: relative;
  }

  .bg {
    filter: blur(22upx);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -3;
    transform: translateZ(0);
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: 150% 150%;
    transition: all .8s;
  }

  .currimg {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
  }

  .active {
    border-bottom: 7upx solid #FFFFFF;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, .4)
  }

  .content {
    height: 100vh;
    width: 100%;
    padding-top: 4vh;
    box-sizing: border-box;
  }

  .tab {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 30upx;
    height: 6vh;
    color: white;
  }

  .tab-item {
    line-height: 6vh
  }

  .bottom {
    width: 100%;
  }

  .page-swich {
    width: 100%;
    height: 70vh;
    padding: 0 10upx;
    box-sizing: border-box;
  }
</style>
