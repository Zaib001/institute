import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaUser, FaEnvelope, FaPhone, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const userId = useSelector((state) => state.auth.user?._id); // Get userId from Redux

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/auth/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(response.data);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone || '',
        });
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch user details:', error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleUpdateUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:5000/api/auth/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserDetails(response.data.updatedUser);
      setIsEditing(false);
      alert('User details updated successfully!');
    } catch (error) {
      console.error('Failed to update user details:', error);
      alert('Error updating user details.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <motion.div
          className="loader"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <FaUser className="text-red-700 text-5xl" />
        </motion.div>
      </div>
    );
  }

  if (!userDetails) {
    return <p className="text-center text-red-700">User details not available.</p>;
  }

  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-red-700">User Profile</h2>
        <p className="text-center text-gray-600">Manage your profile details</p>
      </motion.div>
      <div className="flex items-center mb-4">
        <FaUser className="text-red-700 text-4xl mr-3" />
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-b-2 border-gray-300 outline-none focus:border-red-700 w-full p-2 text-lg"
          />
        ) : (
          <h3 className="text-2xl font-semibold text-gray-800">{userDetails.name}</h3>
        )}
      </div>
      <div className="flex items-center mb-4">
        <FaEnvelope className="text-red-700 text-2xl mr-3" />
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-b-2 border-gray-300 outline-none focus:border-red-700 w-full p-2 text-lg"
          />
        ) : (
          <p className="text-lg text-gray-700">{userDetails.email}</p>
        )}
      </div>
      <div className="flex items-center mb-4">
        <FaPhone className="text-red-700 text-2xl mr-3" />
        {isEditing ? (
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border-b-2 border-gray-300 outline-none focus:border-red-700 w-full p-2 text-lg"
          />
        ) : (
          <p className="text-lg text-gray-700">{userDetails.phone || 'N/A'}</p>
        )}
      </div>
      <div className="flex justify-end">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdateUser}
              className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition duration-300 mr-2"
            >
              <FaSave className="inline-block mr-2" /> Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition duration-300"
            >
              <FaTimes className="inline-block mr-2" /> Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-red-700 text-white py-2 px-4 rounded shadow hover:bg-red-800 transition duration-300"
          >
            <FaEdit className="inline-block mr-2" /> Edit
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default UserDetails;
