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
    if(src){
      // 停止播放歌曲
      state.innerAudioContext.stop()
      // 清空音频
      state.innerAudioContext = null
      // 创建音频
      state.innerAudioContext = uni.createInnerAudioContext()
      // 获取歌的id
      state.nowsong = id
      // 设定src
      state.innerAudioContext.src = src
      // 判断歌单是否存在当前的歌
      if(!state.sonlists.find(item=> item.id == obj.searchpush.id )){
        state.sonlists.unshift(obj.searchpush)
      }
      // 我听过的歌单
      if(!state.mysonglist.find((item)=>item.id == obj.searchpush.id)){
        state.mysonglist.unshift(obj.searchpush)
      }
      // 获取筛选出当前歌曲的背景图
      if(state.sonlists.filter(item => item.id == state.nowsong)[0].picurl){
        state.bgimgurl = state.sonlists.filter(item => item.id == state.nowsong)[0].picurl
      }else{
        state.bgimgurl = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=18359934,941876167&fm=26&gp=0.jpg'
      }
      
      // 更改歌曲名字
      state.name = state.sonlists.filter(item => item.id == state.nowsong)[0].name
      // 保存歌手名
      state.singer = state.sonlists.filter(item => item.id == state.nowsong)[0].singer
      // 获取歌词
      store.commit('getSonglistInfo')
      // 播放音乐
      store.commit('playMusic')
    }
    
    // 如果没有音乐链接则提示
    if(!src){
      uni.showToast({
          title: '音频链接扯拐了,w(ﾟДﾟ)w',
          duration: 2000,
          icon:'none'
      });
    }
  },
  // 播放音乐
  playMusic(state) {
    // 清空定时器
    clearInterval(state.timer)
    clearInterval(state.timer1)
    // 播放音乐
    state.innerAudioContext.play();
    
    state.innerAudioContext.onPlay(() => {
      // 等到歌曲播放时
      // 更换样式
      state.musicisplay = true
    })
    
    state.innerAudioContext.onError(()=>{
      console.log(1);
      uni.showToast({
          title: '播放扯拐了，w(ﾟДﾟ)w',
          duration: 2000,
          icon:'none'
      });
    })
    // 获取总时间
    state.timer = setInterval(() => {
      state.duration = state.innerAudioContext.duration
    }, 1000)

    // 开启计算小球的进度条
    store.commit('aloneballp')

    // 监听自然播放完成后的一些操作如循环播放等
    state.innerAudioContext.onEnded(() => {
      // 更改样式
      state.musicisplay = false
      // 播放模式
      store.commit('getURLandPlay')
    })
  },
  // 暂停音乐
  pauseMusic(state) {
    // 停止进度条小球
    clearInterval(state.timer)
    clearInterval(state.timer1)
    // 暂停音乐
    state.innerAudioContext.pause();

    state.innerAudioContext.onPause(() => {
      // 更改样式
      state.musicisplay = false
    })
  },
  getSonglistInfo(state){
    state.lyricObj.lyricList = []
    state.lyricObj.timeList = []
    uni.request({
      url: 'http://39.107.80.8:5000/lyric?id='+ state.nowsong,
      method: 'GET',
      data: {},
      success: res => {
        // 如果发送请求后没有歌词那么就返回此选项 并停止向下运行了
        if(!res.data.lrc){
          state.lyricObj.lyricList = ['这首歌没有歌词，不好意思(lll￢ω￢)']
          return
        }
        // 从换行符进行切割
        const data = res.data.lrc.lyric.split('\n')
        // 正则匹配,()可以单独取出
        const timeReg = /\[(\d*:\d*\.\d*)\]/
        
        data.forEach((item,index) => {
          // 判断歌词是否为空 从]切割 第项如果不为空那么就往下执行
          if(item.split(']')[1] !==''){
            // 防止有空项 有的歌词最后一项是空
            if(item !== ''){
              // 获取时间的字符串
              const timeStr = timeReg.exec(item)[1]
              // 从:处切割
              const res = timeStr.split(':')
              // 计算分钟
              const min = parseInt(res[0]) * 60
              // 计算秒数
              const sec = parseFloat(res[1])
              // 计算总时间 
              const time = Number(min + sec).toFixed(2)
              // 将歌词推进数组
              state.lyricObj.lyricList.push(item.split(']')[1])
              // 将时间也推进相对应的数组
              state.lyricObj.timeList.push(time)
            }
          }
        })
      },
      fail: () => {},
      complete: () => {}
    });
  },
  //单独计算小球的进度
  aloneballp(state) {
    // 先清除再开启
    clearInterval(state.timer1)
    state.timer1 = setInterval(() => {
      // 获取进度条走的时间
      state.currentTime1 = state.innerAudioContext.currentTime
      // 获取整体时间
      state.duration1 = state.innerAudioContext.duration
    }, 1000)
  },
  // 停止小球的计算
  stopballp(state) {
    // 关闭定时器
    clearInterval(state.timer1)
  },
  // 歌曲时间跳转
  jumpToTarget(state, time) {
    // 调用seek方法跳转时间
    state.innerAudioContext.seek(time)
  },
  getlooptype(state, type) {
    // 获取用户选择的播放模式
    state.loop_type = type
  },
  getsonglist(state, list) {
    // 获取歌曲的列表
    state.sonlists = list
  },
  getURLandPlay(state) {
    // 定义下一首歌
    let nexitem
    // 列表循环
    if (state.loop_type == 'list-loop') {
      state.sonlists.forEach((item, idx) => {
        if (item.id == state.nowsong) {
          const i = idx + 1 == state.sonlists.length ? 0 : idx + 1
          nexitem = state.sonlists[i]
        }
      })
    }

    // 随机循环
    if (state.loop_type == 'random') {
      const i = parseInt(Math.random() * (state.sonlists.length + 1))
      nexitem = state.sonlists[i]
    }

    // 单曲循环
    if (state.loop_type == 'single-loop') {
      nexitem = state.sonlists.filter(item => item.id == state.nowsong)[0]
    }
    // 发送请求获取url
    uni.request({
      url: 'http://39.107.80.8:5000/song/url?id=' + nexitem.id,
      method: 'GET',
      data: {},
      success: res => {
        const url = res.data.data[0].url
        store.commit('getMusicAndPlay', {
          src: url,
          id: nexitem.id,
          searchpush:nexitem
        })
      },
      fail: () => {},
      complete: () => {}
    });
  },
  changeAvatar(state,url){
    state.curavatar = url
  },
  getmvid(state,id){
    state.mvid = id
  }
}
