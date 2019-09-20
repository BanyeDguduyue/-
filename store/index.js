import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    musicUrl: '',
    innerAudioContext : uni.createInnerAudioContext(),
    timer: null,
    currentTime: null,
    duration: null,
    musicisplay: false,
    nowsong: null,
    kuailocation: 0,
    currentTime1: null,
    duration1:null,
    timer1: null
  },
  mutations: {
    changemusicUrl(state, url) {
      state.musicUrl = url
    },
    // 播放其他的音乐
    getMusicAndPlay(state,obj){
      const {src,id} = obj
      // 当前是第几首歌
      state.nowsong = id
      // 设定src
      state.innerAudioContext.src = src
      store.commit('playMusic')
    },
    // 播放音乐
    playMusic(state){
      // 更换样式
      state.musicisplay = true
      // 播放音乐
      state.innerAudioContext.play();
      // 开启定时器计算进度条
      state.timer = setInterval(()=>{
        state.currentTime = state.innerAudioContext.currentTime
        state.duration = state.innerAudioContext.duration
      },1000)
      state.innerAudioContext.onEnded(()=>{
        state.musicisplay = false
      })
    },
    // 暂停音乐
    pauseMusic(state){
      // 停止进度条
      clearInterval(state.timer)
      // 暂停音乐
      state.innerAudioContext.pause();
      // 更改样式
      state.musicisplay = false
    }
  },
  actions: {
    changemusicUrl({commit,url}) {
      commit('changemusicUrl',url)
      commit('playMusic')
    },
  },
  getters:{
    // 计算进度条
    progress(state){
      if(!state.currentTime){
        return 0
      }
      return parseFloat(state.currentTime*100/state.duration)
    }
  }
})
export default store
