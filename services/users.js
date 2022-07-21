import api from './api';

export const createUser = (data) => {
  return api.post('/users', data);
};

export const updateUser = (data, id) => {
  const config = {
    headers: {
      Authorization: `${localStorage.getItem('auth._token.local')}`,
    }
  }
  return api.put(`/users/${id}`, data, config);
};

export const getUsersList = () => {
  return api.get(`/users`);
};
