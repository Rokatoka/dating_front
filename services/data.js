import api from './api';

export const getCountries = (page) => {
  return api.get(`/countries?pagination[page]=${page}`);
}

export const getCitiesByCountryId = (countryId) => {
  return api.get(`/cities?filters[country][id]=${countryId}`);
}

export const getTargets = () => {
  return api.get(`/targets`);
}

export const getReligions = () => {
  return api.get(`/religions`);
}

export const getInterests = () => {
  return api.get(`/interests`);
}
