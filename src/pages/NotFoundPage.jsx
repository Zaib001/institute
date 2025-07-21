import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotateVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f4e9] to-[#e7e5dc] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#f59e0b] opacity-20"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-lg bg-[#10b981] opacity-20"
        variants={floatingVariants}
        animate="float"
        style={{ y: [0, -25, 0] }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-[#3b82f6] opacity-20"
        variants={rotateVariants}
        animate="rotate"
      />

      <motion.div 
        className="flex flex-col items-center text-center max-w-2xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated 404 text */}
        <motion.div 
          className="relative mb-8"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-9xl font-bold text-gray-800 relative"
            whileHover={{ scale: 1.05 }}
          >
            4
            <motion.span 
              className="absolute text-[#f59e0b]"
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -10, 10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              0
            </motion.span>
            4
          </motion.h1>
          <motion.div 
            className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-[#f59e0b] to-[#3b82f6] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          variants={itemVariants}
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-600 mb-8 max-w-md"
          variants={itemVariants}
        >
          The page you're looking for might have been moved, renamed, or doesn't exist anymore.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-gradient-to-r from-[#f59e0b] to-[#ef4444] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Return Home
          </motion.button>
        </motion.div>

        {/* Animated illustration */}
        <motion.div 
          className="mt-12 relative"
          variants={itemVariants}
        >
          <motion.div
            className="w-48 h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center"
            whileHover={{ y: -10 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </motion.div>
          <motion.div 
            className="absolute -top-6 -right-6 w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            ?
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid-slate-400 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
      </div>
    </div>
  );
};

export default NotFoundPage;