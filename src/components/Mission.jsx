import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Mission = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10 overflow-hidden"
    >
      {/* Left Side: Text */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -360 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <h2 className="text-green-600 text-4xl md:text-5xl font-extrabold mb-6">MISSION</h2>

        <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
          To engage, educate and empower wards enabling them to seize the 
          <strong> world of opportunities </strong>
          manifested in the form of free education across various domains in 
          state-owned academic centers of excellence.
        </p>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 3.9 }}
        animate={inView ? { opacity: 1, scale: 1.1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        <img
          src="https://oxfordlearning.com/wp-content/uploads/2025/03/GettyImages-1130406922-scaled-1.jpg"
          alt="Vision and Mission"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Mission;
