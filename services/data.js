import api from './api';

export const getCountries = (page) => {
  return api.get(`/countries?pagination[page]=${page}`);
}

export const getCitiesByCountryId = (countryId) => {
  return api.get(`/cities?filters[country][id]=${countryId}`);
}
