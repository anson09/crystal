import Vue from "vue";
import Vuex from "vuex";
import demo from "./modules/demo";

Vue.use(Vuex);

const modules = {
  demo
};

function state() {}

const getters = {};

const mutations = {
  CLEAR_STATE(s) {
    const i = state();
    Object.keys(i).forEach(k => {
      s[k] = i[k];
    });
  }
};

const actions = {
  clearAllState({ commit }) {
    commit("CLEAR_STATE");
    Object.keys(modules).forEach(i => commit(`${i}/CLEAR_STATE`));
  }
};

export default function createStore() {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
  });
}
