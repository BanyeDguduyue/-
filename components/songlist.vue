<template>
	<view class="hot">
    <view class="backtobangdan" @tap="backtobangdan">
      返回
    </view>
	  <view class="hot-head">
	    <view class="item">
	      歌曲
	    </view>
	    <view class="item">
	      歌手
	    </view>
	  </view>
	  <scroll-view  scroll-y="true" class="scroll-Y songs-list">
	    <view class="song-item" v-for="(item,idx) in sendsonglist" :class="{highlight:item.name == getName}" :key='idx'>
	      <view class="song-num">
	        {{idx+1}}
	      </view>
	      <view class="song-name">
	        {{item.name}}
	      </view>
	      <view v-if="!isplay(item.id)">
	        
	      </view>
	      <view class="song"  @tap="playsong(item.id)" :class="(item.id == nowsong) && musicisplay ? 'pause' : (item.id == nowsong)?'play' : '' "></view>
	      <view class="singer">
	        {{item.singer}}
	      </view>
	    </view>
	  </scroll-view>
	</view>
</template>

<script>
	export default {
    props:['sendsonglist'],
		data() {
			return {
				backval: false,
        nowsong: '',
        musicisplay:''
			};
		},
    computed:{
      isplay(){
        return function(id){
          this.nowsong = this.$store.state.nowsong
          this.musicisplay = this.$store.state.musicisplay
          return (id == this.$store.state.nowsong) && this.$store.state.musicisplay
        }
      },
      getName(){
        let songname = this.$store.state.name
        return songname
      }
    },
    methods:{
      backtobangdan(){
        this.$emit('closelist',this.backval)
      },
      playsong(id) {
        if (this.$store.state.nowsong !== id) {
          // 不相等就播放其他的歌
          uni.request({
            url: 'http://39.107.80.8:5000/song/url?id=' + id,
            method: 'GET',
            data: {},
            success: res => {
              // 获取url
              const url = res.data.data[0].url
              const thisSong = this.sendsonglist.filter(item => item.id == id)[0]
              
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
.hot {
    width: 100%;
    height: 100%;
    color: white;
    font-size: 30upx;
    .backtobangdan{
      text-align: center;
      width: 100upx;
      border: 1px solid #FFFFFF;
      border-radius: 8upx;
    }
    .hot-head {
      display: flex;
      justify-content: space-between;
      height: 7vh;

      .item {
        text-align: center;
        width: 50%;
        line-height: 7vh;
      }
    }

    .songs-list {
      color: hsla(0, 0%, 100%, .6);
      height: 57vh;

      .song-item {
        height: 6.1vh;
        display: flex;
        line-height: 100upx;
        border-bottom: 1rpx solid rgba(255,255,255,.1);
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
          width: 60upx;
          height: 60upx;
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-self: center;
          margin-right: 10upx;
          background-image: url($defaultplay);
        }

        .play {
          background-image: url($play);
        }

        .pause {
          background-image: url($stop)
        }

        .singer {
          flex: 1.6;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .highlight{
        color: #FFFFFF;
      }
    }
  }
</style>
