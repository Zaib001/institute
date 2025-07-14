import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import gradCap from '../assets/Group 112.svg'

export default function SeniorSchoolSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView]);

  const textReveal = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i) => ({
      y: '0%',
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' }
    })
  };

  const bubbleVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 0.3 }
    }
  };

  return (
    <section
      ref={ref}
      className="w-full bg-white py-20 px-6 md:px-16 min-h-screen flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden"
    >
      {/* Text Column */}
      <div className="w-full md:w-1/2 space-y-6">
        <motion.h2
          className="text-3xl md:text-6xl font-extrabold uppercase"
          variants={textReveal}
          initial="hidden"
          animate={controls}
          custom={0}
        >
          SENIOR SCHOOL PROGRAM
        </motion.h2>

        <motion.h3
          className="text-[#77C152] font-bold text-lg md:text-2xl uppercase"
          variants={textReveal}
          initial="hidden"
          animate={controls}
          custom={1}
        >
          Grades  9, 10, 11 and 12 , catering to students aged  14 to 18  years old.
          Separate Classes for Boys and Girls
          Integrated NEET/ JEE/ CA Foundation        </motion.h3>

        <motion.p
          className="text-gray-700 text-base md:text-lg leading-relaxed font-poppins"
          variants={textReveal}
          initial="hidden"
          animate={controls}
          custom={2}
        >
          Shaheen Schools' Senior Schools prepare students for higher education and future careers by fostering their academic abilities, leadership skills, and global perspective. Our rigorous curriculum, which includes Integrated NEET/ JEE/ CA Foundation options, ensures that students are well-prepared for university admissions and help them secure Free Seats.          <br /><br />
          We emphasize <strong>critical thinking, problem-solving, and communication skills through our focus on project-based learning and leadership development.</strong> By providing a personalized approach and a wide range of opportunities, we empower students to reach their full potential and make a positive impact on the world.
        </motion.p>
      </div>

      {/* Image Bubbles */}
      <motion.div
        variants={bubbleVariant}
        initial="hidden"
        animate={controls}
        className="w-full md:w-1/2 flex justify-center items-center relative"
      >
        <div className="flex justify-center items-center">
          <img
            src={gradCap}
            alt="Graduation"
            className=""
          />
        </div>
      </motion.div>
    </section>
  );
}
