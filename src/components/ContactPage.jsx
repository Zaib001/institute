import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiClock } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const backgrounds = [
    'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100',
    'bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100',
    'bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100',
    'bg-gradient-to-br from-amber-100 via-orange-100 to-red-100'
  ];

  const colors = [
    'from-indigo-500 to-purple-600',
    'from-cyan-500 to-blue-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen py-12 font-poppins px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${backgrounds[bgIndex]}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get in <span className={`bg-clip-text text-transparent bg-gradient-to-r ${colors[bgIndex]}`}>Touch</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We'd love to hear from you! Reach out for inquiries, collaborations, or just to say hello.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${colors[bgIndex]} shadow-md`}>
                  <FiMail className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600 mt-2 hover:text-indigo-600 transition-colors">
                    <a href="mailto:info@institute.edu">info@institute.edu</a>
                  </p>
                  <p className="text-gray-600 hover:text-indigo-600 transition-colors">
                    <a href="mailto:admissions@institute.edu">admissions@institute.edu</a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${colors[(bgIndex + 1) % colors.length]} shadow-md`}>
                  <FiPhone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600 mt-2 hover:text-blue-600 transition-colors">
                    <a href="tel:+11234567890">+1 (123) 456-7890</a>
                  </p>
                  <p className="text-gray-600 hover:text-blue-600 transition-colors">
                    <a href="tel:+12345678901">+1 (234) 567-8901 (Admissions)</a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${colors[(bgIndex + 2) % colors.length]} shadow-md`}>
                  <FiMapPin className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Visit Us</h3>
                  <p className="text-gray-600 mt-2">123 Education Avenue</p>
                  <p className="text-gray-600">Knowledge City, 10101</p>
                  <button className="mt-3 text-emerald-600 hover:text-emerald-800 font-medium transition-colors">
                    Get Directions →
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-all relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-amber-100 opacity-20"></div>
              <div className="flex items-start space-x-4 relative z-10">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${colors[(bgIndex + 3) % colors.length]} shadow-md`}>
                  <FiClock className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Office Hours</h3>
                  <ul className="mt-3 space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>9:00 AM - 3:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-purple-500"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
            <p className="text-gray-500 mb-6">We typically respond within 24 hours</p>
            
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                  <FiCheckCircle className="text-green-500 text-4xl" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Message Sent!</h3>
                <p className="text-gray-600 mb-1">Thank you for reaching out to us.</p>
                <p className="text-gray-600">Our team will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition bg-gray-50 hover:bg-white"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition bg-gray-50 hover:bg-white"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition bg-gray-50 hover:bg-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${colors[bgIndex]} text-white py-4 px-6 rounded-xl font-medium flex items-center justify-center space-x-3 hover:shadow-lg transition-all`}
                >
                  <FiSend className="text-lg" />
                  <span className="text-lg">Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-lg font-medium text-gray-700 mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${index === 0 ? 'bg-blue-400' : index === 1 ? 'bg-indigo-600' : index === 2 ? 'bg-pink-500' : 'bg-blue-700'}`}
              >
                {social.charAt(0)}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;