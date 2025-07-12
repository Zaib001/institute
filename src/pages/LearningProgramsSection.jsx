import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const LearningProgramsSection = () => {
  const sectionRef = useRef(null);
  const imageControls = useAnimation();
  const overlayControls = useAnimation();
  const textControls = useAnimation();

  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView) {
      imageControls.start({ scale: 1 });
      overlayControls.start({ opacity: 0.6 });
      textControls.start({ y: 0, opacity: 1 });
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image */}
      <motion.img
        initial={{ scale: 0.2 }}
        animate={imageControls}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        src="https://www.newmetrics.net/files/uploads/2023/08/Student-Experience-Cover-2-1536x613.jpg"
        alt="Learning"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={overlayControls}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
      />

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={textControls}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-white max-w-4xl"
        >
          <h2 className="text-3xl md:text-6xl font-bold">
            LEARNING <span className="text-green-500">PROGRAMS</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl  leading-relaxed font-poppins max-w-7xl">
            At Shaheen, we’re dedicated to providing a world-class education that empowers students to reach their full potential. Our experienced faculty and caring staff create a nurturing environment where every child feels valued and inspired.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningProgramsSection;
