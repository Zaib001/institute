import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import teacher from '../assets/teacher.svg';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: 'The Best Teachers', desc: 'They inspire the next innovators in their respective fields.', icon: teacher },
  { title: 'Innovative Curriculum', desc: 'Designed to foster critical thinking and creativity.', icon: teacher },
  { title: 'World-Class Facilities', desc: 'Learning in an inspiring, tech-enabled environment.', icon: teacher },
  { title: 'Character Building', desc: 'Education that nurtures both intellect and values.', icon: teacher },
];

const galleryImages = new Array(8).fill(
  'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg'
);

const WhyShaheenSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const galleryRef = useRef([]);
  const ctaTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation (slide from top)
      gsap.from(headingRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 90%',
        },
      });

      // Feature cards (from right, staggered)
      gsap.from(cardsRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Gallery items (from bottom, staggered)
      gsap.from(galleryRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: galleryRef.current[0],
          start: 'top 90%',
        },
      });

      // CTA text (from left)
      gsap.from(ctaTextRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ctaTextRef.current,
          start: 'top 90%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="bg-black text-white py-20 px-6 md:px-20">
        <h2 ref={headingRef} className="text-center text-3xl md:text-4xl font-bold">
          WHAT’S THE DIFFERENCE?<br />
          <span className="text-white">WHY CHOOSE </span>
          <span className="text-green-500">SHAHEEN SCHOOLS?</span>
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mt-4">
          A beacon of innovation in the realm of learning. Here, memorization takes a backseat as the academy champions a profound understanding of concepts, paving the way for a vibrant learning atmosphere.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-white text-black p-6 rounded-lg shadow-md"
            >
              <img src={feature.icon} alt="icon" className="w-8 h-8 mb-4" />
              <h3 className="font-bold text-md">{feature.title}</h3>
              <p className="text-sm mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-16 px-6 md:px-20">
        <div className="relative max-w-7xl mx-auto grid grid-cols-6 gap-4 auto-rows-[100px]">
          {galleryImages.map((src, i) => {
            const gridStyles = [
              'col-span-2 row-span-2', 'col-span-2 row-span-1',
              'col-span-1 row-span-1', 'col-span-1 row-span-2',
              'col-span-2 row-span-2', 'col-span-2 row-span-1',
              'col-span-1 row-span-1', 'col-span-2 row-span-1',
            ];
            return (
              <div
                key={i}
                ref={(el) => (galleryRef.current[i] = el)}
                className={`rounded-xl overflow-hidden ${gridStyles[i % gridStyles.length]}`}
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-black text-white text-center py-16 px-6">
        <p
          ref={ctaTextRef}
          className="max-w-2xl mx-auto text-lg md:text-xl"
        >
          At Shaheen School, students receive a comprehensive education that prioritizes academic excellence, etiquette, and personal development.
        </p>
        <button className="mt-6 px-6 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition duration-300">
          Enroll Today →
        </button>
      </section>
    </>
  );
};

export default WhyShaheenSection;
