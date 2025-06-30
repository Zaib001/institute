import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaClock, FaRegQuestionCircle } from 'react-icons/fa';
import axios from 'axios';

const QuizDetails = () => {
  const { quizId } = useParams();
  const userId = useSelector((state) => state.auth.user?._id); // Get userId from Redux
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timer, setTimer] = useState(1800); // Timer in seconds (30 minutes)

  // Fetch quiz data on component mount
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const response = await axios.get(`http://localhost:5000/api/quizzes/${quizId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuizData(response.data);
      } catch (error) {
        console.error('Failed to fetch quiz data:', error);
      }
    };
    fetchQuizData();
  }, [quizId]);

  // Timer logic
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(countdown);
          handleQuizCompletion();
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      if (selectedOption === quizData.questions[currentQuestionIndex].correctOption) {
        setScore((prevScore) => prevScore + 1);
      }
      setShowExplanation(true);
    }
  };

  const handleContinue = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      handleQuizCompletion();
    }
  };

  const handleQuizCompletion = async () => {
    setIsQuizCompleted(true);
    try {
      const token = localStorage.getItem('token'); // Get token from localStorage
      await axios.post(
        'http://localhost:5000/api/quizzes/submit',
        {
          quizId,
          userId, // Include userId from Redux
          answers: quizData.questions.map((q, i) => selectedOption === i),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error('Failed to submit quiz:', error);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsQuizCompleted(false);
    setShowExplanation(false);
    setTimer(1800);
  };

  // Find user's quiz result if available
  const userResult = quizData?.results.find((result) => result.userId === userId);

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-12">
        {!isQuizCompleted ? (
          <>
            {quizData && (
              <>
                <motion.h1
                  className="text-4xl font-bold text-red-700 mb-4"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {quizData.title}
                </motion.h1>
                <p className="text-gray-600 mb-6">{quizData.description}</p>

                <div className="flex justify-between items-center bg-red-50 p-4 rounded-lg shadow-sm mb-6">
                  <FaClock className="text-red-700 text-2xl" />
                  <p className="text-gray-800 font-semibold">Time Remaining: {formatTime(timer)}</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Question {currentQuestionIndex + 1}/{quizData.questions.length}
                  </h2>
                  <p className="text-gray-700 mb-4">{quizData.questions[currentQuestionIndex].question}</p>
                  <div className="space-y-2">
                    {quizData.questions[currentQuestionIndex].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        className={`w-full text-left px-4 py-2 rounded-lg border-2 transition duration-300 ${
                          selectedOption === index
                            ? 'border-red-700 bg-red-50 text-red-700'
                            : 'border-gray-300 bg-white hover:bg-gray-100'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {showExplanation && (
                  <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800 font-semibold">Explanation:</p>
                    <p className="text-gray-600">{quizData.questions[currentQuestionIndex].explanation}</p>
                    <button
                      onClick={handleContinue}
                      className="mt-4 w-full bg-red-700 text-white py-2 rounded-lg text-lg font-medium hover:bg-red-800 transition duration-300"
                    >
                      {currentQuestionIndex < quizData.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </button>
                  </div>
                )}

                {!showExplanation && (
                  <button
                    onClick={handleNextQuestion}
                    disabled={selectedOption === null}
                    className={`w-full py-3 rounded-lg text-lg font-medium ${
                      selectedOption === null
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-red-700 text-white hover:bg-red-800 transition duration-300'
                    }`}
                  >
                    Submit Answer
                  </button>
                )}
              </>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-700 mb-4">Quiz Completed!</h2>
            {userResult ? (
              <p className="text-gray-700 mb-6">
                Your score: {userResult.score}/{userResult.totalQuestions}
              </p>
            ) : (
              <p className="text-gray-700 mb-6">Your quiz result is not available yet.</p>
            )}
            <button
              onClick={handleRetakeQuiz}
              className="bg-red-700 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-red-800 transition duration-300"
            >
              Retake Quiz
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              className="bg-red-700 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-red-800 transition duration-300"
            >
              <Link to='/studentdashboard'> Back</Link>
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default QuizDetails;
