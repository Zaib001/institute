import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardOverview = () => {
  const [overviewCounts, setOverviewCounts] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalEnrollments: 0,
    totalEarnings: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOverviewCounts = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token'); // Retrieve the token from localStorage

        if (!token) {
          throw new Error('No token found. Please log in.');
        }

        const headers = {
          Authorization: `Bearer ${token}`, // Attach token in request headers
        };

        // Fetch dashboard counts
        const countsResponse = await axios.get('http://localhost:5000/api/dashboard/counts', { headers });
        setOverviewCounts((prev) => ({
          ...prev,
          totalUsers: countsResponse.data.totalUsers,
          totalCourses: countsResponse.data.totalCourses,
          totalEnrollments: countsResponse.data.totalEnrollments,
        }));

        // Fetch total earnings
        const earningsResponse = await axios.get('http://localhost:5000/api/totalearning', { headers });
        setOverviewCounts((prev) => ({
          ...prev,
          totalEarnings: earningsResponse.data.totalPayments,
        }));

        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setError('Failed to load dashboard data. Please try again later.');
        setLoading(false);
      }
    };

    fetchOverviewCounts();
  }, []);

  // Prepare data for the chart
  const chartData = {
    labels: ['Total Users', 'Total Courses', 'Total Enrollments', 'Total Earnings'],
    datasets: [
      {
        label: 'Dashboard Overview',
        data: [
          overviewCounts.totalUsers,
          overviewCounts.totalCourses,
          overviewCounts.totalEnrollments,
          overviewCounts.totalEarnings,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-8">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Admin Dashboard Overview</h1>

      {loading ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-500">Loading data...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10 text-red-600">
          <p>{error}</p>
        </div>
      ) : (
        <>
          {/* Overview Count Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-red-100 p-4 rounded-lg shadow-md">
              <h3 className="text-sm font-semibold text-gray-600">Total Users</h3>
              <p className="text-2xl font-bold text-red-700">{overviewCounts.totalUsers}</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <h3 className="text-sm font-semibold text-gray-600">Total Courses</h3>
              <p className="text-2xl font-bold text-blue-700">{overviewCounts.totalCourses}</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow-md">
              <h3 className="text-sm font-semibold text-gray-600">Total Enrollments</h3>
              <p className="text-2xl font-bold text-green-700">{overviewCounts.totalEnrollments}</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
              <h3 className="text-sm font-semibold text-gray-600">Total Earnings</h3>
              <p className="text-2xl font-bold text-yellow-700">${overviewCounts.totalEarnings}</p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md h-96">
            <h2 className="text-lg font-semibold mb-2">Overview Chart</h2>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardOverview;
