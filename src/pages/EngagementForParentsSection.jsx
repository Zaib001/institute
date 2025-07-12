import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img from '../assets/1e.jpg'
import img1 from '../assets/2e.jpg'
import img2 from '../assets/3e.jpg'
const images = [
  img,img1,img2
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 60,
    },
  },
};

const EngagementForParentsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-white py-20 px-6 md:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center text-3xl md:text-6xl font-bold mb-6"
      >
        <span className='text-black'>ENGAGEMENT FOR</span> <span className="text-[#77C152]">PARENTS</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-black font-[400] max-w-7xl mx-auto mt-4 mb-8 font-poppins"
      >
        We believe in fostering strong partnerships with parents, providing them with valuable insights and resources to actively participate in their child's educational journey.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex flex-col md:flex-row gap-6"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="flex-1 transition-all duration-1000 ease-in-out"
          >
            <img
              src={src}
              alt={`Engagement Image ${i + 1}`}
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EngagementForParentsSection;
