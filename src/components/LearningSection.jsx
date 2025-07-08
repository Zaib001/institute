import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import learningImage from '../assets/Learning.jpg';

export default function LearningSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  const textContainerVariant = {
    hidden: { opacity: 0, y: 140, clipPath: 'inset(100% 0 0 0)' },
    visible: {
      opacity: 1,
      y: -100,
      clipPath: 'inset(20% 0 0 0)',
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  const imageRevealVariant = {
    hidden: { scale: 1.2, opacity: 0, filter: 'blur(8px)' },
    visible: {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full flex flex-col md:flex-row items-center justify-between bg-white min-h-screen overflow-hidden"
    >
      {/* Text Side */}
      <motion.div
        className="w-full md:w-1/2 px-6 md:px-16 py-24"
        variants={textContainerVariant}
        initial="hidden"
        animate={controls}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          <span className="text-green-600">LEARNING</span> AT <br />
          SHAHEEN SCHOOLS
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Shaheen Schools aims to cultivate graduates who are well-rounded individuals,{' '}
          <span className="font-semibold">prepared to lead purposeful lives</span>.
          Our curriculum is designed to foster passionate learners, critical thinkers,
          and globally-minded citizens.
        </p>
      </motion.div>

      {/* Image Side */}
      <motion.div
        className="w-full md:w-1/2 relative"
        variants={imageRevealVariant}
        initial="hidden"
        animate={controls}
      >
        <img
          src={learningImage}
          alt="Lecture Hall"
          className="w-full h-screen object-cover rounded-md shadow-lg"
        />
        <span className="absolute bottom-8 left-6 text-[6vw] md:text-[4vw] font-extrabold text-white opacity-10 uppercase tracking-wide">
          Learning
        </span>
      </motion.div>
    </section>
  );
}
