import axios from 'axios';

const RAW_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

const API_URL = RAW_URL.endsWith('/api')
  ? RAW_URL
  : `${RAW_URL.replace(/\/$/, '')}/api`;

const API_ROOT = API_URL.replace(/\/api$/, '');

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // Backend expects the token in the `Bearer` format
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { API_ROOT };
export default instance;
