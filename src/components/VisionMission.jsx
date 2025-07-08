import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const VisionMission = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
    <section
      ref={ref}
      className="w-full min-h-screen flex flex-col lg:flex-row items-stretch justify-between bg-white overflow-hidden"
    >
      {/* Left Side: Text */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 py-20"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-green-600 text-4xl md:text-5xl font-extrabold mb-6">
          VISION AND MISSION
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          A beacon of innovation in the realm of learning. <br />
          Here, memorization takes a backseat as Shaheen champions a profound understanding of concepts,
          paving the way for a vibrant learning atmosphere.
        </p>

        {/* Animated Down Arrows */}
        <motion.div
          className="flex flex-col items-start gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[...Array(2)].map((_, i) => (
            <motion.svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + i * 0.2, duration: 0.4 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side: Fullscreen Image */}
      <motion.div
        className="w-full lg:w-1/2 h-[50vh] lg:h-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
      >
        <img
          src="https://oxfordlearning.com/wp-content/uploads/2025/03/GettyImages-1130406922-scaled-1.jpg"
          alt="Vision and Mission"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
    </>
  );
};

export default VisionMission;
