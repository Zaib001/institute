import React from 'react';
import { motion } from 'framer-motion';
import qualityImage from '../assets/qp.jpg';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
};

export default function QualityPolicies() {
  return (
    <section className="w-full bg-[#f5f5ef] overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-between gap-10 "
      >
        {/* Left Image */}
        <motion.div
          variants={fadeRight}
          className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={qualityImage}
            alt="Shaheen School"
            className="w-[868px] h-[959px] object-fill rounded-lg"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          variants={fadeLeft}
          className="w-full md:w-1/2 text-left space-y-6 px-6 md:px-12 lg:px-20"
        >
          <h2 className="text-green-700 text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            QUALITY POLICIES
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At Shaheen School Riyadh, we are committed to delivering <strong>Total Quality Education (TQE)</strong> that fosters academic excellence, personal growth, and ethical leadership.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Guided by the educational values of the Shaheen Group of Institutions, and operating in alignment with the <strong>Ministry of Education, Saudi Arabia</strong> and the <strong>Central Board of Secondary Education (CBSE), India</strong>,
            our mission is to develop confident, responsible, and capable individuals who contribute meaningfully to society.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
