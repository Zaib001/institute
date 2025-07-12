import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';

const cardImages = [
  'https://plus.unsplash.com/premium_photo-1687128298212-645127107085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Nob29sJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1534643960519-11ad79bc19df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1588075592405-d3d4f0846961?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];


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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {cardsData.map((card, i) => (
         <motion.div
  key={i}
  custom={i}
  variants={cardVariants}
  initial="hidden"
  animate={cardsControls}
  className=" h-[500px] flex flex-col overflow-hidden shadow-xl"
>
  {/* Top Green Box */}
  <div className={`${card.bg} text-white text-center py-6 font-poppins h-[136px] flex flex-col justify-center`}>
    <h3 className="text-3xl font-bold leading-none">
      {cardsInView && (
        <CountUp end={card.value} duration={5} suffix={card.suffix} />
      )}
    </h3>
    <p className="text-sm mt-2 leading-tight px-2">{card.label}</p>
  </div>

  {/* Bottom Image */}
  <img
    src={cardImages[i]}
    alt={`Card ${i + 1}`}
    className="w-full h-full object-cover"
  />
</motion.div>


        ))}
      </div>
    </section>
  );
};

export default ShaheenInNumbersSection;
