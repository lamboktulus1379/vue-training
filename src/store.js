import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    log: false,
    userEmail: ""
  },
  getters: {
    getLog(state) {
      return state.log;
    },

    getEmail(state) {
      return state.userEmail;
    }
  },
  mutations: {
    setLog(state, retState) {
      state.log = retState;
    },
    setEmail(state, retEmail) {
      state.userEmail = retEmail;
    }
  },
  actions: {
    login({ commit }) {
      this.commit("setLog", true);
    },
    retEmail({ commit }) {
      this.commit("setEmail", "andi123@gmail.com");
    }
  }
});
