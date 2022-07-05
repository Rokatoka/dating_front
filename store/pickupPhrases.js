import { getPickupPhrases } from '~/services/pickupPhrases';

export const state = () => ({
    phrases: [],
});

export const mutations = {
  SET_PHRASES: (state, list) => {
    state.phrases = list;
  }
}

export const actions = {
  getPhrases: ({ commit }) => {
    return getPickupPhrases().then((response) => {
      commit('SET_PHRASES', response.data.data);
    })
  }
};
