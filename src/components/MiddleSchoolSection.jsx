import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import imageLeft from '../assets/mq.jpg';
import imageRight from '../assets/m1.jpg';

export default function MiddleSchoolSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView]);

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
    }),
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full bg-white flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-8 lg:px-16 py-20"
    >
      {/* Left Image */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate={controls}
        className="w-full md:w-1/3 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <img
          src={imageRight}
          alt="Book and Coffee"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Center Text */}
      <div className="w-full md:w-1/2 space-y-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold"
          variants={textVariant}
          initial="hidden"
          animate={controls}
          custom={0}
        >
          MIDDLE SCHOOL PROGRAM
        </motion.h2>

        <motion.h3
          className="text-[#77C152] font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase"
          variants={textVariant}
          initial="hidden"
          animate={controls}
          custom={1}
        >
          Grades 7 and 8, catering to students aged 12 to 14 years old. Separate classes for boys and girls
        </motion.h3>

        <motion.p
          className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-poppins"
          variants={textVariant}
          initial="hidden"
          animate={controls}
          custom={2}
        >
          Shaheen Schools’ Middle Schools empower students to take ownership of their learning journey.
          <br /><br />
          By following the <strong>CBSE curriculum</strong> and integrating <strong>National Education Policy</strong>,
          we provide a comprehensive education.
        </motion.p>

        <motion.p
          className="text-gray-700 text-sm sm:text-base md:text-lg font-poppins"
          variants={textVariant}
          initial="hidden"
          animate={controls}
          custom={3}
        >
          Our guidance and support during the Integrated <strong>NEET/JEE/CA Foundation</strong> option process
          empower students to make informed choices.
        </motion.p>
      </div>

      {/* Right Image */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate={controls}
        className="w-full md:w-1/3 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        <img
          src={imageLeft}
          alt="Motivational Poster"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}
