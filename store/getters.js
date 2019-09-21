import state from './state'

export default {
  //计算小球的进度
  ballprogress(state) {
    if (!state.currentTime1) {
      return 0
    }
    return state.currentTime1 / state.duration1
  }
}