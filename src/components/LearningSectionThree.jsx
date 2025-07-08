import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import hallwayImage from '../assets/Hallway.jpg'; // replace with actual path

export default function LearningSectionThree() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  // Flip animation for image
  const imageVariant = {
    hidden: { rotateX: 90, opacity: 0 },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  // Scale + blur-in animation
  const textVariant = {
    hidden: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: 'easeOut', delay: 0.4 },
    },
  };


  return (
    <section
      ref={ref}
      className="w-full bg-white px-6 md:px-16 py-24 text-center min-h-screen overflow-hidden"
    >
      {/* Typing Heading (CSS-based) */}
      <div className="mb-6 text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
        <span className="text-green-600 typing-text">LEARNING</span>{' '}
        <span className="text-black">AT SHAHEEN SCHOOLS</span>
      </div>

      {/* Paragraph */}
      <motion.p
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10"
      >
        Our graduates will be equipped to excel in higher education, contribute meaningfully to society,
        and make a positive impact on the world.
      </motion.p>

      {/* Image */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate={controls}
        className="max-w-xl mx-auto perspective"
      >
        <img
          src={hallwayImage}
          alt="School Hallway"
          className="w-full h-auto rounded-md shadow-xl"
        />
      </motion.div>
    </section>
  );
}
