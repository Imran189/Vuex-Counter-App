import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      count: 10
    }
  },
  mutations: {
    increment (state,payload) {
      state.count = state.count + payload
    },
    decrement (state,payload) {
      state.count = state.count - payload
    }
  }
})

export default store

