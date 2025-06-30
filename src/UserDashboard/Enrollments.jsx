import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaBookOpen, FaPlayCircle } from 'react-icons/fa';
import Modal from './Modal'; // Import a custom Modal component
import LoadingComponent from './LoadingComponent'; 
import Swal from 'sweetalert2';

const Enrollments = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = useSelector((state) => state.auth.user?._id);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/courses/enrollments/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEnrollments(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching enrollments:', error);
        setError('Failed to load enrollments.');
        setLoading(false);
      }
    };

    if (userId) {
      fetchEnrollments();
    }
  }, [userId]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  if (loading) {
    return <LoadingComponent message="Loading enrolled courses..." />;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-red-700 mb-6">My Enrolled Courses</h2>
      {enrollments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrollments.map((enrollment) => (
            <motion.div
              key={enrollment.courseId._id}
              className="bg-white border rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => handleCourseClick(enrollment.courseId)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`http://localhost:5000/${enrollment.courseId.displayImage}`}
                alt={enrollment.courseId.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">{enrollment.courseId.title}</h3>
              <div className="mt-2">
                <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-red-700"
                    style={{ width: `${enrollment.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Progress: {enrollment.progress}%</p>
              </div>
              <FaPlayCircle className="text-red-700 text-2xl mt-4" />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No enrolled courses found.</p>
      )}
      {selectedCourse && (
        <Modal
          course={selectedCourse}
          userId={userId}
          onClose={() => setSelectedCourse(null)}
          onComplete={() => {
            Swal.fire({
              icon: 'success',
              title: 'Congratulations!',
              text: 'You have completed this course!',
              showConfirmButton: false,
              timer: 3000,
            });
            setSelectedCourse(null);
          }}
        />
      )}
    </motion.div>
  );
};

export default Enrollments;
