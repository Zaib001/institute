import React, { useState, useEffect } from 'react';
import { FaBell, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch notifications from the backend
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        if (!token) {
          alert('No token found, please log in.');
          return;
        }
  
        const response = await axios.get('http://localhost:5000/api/consultations', {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        });
  
        // Check if response.data and response.data.notifications are defined
        if (response.data && Array.isArray(response.data.notifications)) {
          setNotifications(response.data.notifications);
        } else {
          console.warn('Unexpected response structure:', response.data);
          setNotifications([]); // Default to an empty array if structure is unexpected
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
        alert('Failed to load notifications.');
        setNotifications([]); // Ensure state is set to an empty array on failure
      }
    };
  
    fetchNotifications();
  }, []);
  

  const handleDismiss = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const handleNotificationClick = async (id) => {
    setIsLoading(true);
    try {
      // Get token from localStorage
      const token = localStorage.getItem('token');
      
      if (!token) {
        alert('No token found, please log in.');
        setIsLoading(false);
        return;
      }
  
      const response = await axios.get(`http://localhost:5000/api/consultations/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      const notificationDetails = {
        details: response.data.details, // Ensure API response has a 'details' field
      };
      setSelectedNotification(notificationDetails);
    } catch (error) {
      console.error('Error fetching notification details:', error);
      alert('Failed to load notification details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <FaBell className="mr-2 text-red-600" /> Notifications
      </h2>
      {notifications.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-xl">You have no notifications</p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification.id)}
              className={`p-4 rounded-lg shadow-lg flex justify-between items-center cursor-pointer transition-transform transform hover:scale-105 ${
                notification.type === 'success'
                  ? 'bg-green-100 border-l-4 border-green-500'
                  : notification.type === 'warning'
                  ? 'bg-yellow-100 border-l-4 border-yellow-500'
                  : 'bg-blue-100 border-l-4 border-blue-500'
              }`}
            >
              <div>
                <p className="text-lg font-medium">{notification.message}</p>
                <p className="text-sm text-gray-600">{notification.time}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDismiss(notification.id);
                }}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Custom Pop-up Modal for Notification Details */}
      {selectedNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 shadow-xl transform transition-transform scale-105">
            <h3 className="text-2xl font-semibold mb-2">Notification Details</h3>
            {isLoading ? (
              <p className="text-gray-600">Loading...</p>
            ) : (
              <p className="text-gray-700">{selectedNotification.details}</p>
            )}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setSelectedNotification(null)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
