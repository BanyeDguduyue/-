<template>
  <view class="recommend">
    <view class="seelist" v-if="isshowlist">
      <songlist :sendsonglist='sendsonglist' @closelist='changeisshowlist'></songlist>
    </view>
    <scroll-view  scroll-y="true" class="scroll-Y songs-list" v-if="!isshowlist">
      <view class="music-special">
        <view class="title">
          云音乐特色榜
        </view>
        <view class="list">
          <view class="item" v-for="(item,idx) in songrankinglist" :key='idx' @tap="sendlist1(item.id)">
            <image lazy-load="true" class="type-img" :src="item.imgurl" mode=""></image>
            <view class="description">
              {{item.name}}
            </view>
          </view>
        </view>
      </view>
      <view class="music-special">
        <view class="title">
          热门歌单
        </view>
        <view class="list">
          <view class="item" v-for="(item,idx) in hotsonglist" :key='idx' @tap="sendlist2(item.id)">
            <image class="type-img" :src="item.imgurl" mode=""></image>
            <view class="description">
              {{item.name}}
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import songlist from '@/components/songlist.vue'
  export default {
    data() {
      return {
        songrankinglist:[],
        hotsonglist:[],
        sendsonglist:[],
        isshowlist: false
      };
    },
    components:{
      songlist
    },
    mounted(){
      uni.request({
        url: 'http://39.107.80.8:5000/toplist',
        method: 'GET',
        data: {},
        success: res => {
          const data = res.data.list.splice(0,6)
          this.songrankinglist= data.map((item,idx) => {
            return {
              name:item.name,
              imgurl: item.coverImgUrl,
              id: idx
            }
          })
        },
        fail: () => {},
        complete: () => {}
      })
      uni.request({
        url: 'http://39.107.80.8:5000/personalized?limit=30',
        method: 'GET',
        data: {},
        success: res => {
          const data = res.data.result
          this.hotsonglist = data.map((item,idx) => {
            return {
              name:item.name,
              imgurl: item.picUrl,
              id: item.id
            }
          })
        },
        fail: () => {},
        complete: () => {}
      })
    },
    methods:{
      changeisshowlist(val){
        this.isshowlist = val
      },
      sendlist1(id){
        uni.showLoading({
            title: '加载中',
            mask: true
        });
        
        uni.request({
          url: 'http://39.107.80.8:5000/top/list?idx='+id
          ,
          method: 'GET',
          data: {},
          success: res => {
            const data = res.data.playlist.tracks.splice(0, 100)
            this.sendsonglist = data.map(item => {
              let sin = ''
              item.ar.forEach((itm, idx) => {
                if (idx == 0) {
                  sin = itm.name
                } else {
                  sin = sin + '/' + itm.name
                }
              })
              return {
                name: item.name,
                singer: item.ar.length == 1 ? item.ar[0].name : sin,
                id: item.id,
                picurl: item.al.picUrl
              }
            })
            this.isshowlist = true
            uni.hideLoading()
          },
          fail: () => {},
          complete: () => {}
        });
      },
      sendlist2(id){
        uni.showLoading({
            title: '加载中',
            mask: true
        });
        
        uni.request({
          url: 'http://39.107.80.8:5000/playlist/detail?id='+id
          ,
          method: 'GET',
          data: {},
          success: res => {
            const data = res.data.playlist.tracks.splice(0, 100)
            this.sendsonglist = data.map(item => {
              let sin = ''
              item.ar.forEach((itm, idx) => {
                if (idx == 0) {
                  sin = itm.name
                } else {
                  sin = sin + '/' + itm.name
                }
              })
              return {
                name: item.name,
                singer: item.ar.length == 1 ? item.ar[0].name : sin,
                id: item.id,
                picurl: item.al.picUrl
              }
            })
            this.isshowlist = true
            uni.hideLoading()
          },
          fail: () => {},
          complete: () => {}
        });
      }
    }
  }
</script>

<style lang="scss">
  .recommend {
    width: 100%;
    height: 100%;
    padding: 10upx;
    box-sizing: border-box;
    color: white;
    .songs-list{
      width: 100%;
      height: 65vh;
      .music-special {
        width: 100%;
        margin-top: 3vh;
        .title{
          margin-bottom: 2vh;
        }
        .list {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          .item{
            width: 33.3%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 3vh;
            .type-img{
              width: 160upx;
              height: 160upx;
            }
            .description{
              width: 80%;
              text-align: center;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              font-size: 30upx;
            }
          }
        }
      }
    }
  }
</style>
