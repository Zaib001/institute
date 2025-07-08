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

  // Animation for image
  const imageVariant = {
    hidden: { opacity: 0, x: -80, scale: 1.1 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  // Animation for text wrapper
  const textParentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Animation for each text line
  const textChildVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: -100,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full flex flex-col md:flex-row items-center justify-between bg-white min-h-screen overflow-hidden"
    >
      {/* Left: Image */}
      <motion.div
        className="w-full md:w-1/2"
        variants={imageVariant}
        initial="hidden"
        animate={controls}
      >
        <img
          src={learningImage}
          alt="Lecture Hall"
          className="w-full h-screen object-cover rounded-md shadow-lg"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="w-full md:w-1/2 px-6 md:px-16 py-20"
        variants={textParentVariant}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          variants={textChildVariant}
          className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
        >
          <span className="text-green-600">LEARNING</span> AT <br />
          SHAHEEN SCHOOLS
        </motion.h2>

        <motion.p
          variants={textChildVariant}
          className="text-base md:text-lg leading-relaxed text-gray-700 mb-4"
        >
          We strive to develop students who are not only academically proficient but also possess strong
          character traits, including self-direction, empathy, and a commitment to social responsibility.
        </motion.p>

        <motion.p
          variants={textChildVariant}
          className="text-base md:text-lg leading-relaxed text-gray-700"
        >
          By emphasizing critical thinking, creativity, and problem-solving skills, we equip our students
          to address complex global challenges.
        </motion.p>
      </motion.div>
    </section>
  );
}
