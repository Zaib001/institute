import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Enrollments = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from local storage

        if (!token) {
          throw new Error('No token found. Please log in.');
        }

        const response = await axios.get('http://localhost:5000/api/enrollments', {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token in request headers
          },
        });
console.log(response.data)
        setEnrollments(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching enrollments:', error);
        setError('Failed to load enrollment data. Please try again later.');
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Enrollments</h1>
      {loading ? (
        <p className="text-center text-lg text-gray-500">Loading enrollments...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : enrollments.length === 0 ? (
        <p className="text-center text-gray-500">No enrollments found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">User Name</th>
              <th className="border border-gray-300 p-2">User Email</th>
              <th className="border border-gray-300 p-2">Course Title</th>
              <th className="border border-gray-300 p-2">Enrollment Date</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment._id} className="hover:bg-gray-100 text-center">
                <td className="border border-gray-300 p-2">{enrollment.userId?.name || 'N/A'}</td>
                <td className="border border-gray-300 p-2">{enrollment.userId?.email || 'N/A'}</td>
                <td className="border border-gray-300 p-2">{enrollment.courseId?.title || 'N/A'}</td>
                <td className="border border-gray-300 p-2">{new Date(enrollment.enrolledAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Enrollments;
