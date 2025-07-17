import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import arrowImg from '../assets/arrow.svg';

const AboutUsHeader = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const textVariants = {
    hidden: { opacity: 0, x: -900 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 900 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 } },
  };

  return (
    <section ref={sectionRef} className="bg-white py-16 px-4 sm:px-8 md:px-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative">
        {/* Text Section */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-[#77C152] text-3xl sm:text-5xl md:text-6xl lg:text-[100px] font-extrabold leading-tight">
            A VISIONARY <br /> INITIATIVE
          </h2>
          <p className="mt-6 text-gray-800 text-base sm:text-lg md:text-[18px] leading-relaxed font-poppins">
            Shaheen Group of Institutions, a renowned name in the field of education, is thrilled to announce
            its expansion into the Kingdom of Saudi Arabia and the Middle East. This ambitious project,
            spearheaded by <strong>Dr. Abdul Qadeer</strong>, Chairman of Shaheen Group of Institutions, is set
            to redefine educational excellence in the region.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="w-full lg:w-1/2 relative flex justify-center"
        >
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-[340px]">
            <img
              src="https://shaheenfoundation.org/wp-content/uploads/2019/01/ds.jpg"
              alt="Chairman"
              className="rounded-full w-full h-auto z-10 relative"
            />
            <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 w-40 h-40 sm:w-44 sm:h-44 bg-green-400 rounded-full z-0" />
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="absolute -bottom-12 right-6 sm:right-10 md:right-0 z-30">
          <div className="w-16 h-16 sm:w-20 sm:h-20 animate-bounce">
            <img src={arrowImg} alt="Scroll down" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
