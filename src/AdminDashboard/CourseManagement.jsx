import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/courses'; // Replace with your API URL

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    price: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [videoFiles, setVideoFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const coursesPerPage = 10;

  const fetchCourses = async () => {
    try {
      const response = await axios.get(API_URL);
      setCourses(response.data);
    } catch (error) {
      toast.error('Failed to fetch courses');
      console.error('Fetch Courses Error:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setVideoFiles(Array.from(e.target.files));
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newCourse.title);
    formData.append('description', newCourse.description);
    formData.append('price', newCourse.price);
    if (imageFile) formData.append('displayImage', imageFile);
    videoFiles.forEach((video) => formData.append('videos', video));

    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setCourses([...courses, response.data.course]);
      setNewCourse({ title: '', description: '', price: '' });
      setImageFile(null);
      setVideoFiles([]);
      setIsModalOpen(false);
      toast.success('Course added successfully');
    } catch (error) {
      toast.error('Failed to add course');
      console.error('Add Course Error:', error);
    }
  };

  const handleDelete = async (courseId) => {
    try {
      await axios.delete(`${API_URL}/${courseId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setCourses((prevCourses) => prevCourses.filter((course) => course._id !== courseId));
      toast.success('Course deleted successfully');
    } catch (error) {
      toast.error('Failed to delete course');
      console.error('Delete Course Error:', error);
    }
  };

  const handleEdit = (courseId) => {
    toast.info(`Edit functionality for course ID ${courseId} will be implemented.`);
    // Implement edit logic here
  };

  const filteredCourses = courses
    .filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Course Management</h1>

      {/* Add Course Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-green-700 transition-transform transform hover:scale-105 flex items-center"
      >
        <FaPlus className="mr-2" /> Add Course
      </button>

      {/* Custom Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
    <div className="bg-white rounded-lg p-8 w-full max-w-2xl shadow-2xl transform transition-transform scale-100">
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-3xl font-bold text-gray-800">Add New Course</h2>
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          ✕
        </button>
      </div>
      <form onSubmit={handleAddCourse}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter course title"
              value={newCourse.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Description</label>
            <textarea
              name="description"
              placeholder="Enter course description"
              value={newCourse.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter course price"
              value={newCourse.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="border-t border-gray-200 mt-4 pt-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Course Image</label>
            <div className="flex items-center space-x-3">
              <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
              <p className="text-gray-500 text-sm">Max size 2MB</p>
            </div>
            <small className="block mt-1 text-xs text-gray-500">Upload an image for the course display</small>
          </div>
          <div className="border-t border-gray-200 mt-4 pt-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">Course Videos</label>
            <div className="flex items-center space-x-3">
              <input type="file" accept="video/*" multiple onChange={handleVideoChange} className="file-input" />
              <p className="text-gray-500 text-sm">Max 5 videos, each up to 10MB</p>
            </div>
            <small className="block mt-1 text-xs text-gray-500">Upload videos for course content</small>
          </div>
        </div>
        <div className="flex justify-end mt-6 space-x-3">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  </div>
)}

      {/* Search and Sort */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by title or description"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="ml-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="title">Sort by Title</option>
          <option value="createdAt">Sort by Date Created</option>
        </select>
      </div>

      {/* Course Table */}
      <table className="w-full bg-white border rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-gray-700">Title</th>
            <th className="px-4 py-2 text-left text-gray-700">Description</th>
            <th className="px-4 py-2 text-left text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCourses.map((course) => (
            <tr key={course._id} className="border-t hover:bg-gray-50 transition-all duration-150">
              <td className="px-4 py-2">{course.title}</td>
              <td className="px-4 py-2">{course.description}</td>
              <td className="px-4 py-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(course._id)}
                  className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-105"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="text-red-500 hover:text-red-700 transition-transform transform hover:scale-105"
                >
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
            } hover:bg-red-600 hover:text-white transition-transform transform hover:scale-105`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;
