import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import VM from '../assets/V&M.jpg';
import arrowImg from '../assets/arrow.svg';

const Vision = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative w-full bg-white flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden"
    >
      {/* Left Side: Full Image */}
      <motion.div
        className="hidden lg:block w-full lg:w-1/2"
        initial={{ opacity: 0, x: -250 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <img
          src={VM}
          alt="Vision and Mission"
          className="w-full h-screen object-cover"
        />
      </motion.div>


      {/* Right Side: Text */}
      <motion.div
        className="w-full lg:w-1/2 px-6 py-6 md:px-12"
        initial={{ opacity: 0, y: 510 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-[#77C152] text-4xl md:text-7xl font-extrabold mb-4">VISION</h2>
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-poppins">
          To identify, <strong>tap and nurture</strong> the innate potential in every child to shape the
          generation next that’s successful, socially responsible and reveres the noble tenets of constitution
          to imbibe the true concept of wholesome living.
        </p>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        className="absolute hidden sm:block bottom-8 right-4 sm:right-6 md:right-10"
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="w-16 sm:w-20 md:w-28 animate-bounce">
          <img src={arrowImg} alt="Scroll down" className="w-full h-full object-contain" />
        </div>
      </motion.div>

    </section>
  );
};

export default Vision;
