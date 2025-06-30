import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you use Redux for user data
import { motion } from 'framer-motion';

const MyQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.user?._id); // Get user ID from Redux store

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/quizzes', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuizzes(response.data);
      } catch (error) {
        console.error('Failed to fetch quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  const handleStartNewQuiz = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-red-700 mb-6">My Quizzes</h2>
      <div className="space-y-4">
        {quizzes.map((quiz) => {
          // Check if the quiz has a result for the current user
          const userResult = quiz.results.find((result) => result.userId === userId);

          return (
            <div
              key={quiz._id}
              className={`flex items-center justify-between bg-gradient-to-r from-red-50 to-white p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                userResult ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{quiz.title}</h3>
                <p className="text-sm text-gray-500">Course: {quiz.courseId.title}</p>
                <p className="text-sm text-gray-500">
                  {userResult ? `Score: ${userResult.score}/${userResult.totalQuestions}` : 'Status: In Progress'}
                </p>
              </div>
              <button
                onClick={() => handleStartNewQuiz(quiz._id)}
                className={`text-sm px-4 py-2 rounded-lg ${
                  userResult
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-yellow-500 text-white hover:bg-yellow-600'
                } transition duration-300`}
              >
                {userResult ? 'Review' : 'Continue'}
              </button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default MyQuizzes;
