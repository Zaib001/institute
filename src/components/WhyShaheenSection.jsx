import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import libraryVideo from '../assets/hero.mp4';

const curriculumContent = [
  {
    heading: ['FOCUS', 'ON', 'CURRICULUM'],
    desc: 'The curriculum will be aligned with CBSE standards and will include a strong emphasis on NEET/JEE and CA Foundation from 8th Standard to 12th Class.',
    bgColor: '#f0f7eb',
    accentColor: '#77C152'
  },
  {
    heading: ['PERSONALISED', 'ATTENTION'],
    desc: 'The school will have a 25:1 student-teacher ratio, ensuring that each student receives personalized attention.',
    bgColor: '#ebf5f5',
    accentColor: '#4a9d9c'
  },
  {
    heading: ['CO-CURRICULAR', 'ACTIVITIES'],
    desc: 'The school will also offer a variety of extracurricular activities, including sports, arts, and opportunities to learn modern technologies like AI & Robotics.',
    bgColor: '#f5ebf5',
    accentColor: '#9c4a9d'
  },
];

export default function WhyShaheenSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const videoOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.8]);

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#f5f5ef] to-[#e8f0e0]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Floating decorative elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10"
          style={{
            backgroundColor: '#77C152',
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
        {/* Left Content */}
        <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-16 py-16 md:py-24 space-y-16 overflow-y-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.h4 
              className="text-sm text-[#80986F] font-bold uppercase tracking-widest"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              What's the difference?
            </motion.h4>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#2a3b1e] leading-tight"
            >
              Why <span className="text-[#77C152]">Shaheen?</span>
            </motion.h2>
            
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold"
            >
              <span className="text-[#77C152]">Meaningful</span>{' '}
              <span className="text-black">Education</span>
            </motion.h3>
            
            <motion.p 
              className="text-gray-700 text-lg md:text-xl font-poppins max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              At Shaheen School, students receive a well-rounded education that emphasizes 
              academic excellence, etiquettes, and personality development.
            </motion.p>
          </motion.div>

          {/* Curriculum Sections */}
          {curriculumContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative p-8 rounded-3xl backdrop-blur-sm bg-white/80 border border-white/20 shadow-lg"
              style={{ backgroundColor: item.bgColor }}
            >
              {/* Animated underline */}
              <motion.div 
                className="absolute left-8 bottom-0 h-1 bg-[#77C152]"
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 items-center">
                  {item.heading.map((word, i) => (
                    <motion.h2
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + index * 0.1 }}
                      className={`text-3xl md:text-4xl font-extrabold ${
                        ['CURRICULUM', 'ATTENTION', 'ACTIVITIES'].includes(word)
                          ? 'text-[#77C152]'
                          : 'text-black'
                      }`}
                    >
                      {word}
                    </motion.h2>
                  ))}
                </div>
                
                <motion.p
                  className="text-gray-700 text-lg font-poppins leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {item.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Video - Sticky */}
        <motion.div 
          className="hidden md:block w-1/2 sticky top-0 h-screen"
          style={{
            scale: videoScale,
            opacity: videoOpacity
          }}
        >
          <div className="absolute h-[150vh]  inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
          <video
            src={libraryVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[150vh] object-cover"
          />
          
         
        </motion.div>
      </div>
    </section>
  );
}