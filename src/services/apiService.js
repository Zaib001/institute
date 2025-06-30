import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set token in headers for authenticated routes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = (userData) => api.post('/signup', userData);
export const login = (credentials) => api.post('/login', credentials);
export const getProfile = () => api.get('/profile');
export const getUsers = () => api.get('/');
export const getUserById = (id) => api.get(`/${id}`);
export const editUser = (id, userData) => api.put(`/${id}`, userData);
export const deleteUser = (id) => api.delete(`/${id}`);
