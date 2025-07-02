import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LearningProgramsSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.2 },
        {
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        {
          opacity: 0.6,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image */}
      <img
        ref={imageRef}
        src="https://www.newmetrics.net/files/uploads/2023/08/Student-Experience-Cover-2-1536x613.jpg" // or use require if bundler allows
        alt="Learning"
        className="absolute top-0 left-0 w-full h-full object-cover scale-[0.2] transition-transform duration-1000"
      />

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"
      />

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
        <div ref={textRef} className="text-white max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold">
            LEARNING <span className="text-green-500">PROGRAMS</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed">
            At Shaheen, we’re dedicated to providing a world-class education that empowers students to reach their full potential. Our experienced faculty and caring staff create a nurturing environment where every child feels valued and inspired.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningProgramsSection;
