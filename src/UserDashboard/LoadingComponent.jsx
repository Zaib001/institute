import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';

const LoadingComponent = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex justify-center items-center z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'backInOut' }}
      >
        <FaBookOpen className="text-red-700 text-6xl" />
      </motion.div>
    </div>
  );
};

export default LoadingComponent;
