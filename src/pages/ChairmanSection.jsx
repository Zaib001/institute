import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChairmanSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Trigger enter/leave animations
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom top',
        onEnter: () => {
          gsap.fromTo(
            [imageRef.current, textRef.current],
            { y: -2100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              stagger: 0.2,
            }
          );
        },
        onLeave: () => {
          gsap.to([imageRef.current, textRef.current], {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
          });
        },
        onEnterBack: () => {
          gsap.fromTo(
            [imageRef.current, textRef.current],
            { y: -2100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 2,
              ease: 'power3.out',
              stagger: 0.2,
            }
          );
        },
        onLeaveBack: () => {
          gsap.to([imageRef.current, textRef.current], {
            y: -2100,
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWpnbHMybmJsYmxoMTU0eDFqM2dvM2dqNXZ6NnMzbDBld3FkbWdrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9bTjZrytydVRK/giphy.gif"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Chairman Image */}
          <div
            ref={imageRef}
            className="w-full md:w-1/2 max-w-sm border-l-4 border-green-400 rounded-lg overflow-hidden"
          >
            <img
              src="https://shaheenfoundation.org/wp-content/uploads/2019/01/ds.jpg"
              alt="Chairman"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div ref={textRef} className="w-full md:w-1/2 text-white">
            <p className="text-sm md:text-base font-semibold leading-relaxed">
              This ambitious project, spearheaded by Dr. Abdul Qadeer, Chairman of Shaheen Group of Institutions,
              is set to redefine educational excellence in the region.
            </p>
            <p className="mt-6 text-sm md:text-base leading-relaxed">
              Our upcoming school in Riyadh, set to open in August 2025, will offer a comprehensive curriculum
              from Kindergarten through 12th grade, with integrated coaching for NEET, JEE, and CA Foundation.
            </p>
            <button className="mt-6 px-6 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition duration-300">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
