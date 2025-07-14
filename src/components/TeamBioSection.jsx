import React from 'react';
import { motion } from 'framer-motion';

// Background styles
const curveStyles = [
  'bg-[#2f5d34]',
  'bg-[#00856F]',
  'bg-[#8B6E46]',
  'bg-[#788E64]',
  'bg-[#805D24]',
];

const paddingY = ['py-6', 'py-20', 'py-24', 'py-20', 'py-16'];

const teamMembers = [
  {
    name: 'Dr. Abdul Qadeer',
    role: 'Chairman',
    description:'A visionary educationist is the driving force behind Shaheen Group of Institutions. His unwavering commitment to excellence has shaped the foundation of Shaheens success.'  },
  {
    name: 'Syed Wayez Ahmed',
    role: 'Managing Director',
    description:'A dynamic and results-oriented leader, serves as the Managing Director for Saudi Arabia and the Middle East. With a passion for education and a focus on student success, he will play a pivotal role in shaping the organizations future.' 
 },
  {
    name: 'Fahad Saleh Al Jurais',
    role: 'Administrative Director',
    description:'A seasoned operations expert brings a wealth of experience to his role as Vice President of Operations for Saudi Arabia. His expertise in streamlining processes and maximizing efficiency will ensure smooth operations across all departments.'
  },
  {
    name: 'Mohammed Zakiuddin',
    role: 'VP Operations',
    description:'A dedicated HR and Administrative professional, leads the organizations human capital initiatives. His focus on employee development and engagement will foster a positive and productive work environment.'  },
  {
    name: 'Sarah Al Sharief',
    role: 'Academic Director',
    description:'A skilled educator and administrator, serves as the Academic Director. Her commitment to student success and her passion for creating a nurturing learning environment will make a lasting impact on the lives of students.'
  },
];

const waveStyles = [
  'M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,117.3C672,117,768,75,864,64C960,53,1056,75,1152,101.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
  'M0,64L60,80C120,96,240,128,360,117.3C480,107,600,53,720,48C840,43,960,85,1080,106.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z',
  'M0,64L80,58.7C160,53,320,43,480,64C640,85,800,139,960,144C1120,149,1280,107,1360,85.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z',
  'M0,96L60,117.3C120,139,240,181,360,165.3C480,149,600,75,720,74.7C840,75,960,149,1080,149.3C1200,149,1320,75,1380,37.3L1440,0L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z',
  'M0,128L80,117.3C160,107,320,85,480,106.7C640,128,800,192,960,208C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z',
];

const TeamBioSection = ({ activeIndex }) => {
  const member = teamMembers[activeIndex];
  const bgClass = curveStyles[activeIndex];
  const padding = paddingY[activeIndex];
  const wavePath = waveStyles[activeIndex];

  return (
    <motion.div
      key={activeIndex}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative w-full h-[300px] text-white overflow-hidden ${bgClass} ${padding}`}
    >
      {/* Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-96 md:h-24"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path fill="white" d={wavePath} />
      </svg>

      {/* Text Content */}
      <div className="relative z-10 mt-8 max-w-7xl mx-auto">
        <h3 className="text-white font-bold text-xl md:text-4xl uppercase">
          {member.name} - {member.role}
        </h3>
        <p className="text-sm md:text-base leading-relaxed font-poppins">{member.description}</p>
      </div>
    </motion.div>
  );
};

export default TeamBioSection;
