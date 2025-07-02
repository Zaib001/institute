import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero from '../assets/hero.mp4';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-based clip path overlay
      gsap.fromTo(
        overlayRef.current,
        { clipPath: 'inset(0 50% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: true,
          },
        }
      );

      // Scroll-up + fade out content
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Video fades out
      gsap.to(videoRef.current, {
        opacity: 0.2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Initial text animations
      gsap.from(headingRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
      });

      gsap.from(textRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
      });

      gsap.from(btnRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-[100vh] relative overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={hero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Full dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Scroll-expanding overlay */}
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-20 flex items-center px-8 py-10 will-change-transform"
      >
        <div ref={contentRef} className="max-w-2xl">
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-extrabold leading-10 text-white"
          >
            A <span className="text-green-500">WORLD CLASS</span><br />
            EDUCATION,<br />
            RIGHT HERE
          </h1>

          <p
            ref={textRef}
            className="text-md md:text-lg mt-6 text-white"
          >
            Shaheen Group of Institutions, a renowned name in the field of education, is thrilled to announce its expansion into the Kingdom of Saudi Arabia and the Middle East.
          </p>

          <button
            ref={btnRef}
            className="mt-6 text-white underline text-sm hover:text-green-400 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
