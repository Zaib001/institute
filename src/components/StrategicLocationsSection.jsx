import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import arrowImg from '../assets/arrow.svg'

const StrategicLocationsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const mapVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden relative"
    >
      {/* Left - Embedded Google Map */}
      <motion.div
        className="w-full lg:w-1/2 mb-10 lg:mb-0 rounded-xl overflow-hidden shadow-xl"
        variants={mapVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <iframe
          title="Shaheen Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.302143768445!2d46.78364051500161!3d24.77426595426175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03e6b6f35c95%3A0x7a0a7e9503a2bcfa!2sAl%20Yarmuk%2C%20Riyadh%2013251%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
          width="100%"
          height="900"
          allowFullScreen=""
          loading="lazy"
          className="border-none w-full h-[300px] md:h-screen"
        ></iframe>
      </motion.div>

      {/* Right - Text Content */}
      <motion.div
        className="w-full lg:w-1/2 text-black pl-0 lg:pl-12  px-6 md:px-20 py-20"
        variants={contentVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="text-3xl md:text-7xl font-extrabold mb-4">
          <span className='text-[#77C152]'>STRATEGIC LOCATIONS</span>
        </h2>
        <p className="text-base md:text-md text-gray-800 mb-6 font-poppins">
          The school is located in Al Yarmuk, near landmarks such as Riyadh's Rimal Mall &
          Kingdom Hospital. Premier towers, luxury residences, and key academic hubs make this
          location ideal for students.
        </p>
        <ul className="list-disc ml-5 text-gray-700 mb-4 leading-relaxed font-poppins">
          <li>5 min drive from Riyadh International Airport</li>
          <li>2 min walk from Rimal Mall</li>
          <li>10 min drive from Kingdom Tower</li>
        </ul>
        <p className="text-md font-poppins">
          The Shaheen Group is also <span className="font-semibold">planning to expand its footprint to Jeddah, Jubail and other targeted cities</span> in KSA, in the near future.
        </p>
      </motion.div>

      {/* Scroll Arrows */}
        <div className="absolute bottom-0 right-20 z-30 flex flex-col gap-2">
          <div className="w-28 h-28 animate-bounce">
            <img src={arrowImg} alt="Scroll down" className="w-full h-full object-contain" />
          </div>

        </div>
    </section>
  );
};

export default StrategicLocationsSection;
