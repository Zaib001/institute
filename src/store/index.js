import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(composeWithDevTools()),
});

export default store;
