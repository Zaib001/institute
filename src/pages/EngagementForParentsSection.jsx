import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=',
  'https://epe.brightspotcdn.com/53/66/b17323e84e668e02e25d5b4a7a93/teacher-students-classroom.jpg',
  'https://media.istockphoto.com/id/1307457391/photo/happy-black-student-raising-arm-to-answer-question-while-attending-class-with-her-university.jpg?s=612x612&w=0&k=20&c=iZaZFyC-WqlqSQc4elqUNPTxLvWPe8P5Tb_YdZnrI9Q=',
];

const EngagementForParentsSection = () => {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    gsap.context(() => {
      // Animate images to appear one by one as the user scrolls
      gsap.fromTo(
        imageRefs.current, 
        { opacity: 0, x: -300 }, 
        {
          opacity: 1, 
          x: 0, 
          duration: 1, 
          stagger: 0.3, 
          ease: 'power3.out', 
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black text-white py-20 px-6 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
        ENGAGEMENT FOR <span className="text-green-500">PARENTS</span>
      </h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mt-4 mb-8">
        We believe in fostering strong partnerships with parents, providing them with valuable insights and resources to actively participate in their child's educational journey.
      </p>

      {/* Images */}
      <div className="flex justify-between gap-4">
        <div 
          ref={(el) => (imageRefs.current[0] = el)} 
          className="flex-shrink-0 w-full md:w-1/3 transition-all duration-1000 ease-in-out"
        >
          <img 
            src={images[0]} 
            alt={`Engagement Image 1`} 
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>

        <div 
          ref={(el) => (imageRefs.current[1] = el)} 
          className="flex-shrink-0 w-full md:w-1/3 transition-all duration-1000 ease-in-out"
        >
          <img 
            src={images[1]} 
            alt={`Engagement Image 2`} 
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>

        <div 
          ref={(el) => (imageRefs.current[2] = el)} 
          className="flex-shrink-0 w-full md:w-1/3 transition-all duration-1000 ease-in-out"
        >
          <img 
            src={images[2]} 
            alt={`Engagement Image 3`} 
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default EngagementForParentsSection;
