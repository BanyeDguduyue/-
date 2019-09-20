import store from './index'
import state from './state'


export default {
  changemusicUrl(state, url) {
    state.musicUrl = url
  },
  // 播放其他的音乐
  getMusicAndPlay(state, obj) {
    const {
      src,
      id
    } = obj
    // 当前是第几首歌
    state.nowsong = id
    // 设定src
    state.innerAudioContext.src = src
    store.commit('playMusic')
  },
  // 播放音乐
  playMusic(state) {
    clearInterval(state.timer)
    clearInterval(state.timer1)
    // 更换样式
    state.musicisplay = true
    // 播放音乐
    state.innerAudioContext.play();
    // 开启定时器计算进度条
    state.timer = setInterval(() => {
      state.currentTime = state.innerAudioContext.currentTime
      state.duration = state.innerAudioContext.duration
    }, 1000)
    store.commit('aloneballp')
    
    // 自然播放完成后的一些操作如循环播放等
    state.innerAudioContext.onEnded(() => {
      store.commit('getURLandPlay')
      state.musicisplay = false
    })
  },
  // 暂停音乐
  pauseMusic(state) {
    // 停止进度条
    clearInterval(state.timer)
    clearInterval(state.timer1)
    // 暂停音乐
    state.innerAudioContext.pause();
    // 更改样式
    state.musicisplay = false
  },
  //单独计算小球的进度
  aloneballp(state) {
    state.timer1 = setInterval(() => {
      state.currentTime1 = state.innerAudioContext.currentTime
      state.duration1 = state.innerAudioContext.duration
    }, 1000)
  },
  // 停止小球的计算
  stopballp(state) {
    clearInterval(state.timer1)
  },
  // 歌曲时间跳转
  jumpToTarget(state,time){
    state.innerAudioContext.seek(time)
  },
  getlooptype(state,type){
    state.loop_type = type
  },
  getsonglist(state,list){
    state.sonlists = list
  },
  getURLandPlay(state){
    let nexitem
    // 列表循环
    if(state.loop_type == 'list-loop'){
      state.sonlists.forEach((item, idx) => {
        if (item.id == state.nowsong) {
          const i = idx + 1 == state.sonlists.length ? 0 : idx + 1
          nexitem = state.sonlists[i]
        }
      })
    }
    
    // 随机循环
    if(state.loop_type == 'random'){
      const i = parseInt(Math.random()*(state.sonlists.length+1))
      nexitem = state.sonlists[i]
    }
    
    // 单曲循环
    if(state.loop_type == 'single-loop'){
      
      nexitem = state.sonlists.filter(item => item.id == state.nowsong)[0]
    }
    
    console.log(nexitem);
    // 发送请求获取url
    uni.request({
      url: 'http://127.0.0.1:3000/song/url?id=' + nexitem.id,
      method: 'GET',
      data: {},
      success: res => {
        const url = res.data.data[0].url
        store.commit('getMusicAndPlay', {
          src: url,
          id: nexitem.id
        })
      },
      fail: () => {},
      complete: () => {}
    });
  }
}