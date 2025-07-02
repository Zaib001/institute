import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CTAWithFooter from './components/Footer';
import AboutUsPage from './pages/AboutUsPage'; 
import HeaderPage from './pages/HeaderPgae'; 
import CoursePage from './pages/CoursesPage';
import CourseDetailsPage from './components/CoursesDetailPage';
import './index.css'; 
import ServicePage from './pages/ServicePage';
import CurriculumSection from './components/CurriculumSection';
import ContactUsPage from './pages/ContactUsPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import StudentDashboard from './UserDashboard/StudentDashboard';
import QuizDetails from './UserDashboard/QuizDetails';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Loader from './UserDashboard/LoadingComponent'; // Import the Loader component

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Monitor route changes and set loading state
  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Simulated loading time, adjust as needed
    };

    handleRouteChange();
  }, [location]);

  const excludedRoutes = ['/login', '/signup', '/admindashboard', '/studentdashboard'];
  const shouldShowNavbarAndFooter = !excludedRoutes.includes(location.pathname);

  return (
    <>
          {shouldShowNavbarAndFooter && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<HeaderPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/studentdashboard"
            element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/quiz/:quizId" element={<ProtectedRoute><QuizDetails /></ProtectedRoute>} />
          <Route path="/home" element={<HeaderPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/contact_us" element={<ContactUsPage />} />
          <Route path="/curriculum" element={<CurriculumSection />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
        </Routes>
      </div>
      {shouldShowNavbarAndFooter && <CTAWithFooter />}
    </>
  );
}

export default App;
