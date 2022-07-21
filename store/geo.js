import { getCountries, getCitiesByCountryId } from '~/services/data';

export const state = () => ({
  countries: [],
  cities: [],
});

export const mutations = {
  SET_COUNTRIES: (state, list) => {
    list.forEach((country) => {
      state.countries.push({
        label: country.attributes.name,
        value: country.id,
      });
    });
  },
  SET_CITIES: (state, list) => {
    list.forEach((city) => {
      state.cities.push({
        label: city.attributes.name,
        value: city.id,
      });
    });
  },
  CLEAR_CITIES: (state) => {
    state.cities = [];
  }
};

export const getters = {
  countriesList: (state) => {
    return state.countries;
  },
  citiesList: (state) => {
    return state.cities;
  },
};

export const actions = {
  getCountries: async ({ commit, state }) => {
    if (state.countries.length === 0) {
      try {
        const response = await getCountries(1);
        const pages = response.data.meta.pagination.pageCount;

        commit('SET_COUNTRIES', response.data.data);

        for (let i = 2; i <= pages; i++) {
          const nextResponse = await getCountries(i);

          commit('SET_COUNTRIES', nextResponse.data.data);
        }
      } catch (e) {
        console.error(e);
      }
    }
  },
  getCities: async ({ commit }, countryId) => {
    commit('CLEAR_CITIES');

    try {
      const response = await getCitiesByCountryId(countryId);

      commit('SET_CITIES', response.data.data);
    } catch (e) {
      console.error(e);
    }
  },
};
