import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/auth/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const response = await dispatch(signup(formData)).unwrap();
      if (response) {
        toast.success('Sign up successful! Please check your email to verify your account.');
        navigate('/login'); // Redirect to the login page
      }
    } catch (error) {
      toast.error('An error occurred during sign up.');
      console.log(error);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      // Decode JWT token from Google credential
      const jwtDecoded = JSON.parse(atob(credentialResponse.credential.split('.')[1]));
      const { email, name } = jwtDecoded;
  
      // Dispatch signup or login action with Google info
      const response = await dispatch(signup({ email, name, googleAuth: true })).unwrap();
      if (response) {
        toast.success('Sign up successful via Google!');
        navigate('/'); // Redirect to a secure page
      }
    } catch (error) {
      toast.error('Google sign up failed.');
      console.log("Google Signup Error:", error);
    }
  };
  

  const handleGoogleError = () => {
    toast.error('Google login failed. Please try again.');
  };

  return (
    <GoogleOAuthProvider clientId="507482467660-qlsofs14dluttbn04a2nakk80g7kcmf6.apps.googleusercontent.com">
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-red-700 text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300"
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-500">or sign up with</p>
            <div className="mt-4">
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
            </div>
          </div>
        </div>
      </section>
    </GoogleOAuthProvider>
  );
};

export default SignupPage;
