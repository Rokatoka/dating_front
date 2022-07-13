import { getCurrentUser } from '~/services/auth';

export const state = () => ({
  currentUser: null,
});

export const mutations = {
  SET_CURRENT_USER: (state, user) => {
    state.currentUser = user;
  }
};

export const getters = {
  getUser: (state) => {
    return state.currentUser;
  }
};

export const actions = {
  getCurrentUser: ({ commit }) => {
    return getCurrentUser().then((response) => {
      commit('SET_CURRENT_USER', response.data);
    })
  }
};
