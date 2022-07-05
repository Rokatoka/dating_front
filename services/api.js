import axios from 'axios';

const api = axios.create({
  baseURL: 'http://159.65.194.148:1337/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
