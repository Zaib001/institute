import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import img1 from '../assets/Rectangle 9306.svg';
import img2 from '../assets/Rectangle 9307.svg';
import img3 from '../assets/Rectangle 9308.svg';
import img4 from '../assets/Rectangle 9309.svg';
import img5 from '../assets/Rectangle 9310.svg';
import img6 from '../assets/Rectangle 9311.svg';

export default function GridImageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView]);

  const flipVariant = {
    hidden: { rotateY: -90, opacity: 0 },
    visible: (i) => ({
      rotateY: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section
      ref={ref}
      className="w-full py-16 px-6 md:px-20 min-h-screen"
    >
      <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={flipVariant}
            initial="hidden"
            animate={controls}
            className="w-full h-40 md:h-64 overflow-hidden rounded-md shadow-lg perspective"
          >
            <img
              src={img}
              alt={`Grid ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
