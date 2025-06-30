import React from 'react';
import { motion } from 'framer-motion';
import hero from '../assets/hero.mp4'
const HeroSection = () => {
  return (
    <section className="w-full h-[85vh] flex overflow-hidden relative">
      {/* Left Text Section */}
      <motion.div
        className="w-full md:w-1/2 bg-black bg-opacity-80 text-white flex flex-col justify-center px-8 py-10 z-10"
        initial={{ opacity: 0, x: -1300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-10">
          A <span className="text-green-500">WORLD CLASS</span><br />
          EDUCATION,<br />
          RIGHT HERE
        </h1>

        <p className="text-md md:text-lg mt-6 max-w-xl">
          Shaheen Group of Institutions, a renowned name in the field of education, is thrilled to announce its expansion into the Kingdom of Saudi Arabia and the Middle East.
        </p>

        <button className="mt-6 text-white underline text-sm hover:text-green-400 transition">
          Learn More
        </button>
      </motion.div>

      {/* Right Video Section with Animation and Overlay */}
      <motion.div
        className="hidden md:block w-1/2 h-full relative"
        initial={{ opacity: 0, x: 1300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <video
          src={hero}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay on top of video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
