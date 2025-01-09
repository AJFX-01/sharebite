import axios from 'axios';
import paths from 'router/path';

const API_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accesToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && error.response) {
      // If we receive a 401 error, clear the token and redirect to login
      localStorage.removeItem('accessToken');
      window.location.href = paths.login;
    }
  },
);

export const handleAxiosError = (error: unknown): never => {
  if (axios.isAxiosError(error) && error.response) {
    throw new Error(error.response.data.error || 'An unknown error occurred.');
  } else {
    throw new Error('An error occurred while processing your request.');
  }
};
