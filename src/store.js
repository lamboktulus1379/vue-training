import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    log: false,
    userEmail: "",
    userPassword: "",
    userGender: "",
    userHobby: [],
    userPlaceOfBirth: "",
    userJobSeek: "",
    userImage: ""
  },
  getters: {
    getLog(state) {
      return state.log;
    },

    getEmail(state) {
      return state.userEmail;
    },
    getPassword(state) {
      return state.userPassword;
    },
    getGender(state) {
      return state.userGender;
    },
    getHobby(state) {
      return state.userHobby;
    },
    getPlaceOfBirth(state) {
      return state.userPlaceOfBirth;
    },
    getJobSeek(state) {
      return state.userJobSeek;
    },
    getImage(state) {
      return state.userImage;
    }
  },
  mutations: {
    setLog(state, retState) {
      state.log = retState;
    },
    setEmail(state, retEmail) {
      state.userEmail = retEmail;
    },
    setPassword(state, retPassword) {
      state.userPassword = retPassword;
    },
    setGender(state, retGender) {
      state.userGender = retGender;
    },
    setHobby(state, retHobby) {
      state.userHobby = retHobby;
    },
    setPlaceOfBirth(state, retPlaceOfBirth) {
      state.userPlaceOfBirth = retPlaceOfBirth;
    },
    setJobSeek(state, retJobSeek) {
      state.userJobSeek = retJobSeek;
    },
    setImage(state, retImage) {
      state.userImage = retImage;
    }
  },
  actions: {
    login({ commit }) {
      this.commit("setLog", true);
    },
    retEmail({ commit }, payload) {
      this.commit("setEmail", payload);
    },
    retPassword({ commit }, payload) {
      this.commit("setPassword", payload);
    },
    retGender({ commit }, payload) {
      this.commit("setGender", payload);
    },
    retHobby({ commit }, payload) {
      this.commit("setHobby", payload);
    },
    retPlaceOfBirth({ commit }, payload) {
      this.commit("setPlaceOfBirth", payload);
    },
    retJobSeek({ commit }, payload) {
      this.commit("setJobSeek", payload);
    },
    retImage({ commit }, payload) {
      this.commit("setImage", payload);
    }
  }
});
