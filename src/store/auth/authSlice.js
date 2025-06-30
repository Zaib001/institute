import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your backend URL

// Set up Axios to include token in headers
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Async action for signup
export const signup = createAsyncThunk('auth/signup', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Signup failed');
  }
});

// Async action for login
export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    // Save token, user data, and timestamp to localStorage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('loginTimestamp', Date.now()); // Save timestamp
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Login failed');
  }
});

// Function to check if data is expired
const isSessionExpired = () => {
  const timestamp = localStorage.getItem('loginTimestamp');
  if (timestamp) {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000; // One hour in milliseconds
    return now - parseInt(timestamp, 10) > oneHour;
  }
  return true;
};

// Load initial state from localStorage if available and not expired
let initialState = {
  user: null,
  token: null,
  role: null,
  loading: false,
  error: null,
};

if (!isSessionExpired()) {
  initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token'),
    role: JSON.parse(localStorage.getItem('user'))?.role,
    loading: false,
    error: null,
  };
} else {
  // Clear expired data from localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('loginTimestamp');
}

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('loginTimestamp');
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.user.role;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
     
  },
});

export const { logout , updateUser } = authSlice.actions;
export default authSlice.reducer;
