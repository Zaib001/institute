import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';

const cardImages = new Array(5).fill(
  'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg'
);

const cardsData = [
  { value: 35, suffix: '', label: 'Years of Excellence', bg: 'bg-green-500' },
  { value: 5000, suffix: '+', label: 'Alumni Secured Free Govt. Medical Seats', bg: 'bg-red-500' },
  { value: 104, suffix: '+', label: 'Branches in Two Countries', bg: 'bg-green-500' },
  { value: 100, suffix: '%', label: 'Parent Satisfaction', bg: 'bg-red-500' },
  { value: 35000, suffix: '+', label: 'Students', bg: 'bg-green-500' },
];

// Variants
const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.40,
      type: 'spring',
      stiffness: 80,
      damping: 14,
    },
  }),
};

const headingVariant = {
  hidden: { opacity: 0, y: -70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const ShaheenInNumbersSection = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, margin: '-100px' });
  const cardsInView = useInView(cardsRef, { once: true, margin: '-100px' });

  const headingControls = useAnimation();
  const cardsControls = useAnimation();

  useEffect(() => {
    if (headingInView) headingControls.start('visible');
    if (cardsInView) cardsControls.start('visible');
  }, [headingInView, cardsInView]);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        ref={headingRef}
        variants={headingVariant}
        initial="hidden"
        animate={headingControls}
        className="text-center text-3xl md:text-4xl font-bold mb-12"
      >
        SHAHEEN IN <span className="text-red-500">NUMBERS</span>
      </motion.h2>

      {/* Cards */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {cardsData.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={cardsControls}
            className={`${card.bg} p-8 rounded-lg text-center shadow-xl`}
          >
            <h3 className="text-4xl font-bold">
              {cardsInView && (
                <CountUp end={card.value} duration={5} suffix={card.suffix} />
              )}
            </h3>
            <p className="text-lg mt-2">{card.label}</p>
            <img
              src={cardImages[i]}
              alt={`Card ${i + 1}`}
              className="w-full h-40 object-cover mt-4 rounded-b-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShaheenInNumbersSection;
