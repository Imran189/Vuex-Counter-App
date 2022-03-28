import { createStore } from 'vuex'
import axios from "axios"

const store = createStore({
  state () {
    return {
      count: 10,
      history:[0]
    }
  },
  mutations: {
    increment (state,payload) {
      state.count = state.count + payload;
      state.history.push(state.count) 
    },
    decrement (state,payload) {
      state.count = state.count - payload
      state.history.push(state.count) 

    }
  },
  actions:{
    async addRandomNum(context){
      let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
      console.log(data);
      context.commit("increment",data.data);
    }
  },
  getters:{
    activeIndex:(state)=>(payload)=>{
      let indexes = [];
      state.history.forEach((number, index) => {
        if(number === payload){
          indexes.push(index)
        }
      });
      return indexes
    }
  }
})

export default store

