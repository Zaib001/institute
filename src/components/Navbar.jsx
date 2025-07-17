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
      {/* Top Login Bar (Desktop only) */}
      <div className="hidden md:flex justify-end items-center space-x-2 text-white bg-black text-[15px] px-14 pt-4">
        <FaUserCircle size={20} />
        <Link to="/login" className="hover:text-green-500">Log In</Link>
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
            <Link to="/"><img src={logo} alt="Shaheen Logo" className="h-20 w-auto" /></Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-white text-[15px] tracking-wide">
            {[
              {
                label: "About Shaheen",
                id: "about",
                links: [
                  { to: "/about", text: "About Shaheen" },
                  { to: "/message", text: "Chairman's Message" },
                  { to: "/vision", text: "Vision & Mission" },
                  { to: "/team", text: "Leadership & Governance" }
                ]
              },
              {
                label: "Shaheen Learning Path",
                id: "path",
                links: [
                  { to: "/Why Shaheen", text: "Why Shaheen" },
                  { to: "/quality", text: "Quality Policy" },
                  { to: "/acdemic", text: "Academic Curriculum" },
                  { to: "/learning", text: "Learning at Shaheen School" }
                ]
              },
              {
                label: "Admissions",
                id: "admission",
                links: [
                  { to: "/admission", text: "Admission Form" }
                ]
              },
              {
                label: "More",
                id: "more",
                links: [
                  { to: "/contact", text: "Contact" },
                  { to: "/jobs", text: "Job Applications" },
                  { to: "/community", text: "Join Community" },
                  { to: "/news", text: "News & Events" },
                  { to: "/parents", text: "Parents" }
                ]
              }
            ].map(menu => (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setHovered(menu.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <button className="hover:text-green-500">{menu.label}</button>
                {hovered === menu.id && (
                  <div className="absolute right-1 top-3 bg-white text-black rounded shadow-md mt-2 py-2 w-64 z-30">
                    {menu.links.map(link => (
                      <Link key={link.to} to={link.to} className="block px-4 py-2 hover:bg-green-100">{link.text}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
       <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="md:hidden mt-4 bg-black text-white font-medium text-base space-y-6 px-6 py-6 rounded-lg shadow-xl"
    >
      {/* Section: About Shaheen */}
      <div>
        <p className="text-green-400 uppercase text-sm mb-2 tracking-wide">About Shaheen</p>
        <div className="space-y-2">
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">About Shaheen</Link>
          <Link to="/message" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Chairman's Message</Link>
          <Link to="/vision" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Vision & Mission</Link>
          <Link to="/team" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Leadership & Governance</Link>
        </div>
      </div>

      {/* Section: Shaheen Learning Path */}
      <div>
        <p className="text-green-400 uppercase text-sm mb-2 tracking-wide">Learning Path</p>
        <div className="space-y-2">
          <Link to="/Why Shaheen" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Why Shaheen</Link>
          <Link to="/quality" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Quality Policy</Link>
          <Link to="/acdemic" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Academic Curriculum</Link>
          <Link to="/learning" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Learning at Shaheen School</Link>
        </div>
      </div>

      {/* Section: Admissions */}
      <div>
        <p className="text-green-400 uppercase text-sm mb-2 tracking-wide">Admissions</p>
        <div className="space-y-2">
          <Link to="/admission" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Admission Form</Link>
        </div>
      </div>

      {/* Section: More */}
      <div>
        <p className="text-green-400 uppercase text-sm mb-2 tracking-wide">More</p>
        <div className="space-y-2">
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Contact</Link>
          <Link to="/jobs" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Job Applications</Link>
          <Link to="/community" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Join Community</Link>
          <Link to="/news" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">News & Events</Link>
          <Link to="/parents" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-gray-800 rounded">Parents</Link>
        </div>
      </div>

      {/* Login */}
      <div className="pt-4 border-t border-gray-700">
        <div className="flex items-center space-x-2 mt-4">
          <FaUserCircle size={20} />
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-green-500">Log In</Link>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      </nav>
    </>
  );
};

export default Navbar;
