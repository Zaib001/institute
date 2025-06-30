import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaSort } from 'react-icons/fa';

// Dummy leaderboard data
const initialLeaderboardData = [
  { id: 1, name: 'John Smith', score: 98, date: '2023-07-01', quizType: 'JavaScript' },
  { id: 2, name: 'Emily Johnson', score: 94, date: '2023-06-30', quizType: 'React' },
  { id: 3, name: 'Alex Brown', score: 91, date: '2023-06-25', quizType: 'CSS' },
  { id: 4, name: 'Samantha Lee', score: 89, date: '2023-06-28', quizType: 'HTML' },
  { id: 5, name: 'Michael Green', score: 87, date: '2023-07-02', quizType: 'JavaScript' },
  { id: 6, name: 'Chris Kim', score: 85, date: '2023-06-26', quizType: 'Node.js' },
  { id: 7, name: 'Your Name', score: 90, date: '2023-07-03', quizType: 'React' }, // Current user
  // Add more dummy data as needed
];

const Leaderboard = () => {
  const [data, setData] = useState(initialLeaderboardData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortOption, setSortOption] = useState('score');
  const [filterOption, setFilterOption] = useState('All');

  // Calculate total pages for pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle sorting
  const handleSort = (option) => {
    const sortedData = [...data].sort((a, b) => {
      if (option === 'score') return b.score - a.score;
      if (option === 'date') return new Date(b.date) - new Date(a.date);
      return 0;
    });
    setSortOption(option);
    setData(sortedData);
  };

  // Handle filtering by quiz type
  const handleFilter = (option) => {
    setFilterOption(option);
    if (option === 'All') {
      setData(initialLeaderboardData);
    } else {
      const filteredData = initialLeaderboardData.filter((entry) => entry.quizType === option);
      setData(filteredData);
    }
    setCurrentPage(1);
  };

  // Paginate data
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-red-700">Leaderboard</h2>
        <FaTrophy className="text-red-700 text-3xl" />
      </div>
      <p className="text-gray-600 mb-4">Check out the top performers in the quiz:</p>

      {/* Sorting and Filtering Options */}
      <div className="flex justify-between mb-4">
        <div>
          <button
            onClick={() => handleSort('score')}
            className={`px-4 py-2 border rounded-l-lg ${sortOption === 'score' ? 'bg-red-700 text-white' : 'bg-gray-200'}`}
          >
            <div className='flex justify-between p-2'>Sort by Score &nbsp;&nbsp;&nbsp; <span className='mt-[0.35rem]'><FaSort /></span></div>
          </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => handleSort('date')}
            className={`px-4 py-2 border rounded-r-lg ${sortOption === 'date' ? 'bg-red-700 text-white' : 'bg-gray-200'}`}
          >
            <div className='flex justify-between p-2'>Sort by Date &nbsp;&nbsp;&nbsp; <span className='mt-[0.35rem]'><FaSort /></span></div>
            </button>
        </div>
        <select
          value={filterOption}
          onChange={(e) => handleFilter(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="All">All Quiz Types</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
          <option value="CSS">CSS</option>
          <option value="HTML">HTML</option>
          <option value="Node.js">Node.js</option>
        </select>
      </div>

      {/* Leaderboard Entries */}
      <div className="space-y-4">
        {paginatedData.map((entry, index) => (
          <motion.div
            key={entry.id}
            className={`flex items-center justify-between p-4 rounded-lg shadow-sm transition-shadow duration-300 ${
              entry.name === 'Your Name' ? 'bg-yellow-100 border-2 border-yellow-400' : index < 3 ? 'bg-red-50' : 'bg-gray-50'
            }`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-full text-white ${index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-400' : 'bg-red-700'}`}>
                {index < 3 ? <FaMedal className="text-xl" /> : <span className="text-lg font-bold">{index + 1 + (currentPage - 1) * itemsPerPage}</span>}
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${entry.name === 'Your Name' ? 'text-yellow-700' : 'text-gray-800'}`}>{entry.name}</h3>
              </div>
            </div>
            <span className="text-xl font-semibold text-red-700">{entry.score}%</span>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange('next')}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default Leaderboard;
