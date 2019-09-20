import state from './state'

export default {
  // 计算进度条
  progress(state) {
    if (!state.currentTime) {
      return 0
    }
    return parseFloat(state.currentTime * 100 / state.duration)
  },
  ballprogress(state) {
    if (!state.currentTime1) {
      return 0
    }
    return state.currentTime1 / state.duration1
  }
}