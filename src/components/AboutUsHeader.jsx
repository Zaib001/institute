import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import arrowImg from '../assets/arrow.svg'
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
    <section ref={sectionRef} className="bg-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex-1"
        >
          <h2 className="text-[#77C152] text-4xl md:text-[100px] font-extrabold leading-tight">
            A VISIONARY <br /> INITIATIVE
          </h2>
          <p className="mt-6 text-gray-800 text-base md:text-[18px] max-w-5xl leading-relaxed font-poppins">
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
          className="flex-1 relative"
        >
          <div className="relative w-full max-w-sm mx-auto">
            <img
              src="https://shaheenfoundation.org/wp-content/uploads/2019/01/ds.jpg"
              alt="Chairman"
              className="rounded-full w-full h-auto z-10 relative"
            />
            <div className="absolute top-1/2 right-[-20%] transform -translate-y-1/2 w-[180px] h-[180px] bg-green-400 rounded-full z-0"></div>
          </div>
        </motion.div>
        <div className="absolute -bottom-20 right-20 z-30 flex flex-col gap-2">
          <div className="w-28 h-28 animate-bounce">
            <img src={arrowImg} alt="Scroll down" className="w-full h-full object-contain" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
