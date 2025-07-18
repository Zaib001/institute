import React, { useState } from 'react';
import { motion } from 'framer-motion';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p5 from '../assets/p5.png';

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
  return (
    <section className="bg-white px-6 md:px-16 py-10">
      <h2 className="text-3xl md:text-7xl font-extrabold mb-10 text-center md:text-left">
        OUR TEAM
      </h2>

      <div className="flex flex-col gap-16 md:gap-12">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full border-4 border-white shadow-lg mt-6 md:mt-0"
            />
            <div className="p-6 md:p-10 text-center md:text-left">
              <h3
                className="text-xl md:text-3xl font-bold uppercase mb-2"
                style={{ color: member.color }}
              >
                {member.name}
              </h3>
              <p className="text-sm md:text-lg text-gray-700 font-poppins mb-1">
                <strong>{member.role}</strong>
              </p>
              <p className="text-sm md:text-base text-gray-600 font-poppins">
                {member.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
