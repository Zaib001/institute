import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import learningImage from '../assets/Learning.jpg';

export default function LearningSectionTwo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  const imageVariant = {
    hidden: { opacity: 0, x: -80, scale: 1.1 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const textParentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textChildVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full flex flex-col md:flex-row items-center justify-between bg-white min-h-screen overflow-hidden px-4 sm:px-6 lg:px-16 py-16 gap-10"
    >
      {/* Left: Image */}
      <motion.div
        className="w-full md:w-1/2 h-[400px] sm:h-[500px] lg:h-screen overflow-hidden rounded-lg shadow-lg"
        variants={imageVariant}
        initial="hidden"
        animate={controls}
      >
        <img
          src={learningImage}
          alt="Lecture Hall"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="w-full md:w-1/2"
        variants={textParentVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          variants={textChildVariant}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="text-[#77C152]">LEARNING</span> AT <br />
          SHAHEEN SCHOOLS
        </motion.h2>

        <motion.p
          variants={textChildVariant}
          className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4 font-poppins"
        >
          We strive to develop students who are not only academically proficient but also possess strong
          character traits, including self-direction, empathy, and a commitment to social responsibility.
        </motion.p>

        <motion.p
          variants={textChildVariant}
          className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 font-poppins"
        >
          By emphasizing critical thinking, creativity, and problem-solving skills, we equip our students
          to address complex global challenges.
        </motion.p>
      </motion.div>
    </section>
  );
}
