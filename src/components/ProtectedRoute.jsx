import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token); // Check if user is authenticated

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
