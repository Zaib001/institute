import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import video from '../assets/about.mp4';
import arrowImg from '../assets/arrow.svg';

const scrollContent = [
  {
    heading: ['NATIONAL', 'EDUCATION POLICY (NEP 2020)'],
    description:
      "Shaheen adopts the New Education Policy 2020 (NEP). It’s a comprehensive framework designed to revolutionize the Indian education system. It aims to create an inclusive and holistic learning environment that fosters critical thinking, creativity, and problem-solving skills.",
  },
  {
    heading: ['AICU -', 'ACADEMIC INTENSIVE CARE UNIT'],
    description:
      "AICU is an innovative program by Shaheen Educational Society. It's designed for dropout and potential dropout students between grades 1 and 12. It ensures a 6:1 Teacher:Student ratio and helps students catch up on academics in a supportive environment.",
  },
];

export default function WhyShaheen() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `-${scrollContent.length * 60}vh`]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#E7E5DC]"
      style={{ height: `${scrollContent.length * 90}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-between overflow-hidden">
        {/* Right: Fixed Video */}
        <div className="w-full md:w-1/2 h-full sticky top-0">
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Left: Scroll-changing Text */}
        <div className="w-full md:w-1/2 h-full px-6 md:px-16 bg-[#E7E5DC] relative z-10 overflow-hidden">
          <motion.div
            style={{
              y,
              height: `${scrollContent.length * 60}vh`,
              position: 'absolute',
              top: 0,
              left: 20,
              width: '100%',
            }}
          >
            {scrollContent.map((item, index) => (
              <div
                key={index}
                className="h-screen flex flex-col justify-center gap-4"
              >
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                  {item.heading.map((word, i) => (
                    <span
                      key={i}
                      className={`mr-2 ${
                        word.includes('ACADEMIC') || word.includes('NEP')
                          ? 'text-[#77C152]'
                          : 'text-black'
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-700 font-poppins max-w-xl">
                  {item.description}
                </p>

                {/* ✅ Arrow only for first item */}
                {index === 0 && (
                  <motion.div
                    style={{ opacity: arrowOpacity }}
                    className="absolute bottom-6 left-0"
                  >
                    <div className="w-10 h-10 md:w-20 md:h-20 animate-bounce">
                      <img
                        src={arrowImg}
                        alt="Scroll down"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
