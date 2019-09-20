export default {
  // 音频链接
  musicUrl: '',
  // 创建音频
  innerAudioContext: uni.createInnerAudioContext(),
  // 定时器进度条
  timer: null,
  // 进度条走的时间
  currentTime: null,
  duration: null,
  // 控制所有的play样式
  musicisplay: false,
  // 当前的歌曲id
  nowsong: null,
  
  kuailocation: 0,
  // 滑块的进度
  currentTime1: null,
  duration1: null,
  // 滑块的定时器
  timer1: null,
  // 循环方式
  loop_type: 'list-loop',
  // 歌曲列表
  sonlists:[],
  // 初始的图片背景
  bgimgurl: 'http://n.sinaimg.cn/translate/19/w1024h595/20190920/f48b-iewtemz4172127.jpg',
  // 初始化头像
  avatar: 'http://img4.imgtn.bdimg.com/it/u=3259600917,179456761&fm=26&gp=0.jpg'
}