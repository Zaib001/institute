import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const chairmanTexts = [
  "Esteemed Parents and Guardians, “Educating the mind without educating the heart is no education at all.” These powerful words capture the essence of our vision and mission at the Shaheen Group of Schools and Colleges.",
  "With immense pride, I welcome you to an institution devoted to promoting academic excellence and the overall development of every student who walks through our doors. With over 35 years of experience in teaching and mentoring, I have seen firsthand the transformative power of quality education.",
  "At Shaheen, we create an environment where students excel in academics while cultivating character, confidence, and strong moral values. Our dedicated faculty and staff are committed to providing a safe and supportive learning environment where every child can thrive, from kindergarten to graduation.",
  "We believe in inclusivity and equal opportunity, ensuring all students have access to the tools and resources necessary for success. As we move forward, our mission remains clear: To empower students with the skills, values, and mindset needed to face tomorrow’s challenges and forge a brighter future.",
  "Dr. Abdul Qadeer — Chairman, Shaheen Group of Institutions."
];

const ChairmanMessage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const index = useTransform(scrollYProgress, [0, 1], [0, chairmanTexts.length - 1]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = index.on('change', (v) => {
      const rounded = Math.round(v);
      if (rounded !== currentIndex && rounded >= 0 && rounded < chairmanTexts.length) {
        setCurrentIndex(rounded);
      }
    });
    return () => unsubscribe();
  }, [index, currentIndex]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[300vh] bg-[#FAF9EB] px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 flex flex-col lg:flex-row items-start justify-between gap-10"
    >
      {/* Text Side */}
      <div className="w-full lg:w-2/3 sticky top-20">
        <h2 className="text-[#77C152] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:mb-8 leading-tight">
          MESSAGE FROM OUR CHAIRMAN
        </h2>

        <div className="relative min-h-[280px] sm:min-h-[300px] md:min-h-[220px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              className="absolute top-0 left-0 w-full text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed font-poppins pr-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {chairmanTexts[currentIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end sticky top-48">
        <img
          src="https://shaheenfoundation.org/wp-content/uploads/2019/01/ds.jpg"
          alt="Chairman"
          className="rounded-lg shadow-lg w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto"
        />
      </div>
    </section>
  );
};

export default ChairmanMessage;
