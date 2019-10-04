<template>
	<view class="index-container">
		<view class="avatar-container" @tap="gotoMusicInfo">
		  <image :src="getavatar" mode="" class="avatar"></image>
		</view>
    
    <view class="container-right">
      <view class="song-info">
        <view class="song-name">
          {{getsongName}}
        </view>
        <view class="singer">
          {{getSinger}}
        </view>
      </view>
      
      <view class="right">
        <view :class="isplay" @tap="choosePlayType">
          
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
    computed:{
      isplay(){
        return !this.$store.state.musicisplay ? 'play' : 'stop'
      },
      getavatar() {
        return this.$store.state.curavatar
      },
      // 获取歌名
      getsongName(){
        return this.$store.state.name
      },
      // 获取歌手名
      getSinger(){
        return this.$store.state.singer
      },
    },
    methods:{
      choosePlayType(){
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
      gotoMusicInfo() {
        uni.navigateTo({
          url: '../miuscinfo/miuscinfo',
          // animationType: 'zoom-out',
          animationDuration: 200
        });
      }
    }
	}
</script>

<style lang="scss">
 @import '@/static/64tupian/_var.scss';
.index-container{
  width: 100%;
  height: 9vh;
  position: relative;
  background-color: rgba(0,0,0,.1);
  .avatar-container{
    position: absolute;
    top: -40upx;
    left: 40upx;
    width: 120upx;
    height:120upx;
    overflow: hidden;
    border-radius: 10upx;
    box-shadow:2px 2px 3px rgba(0,0,0,.5) ;
    .avatar{
      width: 100%;
      height: 100%;
    }
  }
  .container-right{
    display: flex;
    height: 100%;
    align-items: center;
    .song-info{
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      // align-items: center;
      margin-left: 180upx;
      .song-name{
        color: #FFFFFF;
        font-size: 30upx;
      }
      .singer{
        color: #CCCCCC;
        font-size: 15upx;
      }
    }
    .right{
      width: 180upx;
      .play{
        // flex: 2;
        width: 60upx;
        height: 60upx;
        background-image: url($play);
        background-size: cover;
      }
      .stop{
        // flex: 2;
        width: 60upx;
        height: 60upx;
        background-image: url($stop);
        background-size: cover;
      }
    }
  }
}
</style>
