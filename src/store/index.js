import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice'; // Replace with your path

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
