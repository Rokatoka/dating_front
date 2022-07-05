import api from './api';

export const getPickupPhrases = () => {
  return api.get('/pickup-phrases');
};
