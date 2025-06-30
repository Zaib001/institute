import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaArrowRight, FaTimes, FaCheckCircle } from 'react-icons/fa';

const Modal = ({ course, userId, onClose, onComplete }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const token = localStorage.getItem('token');
  const totalVideos = course.videos.length;
const courseId = course._id;
  // Calculate progress as a percentage based on the current video index (1-based)
  const calculateProgress = (currentIndex) => {
    return Math.round(((currentIndex + 1) / totalVideos) * 100);
  };

  const updateProgressInBackend = async (videoIndex) => {
    try {
        await axios.put(
            `http://localhost:5000/api/courses/update-progress/${userId}/${courseId}/${videoIndex}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
      console.error('Error updating progress in the backend:', error);
    }
  };

  const handleNextVideo = async () => {
    if (currentVideoIndex < totalVideos - 1) {
      const newIndex = currentVideoIndex + 1;
      setCurrentVideoIndex(newIndex);
      const newProgress = calculateProgress(newIndex);
      setProgress(newProgress);
      await updateProgressInBackend(newIndex + 1); // Send 1-based index to backend
    } else {
      handleCompleteCourse();
    }
  };

  const handleCompleteCourse = async () => {
    setProgress(100); // Set progress to 100% when course is completed
    await updateProgressInBackend(totalVideos); // Send the final video index to update progress
    onComplete();
  };

  if (!course.videos || course.videos.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <motion.div
          className="bg-white rounded-lg shadow-lg w-3/4 p-6 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button className="absolute top-2 right-2 text-gray-500 hover:text-red-700" onClick={onClose}>
            <FaTimes size={24} />
          </button>
          <h2 className="text-2xl font-bold text-red-700 mb-4">{course.title}</h2>
          <p className="text-gray-600">No videos available for this course.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <motion.div
        className="bg-white rounded-lg shadow-lg w-3/4 p-6 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button className="absolute top-2 right-2 text-gray-500 hover:text-red-700" onClick={onClose}>
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-bold text-red-700 mb-4">{course.title}</h2>
        {course.videos && (
          <video
            controls
            src={`http://localhost:5000/${course.videos[currentVideoIndex].replace(/\\/g, '/')}`}
            className="w-full h-64 mb-4"
          />
        )}
        <div className="flex justify-between items-center mt-4">
          {currentVideoIndex < totalVideos - 1 ? (
            <button
              className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300"
              onClick={handleNextVideo}
            >
              Next <FaArrowRight />
            </button>
          ) : (
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center"
              onClick={handleCompleteCourse}
            >
              Complete Course <FaCheckCircle className="ml-2" />
            </button>
          )}
        </div>
        <p className="mt-4 text-gray-700">Progress: {Math.round(progress)}%</p>
      </motion.div>
    </div>
  );
};

export default Modal;
