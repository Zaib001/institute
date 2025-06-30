import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaDownload, FaCertificate, FaClock, FaChartLine, FaUser, FaHome, FaBook, FaComments, FaList, FaMedal } from 'react-icons/fa';
import DiscussionForums from './DiscussionForums';
import MyQuizzes from './MyQuizzes';
import Leaderboard from './Leaderboard';
import ProgressTracker from './ProgressTracker';
import Enrollments from './Enrollments';
import LoadingComponent from './LoadingComponent'; // Reuse the loading component
import Achievements from './Achievements';
import UserDetails from './UserDetails';
// Sidebar menu items
const menuItems = [
  { id: 1, name: 'Dashboard', icon: <FaHome />, component: 'ProgressTracker' },
  // { id: 2, name: 'Certificates', icon: <FaCertificate />, component: 'Certificates' },
  { id: 7, name: 'Enrollments', icon: <FaBook />, component: 'Enrollments' }, // Added Enrollments section

  // { id: 3, name: 'Forums', icon: <FaComments />, component: 'DiscussionForums' },
  { id: 4, name: 'Achievements', icon: <FaMedal />, component: 'Achievements' },
  { id: 5, name: 'Quizzes', icon: <FaList />, component: 'MyQuizzes' },
  { id: 6, name: 'Leaderboard', icon: <FaChartLine />, component: 'Leaderboard' },
  { id: 8, name: 'User Details', icon: <FaUser />, component: 'UserDetails' },
];

const StudentDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('ProgressTracker');
  const [loading, setLoading] = useState(true); // Example loading state

  // Simulate loading effect (for demonstration)
  setTimeout(() => {
    setLoading(false);
  }, 2000); // Set a timeout to simulate data loading

  const renderComponent = () => {
    if (loading) {
      return <LoadingComponent />;
    }

    switch (activeComponent) {
      case 'ProgressTracker':
        return <ProgressTracker />;
      // case 'Certificates':
      //   return (
      //     <motion.div
      //       className="bg-white rounded-lg shadow-lg p-6"
      //       initial={{ opacity: 0, y: 20 }}
      //       animate={{ opacity: 1, y: 0 }}
      //       transition={{ duration: 0.5 }}
      //     >
      //       <h2 className="text-3xl font-semibold text-red-700 mb-6">Certificates</h2>
      //       {/* Add your content for certificates */}
      //     </motion.div>
      //   );
        case 'Enrollments': // Enrollments section added here
        return <Enrollments />;
      // case 'DiscussionForums':
      //   return <DiscussionForums />;
      case 'Achievements':
        return <Achievements/>
      case 'MyQuizzes':
        return <MyQuizzes />;
      case 'Leaderboard':
        return <Leaderboard />;
        case 'UserDetails': // Case for rendering the UserDetails component
        return <UserDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-red-700 text-white flex flex-col">
        <h2 className="text-2xl font-bold p-6 border-b border-red-800">Dashboard Menu</h2>
        <ul className="flex-1 space-y-2 p-6">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center p-3 cursor-pointer hover:bg-red-800 rounded-lg ${
                activeComponent === item.component ? 'bg-red-800' : ''
              }`}
              onClick={() => setActiveComponent(item.component)}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-red-700 mb-8">
          {menuItems.find((item) => item.component === activeComponent).name}
        </h1>
        {renderComponent()}
      </main>
    </div>
  );
};

export default StudentDashboard;
