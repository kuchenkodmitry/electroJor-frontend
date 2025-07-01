import axios from 'axios';

// Support both with and without the `/api` suffix in the environment variable.
// `API_URL` should always point to the `/api` prefix while `API_ROOT` is the
// host root used for serving static assets like uploaded images.
const RAW_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
const API_URL = RAW_URL.endsWith('/api')
  ? RAW_URL
  : `${RAW_URL.replace(/\/$/, '')}/api`;
const API_ROOT = API_URL.replace(/\/api$/, '');

const instance = axios.create({
  baseURL: API_URL
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export { API_ROOT };
export default instance;
