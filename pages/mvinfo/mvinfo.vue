<template>
  <view class="mvinfo-cotainer">
    <view class="back" @tap="back">

    </view>
    <view class="uni-padding-wrap uni-common-mt">
      <view>
        <video id="myVideo" :src="src"
          @error="videoErrorCallback" controls></video>
      </view>
    </view>

    <scroll-view class="mv-comment-list" scroll-y="true">
      <view class="uni-padding-wrap">
        <view class="uni-comment">
          <view class="uni-comment-list" v-for="(item,idx) in mvcomment" :key='idx'>
            <view class="uni-comment-face">
              <image :src="item.avatarUrl" mode="widthFix"></image>
            </view>
            <view class="uni-comment-body">
              <view class="uni-comment-top">
                <text>{{item.nickname}}</text>
              </view>
              <view class="uni-comment-date">
                <text>{{item.time}}</text>
              </view>
              <view class="uni-comment-content">{{item.content}}</view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        src: '',
        mvcomment: []
      }
    },
    onLoad() {
      
    },
    onReady: function(res) {
      // #ifndef MP-ALIPAY
      this.videoContext = uni.createVideoContext('myVideo')
      // #endif
    },
    mounted(){
      // 格式化时间
      function formatTime(time) {
        var now = new Date(time);
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
      }
      // 获取mv的评论
      uni.request({
        url: 'http://39.107.80.8:5000/comment/mv?id='+ this.$store.state.mvid,
        method: 'GET',
        data: {},
        success: res => {
          const comments = res.data.comments
          this.mvcomment = comments.map((item, idx) => {
            return {
              nickname: item.user.nickname,
              avatarUrl: item.user.avatarUrl,
              content: item.content,
              time: formatTime(item.time)
            }
          })
        },
        fail: () => {},
        complete: () => {}
      });
      // 获取mv数据
      uni.request({
        url: 'http://39.107.80.8:5000/mv/detail?mvid='+this.$store.state.mvid,
        method: 'GET',
        data: {},
        success: res => {
          const src = res.data.data.brs[240]
          // 应该拿不到src
          this.src = src
        },
        fail: () => {},
        complete: () => {}
      });
    },
    methods: {
      back() {
        uni.navigateBack({
          delta: 1
        });
      },
      videoErrorCallback: function(e) {
        uni.showModal({
          content: e.target.errMsg,
          showCancel: false
        })
      },
      getRandomColor: function() {
        const rgb = []
        for (let i = 0; i < 3; ++i) {
          let color = Math.floor(Math.random() * 256).toString(16)
          color = color.length == 1 ? '0' + color : color
          rgb.push(color)
        }
        return '#' + rgb.join('')
      }
    }
  }
</script>

<style lang="scss">
  @import '@/static/64tupian/_var.scss';

  .mvinfo-cotainer {
    position: relative;

    .back {
      background-image: url($blackBack);
      width: 60upx;
      height: 60upx;
      position: absolute;
      top: 60upx;
      left: 60upx;
      z-index: 3;
      background-size: cover;
    }

    #myVideo {
      width: 100%
    }

    .mv-comment-list {
      height: 68vh;
      .uni-padding-wrap {
        padding: 30upx;
      }
      
      view {
        font-size: 28upx;
      }
      
      .uni-comment {
        padding: 5rpx 0;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
      
      .uni-comment-list {
        flex-wrap: nowrap;
        padding: 10rpx 0;
        margin: 10rpx 0;
        width: 100%;
        display: flex;
      }
      
      .uni-comment-face {
        width: 70upx;
        height: 70upx;
        border-radius: 100%;
        margin-right: 20upx;
        flex-shrink: 0;
        overflow: hidden;
      }
      
      .uni-comment-face image {
        width: 100%;
        border-radius: 100%;
      }
      
      .uni-comment-body {
        width: 100%;
      }
      
      .uni-comment-top {
        line-height: 1.5em;
        justify-content: space-between;
      }
      
      .uni-comment-top text {
        color: #0A98D5;
        font-size: 24upx;
      }
      
      .uni-comment-date {
        line-height: 38upx;
        flex-direction: row;
        justify-content: space-between;
        display: flex !important;
        flex-grow: 1;
      }
      
      .uni-comment-date view {
        color: #666666;
        font-size: 24upx;
        line-height: 38upx;
      }
      
      .uni-comment-content {
        line-height: 1.6em;
        font-size: 28upx;
        padding: 8rpx 0;
      }
      
      .uni-comment-replay-btn {
        background: #FFF;
        font-size: 24upx;
        line-height: 28upx;
        padding: 5rpx 20upx;
        border-radius: 30upx;
        color: #333 !important;
        margin: 0 10upx;
      }
    }
  }
</style>
