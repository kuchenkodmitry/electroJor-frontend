import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
const instance = axios.create({
  baseURL: API_URL
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export const API_ROOT = API_URL.replace(/\/api$/, '');
export default instance;
