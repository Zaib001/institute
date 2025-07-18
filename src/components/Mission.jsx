import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import hero from "../assets/hero.mp4";

const Mission = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="w-full bg-white flex flex-col lg:flex-row items-center justify-between overflow-hidden"
    >
      {/* Left Side: Text */}
      <motion.div
        className="w-full lg:w-1/2 px-4 sm:px-6 md:px-12 lg:px-16 py-10 sm:py-16"
        initial={{ opacity: 0, x: -360 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <h2 className="text-[#77C152] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight">
          MISSION
        </h2>
        <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed font-poppins">
          To engage, educate and empower wards enabling them to seize the
          <strong> world of opportunities </strong>
          manifested in the form of free education across various domains in
          state-owned academic centers of excellence.
        </p>
      </motion.div>

      {/* Right Side: Video */}
      <motion.div
        className="w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[400px] lg:h-screen flex justify-center"
        initial={{ opacity: 0, scale: 1.4 }}
        animate={inView ? { opacity: 1, scale: 1.05 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      >
        <video
          src={hero}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>
    </section>
  );
};

export default Mission;
