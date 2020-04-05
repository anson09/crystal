function state() {
  return {};
}

const getters = {};

const mutations = {
  CLEAR_STATE(s) {
    const i = state();
    Object.keys(i).forEach((k) => {
      s[k] = i[k];
    });
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
