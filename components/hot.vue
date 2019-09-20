<template>
  <view class="hot">
    <view class="hot-head">
      <view class="item">
        歌曲
      </view>
      <view class="item">
        歌手
      </view>
    </view>
    <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y songs-list" @scrolltoupper="upper"
      @scrolltolower="lower" @scroll="scroll">
      <view class="song-item" v-for="(item,idx) in hotsong" :key='idx'>
        <view class="song-num">
          {{idx+1}}
        </view>
        <view class="song-name">
          {{item.name}}
        </view>
        <template v-if="!isplay(item.id)">
          <view class="song play" :data-id='item.id' @tap="playsong(item.id)"></view>
        </template>
        <template v-else>
          <view class="song pause" :data-id='item.id' @tap="playsong(item.id)"></view>
        </template>
        <view class="singer">
          {{item.singer}}
        </view>
      </view>
    </scroll-view>

  </view>
</template>

<script>
  export default {
    props: ['hotsong'],
    data() {
      return {
        scrollTop: 0,
        old: {
          scrollTop: 0
        },
        url: ''
      };
    },
    mounted() {

    },
    computed: {
      // 是否播放状态切换
      isplay(){
        return function(id){
          return (id == this.$store.state.nowsong) && this.$store.state.musicisplay
        }
      }
    },
    methods: {
      playsong(id) {
        if (this.$store.state.nowsong !== id) {
          // 不相等就播放其他的歌
          uni.request({
            url: 'http://127.0.0.1:3000/song/url?id=' + id,
            method: 'GET',
            data: {},
            success: res => {
              const url = res.data.data[0].url

              this.$store.commit('getMusicAndPlay', {
                src: url,
                id: id
              })
            },
            fail: () => {},
            complete: () => {}
          });
          // 直接返回不执行后面
          return
        }
        // 判断是否在暂停状态
        if (this.$store.state.innerAudioContext.paused) {
          this.$store.commit('playMusic')
        } else {
          this.$store.commit('pauseMusic')
        }
      },
      upper: function(e) {

      },
      lower: function(e) {

      },
      scroll: function(e) {

        this.old.scrollTop = e.detail.scrollTop
      },
      goTop: function(e) {
        this.scrollTop = this.old.scrollTop
        this.$nextTick(function() {
          this.scrollTop = 0
        });
        uni.showToast({
          icon: "none",
          title: "纵向滚动 scrollTop 值已被修改为 0"
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '@/static/64tupian/_var.scss';

  .hot {
    width: 100%;
    // background-color: red;
    height: 100%;
    color: white;
    font-size: 30upx;

    .hot-head {
      display: flex;
      justify-content: space-between;
      height: 7vh;
      border-bottom: 1rpx solid #ccc;

      .item {
        text-align: center;
        width: 50%;
        line-height: 7vh;
      }
    }

    .songs-list {
      color: hsla(0, 0%, 100%, .6);
      height: 67vh;

      .song-item {
        height: 6.5vh;
        display: flex;
        line-height: 100upx;
        border-bottom: 1rpx solid #ccc;

        .song-num {
          flex: 1.1;
          ;
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
          overflow: hidden;
        }
      }
    }
  }
</style>
