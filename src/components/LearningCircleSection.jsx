import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import circleImg from '../assets/circle1.png';
import img2 from '../assets/img2.jpg';

export default function LearningCircleSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen py-12 px-4 sm:px-6 lg:px-16 bg-white font-poppins gap-10">
      {/* Left Image */}
      <motion.div
        className="w-full md:w-1/2 h-64 sm:h-96 md:h-[700px] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${img2})` }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Right Content */}
      <div
        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        data-aos="fade-left"
      >
        <motion.p
          className="text-base sm:text-lg text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Together, these academic and experimental components create a{' '}
          <strong>learning environment that supports the holistic development</strong> of every student,
          preparing them for active, thoughtful, and impactful roles in a global society.
        </motion.p>

        {/* Circle Diagram */}
        <motion.img
          src={circleImg}
          alt="Learning Circle"
          className="w-full max-w-lg mx-auto md:mx-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </div>
    </section>
  );
}
