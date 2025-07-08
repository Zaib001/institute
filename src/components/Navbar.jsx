import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Keep translation for nav links
import logo from '../assets/logo1.png';

const Navbar = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16" />
        </div>

        <div className="hidden md:flex space-x-6">
          {['home', 'about', 'message','vision','team', 'services', 'courses', 'contact_us', 'curriculum'].map((link) => (
            <Link
              key={link}
              to={`/${link}`}
              className="text-gray-800 uppercase hover:text-green-600 font-medium transition duration-300 text-sm"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex space-x-4 z-20">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={toggleDropdown}
              >
                <FaUserCircle className="text-red-600" size={26} />
                <span className="text-gray-800 text-sm">{user.name}</span>
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
                  >
                    {user.role === 'student' && (
                      <Link
                        to="/studentdashboard"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {t('navbar.user_menu.student_dashboard')}
                      </Link>
                    )}
                    {user.role === 'admin' && (
                      <Link
                        to="/admindashboard"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                      >
                        {t('navbar.user_menu.admin_dashboard')}
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                    >
                      {t('navbar.user_menu.logout')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-1 text-white bg-green-600 hover:bg-green-700 transition duration-300 rounded-md text-sm"
              >
                {t('navbar.user_menu.sign_in')}
              </Link>
              <Link
                to="/signup"
                className="px-3 py-1 border border-green-600 text-black hover:bg-green-600 hover:text-white transition duration-300 rounded-md text-sm"
              >
                {t('navbar.user_menu.sign_up')}
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
