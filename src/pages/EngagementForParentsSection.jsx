import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const images = [
  'https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=',
  'https://epe.brightspotcdn.com/53/66/b17323e84e668e02e25d5b4a7a93/teacher-students-classroom.jpg',
  'https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=',
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
      className="relative bg-black text-white py-20 px-6 md:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center text-3xl md:text-4xl font-bold mb-6"
      >
        ENGAGEMENT FOR <span className="text-green-500">PARENTS</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-300 max-w-2xl mx-auto mt-4 mb-8"
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
