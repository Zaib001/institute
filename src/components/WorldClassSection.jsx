import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import video from '../assets/about.mp4'
import arrowImg from '../assets/arrow.svg'

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
        className="absolute w-1/2 top-0 left-0 h-full bg-black/80 z-10"
      />

      {/* Text Content */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-20 flex flex-col justify-center items-start h-full px-8 md:px-24 text-white "
      >
        <h2 className="text-3xl md:text-[70px] font-extrabold leading-tight max-w-7xl">
          A <span className="text-[#77C152]">WORLD-CLASS</span> EDUCATION, <br /> RIGHT HERE
        </h2>
        <p className="mt-6 text-md md:text-md text-gray-200 leading-relaxed max-w-3xl font-poppins">
          <strong>Our new school in Riyadh</strong>, scheduled to open in August 2025, will offer
          comprehensive education from KG to 12th grade. We also provide integrated coaching for
          NEET, JEE, and CA Foundation, preparing students for a bright future.
        </p>
      </motion.div>

      {/* Scroll Down Arrows */}
      <div className="absolute bottom-10 left-8 z-30 flex flex-col gap-2">
        <div className="w-28 h-28 animate-bounce">
          <img src={arrowImg} alt="Scroll down" className="w-full h-full object-contain" />
        </div>

      </div>
    </section>
  );
};

export default WorldClassSection;
