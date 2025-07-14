import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import libraryVideo from '../assets/hero.mp4';

const content = [
  {
    heading: ['FOCUS', 'ON', 'CURRICULUM'],
    desc: 'The curriculum will be aligned with CBSE standards and will include a strong emphasis on NEET/JEE and CA Foundation from 8th Standard to 12th Class.',
  },
  {
    heading: ['PERSONALISED', 'ATTENTION'],
    desc: 'The school will have a 25:1 student-teacher ratio, ensuring that each student receives personalized attention.',
  },
  {
    heading: ['CO-CURRICULAR', 'ACTIVITIES'],
    desc: 'The school will also offer a variety of extracurricular activities, including sports, arts, and opportunities to learn modern technologies like AI & Robotics.',
  },
];

export default function FocusOnCurriculumSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${(content.length - 1) * 100}vh`]
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-[#f5f5ef] h-[400vh]">
      {/* Sticky Layout */}
      <div className="sticky top-0 h-screen flex items-center justify-between ">

        {/* Left: Scrollable Text */}
        <div className='bg-white w-full h-screen md:w-1/2 z-10 ml-20 px-6 md:px-16'>
          <motion.div
            style={{
              y,
              height: `${content.length * 100}vh`,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
            }}
          >
            {content.map((item, index) => (
              <div
                key={index}
                className="h-screen flex flex-col justify-center space-y-4 px-16 md:px-36"
              >
                <div className="flex flex-wrap gap-2 items-center">
                  {item.heading.map((word, i) => (
                    <motion.h2
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className={`text-3xl md:text-5xl font-extrabold ${['CURRICULUM', 'ATTENTION', 'ACTIVITIES'].includes(word)
                          ? 'text-[#77C152]'
                          : 'text-black'
                        }`}
                    >
                      {word}
                    </motion.h2>
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-lg max-w-xl leading-relaxed font-poppins">
                  {item.desc}
                </p>
              </div>
            ))}

          </motion.div>
        </div>

        {/* Right: Video */}
        <div className="w-full md:w-1/2 h-full">
          <video
            src={libraryVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
