import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LoadingComponent from './LoadingComponent';
import { FaBookOpen } from 'react-icons/fa';

const ProgressTracker = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = useSelector((state) => state.auth.user?._id);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/courses/enrollments/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEnrolledCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
        setError('Failed to load enrolled courses.');
        setLoading(false);
      }
    };

    if (userId) {
      fetchEnrolledCourses();
    }
  }, [userId]);

  if (loading) {
    return <LoadingComponent message="Loading your courses..." />;
  }

  if (error) {
    return <p className="text-center text-red-700">{error}</p>;
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-red-700 mb-6">Progress Tracker</h2>
      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((enrollment, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-gradient-to-br from-red-50 to-white hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{enrollment.courseId.title}</h3>
              <div className="w-20 h-20 mb-3">
                <CircularProgressbar
                  value={enrollment.progress}
                  text={`${Math.round(enrollment.progress)}%`}
                  styles={buildStyles({
                    textSize: '14px',
                    pathColor: '#c53030',
                    textColor: '#c53030',
                    trailColor: '#f5f5f5',
                  })}
                />
              </div>
              <p className="text-center text-gray-600 text-sm">Keep going, you're making progress!</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.p
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No progress data available.
        </motion.p>
      )}
    </motion.div>
  );
};

export default ProgressTracker;
