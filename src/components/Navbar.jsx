import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const moreLinks = [
    { label: "Vision", to: "/vision" },
    { label: "Our Team", to: "/team" },
    { label: "Quality Education", to: "/quality" },
    { label: "Academic Curriculum", to: "/acdemic" },
    { label: "Admissions", to: "/admission" },
    { label: "Parents Portal", to: "/parents" },
  ];


  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
    navigate("/login");
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
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const navLinks = [
    { label: "Home", to: "/home" },
    { label: "About Shaheen", to: "/about" },
    { label: "Chairman's Message", to: "/message" },
    { label: "Shaheen Learning Path", to: "/learning" },
    { label: "Why Shaheen", to: "/Why Shaheen" },
  ];


  return (
    <>
      {/* Desktop Header Top: Login */}
      <div className="hidden md:flex justify-end items-center space-x-2 text-white bg-black text-[15px] px-14 pt-4">
        <FaUserCircle size={20} />
        <Link to="/login" className="hover:text-green-500">
          Log In
        </Link>
      </div>

      <nav className="bg-black w-full z-50 py-3 px-6 font-poppins">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white text-xl"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <img src={logo} alt="Shaheen Logo" className="h-14 w-auto" />
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-white text-[15px] tracking-wide">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className={`hover:text-green-500 ${item.active ? "text-green-500" : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className="hover:text-green-500 focus:outline-none"
              >
                More
              </button>
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -left-36 mt-4 bg-white rounded-md shadow-lg overflow-hidden z-30"
                  >
                    {moreLinks.map((item, index) => (
                      <Link
                        key={index}
                        to={item.to}
                        className="block px-4 py-2 text-sm text-black hover:bg-green-500 whitespace-nowrap"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 bg-black px-4 py-4 text-white font-semibold text-sm space-y-4"
            >
              {navLinks.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  className={`block hover:text-green-500 ${item.active ? "text-green-500" : ""
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <div>
                <p className="mb-1">More</p>
                {moreLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="block pl-2 text-gray-300 hover:text-green-500"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-700">
                <FaUserCircle size={20} />
                <Link to="/login" className="hover:text-green-500">
                  Log In
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
