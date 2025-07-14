import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';
import TeamBioSection from '../components/TeamBioSection';

const teamMembers = [
  {
    name: 'DR. ABDUL QADEER',
    role: 'CHAIRMAN',
    description:
      "A visionary educationist is the driving force behind Shaheen Group of Institutions. His unwavering commitment to excellence has shaped the foundation of Shaheen’s success.",
    image: 'https://shaheenfoundation.org/wp-content/uploads/2019/01/ds.jpg',
    color: '#2f7025',
  },
  {
    name: 'SYED WAYEZ AHMED',
    role: 'MANAGING DIRECTOR',
    description:
      "A dynamic and results-oriented leader, serves as the Managing Director for Saudi Arabia and the Middle East. With a passion for education and a focus on student success, he will play a pivotal role in shaping the organization's future.",
    image: p2,
    color: '#00916E',
  },
  {
    name: 'FAHAD SALEH AL JURAIS',
    role: 'ADMINISTRATIVE DIRECTOR',
    description:
      "A seasoned operations expert brings a wealth of experience to his role as Vice President of Operations for Saudi Arabia. His expertise in streamlining processes and maximizing efficiency will ensure smooth operations across all departments.",
    image: p3,
    color: '#99874D',
  },
  {
    name: 'MOHAMMED ZAKIUDDIN',
    role: 'VP OPERATIONS',
    description:
      "A dedicated HR and Administrative professional, leads the organization’s human capital initiatives. His focus on employee development and engagement will foster a positive and productive work environment.",
    image: p4,
    color: '#6C805B',
  },
  {
    name: 'SARAH AL SHARIEF',
    role: 'ACADEMIC DIRECTOR',
    description:
      "A skilled educator and administrator, serves as the Academic Director. Her commitment to student success and her passion for creating a nurturing learning environment will make a lasting impact on the lives of students.",
    image: p5,
    color: '#7C5617',
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setActiveIndex(0), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="pb-20 bg-[#E7E5DC] h-screen">
      <h2
        className="text-3xl md:text-7xl font-extrabold mb-10 transition-colors duration-500 w-full py-10 px-6 md:px-16"
        style={{ color: teamMembers[activeIndex].color }}
      >
        OUR TEAM
      </h2>

      <div className="flex items-center justify-between w-full py-10 px-6 md:px-16 flex-wrap gap-6 mb-12">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            onClick={() => setActiveIndex(i)}
            className={`w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-[4px] cursor-pointer ${activeIndex === i ? 'border-[5px]' : 'border-white'}`}
            style={{ borderColor: activeIndex === i ? teamMembers[i].color : '#ccc' }}
          >
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Info Card */}
      <TeamBioSection activeIndex={activeIndex} />
    </section>
  );
}
