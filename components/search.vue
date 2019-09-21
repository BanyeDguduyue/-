<template>
  <view class="search-container">
    <SearchBar class='search' @confirm='getkeyword'></SearchBar>

    <view class="search-head">
      <view class="item">
        歌曲
      </view>
      <view class="item">
        歌手
      </view>
    </view>
    <scroll-view scroll-y="true" class="scroll-Y songs-list">
      <view class="song-item" v-for="(item,idx) in ssongList" :key='idx'>
        <view class="song-num">
          {{idx+1}}
        </view>
        <view class="song-name">
          {{item.name}}
        </view>
        <template v-if="!isplay(item.id)">
          <view class="song play" @tap="playsong(item.id)"></view>
        </template>
        <template v-else>
          <view class="song pause" @tap="playsong(item.id)"></view>
        </template>
        <view class="singer">
          {{item.singer}}
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import SearchBar from '@/components/uni-ui/uni-search-bar/uni-search-bar'
  export default {
    data() {
      return {
        ssongList: []
      };
    },
    computed: {
      // 是否播放状态切换
      isplay() {
        return function(id) {
          return (id == this.$store.state.nowsong) && this.$store.state.musicisplay
        }
      }
    },
    components: {
      SearchBar
    },
    methods: {
      // 获取关键词然后搜索出列表
      getkeyword(keywords) {
        keywords = keywords.value
        uni.showLoading({
          title:'正在加载请稍后。。。'
        })
        uni.request({
          url: 'http://39.107.80.8:5000/search?keywords=' + keywords,
          method: 'GET',
          data: {},
          success: res => {
            const data = res.data.result.songs
            this.ssongList = data.map((item, idx) => {
              let sin = ''
              item.artists.forEach((itm, idx) => {
                if (idx == 0) {
                  sin = itm.name
                } else {
                  sin = sin + '/' + itm.name
                }
              })
              return {
                name: item.name,
                singer: item.artists.length == 1 ? item.artists[0].name : sin,
                id: item.id,
                picurl: item.artists.length == 1 ? item.artists.img1v1Url : item.artists[0].img1v1Url
              }
            })
            uni.hideLoading()
          },
          fail: () => {},
          complete: () => {}
        });
      },
      playsong(id) {
        if (this.$store.state.nowsong !== id) {
          uni.request({
            url: 'http://39.107.80.8:5000/song/url?id=' + id,
            method: 'GET',
            data: {},
            success: res => {
              const url = res.data.data[0].url
              const thisSong = this.ssongList.filter(item => item.id == id)[0]
              this.$store.commit('getMusicAndPlay', {
                src: url,
                id: id,
                searchpush: thisSong
              })
            },
            fail: () => {},
            complete: () => {}
          });
          // 直接返回不执行后面
          return
        }
        
        // 判断是否在暂停状态
        if (!this.$store.state.musicisplay) {
          this.$store.commit('playMusic')
        } else {
          this.$store.commit('pauseMusic')
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '@/static/64tupian/_var.scss';
  .search-container {
    width: 100%;
    height: 100%;
    font-size: 30upx;

    .search-head {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 7vh;

      .item {
        text-align: center;
        width: 50%;
        line-height: 7vh;
        color: white;
      }
    }

    .songs-list {
      color: hsla(0, 0%, 100%, .6);
      height: 55vh;
      padding: 0 15upx;
      box-sizing: border-box;

      .song-item {
        height: 6.1vh;
        display: flex;
        line-height: 100upx;
        border-bottom: 1rpx solid rgba(255, 255, 255, .1);
        align-items: center;

        .song-num {
          flex: 1.1;
          text-align: center;
        }

        .song-name {
          flex: 2;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .song {
          width: 70upx;
          height: 70upx;
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-self: center;
          margin-right: 10upx;
        }

        .play {
          background-image: url($play);
        }

        .pause {
          background-image: url($stop);
        }

        .singer {
          flex: 1.6;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden
        }
      }
    }
  }
</style>
