import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum:0,
    userInfo:{}

  },
  mutations: {
  },
  actions: {
    add(context,value){
      console.log(value),
      console.log(context)

    }
  },
  modules: {
  }
})
