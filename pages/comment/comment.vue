<template>
  <view>
    <view class="uni-padding-wrap">
      <!-- 评论区 start -->
      <view class="uni-comment">
        <view class="uni-comment-list" v-for="(item,idx) in commentlist" :key='idx'>
          <view class="uni-comment-face">
            <image :src="item.avatar" mode="widthFix"></image>
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
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: "评论界面",
        commentlist: []
      }
    },
    methods: {
      formatTime(time) {
        var now = new Date(time);
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
      }
    },
    onLoad(e) {
      const id = e.songid
      uni.request({
        url: `http://39.107.80.8:5000/comment/music?id=${id}&limit=20`,
        method: 'GET',
        data: {},
        success: res => {
          const data = res.data.hotComments
          this.commentlist = data.map((item, idx) => {
            return {
              content: item.content,
              nickname: item.user.nickname,
              time: this.formatTime(item.time),
              avatar: item.user.avatarUrl
            }
          })
        },
        fail: () => {},
        complete: () => {}
      });
    }
  }
</script>

<style>
  /* comment */
  page {
    background-color: #f8f8f8;
  }

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
</style>
