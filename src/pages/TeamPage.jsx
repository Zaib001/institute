import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';

const teamMembers = [
  {
    name: 'DR. ABDUL QADEER',
    role: 'CHAIRMAN',
    description: "A visionary educationist is the driving force behind Shaheen Group of Institutions. His unwavering commitment to excellence has shaped the foundation of Shaheen's success.",
    image: 'https://shaheenfoundation.org/wp-content/uploads/2019/01/ds.jpg',
    color: '#2f7025',
  },
  {
    name: 'SYED WAYEZ AHMED',
    role: 'MANAGING DIRECTOR',
    description: "A dynamic and results-oriented leader, serves as the Managing Director for Saudi Arabia and the Middle East. With a passion for education and a focus on student success, he will play a pivotal role in shaping the organization's future.",
    image: p2,
    color: '#00916E',
  },
  {
    name: 'FAHAD SALEH AL JURAIS',
    role: 'ADMINISTRATIVE DIRECTOR',
    description: "A seasoned operations expert brings a wealth of experience to his role as Vice President of Operations for Saudi Arabia. His expertise in streamlining processes and maximizing efficiency will ensure smooth operations across all departments.",
    image: p3,
    color: '#99874D',
  },
  {
    name: 'MOHAMMED ZAKIUDDIN',
    role: 'VP OPERATIONS',
    description: "A dedicated HR and Administrative professional, leads the organization's human capital initiatives. His focus on employee development and engagement will foster a positive and productive work environment.",
    image: p4,
    color: '#6C805B',
  },
  {
    name: 'SARAH AL SHARIEF',
    role: 'ACADEMIC DIRECTOR',
    description: "A skilled educator and administrator, serves as the Academic Director. Her commitment to student success and her passion for creating a nurturing learning environment will make a lasting impact on the lives of students.",
    image: p5,
    color: '#7C5617',
  },
];

// Mobile-only component
const MobileTeamCarousel = ({ members }) => {
  return (
    <div className="md:hidden px-4 py-6">
      <h2 className="text-4xl font-extrabold mb-8 text-center">OUR TEAM</h2>
      
      <div className="space-y-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-gray-50 rounded-3xl p-6 shadow-lg"
            style={{ borderTop: `6px solid ${member.color}` }}
          >
            <div className="relative mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-xl"
              />
            
            </div>
            
            <div className="text-center">
              <h3 
                className="text-2xl font-bold uppercase mb-2"
                style={{ color: member.color }}
              >
                {member.name}
              </h3>
              <p className="text-lg text-gray-700 font-poppins mb-3 font-semibold">
                {member.role}
              </p>
              <p className="text-gray-600 font-poppins">
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Desktop component
const DesktopTeamSection = ({ members }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="hidden md:block relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-10"
        animate={{
          background: `linear-gradient(45deg, ${members[activeIndex].color} 0%, #ffffff 50%, ${members[activeIndex].color} 100%)`
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Floating bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            backgroundColor: members[activeIndex].color,
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10">
        <motion.h2
          className="text-3xl md:text-7xl font-extrabold mb-10 w-full py-10 px-6 md:px-16"
          style={{ color: members[activeIndex].color }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          OUR TEAM
        </motion.h2>

        <div className="flex items-center justify-center w-full py-10 px-6 md:px-16 gap-8 mb-12 flex-wrap">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`relative w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-[4px] cursor-pointer transition-all duration-300 ${
                activeIndex === i ? 'border-[6px] scale-110' : 'border-white'
              }`}
              style={{ 
                borderColor: activeIndex === i ? member.color : '#eee',
                transform: hoverIndex === i ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoverIndex === i ? `0 10px 25px -5px ${member.color}40` : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
              />
              {(hoverIndex === i || activeIndex === i) && (
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="text-white font-bold text-xs md:text-sm text-center px-2"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                  >
                    {member.role}
                  </motion.span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Active Member Info */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl mx-6 md:mx-16 mb-16 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            boxShadow: `0 10px 30px -10px ${members[activeIndex].color}40`
          }}
        >
          <div className="relative p-2">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: members[activeIndex].color }}
                animate={{ 
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
            <motion.img
              src={members[activeIndex].image}
              alt={members[activeIndex].name}
              className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-xl z-10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.3
              }}
            />
          </div>
          
          <div className="p-8 md:p-12 text-center md:text-left flex-1">
            <motion.h3 
              className="text-2xl md:text-4xl font-bold uppercase mb-4"
              style={{ color: members[activeIndex].color }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {members[activeIndex].name}
            </motion.h3>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 font-poppins mb-6 font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              {members[activeIndex].role}
            </motion.p>
            
            <motion.p 
              className="text-gray-600 font-poppins leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {members[activeIndex].description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function TeamSection() {
  return (
    <section className="bg-white">
      <MobileTeamCarousel members={teamMembers} />
      <DesktopTeamSection members={teamMembers} />
    </section>
  );
}