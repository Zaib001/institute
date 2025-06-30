import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, updateUser } from '../store/auth/authSlice';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields.');
      return;
    }
    try {
      const result = await dispatch(login(formData)).unwrap();
      toast.success('Login successful!');
      navigate('/home');
    } catch (error) {
      if (error.status === 403) {
        toast.error('Login forbidden: Please check your credentials or permissions.');
      } else {
        toast.error('An error occurred during login. Please try again.');
      }
      console.log('Login Error:', error);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
  
      // Send Google token to the backend
      const response = await axios.post('http://localhost:5000/api/auth/google-login', {
        token: credential,
      });
  
      const { token, user } = response.data;
  
      // Save token and update Redux store
      localStorage.setItem('token', token);
      dispatch(updateUser(user)); // Update Redux user state
      toast.success(`Welcome back, ${user.name}!`);
      navigate('/home');
    } catch (error) {
      console.error('Google Login Error:', error);
      toast.error('Google login failed. Please try again.');
    }
  };
  

  return (
    <GoogleOAuthProvider clientId="507482467660-qlsofs14dluttbn04a2nakk80g7kcmf6.apps.googleusercontent.com">
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-red-700 text-center mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </motion.button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-500">or sign in with</p>
            <div className="mt-4">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => toast.error('Google login failed. Please try again.')}
              />
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{' '}
            <a href="/signup" className="text-red-700 hover:underline">
              Sign Up
            </a>
          </p>
        </motion.div>
      </section>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
