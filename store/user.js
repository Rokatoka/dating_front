import { getUsersList } from '~/services/users';

export const state = () => ({
  list: [],
});

export const mutations = {
  SET_LIST: (state, list) => {
    state.list = list;
  }
};

export const getters = {
  getList: (state) => {
    return state.list;
  }
};

export const actions = {
  getList: ({ commit }) => {
    return getUsersList().then((response) => {
      commit('SET_LIST', response.data);
    })
  }
};
