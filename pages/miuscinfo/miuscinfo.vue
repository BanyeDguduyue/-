<template>
  <view class="music-info">
    <!-- 用于加载防闪动 -->
    <image :src="getimgbg" class="currimg" @load="onImageLoad"></image>
    <view class="mask"></view>
    <view class="bg" :style="{'background-image': bgimgurl }">

    </view>
    <view class="back" @tap="goBack">
      
    </view>
    <view class="title">{{getsongName}}</view>
    <view class="author">
      {{getSinger}}
    </view>
      <view class="song-img" v-show="!isChangelyricLong" >
        <image class="img-content" :src="imgurl"></image>
      </view>

    <scroll-view @tap="changelyriclong" class="lyric-scroll" :class="lyriclong" scroll-y="true" :scroll-top='index*scrollHeight' scroll-with-animation='true' show-scrollbar='false'>
      <view class="lyric-container" :style="{padding: `${padding}px 0`}">
        <view v-for="(item,idx) in getsongworlist" :key='idx' class="lyric" :class="idx == lyricIndex ? 'active' : '' ">
          {{item}}
        </view>
      </view>
    </scroll-view>

    <view class="music-control">
      <Bmusic></Bmusic>
    </view>
  </view>
</template>

<script>
  import Bmusic from '@/components/bmusic.vue'
  export default {
    data() {
      return {
        // 存储歌词以及时间 长度相同
        lyricObj:{
          
        },
        // 下标
        index: 0,
        //  歌词边长
        isChangelyricLong: false,
        // 初始的滚动高度
        scrollHeight: 40,
        // 控制歌词显示的距离
        padding: 60,
        bgimgurl: `url(${this.$store.state.bgimgurl})`,
        imgurl: this.$store.state.bgimgurl
      };
    },
    components: {
      Bmusic
    },
    onLoad(){
      
    },
    computed: {
      // 获取背景图
      getimgbg() {
        const url = this.$store.state.bgimgurl
        return url
      },
      // 获取歌名
      getsongName(){
        return this.$store.state.name
      },
      // 获取歌手名
      getSinger(){
        return this.$store.state.singer
      },
      // 获取歌词的条数
      lyricIndex(){
        // 获取第几条歌词需要高亮
        // 当当前的播放时间大于某一项时就把下标赋值给 index （让某项的歌词高亮）
        this.$store.state.lyricObj.timeList.forEach((item,idx)=> {
          if(this.$store.state.currentTime1 > item){
            this.index = idx
          }
        })
        return this.index
      },
      // 计算属性计算是否改变歌词显示模式
      lyriclong(){
        // 点击歌词变成唱歌词模式
         if(this.isChangelyricLong){
           return 'lyric-scroll2'
         }else{
           return ''
         }
      },
      getsongworlist(){
        return this.$store.state.lyricObj.lyricList
      }
    },
    methods:{
      // 返回
      goBack(){
        uni.navigateBack({
            delta: 2
        });
      },
      // toggle改变滚动条
      changelyriclong(){
        if(this.isChangelyricLong){
          this.isChangelyricLong = false
          this.padding = 60
        }else{
          this.isChangelyricLong = true
          this.padding = 165
        }
      },
      // 等图片加载完毕后再进行加载背景图防止图片是一点一点加载的
      onImageLoad(ev) {
        // 加载完成后再进行赋值
        const url = this.$store.state.bgimgurl
        // 再更改头像
        this.$store.commit('changeAvatar', url)
        // 这个是背景的更改
        this.bgimgurl = `url(${url})`
        // 这个是图片的更改
        this.imgurl = url
      }
    }
  }
</script>

<style lang="scss">
  @import '@/static/64tupian/_var.scss';
  page {
    height: 100vh;
    position: relative;
  }
  
  // 音乐详情页
  .music-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .currimg {
      width: 0;
      height: 0;
      position: absolute;
      top: 0;
    }
    // 返回
    .back{
      background-image: url($back);
      position: absolute;
      top: 34px;
      left: 40upx;
      width: 60upx;
      height: 60upx;
      background-size: cover;
    }
    // 歌名
    .title {
      margin-top: 5vh;
      margin-bottom: 3vh;
      color: #FFFFFF;
    }
    // 作者
    .author {
      font-size: 22upx;
      color: #FFFFFF;
      margin-bottom: 5vh;
    }
    // 歌曲相关图片
    .song-img {
      width: 75vw;
      height: 57vw;
      border-radius: 20upx;
      overflow: hidden;
      margin-bottom: 5vh;
      .img-content {
        width: 100%;
        height: 100%;
        transition: all .5s;
      }
    }
    // 滚动条的设置
    .lyric-scroll{
      width: 100vw;
      height: 20vh;
      position: relative;
      mask-image: linear-gradient(to bottom,rgba(255,255,255,0) 0,rgba(255,255,255,.6) 15%,rgba(255,255,255,1) 25%,rgba(255,255,255,1) 75%,rgba(255,255,255,.6) 85%,rgba(255,255,255,0) 100%);
      .lyric-container{

        .lyric{
          font-size: 30upx;
          color:rgba(225,225,225,.8);
          line-height: 40px;
          text-align: center;
        }
        .active{
          color: #4CD964;
          font-size: 40upx;
          font-weight: 700;
          transition: all 0.5s;
        }
      }
    }
    // 变成长滚动条
    .lyric-scroll2{
      height: 62vh;
      transition: height 1s;
    }
    .music-control {
      position: absolute;
      bottom: 0;
      left: 0;
    }

// 遮罩
    .bg {
      filter: blur(65px);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      transform: translateZ(0);
      opacity: .6;
      background-repeat: no-repeat;
      background-position: center;
      background-attachment: fixed;
      background-size: 150% 150%;
      transition: all .8s;
    }

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      background-color: rgba(0, 0, 0, .6)
    }
  }
</style>
