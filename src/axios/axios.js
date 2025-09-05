import axios from 'axios';

// Use backend port 3001 by default to match the server configuration
const RAW_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const API_URL = RAW_URL.endsWith('/api')
  ? RAW_URL
  : `${RAW_URL.replace(/\/$/, '')}/api`;

const API_ROOT = API_URL.replace(/\/api$/, '');

// Create axios instance with timeout for safety
const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Attach token if present
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // Backend expects the token in the `Bearer` format
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Basic error handling with simple retry for network/5xx errors
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;

    // AbortController cancellations should propagate
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    // Retry once on network errors or 5xx responses
    if (!response || (response.status >= 500 && !config.__retry)) {
      config.__retry = true;
      return instance(config);
    }

    return Promise.reject(
      error.response?.data?.message ? new Error(error.response.data.message) : error,
    );
  },
);

// Helper to create cancellable requests
export const createAbortController = () => new AbortController();

export { API_ROOT };
export default instance;
