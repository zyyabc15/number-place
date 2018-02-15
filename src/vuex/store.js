import Vue from 'vue'
import Vuex from 'vuex'
import fn from './fn'
Vue.use(Vuex)
// 需要维护的状态
// 初始化 state
const state = {
  timer: 0,
  steps: 0,
  init: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  time: 0,
  begin: false,
  success: false
}
// 初始化 mutations
const mutations = {
  init(state) {
    this.state.init = fn.shuffle1(this.state.init)
  },
  refresh(state) {
    this.state.timer = fn.clear(state)
    this.state.steps = 0
    this.state.time = 0
    this.state.init = fn.shuffle(this.state.init)
    this.state.begin = false
    this.state.success = false
  },
  clear() {
    fn.clear(state)
  },
  clickPoint(state, p) {
    const index = fn.getBlankIndex(p.x, p.y, this.state.init)
    const index1 = fn.getIndex(p.x, p.y)
    if (index === -1) {
      return -1
    } else {
      if (!this.state.begin) {
        this.state.timer = fn.start(this.state)
        this.state.begin = true
      }
      this.state.steps++
      this.state.init = fn.exchangePoints(index, index1, this.state.init)
      Vue.set(this.state.init, 0, this.state.init[0])
      this.state.success = fn.checkSuccess(this.state.init)
    }
    // console.log(this.state.init)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
