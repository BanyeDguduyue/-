<template>
  <view class="m_container">
    <view class="progress">
      <view class="progress-box">
        <movable-area class="mov-area">
          <movable-view @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" class="control-ball" direction="horizontal" :x="ballmove"></movable-view>
        </movable-area>
        <progress :percent="$store.getters.progress" stroke-width="3" />
      </view>
    </view>
    <view class="control">
      <view class="loop-type">

      </view>
      <view class="pre" @tap="premusic">

      </view>
      <view :class="stoporplay" @tap='handleMusic'>

      </view>
      <view class="next" @tap='nextmusic'>

      </view>
      <view class="comment">

      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ['songList'],
    data() {
      return {
        nowlocation: '',
        width: 0,
        query: null,
        // 控制滑块不要乱跑
        ismove: false
      }
    },
    computed: {
      stoporplay(){
        if(!this.$store.state.musicisplay){
          return 'play'
        }else{
          return 'stop'
        }
      },
      ballmove() {
        if(this.ismove){
          return 0
        }else{
          return (this.$store.getters.progress * this.width * 0.01).toFixed(2)
        }
      }
    },
    mounted() {
      const query = uni.createSelectorQuery().in(this);
      query.select('.progress-box').boundingClientRect(data => {
        this.width = data.width
      }).exec();
    },
    methods: {
      // 处理音乐
      handleMusic() {
        // 判断是否有src属性
        if (!this.$store.state.innerAudioContext.src) {
          uni.showModal({
            content: '请播放一个音乐',
            showCancel: false
          });
          return
        }
        // 判断是否是播放状态
        if (!this.$store.state.musicisplay) {
          this.$store.commit('playMusic')
        } else {
          this.$store.commit('pauseMusic')
        }
      },
      // 下一首
      nextmusic() {
        const nowsong = this.$store.state.nowsong

        let nexitem
        this.songList.forEach((item, idx) => {
          if (item.id == nowsong) {
            const i = idx + 1 == this.songList.length ? 0 : idx + 1
            nexitem = this.songList[i]
          }
        })
        uni.request({
          url: 'http://127.0.0.1:3000/song/url?id=' + nexitem.id,
          method: 'GET',
          data: {},
          success: res => {
            const url = res.data.data[0].url
            this.$store.commit('getMusicAndPlay', {
              src: url,
              id: nexitem.id
            })
          },
          fail: () => {},
          complete: () => {}
        });
      },
      // 上一首
      premusic() {

        const nowsong = this.$store.state.nowsong

        let nexitem
        this.songList.forEach((item, idx) => {
          if (item.id == nowsong) {
            const i = idx == 0 ? this.songList.length - 1 : idx - 1
            nexitem = this.songList[i]
          }
        })
        uni.request({
          url: 'http://127.0.0.1:3000/song/url?id=' + nexitem.id,
          method: 'GET',
          data: {},
          success: res => {
            const url = res.data.data[0].url
            this.$store.commit('getMusicAndPlay', {
              src: url,
              id: nexitem.id
            })
          },
          fail: () => {},
          complete: () => {}
        });
      },
      touchstart(e) {
        this.ismove = true
        const query = uni.createSelectorQuery().in(this)
        // 获取当前距离最左边的距离
        query.select('.control-ball').boundingClientRect(data => {
          const left = JSON.stringify(data).left
          const nowlocation = e.touches[0].pageX
          // 进度条距离最左边的距离
          this.nowlocation = nowlocation - left
        }).exec();
      },
      touchmove(e) {
//         // 如果没放歌就不能拖动
//         if (!this.$store.state.innerAudioContext.src) {
//           return
//         }
//         // 不能拉出进度条的范围
//         if (e.touches[0].pageX < this.nowlocation) {
//           this.$refs.ball.$el.style.left = 0
// 
//         } else if (e.touches[0].pageX > (this.width + this.nowlocation)) {
//           this.$refs.ball.$el.style.left = this.width + 'px'
//         } else {
//           this.$refs.ball.$el.style.left = (e.touches[0].pageX - this.nowlocation) + 'px'
//         }
      },
      touchend() {
        this.ismove = false
        // console.log(this.$refs.ball.$el.style.left);
        // parseInt(this.$refs.ball.$el.style.left) * 100 / this.width
      }
    }
  }
</script>

<style lang="scss">
  @import '@/static/64tupian/_var.scss';

  .m_container {
    width: 100%;
    height: 12vh;
    background-color: #000000;

    .progress {
      width: 100vw;
      height: 40upx;
      display: flex;
      align-items: center;
      justify-content: center;

      .progress-box {
        position: relative;
        width: 90%;
         .mov-area{
           width: 100%;
           height: 3px;
           position: absolute;
           left: 0;
           top: 0;
         }
        .control-ball {
          position: absolute;
          width: 30upx;
          height: 30upx;
          border-radius: 50%;
          background-color: #FFFFFF;
          top: -11upx;
          left: -15upx;
        }
      }
    }

    .control {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      height: 110upx;

      .loop-type {
        width: 70upx;
        height: 70upx;
        background-image: url($liebiaoxunhuan);
        background-size: cover;
      }

      .pre {
        width: 70upx;
        height: 70upx;
        background-image: url($shangyishou);
        background-size: cover;
      }

      .stop {
        width: 100upx;
        height: 100upx;
        background-image: url($stop);
        background-size: cover;
      }

      .play {
        width: 100upx;
        height: 100upx;
        background-image: url($play);
        background-size: cover;
      }

      .next {
        width: 70upx;
        height: 70upx;
        background-image: url($next);
        background-size: cover;
      }

      .comment {
        width: 70upx;
        height: 70upx;
        background-image: url($comment);
        background-size: cover;
      }
    }
  }
</style>
