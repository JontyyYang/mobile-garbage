const initialState = {
  user_info: '',
};

const types = {
  SET_USER_INFO: 'SET_USER_INFO',
};

// ========= action ========= //

const actions = {
  setUserInfo({ commit }, payload) {
    commit({
      type: types.SET_USER_INFO,
      payload,
    });
  },
};

// ========= mutation ========= //
const mutations = {
  [types.SET_USER_INFO]: (state, { payload }) => {
    state.user_info = payload;
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
