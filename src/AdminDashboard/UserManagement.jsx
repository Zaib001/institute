import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your API endpoint

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [editUserDetails, setEditUserDetails] = useState(null);

  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_URL}/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error('Unauthorized. Please log in.');
        } else {
          toast.error('Failed to fetch users');
        }
        console.error('Fetch Users Error:', error);
      }
    };

    fetchUsers();
  }, [token]);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${API_URL}/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      toast.success('User deleted successfully');
    } catch (error) {
      toast.error('Failed to delete user');
      console.error('Delete User Error:', error);
    }
  };

  const handleEdit = (user) => {
    setEditUserDetails(user);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_URL}/${editUserDetails._id}`, editUserDetails, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user._id === editUserDetails._id ? response.data.updatedUser : user))
      );
      toast.success('User updated successfully');
      setEditUserDetails(null);
    } catch (error) {
      toast.error('Failed to update user');
      console.error('Update User Error:', error);
    }
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-red-700 mb-6">User Management</h1>
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by name or email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="ml-4 px-4 py-2 border border-gray-300 rounded-lg"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="name">Sort by Name</option>
          <option value="email">Sort by Email</option>
          <option value="role">Sort by Role</option>
        </select>
      </div>

      <table className="w-full bg-white border rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-gray-700">Name</th>
            <th className="px-4 py-2 text-left text-gray-700">Email</th>
            <th className="px-4 py-2 text-left text-gray-700">Role</th>
            <th className="px-4 py-2 text-left text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user._id} className="border-t hover:bg-gray-50 transition duration-150">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2 flex space-x-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="text-blue-500 hover:text-blue-700 transition duration-150"
                >
                  <FaEdit /> Edit
                </button>
              
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-500 hover:text-red-700 transition duration-150"
                  >
                    <FaTrash /> Delete
                  </button>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUserDetails && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-xl font-semibold">Edit User</h2>
          <input
            type="text"
            value={editUserDetails.name}
            onChange={(e) => setEditUserDetails({ ...editUserDetails, name: e.target.value })}
            className="mt-2 px-4 py-2 border rounded-lg w-full"
          />
          <input
            type="text"
            value={editUserDetails.email}
            onChange={(e) => setEditUserDetails({ ...editUserDetails, email: e.target.value })}
            className="mt-2 px-4 py-2 border rounded-lg w-full"
          />
          <input
            type="text"
            value={editUserDetails.role}
            onChange={(e) => setEditUserDetails({ ...editUserDetails, role: e.target.value })}
            className="mt-2 px-4 py-2 border rounded-lg w-full"
          />
          <button
            onClick={handleUpdate}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>
      )}

      <div className="flex justify-center items-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === index + 1 ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'
            } hover:bg-red-600 hover:text-white transition`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
