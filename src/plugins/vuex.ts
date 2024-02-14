import Vuex from 'vuex'

const store = {
  state() {
    return {
      money: 0
    }
  },
  mutations: {
    increment (state: any) {
      state.count++
    }
  }
}

export default store
