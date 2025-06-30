import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaMedal } from 'react-icons/fa';

// Dummy forum topics data
const dummyForumTopics = [
  {
    id: 1,
    title: 'General Discussions',
    description: 'Participate in general discussions and share your thoughts.',
  },
  {
    id: 2,
    title: 'Quiz & Exam Support',
    description: 'Get tips and help for completing your quizzes and exams.',
  },
  {
    id: 3,
    title: 'Achievements & Challenges',
    description: 'Celebrate your milestones and take on new challenges.',
  },
  {
    id: 4,
    title: 'Course Feedback',
    description: 'Provide feedback on courses and suggest improvements.',
  },
  {
    id: 5,
    title: 'Project Collaboration',
    description: 'Find peers to collaborate on projects and assignments.',
  },
];

const DiscussionForums = () => {
  const [forumTopics] = useState(dummyForumTopics); // Using state to hold dummy data
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility

  const handleJoinForumClick = () => {
    setShowModal(true); // Show modal when button is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-red-700 mb-6">Discussion Forums</h2>
      <p className="text-gray-600 mb-6">
        Engage in discussions with your peers and instructors. Join the community to ask questions, share insights, and collaborate on projects.
      </p>

      {/* Forum Topics */}
      <div className="space-y-4">
        {forumTopics.length > 0 ? (
          forumTopics.map((topic, index) => (
            <div
              key={topic.id}
              className="flex items-start bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-red-700 text-white p-3 rounded-lg mr-4">
                {index % 3 === 0 ? <FaUsers size={24} /> : index % 3 === 1 ? <FaChartLine size={24} /> : <FaMedal size={24} />}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{topic.title}</h3>
                <p className="text-sm text-gray-500">{topic.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No forum topics available.</p>
        )}
      </div>

      {/* Join Forum Button */}
      <motion.button
        className="mt-8 w-full bg-red-700 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-800 transition duration-300"
        whileHover={{ scale: 1.05 }}
        onClick={handleJoinForumClick} // Add onClick handler
      >
        Join Forum
      </motion.button>

      {/* Modal for Join Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold text-red-700 mb-4">Join Forum</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DiscussionForums;
