import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      lasaves:[],
  },
  getters: {
  },
  mutations: {
    changeLasAves(state, ave ){
      state.lasaves.push(ave);
    },
  },
  actions: {
          async getAves({ commit }){
          const res = await fetch("https://aves.ninjas.cl/api/birds");
          const json = await res.json();
          console.log(json);
          for(let ave of json){
            commit("changeLasAves", ave);
          }


        },

  },
  modules: {
  }
})
