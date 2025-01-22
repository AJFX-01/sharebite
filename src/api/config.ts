import axios from 'axios';
import toast from 'react-hot-toast';
import paths from 'router/path';
// import paths from 'router/path';

const API_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
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
      localStorage.removeItem('token');
      window.location.href = paths.login;
      toast.error(error.response);
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
