import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import image1 from '../assets/Group 103.svg';

export default function PreKgSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  const imageVariants = {
    hidden: { x: -80, rotate: -20, opacity: 0 },
    visible: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 250, damping: 55, delay: 0.8 },
    },
  };

  const textVariants = {
    hidden: { y: 290, opacity: 0, skewY: 5 },
    visible: {
      y: -100,
      opacity: 1,
      skewY: 0,
      transition: { duration: 0.9, ease: 'easeOut', delay: 0.9 },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between bg-white min-h-screen overflow-hidden"
    >
      {/* Images */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-col items-center gap-6 w-full md:w-[40%]"
      >
        <img src={image1} alt="Crayons" className="w-full" />
      </motion.div>

      {/* Text */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={controls}
        className="w-full md:w-[55%] mt-10 md:mt-0"
      >
        <h2 className="text-3xl md:text-7xl font-extrabold mb-3">
          <span className="text-black">PRE-KG & KG</span>
        </h2>
        <h3 className="text-[#77C152] font-bold uppercase text-3xl mb-5">
          Nursery, LKG and UKG for Boys and Girls aged 4 to 6
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4 font-poppins">
          Shaheen Schools' Kindergarten program, for children aged 4–6, is designed to nurture young minds
          holistically. Through a play-based, <strong>experiential approach, we foster children’s social,
          emotional, and cognitive development.</strong>
        </p>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 font-poppins">
          Our child-centered classrooms provide safe and engaging learning environments that encourage curiosity
          and exploration. By integrating subjects like English, Arabic, Mathematics, Science, Computing, Chinese,
          Art, Music, and Physical Education, we equip students with the
          <strong> foundational skills needed for future academic success.</strong>
        </p>
      </motion.div>
    </section>
  );
}
