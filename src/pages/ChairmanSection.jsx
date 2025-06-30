import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.7,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }, 
};


const ChairmanSection = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* ✅ Background GIF */}
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWpnbHMybmJsYmxoMTU0eDFqM2dvM2dqNXZ6NnMzbDBld3FkbWdrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9bTjZrytydVRK/giphy.gif"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* ✅ Transparent Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-10" />

      {/* ✅ Foreground Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Animated Image */}
         {/* Left Animated Image */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative w-full md:w-1/2 max-w-sm"
>
  <motion.div variants={fadeIn}>
    <div className="border-l-4 border-green-400 rounded-lg overflow-hidden">
      <img
        src="https://shaheenfoundation.org/wp-content/uploads/2019/01/ds.jpg"
        alt="Chairman"
        className="w-full h-auto object-cover"
      />
    </div>
  </motion.div>
</motion.div>


          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <motion.p
              variants={fadeIn}
              className="text-sm md:text-base font-semibold leading-relaxed text-white"
            >
              This ambitious project, spearheaded by Dr. Abdul Qadeer, Chairman of Shaheen Group of Institutions, is set to redefine educational excellence in the region.
            </motion.p>

            <motion.p
              variants={fadeIn}
              className="mt-6 text-sm md:text-base leading-relaxed text-white"
            >
              Our upcoming school in Riyadh, set to open in August 2025, will offer a comprehensive curriculum from Kindergarten through 12th grade, along with integrated coaching for NEET, JEE, and CA Foundation, empowering students to achieve a successful future.
            </motion.p>

            <motion.button
              variants={fadeIn}
              className="mt-6 px-6 text-white py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition duration-300"
            >
              Learn More →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
