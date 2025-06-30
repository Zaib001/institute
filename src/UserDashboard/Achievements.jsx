import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCheckCircle, FaStar } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
;

const ReviewPopup = ({ courseId, onClose }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const userId = useSelector((state) => state.auth.user?._id);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleStarHover = (value) => {
    setHoverRating(value);
  };

  const handleStarHoverOut = () => {
    setHoverRating(0);
  };

  const handleSubmitReview = async () => {
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('courseId', courseId);
      formData.append('userId', userId);
      formData.append('reviewText', reviewText);
      formData.append('rating', rating);
      if (image) {
        formData.append('image', image);
      }

      await axios.post('http://localhost:5000/api/review/create', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessMessage('Review submitted successfully!');
      setTimeout(() => {
        setSuccessMessage('');
        onClose();
      }, 2000); // Display success message and close popup after a delay
    } catch (error) {
      console.error('Failed to submit review:', error);
      alert('Error: Could not submit review.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 w-96 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {successMessage && (
          <motion.div
            className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-2 rounded-t-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {successMessage}
          </motion.div>
        )}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Leave a Review</h2>
        <textarea
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
        <div className="flex items-center mb-4">
          <label className="block mb-2 mr-2">Rating:</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((num) => (
              <FaStar
                key={num}
                className={`cursor-pointer text-2xl ${
                  (hoverRating || rating) >= num ? 'text-yellow-400' : 'text-gray-300'
                }`}
                onClick={() => handleStarClick(num)}
                onMouseEnter={() => handleStarHover(num)}
                onMouseLeave={handleStarHoverOut}
              />
            ))}
          </div>
        </div>
        <label className="block mb-2">Upload an Image (optional):</label>
        <input type="file" onChange={handleImageChange} className="mb-4" />
        <div className="flex justify-end">
          <button
            onClick={handleSubmitReview}
            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-300 mr-2"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};




// Main achievements component
const Achievements = () => {
  const [achievements, setAchievements] = useState({ completedCourses: [], quizResults: [] });
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [currentCourseId, setCurrentCourseId] = useState(null);
  const userId = useSelector((state) => state.auth.user?._id); // Get userId from Redux

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const response = await axios.get(`http://localhost:5000/api/achievements/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAchievements(response.data.achievements || { completedCourses: [], quizResults: [] });
      } catch (error) {
        console.error('Failed to fetch achievements:', error);
      }
    };

    if (userId) {
      fetchAchievements();
    }
  }, [userId]);

  const handleDownloadCertificate = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/api/certificate/${userId}/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        responseType: 'blob', // Set response type to blob for file download
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `certificate-${courseId}.png`); // Set the file name
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Show the review popup after successful download
      setCurrentCourseId(courseId);
      setShowReviewPopup(true);
    } catch (error) {
      console.error('Failed to download certificate:', error);
      alert('Error: Could not generate certificate.');
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {achievements.completedCourses.length > 0 ? (
          achievements.completedCourses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4">
                <FaCheckCircle className="text-green-500 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{course.title} Completed!</h3>
              <div className="w-24 h-24">
                <CircularProgressbar
                  value={course.progress}
                  text={`${course.progress}%`}
                  styles={buildStyles({
                    textSize: '20px',
                    pathColor: '#32cd32',
                    textColor: '#32cd32',
                    trailColor: '#f5f5f5',
                  })}
                />
              </div>
              <button
                onClick={() => handleDownloadCertificate(course.courseId)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                Download Certificate
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500">No completed courses yet.</p>
        )}
        {achievements.quizResults && achievements.quizResults.length > 0 ? (
        achievements.quizResults.map((quiz, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-4">
              <FaAward className="text-yellow-500 text-6xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{quiz.title} Completed!</h3>
            <p className="text-gray-600 mb-4">You scored:</p>
            <div className="w-24 h-24">
              <CircularProgressbar
                value={quiz.score}
                text={`${quiz.score}%`}
                styles={buildStyles({
                  textSize: '20px',
                  pathColor: '#ff7f50',
                  textColor: '#ff7f50',
                  trailColor: '#f5f5f5',
                })}
              />
            </div>
            <div className="flex items-center mt-4">
              <FaStar className="text-yellow-500 mr-2" />
              <p className="text-gray-700 font-semibold">Great job on achieving this badge!</p>
            </div>
          </motion.div>
        ))
      ) : (
        <p className="text-center text-gray-500">No quiz achievements yet.</p>
      )}
      </div>

      {showReviewPopup && (
        <ReviewPopup
          courseId={currentCourseId}
          onClose={() => setShowReviewPopup(false)}
        />
      )}
    </>
  );
};

export default Achievements;
