<template>
  <view class="header">
    <view class="left">
      <view class="avatar-container">
        <image :src="getavatar" class="avatar"></image>
      </view>
    </view>
    <view class="title">
      {{name}}
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        animation: null,
        animationData: {}
      };
    },
    computed: {
      getavatar() {
        return this.$store.state.curavatar
      },
      name(){
        return this.$store.state.name
      }
    },
    mounted() {}
  }
</script>

<style lang="scss">
  .header {
    color: white;
    text-align: center;
    height: 8vh;
    font-size: 40upx;
    line-height: 8vh;
    display: flex;
    padding: 8upx 0;
    box-sizing: border-box;
    align-items: center;
    .left {
      flex: 1;

      .avatar-container {
        margin: 0 auto;
        width: 8vh;
        height: 8vh;
        border-radius: 50%;
        overflow: hidden;
        border: 8upx solid rgb(138, 151, 123);
        box-sizing: border-box;
        animation: headRotate 6s linear infinite;
        .avatar {
          width: 100%;
          height: 100%;
        }
      }
    }

    .title {
      flex: 2;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  // 头像旋转
  @keyframes headRotate {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
