import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import arrowImg from '../assets/arrow.svg'
import VM from '../assets/V&M.jpg'
const VisionMission = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <section
        ref={ref}
        className="w-full flex flex-col lg:flex-row items-stretch justify-between bg-white overflow-hidden"
      >
        {/* Left Side: Text */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 py-20"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-[#77C152] text-4xl md:text-7xl font-extrabold mb-6">
            VISION AND MISSION
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-poppins">
            A beacon of innovation in the realm of learning. <br />
            Here, memorization takes a backseat as Shaheen champions a profound understanding of concepts,
            paving the way for a vibrant learning atmosphere.
          </p>

          {/* Animated Down Arrows */}
          <motion.div
            className="absolute hidden sm:block -bottom-16 left-4 sm:left-6 md:left-10"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="w-16 sm:w-20 md:w-28 animate-bounce">
              <img src={arrowImg} alt="Scroll down" className="w-full h-full object-contain" />
            </div>
          </motion.div>

        </motion.div>

        {/* Right Side: Fullscreen Image */}
        <motion.div
          className="w-full lg:w-1/2 h-[50vh] lg:h-screen"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          <img
            src={VM}
            alt="Vision and Mission"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>
    </>
  );
};

export default VisionMission;
