import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      {/* Top Login Bar */}
      <div className="hidden md:flex justify-end items-center space-x-2 text-white bg-black text-[15px] px-14 pt-4">
        <FaUserCircle size={20} />
        <Link to="/login" className="hover:text-green-500">
          Log In
        </Link>
      </div>

      {/* Navbar */}
      <nav className="bg-black w-full z-50 py-3 px-6 font-poppins">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white text-xl"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <Link to='/'><img src={logo} alt="Shaheen Logo" className="h-20 w-auto" /></Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-white text-[15px] tracking-wide">
            {/* About Shaheen */}
            <div
              className="relative"
              onMouseEnter={() => setHovered("about")}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="hover:text-green-500">About Shaheen</button>
              {hovered === "about" && (
                <div className="absolute right-1 top-3 bg-white text-black rounded shadow-md mt-2 py-2 w-56 z-30">
                  <Link to="/about" className="block px-4 py-2 hover:bg-green-100">About Shaheen</Link>
                  <Link to="/message" className="block px-4 py-2 hover:bg-green-100">Chairman's Message</Link>
                  <Link to="/vision" className="block px-4 py-2 hover:bg-green-100">Vision & Mission</Link>
                  <Link to="/team" className="block px-4 py-2 hover:bg-green-100">Leadership & Governance</Link>
                </div>
              )}
            </div>

            {/* Shaheen Learning Path */}
            <div
              className="relative"
              onMouseEnter={() => setHovered("path")}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="hover:text-green-500">Shaheen Learning Path</button>
              {hovered === "path" && (
                <div className="absolute right-1 top-3 bg-white text-black rounded shadow-md mt-2 py-2 w-64 z-30">
                  <Link to="/Why Shaheen" className="block px-4 py-2 hover:bg-green-100">Why Shaheen</Link>
                  <Link to="/quality" className="block px-4 py-2 hover:bg-green-100">Quality Policy</Link>
                  <Link to="/acdemic" className="block px-4 py-2 hover:bg-green-100">Academic Curriculum</Link>
                  <Link to="/learning" className="block px-4 py-2 hover:bg-green-100">Learning at Shaheen School</Link>
                </div>
              )}
            </div>

            {/* Admissions */}
            <div
              className="relative"
              onMouseEnter={() => setHovered("admission")}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="hover:text-green-500">Admissions</button>
              {hovered === "admission" && (
                <div className="absolute right-1 top-3 bg-white text-black rounded shadow-md mt-2 py-2 w-52 z-30">
                  <Link to="/admission" className="block px-4 py-2 hover:bg-green-100">Admission Form</Link>
                </div>
              )}
            </div>

            {/* More */}
            <div
              className="relative"
              onMouseEnter={() => setHovered("more")}
              onMouseLeave={() => setHovered(null)}
            >
              <button className="hover:text-green-500">More</button>
              {hovered === "more" && (
                <div className="absolute right-1 top-3 bg-white text-black rounded shadow-md mt-2 py-2 w-64 z-30">
                  <Link to="/contact" className="block px-4 py-2 hover:bg-green-100">Contact</Link>
                  <Link to="/jobs" className="block px-4 py-2 hover:bg-green-100">Job Applications</Link>
                  <Link to="/community" className="block px-4 py-2 hover:bg-green-100">Join Community</Link>
                  <Link to="/news" className="block px-4 py-2 hover:bg-green-100">News & Events</Link>
                  <Link to="/parents" className="block px-4 py-2 hover:bg-green-100">Parents</Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu (unchanged) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 bg-black px-4 py-4 text-white font-semibold text-sm space-y-4"
            >
              {/* Add your mobile menu dropdowns here as needed */}
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
