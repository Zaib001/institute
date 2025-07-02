import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const image1 = 'https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=';
const image2 = 'https://epe.brightspotcdn.com/53/66/b17323e84e668e02e25d5b4a7a93/teacher-students-classroom.jpg';

const AcademicProgramsSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        setTimeout(() => {
          setActiveImage(1); // change image only once on scroll
        }, 2000);
      },
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            activeImage === i ? 'translate-y-0 opacity-100 z-10' : 'translate-y-full opacity-0 z-0'
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-20" />

      {/* Text content */}
      <div className="relative z-30 h-full flex items-center justify-center px-6 text-center">
        <div ref={textRef} className="text-white max-w-4xl gap-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-snug gap-4">
            FROM OUR <br/><span className="text-green-500">RIGOROUS ACADEMIC PROGRAMS</span><br /><br />
            TO OUR <br/><span className="text-green-500">INNOVATIVE EXTRACURRICULAR ACTIVITIES</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            we strive to provide a holistic education that prepares students for success in the 21st century.
            <br />Join us on a journey of discovery, innovation, and growth.
          </p>
          <button className="mt-8 bg-white text-green-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-500 hover:text-white transition duration-300">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AcademicProgramsSection;
