import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import video from '../assets/about.mp4'
const WorldClassSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-500px' });

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.9,
      scale: 1.3,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 180 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section ref={sectionRef} className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute w-full h-full object-cover"
        src={video} // replace with your video file path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Panel */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"
      />

      {/* Text Content */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-20 flex flex-col justify-center items-start h-full px-8 md:px-24 text-white max-w-[700px]"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          A <span className="text-green-500">WORLD-CLASS</span> EDUCATION, <br /> RIGHT HERE
        </h2>
        <p className="mt-6 text-md md:text-lg text-gray-200 leading-relaxed">
          <strong>Our new school in Riyadh</strong>, scheduled to open in August 2025, will offer
          comprehensive education from KG to 12th grade. We also provide integrated coaching for
          NEET, JEE, and CA Foundation, preparing students for a bright future.
        </p>
      </motion.div>

      {/* Scroll Down Arrows */}
      <div className="absolute bottom-10 left-8 z-30 flex flex-col gap-2">
        <div className="w-6 h-6 animate-bounce">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="#4ADE80"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="w-6 h-6 animate-bounce delay-200">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="#4ADE80"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WorldClassSection;
