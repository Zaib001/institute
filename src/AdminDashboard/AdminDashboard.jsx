import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import DashboardOverview from './DashboardOverview';
import UserManagement from './UserManagement';
import CourseManagement from './CourseManagement';
import Notifications from './Notifications';
import Enrollments from './Enrollments';
import CurriculamManagement from './CurriculamManagement';
import QuizManagement from './QuizManagement'; // Import the new QuizManagement component
import ReviewManagement from './ReviewManagement'; // Import the new QuizManagement component
import Loader from '../UserDashboard/LoadingComponent'; // Import the Loader component
import UserDetails from '../UserDashboard/UserDetails';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate a loading period when changing sections
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, [activeSection]);

  const renderSection = () => {
    if (loading) {
      return <Loader />;
    }

    switch (activeSection) {
      case 'Dashboard':
        return <DashboardOverview />;
      case 'Users':
        return <UserManagement />;
      case 'Courses':
        return <CourseManagement />;
      case 'Notifications':
        return <Notifications />;
      case 'Enrollments':
        return <Enrollments />;
      case 'Quizzes': // New case for the Quiz section
        return <QuizManagement />;
      case 'Curriculam': // New case for the Quiz section
        return <CurriculamManagement />;
      case 'Review': // New case for the Quiz section
        return <ReviewManagement />;
      case 'Profile': // New case for the Quiz section
        return <UserDetails />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 p-6 bg-gray-100">
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
