import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import image1 from '../assets/Group 103.svg';

export default function LowerPrimarySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  const textVariant = {
    hidden: { opacity: 0, y: 250, scale: 1.95 },
    visible: {
      opacity: 1,
      y: -100,
      scale: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, clipPath: 'circle(0% at 50% 50%)' },
    visible: {
      opacity: 1,
      clipPath: 'circle(100% at 50% 50%)',
      transition: { duration: 1.7, ease: 'easeIn' },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between bg-white min-h-screen overflow-hidden"
    >
      {/* Text */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="w-full md:w-1/2 mb-10 md:mb-0"
      >
        <h2 className="text-3xl md:text-7xl font-extrabold mb-3 text-black ">
          LOWER PRIMARY PROGRAM
        </h2>
        <h3 className="text-[#77C152] font-bold uppercase text-3xl mb-5">
          Grades 1, 2, and 3 are offered in separate classes for boys and girls aged 6 to 9
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4 font-poppins">
          Shaheen Schools' Lower Primary program focuses on <strong>building a strong foundation</strong> in literacy,
          numeracy, and communication skills. We provide a nurturing environment where students can develop their
          curiosity, creativity, and critical thinking abilities. Our innovative, inquiry-based curriculum, combined with
          the use of technology, ensures that students are actively engaged in their learning.
        </p>
        <p className="text-base md:text-lg text-gray-700 font-poppins">
          By offering a <strong>diverse range of subjects</strong>, including English, Arabic, Mathematics, Science, Islamic
          Studies, Art, Computing, Urdu, and Physical Education, we equip students with the knowledge and skills they
          need to succeed.
        </p>
      </motion.div>

      {/* Images */}
      <div className="w-full md:w-[40%] flex flex-col gap-6 items-center md:items-end">
        <motion.img
          src={image1}
          alt="Crayons"
          className="w-full "
          variants={imageVariant}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.3 }}
        />
      </div>
    </section>
  );
}
