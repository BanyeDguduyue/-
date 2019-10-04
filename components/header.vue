<template>
  <view class="header">
    <view class="logo-container">
      
    </view>
    <view class="title">
      
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    computed: {
      getavatar() {
        return this.$store.state.curavatar
      },
      name() {
        return this.$store.state.name
      }
    },
    mounted() {},
    methods: {
      
    }
  }
</script>

<style lang="scss">
  @import '@/static/64tupian/_var.scss';
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
    .logo-container{
      width: 60upx;
      height: 72upx;
      background-image: url($logo);
      background-size: cover;
      margin-left: 60upx;
    }


    .title {
      flex: 2;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  // 头像旋转
  // @keyframes headRotate {
  //   0% {
  //     transform: rotate(0deg);
  //   }

  //   50% {
  //     transform: rotate(180deg);
  //   }

  //   100% {
  //     transform: rotate(360deg);
  //   }
  // }
</style>
