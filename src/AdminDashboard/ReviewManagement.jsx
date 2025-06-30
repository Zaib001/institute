import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewManagement = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token'); // Get token to authenticate requests

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/review/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReviews(response.data.reviews || []);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
        setError('Failed to load reviews.');
        setLoading(false);
      }
    };

    fetchReviews();
  }, [token]);

  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:5000/api/review/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReviews(reviews.filter((review) => review._id !== reviewId));
      alert('Review deleted successfully');
    } catch (error) {
      console.error('Failed to delete review:', error);
      alert('Error: Could not delete review');
    }
  };

  if (loading) {
    return <p className="text-center">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-center text-red-700">{error}</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Review Management</h1>
      {reviews.length > 0 ? (
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-b py-2 px-4">Course Title</th>
              <th className="border-b py-2 px-4">Reviewer Name</th>
              <th className="border-b py-2 px-4">Rating</th>
              <th className="border-b py-2 px-4">Review Text</th>
              <th className="border-b py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id} className="hover:bg-gray-100 text-center">
                <td className="border-b py-2 px-4">{review.courseId?.title || 'N/A'}</td>
                <td className="border-b py-2 px-4">{review.userId?.name || 'Anonymous'}</td>
                <td className="border-b py-2 px-4">{review.rating}</td>
                <td className="border-b py-2 px-4">{review.reviewText}</td>
                <td className="border-b py-2 px-4">
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() => handleDelete(review._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-600">No reviews available.</p>
      )}
    </div>
  );
};

export default ReviewManagement;
