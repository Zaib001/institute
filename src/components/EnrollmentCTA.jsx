import React from 'react';
import { motion } from 'framer-motion';
import bg from '../assets/1.jpg';

const EnrollmentCTA = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Scroll Trigger */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      />

      {/* Overlay with Scroll Trigger */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-70 z-0"
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      />

      {/* Content Animation with Scroll Trigger */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-white text-2xl md:text-3xl mb-6 font-medium leading-snug">
          We have a dedicated program
          tried and tested for the same.
        </p>
        <motion.button
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition-all duration-300 flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enroll Today
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default EnrollmentCTA;
