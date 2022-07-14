import api from './api';

export const getCurrentUser = () => {
  return api.get('/users/me');
};
