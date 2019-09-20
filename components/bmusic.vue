<template>
  <view class="m_container">
    <view class="progress">
      <view class="progress-box" @tap="gotoTarget">
        <movable-area class="mov-area">
          <movable-view @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" class="control-ball"
            direction="horizontal" :x="ballmove"></movable-view>
        </movable-area>
        <progress :percent="percent" backgroundColor="green" activeColor="red" stroke-width="3" />
      </view>
    </view>
    <view class="control">
      <view class="loop-type" :class="curtype" @tap="openlist">
        <view class="type-list"  v-if="isopenlist">
          <view :class="item" v-for="item in loop_type" :key='item' @tap="choosetype(item)">

          </view>
        </view>
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
        // 当前的位子
        nowlocation: '',
        // 进度条的宽度
        width: 0,
        query: null,
        // 控制滑块不要乱跑
        ismove: false,
        //当前球的位置
        balllocat: null,
        // 进度条的左边距
        progressLeft: null,
        // 播放的方式 如循环
        loop_type: ['list-loop', 'single-loop', 'random'],
        // 是否打开播放方式的选择列表
        isopenlist: false,
        // 用于改变下边的循环方式的中间变量间接改变样式
        curtype: 'list-loop'
      }
    },
    computed: {
      // 改变播放的样式
      stoporplay() {
        if (!this.$store.state.musicisplay) {
          return 'play'
        } else {
          return 'stop'
        }
      },
      // 小球的移动
      ballmove() {
        return parseInt(this.$store.getters.ballprogress * this.width)
      },
      percent() {
        return this.$store.getters.ballprogress * 100
      }
    },
    mounted() {
      // 获取进度条的宽度,和距离左边的位置
      const query = uni.createSelectorQuery().in(this);
      query.select('.progress-box').boundingClientRect(data => {
        this.width = data.width
        this.progressLeft = data.left
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
        // 发送命令停止小球定时器
        this.$store.commit('stopballp')
      },
      touchmove(e) {

      },
      touchend() {
        // 这里进行歌曲的跳转
        this.$store.commit('aloneballp')
        const query = uni.createSelectorQuery().in(this)
        // 获取当前距离最左边的距离
        query.select('.control-ball').boundingClientRect(data => {
          const controlballleft = data.left
          const nowloc = data.left - this.progressLeft
          // 获得当前的秒数
          const nowsec = parseInt((nowloc / this.width) * this.$store.state.duration)
          // 传递参数进行时间跳跃
          this.$store.commit('jumpToTarget', nowsec)
        }).exec();
      },
      gotoTarget(e) {
        const query = uni.createSelectorQuery().in(this);
        const left = e.touches[0].pageX
        const target = left - this.progressLeft
        const targetsec = parseInt((target / this.width) * this.$store.state.duration)
        // 传递参数进行时间跳跃
        this.$store.commit('jumpToTarget', targetsec)
      },
      openlist() {
        if (this.isopenlist == true) {
          this.isopenlist = false
        } else {
          this.isopenlist = true
        }
      },
      choosetype(type) {
        this.curtype = type
        this.$store.commit('getlooptype',type)
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

        .mov-area {
          width: 100%;
          height: 30upx;
          position: absolute;
          left: 0;
          top: -11upx;

          .control-ball {
            width: 30upx;
            height: 30upx;
            border-radius: 50%;
            background-color: #FFFFFF;
          }
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
        background-size: cover;
        position: relative;


        .type-list {
          position: absolute;
          left: 0;
          top: -250upx;
          width: 70upx;
          height: 250upx;
          background-color: rgb(0, 0, 0);
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          border-radius: 30upx;

          .list-loop {
            width: 70upx;
            height: 70upx;
            background-image: url($liebiaoxunhuan);
            background-size: cover;
          }

          .single-loop {
            width: 70upx;
            height: 70upx;
            background-image: url($danquxunhuan);
            background-size: cover;
          }

          .random {
            width: 70upx;
            height: 70upx;
            background-image: url($suiji);
            background-size: cover;
          }
        }
      }

      .list-loop {
        background-image: url($liebiaoxunhuan);
      }

      .single-loop {
        background-image: url($danquxunhuan);
      }

      .random {
        background-image: url($suiji);
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
