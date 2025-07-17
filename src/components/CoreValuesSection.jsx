import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import m1 from '../assets/1.jpg';
import m2 from '../assets/2.jpg';
import m3 from '../assets/3.jpg';
import arrowImg from '../assets/arrow.svg';

const CoreValuesSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const bgVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { x: '100%', opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: 'easeOut', delay: 0.4 },
    },
  };

  const textVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 0.8 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden relative"
    >
      {/* Left Text Section */}
      <motion.div
        className="relative w-full lg:w-1/2 flex items-center justify-center overflow-hidden"
        variants={bgVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${m1})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <motion.div
          className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 py-16 text-white"
          variants={textVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-[#77C152]">
            OUR CORE VALUES
          </h2>

          {[
            "At Shaheen School, students will receive a well-rounded education that emphasizes academic excellence, etiquette, and personality development. We want our children to learn about the first man on the moon—but not at the cost of missing out the knowledge of the only Man who had split the moon into two pieces.",
            "We want our children to be excellent doctors—but with empathy. Excellent professionals—but with humbleness to their parents. Exceptional engineers—but while showing respect to elders.",
            "We don’t teach our children to move ahead *with* everyone, we teach them to move ahead *along* everyone. We believe students should excel in education but shouldn’t be socially shy, and should be able to speak in front of 1000 people like a roaring lion.",
            "Their walk and talk should reflect the personality of an upcoming leader, someone who has visions in life and lives for a mission.",
            "In a nutshell, we don’t just educate—we nurture personality. We have a dedicated program tried and tested for the same.",
          ].map((text, i) => (
            <p key={i} className="mb-4 text-sm sm:text-base md:text-[16px] text-gray-300 font-poppins leading-relaxed">
              {text}
            </p>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Image Cluster */}
      <motion.div
        className="w-full lg:w-1/2 relative flex justify-center items-center px-6 sm:px-10 py-12 z-10"
        variants={imageVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px]">
          <img
            src={m1}
            alt="Graduation"
            className="rounded-full z-10 w-full h-full object-cover shadow-xl"
          />
          <img
            src={m2}
            alt="Icon"
            className="absolute -top-10 right-32 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[4px] border-white object-cover z-10"
          />
          <img
            src={m3}
            alt="Icon"
            className="absolute bottom-40 -left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[4px] border-white object-cover z-10"
          />
          <div className="absolute top-6 right-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#D83A52] z-0" />
          <div className="absolute bottom-12 left-6 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#F5C844] z-0" />
          <div className="absolute top-1/2 -right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3BAE5D] z-[-1]" />
        </div>
      </motion.div>

      {/* Bouncing Arrow */}
      <div className="absolute bottom-4 right-0 transform -translate-x-1/2 flex flex-col items-center z-10">
        <div className="w-12 h-12 sm:w-16 sm:h-16 animate-bounce">
          <img src={arrowImg} alt="Scroll down" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
