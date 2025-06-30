import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const CurriculamManagement = () => {
  const [curriculums, setCurriculums] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', file: null });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem('token'); // Get token to prevent 401 errors

  useEffect(() => {
    const fetchCurriculums = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/curriculum', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCurriculums(response.data);
      } catch (error) {
        console.error('Failed to fetch curriculums:', error);
      }
    };

    fetchCurriculums();
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    if (formData.file) {
      form.append('file', formData.file);
    }

    try {
      if (editMode) {
        // Update existing curriculum
        await axios.put(`http://localhost:5000/api/curriculum/${editId}`, form, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        // Create new curriculum
        await axios.post('http://localhost:5000/api/curriculum', form, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      setShowModal(false);
      setFormData({ title: '', description: '', file: null });
      setEditMode(false);
      setEditId(null);
      window.location.reload(); // Refresh data after submission
    } catch (error) {
      console.error('Failed to submit curriculum:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/curriculum/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCurriculums(curriculums.filter((curriculum) => curriculum._id !== id));
    } catch (error) {
      console.error('Failed to delete curriculum:', error);
    }
  };

  const openEditModal = (curriculum) => {
    setFormData({
      title: curriculum.title,
      description: curriculum.description,
      file: null,
    });
    setEditMode(true);
    setEditId(curriculum._id);
    setShowModal(true);
  };

  return (
    <div className="px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-red-700">Curriculum Management</h1>
        <button
          className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300"
          onClick={() => setShowModal(true)}
        >
          Add Curriculum
        </button>
      </div>

      {/* Display message if no curriculum is available */}
      {curriculums.length === 0 ? (
        <p className="text-center text-gray-600">No curriculum available. Please add a new curriculum.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculums.map((curriculum) => (
            <div key={curriculum._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-red-700 mb-2">{curriculum.title}</h2>
              <p className="text-gray-600 mb-4">{curriculum.description}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                  onClick={() => openEditModal(curriculum)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                  onClick={() => handleDelete(curriculum._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">{editMode ? 'Edit Curriculum' : 'Create Curriculum'}</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">File</label>
                <input type="file" onChange={handleFileChange} className="w-full" />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => {
                    setShowModal(false);
                    setEditMode(false);
                    setFormData({ title: '', description: '', file: null });
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
                >
                  {editMode ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CurriculamManagement;
