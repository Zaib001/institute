import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const QuizManagement = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [newQuiz, setNewQuiz] = useState({
    title: '',
    courseId: '',
    questions: [],
    timeLimit: 0, // Time limit in minutes
  });
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    explanation: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [error, setError] = useState(null);

  // Fetch quizzes and courses
  useEffect(() => {
    const fetchQuizzesAndCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const [quizRes, courseRes] = await Promise.all([
          axios.get('http://localhost:5000/api/quizzes', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get('http://localhost:5000/api/courses', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setQuizzes(quizRes.data);
        setCourses(courseRes.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError('Failed to load data.');
      }
    };
    fetchQuizzesAndCourses();
  }, []);

  // Handle adding or updating a question in the quiz
  const handleAddQuestion = () => {
    if (newQuestion.question && newQuestion.correctAnswer) {
      setNewQuiz((prevQuiz) => ({
        ...prevQuiz,
        questions: [...prevQuiz.questions, newQuestion],
      }));
      setNewQuestion({ question: '', options: ['', '', '', ''], correctAnswer: '', explanation: '' });
    } else {
      setError('Please fill in all question details.');
    }
  };

  // Handle opening the modal for creating or updating
  const handleOpenModal = (quiz = null) => {
    setError(null);
    if (quiz) {
      setIsEditing(true);
      setSelectedQuiz(quiz);
      setNewQuiz({
        title: quiz.title,
        courseId: quiz.courseId._id,
        questions: quiz.questions,
        timeLimit: quiz.timeLimit,
      });
    } else {
      setIsEditing(false);
      setNewQuiz({ title: '', courseId: '', questions: [], timeLimit: 0 });
    }
    setShowModal(true);
  };

  // Handle creating a new quiz
  const handleCreateQuiz = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/quizzes/create',
        newQuiz,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setQuizzes([...quizzes, response.data.quiz]);
      setNewQuiz({ title: '', questions: [], courseId: '', timeLimit: 0 });
      setShowModal(false);
    } catch (error) {
      console.error('Failed to create quiz:', error);
      setError('Failed to create quiz.');
    }
  };

  // Handle updating an existing quiz
  const handleUpdateQuiz = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:5000/api/quizzes/update/${selectedQuiz._id}`,
        newQuiz,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setQuizzes(
        quizzes.map((quiz) =>
          quiz._id === selectedQuiz._id ? response.data.quiz : quiz
        )
      );
      setNewQuiz({ title: '', questions: [], courseId: '', timeLimit: 0 });
      setShowModal(false);
      setIsEditing(false);
      setSelectedQuiz(null);
    } catch (error) {
      console.error('Failed to update quiz:', error);
      setError('Failed to update quiz.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-red-700 mb-4">Quiz Management</h2>
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl">All Quizzes</h3>
        <button
          onClick={() => handleOpenModal()}
          className="bg-red-700 text-white px-4 py-2 rounded shadow hover:bg-red-800 transition duration-300"
        >
          + Create Quiz
        </button>
      </div>

      {/* Quiz Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded border">
          <thead>
            <tr className="bg-red-100">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Course</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz._id} className="hover:bg-gray-100 transition text-center">
                <td className="p-2 border">{quiz.title}</td>
                <td className="p-2 border">{quiz.courseId.title}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleOpenModal(quiz)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteQuiz(quiz._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Creating or Updating Quiz */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">
              {isEditing ? 'Update Quiz' : 'Create New Quiz'}
            </h3>
            <input
              type="text"
              placeholder="Quiz Title"
              value={newQuiz.title}
              onChange={(e) => setNewQuiz({ ...newQuiz, title: e.target.value })}
              className="border p-2 rounded mb-2 w-full"
            />
            <select
              value={newQuiz.courseId}
              onChange={(e) => setNewQuiz({ ...newQuiz, courseId: e.target.value })}
              className="border p-2 rounded mb-2 w-full"
            >
              <option value="">Select Course</option>
              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Time Limit (minutes)"
              value={newQuiz.timeLimit}
              onChange={(e) => setNewQuiz({ ...newQuiz, timeLimit: e.target.value })}
              className="border p-2 rounded mb-2 w-full"
            />

            {/* Add Question Form */}
            <div className="mb-4">
              <h4 className="text-lg mb-2">Add Question</h4>
              <input
                type="text"
                placeholder="Question"
                value={newQuestion.question}
                onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                className="border p-2 rounded mb-2 w-full"
              />
              {newQuestion.options.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...newQuestion.options];
                    newOptions[index] = e.target.value;
                    setNewQuestion({ ...newQuestion, options: newOptions });
                  }}
                  className="border p-2 rounded mb-2 w-full"
                />
              ))}
              <input
                type="text"
                placeholder="Correct Answer"
                value={newQuestion.correctAnswer}
                onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
                className="border p-2 rounded mb-2 w-full"
              />
              <textarea
                placeholder="Explanation (optional)"
                value={newQuestion.explanation}
                onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
                className="border p-2 rounded mb-2 w-full"
              ></textarea>
              <button onClick={handleAddQuestion} className="bg-blue-500 text-white py-2 px-4 rounded mb-2">
                Add Question
              </button>
            </div>

            <button
              onClick={isEditing ? handleUpdateQuiz : handleCreateQuiz}
              className="bg-red-700 text-white py-2 px-4 rounded w-full"
            >
              {isEditing ? 'Update Quiz' : 'Create Quiz'}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QuizManagement;
