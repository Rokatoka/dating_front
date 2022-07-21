import {
  getTargets,
  getReligions,
  getInterests,
} from '~/services/data'

export const state = () => ({
  targets: [],
  religions: [],
  interests: [],
});

export const mutations = {
  SET_TARGETS: (state, list) => {
    list.forEach((target) => {
      state.targets.push({
        label: target.attributes.name,
        value: target.id,
      });
    });
  },
  SET_INTERESTS: (state, list) => {
    list.forEach((interest) => {
      state.interests.push({
        label: interest.attributes.name,
        value: interest.id,
      });
    });
  },
  SET_RELIGIONS: (state, list) => {
    list.forEach((religion) => {
      state.religions.push({
        label: religion.attributes.name,
        value: religion.id,
      });
    });
  },
};

export const getters = {
  targetsList: (state) => {
    return state.targets;
  },
  interestsList: (state) => {
    return state.interests;
  },
  religionsList: (state) => {
    return state.religions;
  },
};

export const actions = {
  getTargets: async ({ commit, state }) => {
    if (state.targets.length === 0) {
      try {
        const response = await getTargets();

        commit('SET_TARGETS', response.data.data);
      } catch (e) {
        console.error(e);
      }
    }
  },
  getInterests: async ({ commit, state }) => {
    if (state.interests.length === 0) {
      try {
        const response = await getInterests();

        commit('SET_INTERESTS', response.data.data);
      } catch (e) {
        console.error(e);
      }
    }
  },
  getReligions: async ({ commit, state }) => {
    if (state.religions.length === 0) {
      try {
        const response = await getReligions();

        commit('SET_RELIGIONS', response.data.data);
      } catch (e) {
        console.error(e);
      }
    }
  },
};
