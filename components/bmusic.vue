<template>
  <view class="m_container">
    <view class="progress">
      <view class="ptime">
        {{getcurrent}}
      </view>
      <view class="progress-box">
        <slider :disabled='silderdisabled' :aaa='percent' :value="balllocat" @touchstart="touchstart" @change="sliderChange" activeColor="#FFFFFF"
          backgroundColor="#ccc" block-color="#FFFFFF" block-size="20" />
      </view>
      <view class="ptime">
        {{getduration}}
      </view>
    </view>
    <view class="control">
      <view class="loop-type" :class="curtype" @tap="openlist">
        <view class="type-list" v-if="isopenlist">
          <view  v-for="(item,idx) in loop_type" :class="item.type" :key='idx' @tap="choosetype(item.type,item.name)">
          </view>
        </view>
      </view>
      <view class="pre" @tap="premusic">

      </view>
      <view :class="stoporplay" @tap='handleMusic'>

      </view>
      <view class="next" @tap='nextmusic'>

      </view>
      <view class="comment" @tap="getComment">

      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: ['songList'],
    data() {
      return {
        // 进度条的宽度
        width: 0,
        //当前球的位置
        balllocat: null,
        // 播放的方式 如循环
        loop_type:[{
          name:'列表循环',
          type: 'list-loop'
        },{
          name:'单曲循环',
          type: 'single-loop'
        },{
          name:'随机播放',
          type: 'random'
        }],
        // 是否打开播放方式的选择列表
        isopenlist: false,
        // 用于改变下边的循环方式的中间变量间接改变样式
        curtype: 'list-loop',
        silderdisabled: true
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
      percent() {
        // 相当于定时器给小球的位置不断计算
        this.balllocat = this.$store.getters.ballprogress * 100
        if(this.$store.getters.ballprogress * 100 > 0){
          // console.log(this.$store.getters.ballprogress * 100);
          this.silderdisabled = false
        }
        return 'aaa'
      },
      getduration(){
        const duration = this.$store.state.duration
        let min = parseInt(duration/60)
        if(min<10){
          min = '0' + min
        }
        let sec = parseInt(duration - min * 60 )
        if(sec< 10){
          sec = '0' + sec
        }
        return `${min}:${sec}`
      },
      getcurrent(){
        const current = this.$store.state.currentTime1
        let min = parseInt(current/60)
        if(min<10){
          min = '0' + min
        }
        let sec = parseInt(current - min * 60 )
        if(sec< 10){
          sec = '0' + sec
        }
        return `${min}:${sec}`
      }
    },
    mounted() {

    },
    methods: {
      // 获取评论
      getComment() {
        if(!this.$store.state.nowsong) return
        const songid = this.$store.state.nowsong
        uni.navigateTo({
          url: '../comment/comment?songid=' + songid,
          success: res => {},
          fail: () => {},
          complete: () => {}
        });
      },
      sliderChange(e) {
        // 获取改变的位置
        const value = e.detail.value
        // 计算当前的时间
        const nowsec = value * 0.01 * this.$store.state.duration1
        // 打开计算小球的定时器
        this.$store.commit('aloneballp')
        // 跳跃到目标时间
        this.$store.commit('jumpToTarget', nowsec)
        this.balllocat = value
      },
      // 处理音乐
      handleMusic() {
        // 判断是否有src属性
        if (!this.$store.state.innerAudioContext.src) {
          uni.showModal({
            content: '请播放一个音乐',
            showCancel: false
          })
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
        this.$store.state.sonlists.forEach((item, idx) => {
          if (item.id == nowsong) {
            const i = idx + 1 == this.$store.state.sonlists.length ? 0 : idx + 1
            nexitem = this.$store.state.sonlists[i]
          }
        })
        uni.request({
          url: 'http://39.107.80.8:5000/song/url?id=' + nexitem.id,
          method: 'GET',
          data: {},
          success: res => {
            const url = res.data.data[0].url
            this.$store.commit('getMusicAndPlay', {
              src: url,
              id: nexitem.id,
              searchpush: nexitem
            })
          },
          fail: () => {},
          complete: () => {}
        });
      },
      // 上一首
      premusic() {
        // 获取当前歌曲的ID
        const nowsong = this.$store.state.nowsong
        let nexitem
        // 筛选出上一首歌的信息
        this.$store.state.sonlists.forEach((item, idx) => {
          if (item.id == nowsong) {
            const i = idx == 0 ? this.$store.state.sonlists.length - 1 : idx - 1
            nexitem = this.$store.state.sonlists[i]
          }
        })
        uni.request({
          url: 'http://39.107.80.8:5000/song/url?id=' + nexitem.id,
          method: 'GET',
          data: {},
          success: res => {
            const url = res.data.data[0].url
            this.$store.commit('getMusicAndPlay', {
              src: url,
              id: nexitem.id,
              searchpush: nexitem
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
      // 打开选择播放模式的开关
      openlist() {
        if (this.isopenlist == true) {
          this.isopenlist = false
        } else {
          this.isopenlist = true
        }
      },
      // 选择哪种播放模式的type
      choosetype(type,name) {
        this.curtype = type
        this.$store.commit('getlooptype', type)
        uni.showToast({
            title: `已切换至${name}`,
            duration: 2000,
            icon:'none'
        });
      }
    }
  }
</script>

<style lang="scss">
  @import '@/static/64tupian/_var.scss';

  .m_container {
    width: 100%;
    height: 12vh;
    .progress {
      width: 100vw;
      height: 40upx;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
      box-sizing: border-box;
      .ptime{
        color: #FFFFFF;
        font-size: 20upx;
      }
      .progress-box {
        position: relative;
        width: 90%;
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
          background-color: rgba(0, 0, 0, .4);
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
        width: 80upx;
        height: 80upx;
        background-image: url($stop);
        background-size: cover;
      }

      .play {
        width: 80upx;
        height: 80upx;
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
