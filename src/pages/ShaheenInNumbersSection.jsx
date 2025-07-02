import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ShaheenInNumbersSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  const cardImages = [
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg',
  ];

  useEffect(() => {
    // GSAP animations when scrolling
    const ctx = gsap.context(() => {
      // Heading animation (from top)
      gsap.from(headingRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });

      // Cards animations (appear from bottom with a delay)
      gsap.from(cardsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.7, // Stagger delay between each card's appearance
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-20 px-6 md:px-20">
      {/* Section Heading */}
      <h2 ref={headingRef} className="text-center text-3xl md:text-4xl font-bold mb-12">
        SHAHEEN IN <span className="text-red-500">NUMBERS</span>
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Card 1 */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="bg-green-500 p-8 rounded-lg text-center"
        >
          <h3 className="text-4xl font-bold">35</h3>
          <p className="text-lg">Years of Excellence</p>
          <img
            src={cardImages[0]}
            alt="Card 1"
            className="w-full h-40 object-cover mt-4 rounded-b-lg"
          />
        </div>

        {/* Card 2 */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="bg-red-500 p-8 rounded-lg text-center"
        >
          <h3 className="text-4xl font-bold">5000+</h3>
          <p className="text-lg">Alumni Secured Free Govt. Medical Seats</p>
          <img
            src={cardImages[1]}
            alt="Card 2"
            className="w-full h-40 object-cover mt-4 rounded-b-lg"
          />
        </div>

        {/* Card 3 */}
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="bg-green-500 p-8 rounded-lg text-center"
        >
          <h3 className="text-4xl font-bold">104+</h3>
          <p className="text-lg">Branches in Two Countries</p>
          <img
            src={cardImages[2]}
            alt="Card 3"
            className="w-full h-40 object-cover mt-4 rounded-b-lg"
          />
        </div>

        {/* Card 4 */}
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="bg-red-500 p-8 rounded-lg text-center"
        >
          <h3 className="text-4xl font-bold">100%</h3>
          <p className="text-lg">Parent Satisfaction</p>
          <img
            src={cardImages[3]}
            alt="Card 4"
            className="w-full h-40 object-cover mt-4 rounded-b-lg"
          />
        </div>

        {/* Card 5 */}
        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className="bg-green-500 p-8 rounded-lg text-center"
        >
          <h3 className="text-4xl font-bold">35000+</h3>
          <p className="text-lg">Students</p>
          <img
            src={cardImages[4]}
            alt="Card 5"
            className="w-full h-40 object-cover mt-4 rounded-b-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ShaheenInNumbersSection;
