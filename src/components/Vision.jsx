import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Vision = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10 overflow-hidden"
    >
      {/* Left Side: Full Image */}
      <motion.div
        className="w-full lg:w-1/2 "
        initial={{ opacity: 0, x: -250 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
      >
         <img
          src="https://oxfordlearning.com/wp-content/uploads/2025/03/GettyImages-1130406922-scaled-1.jpg"
          alt="Vision and Mission"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Side: Text + Arrows */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, y: 510 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-green-600 text-4xl md:text-5xl font-extrabold mb-4">VISION</h2>

        <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
          To identify, <strong>tap and nurture</strong> the innate potential in every child to shape the
          generation next that’s successful, socially responsible and reveres the noble tenets of constitution
          to imbibe the true concept of wholesome living.
        </p>

       
      </motion.div>
    </section>
  );
};

export default Vision;
