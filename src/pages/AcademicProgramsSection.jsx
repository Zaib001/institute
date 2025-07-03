import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const image1 = 'https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=';
const image2 = 'https://epe.brightspotcdn.com/53/66/b17323e84e668e02e25d5b4a7a93/teacher-students-classroom.jpg';

const AcademicProgramsSection = () => {
  const sectionRef = useRef(null);
  const textControls = useAnimation();
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [activeImage, setActiveImage] = useState(0);
  const images = [image1, image2];

  // Start text animation and delayed image change when section is in view
  useEffect(() => {
    if (inView) {
      textControls.start({ opacity: 1, y: 0 });

      const timer = setTimeout(() => {
        setActiveImage(1);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images */}
      {images.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          alt={`Slide ${i}`}
          initial={{ opacity: 0, y: 50 }}
          animate={
            activeImage === i
              ? { opacity: 1, y: 0, zIndex: 10 }
              : { opacity: 0, y: 100, zIndex: 0 }
          }
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ))}

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.6 } : {}}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-black z-20"
      />

      {/* Text Content */}
      <div className="relative z-30 h-full flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={textControls}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-white max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            FROM OUR <br />
            <span className="text-green-500">RIGOROUS ACADEMIC PROGRAMS</span><br /><br />
            TO OUR <br />
            <span className="text-green-500">INNOVATIVE EXTRACURRICULAR ACTIVITIES</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            we strive to provide a holistic education that prepares students for success in the 21st century.
            <br />Join us on a journey of discovery, innovation, and growth.
          </p>
          <button className="mt-8 bg-white text-green-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-500 hover:text-white transition duration-300">
            Learn More →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicProgramsSection;
