import React from 'react';
import { motion } from 'framer-motion';

const ScrollingTextSection = () => {
  return (
    <div className="bg-red-600 py-4 overflow-hidden">
      <motion.div
        className="whitespace-nowrap"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'backInOut' }}
      >
        <p className="text-white text-2xl font-semibold">
          Master the Art of Sterile Processing &nbsp; • &nbsp; Master the Art of Sterile Processing &nbsp; • &nbsp; Master the Art of Sterile Processing Master the Art of Sterile Processing &nbsp; • &nbsp; Master the Art of Sterile Processing &nbsp; • &nbsp; Master the Art of Sterile Processing Master the Art of Sterile Processing &nbsp; • &nbsp; Master the Art of Sterile Processing &nbsp; • &nbsp; Master the Art of Sterile Processing
        </p>
      </motion.div>
    </div>
  );
};

export default ScrollingTextSection;
