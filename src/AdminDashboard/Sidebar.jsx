import React from 'react';
import { FaChartLine, FaUser, FaBook, FaEnvelope, FaChartPie,FaBookOpen } from 'react-icons/fa';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { name: 'Dashboard', icon: <FaChartLine /> },
    { name: 'Users', icon: <FaUser /> },
    { name: 'Courses', icon: <FaBook /> },
    { name: 'Notifications', icon: <FaEnvelope /> },
    { name: 'Enrollments', icon: <FaChartPie /> },
    { name: 'Quizzes', icon: <FaBookOpen /> },
    { name: 'Curriculam', icon: <FaBookOpen /> },
    { name: 'Review', icon: <FaEnvelope /> },
    { name: 'Profile', icon: <FaUser /> },
  ];

  return (
    <aside className="w-64 bg-red-700 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-6 border-b border-red-800">Admin Panel</h2>
      <ul className="space-y-2 p-6">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center p-3 cursor-pointer hover:bg-red-800 rounded-lg ${
              activeSection === item.name ? 'bg-red-800' : ''
            }`}
            onClick={() => setActiveSection(item.name)}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
