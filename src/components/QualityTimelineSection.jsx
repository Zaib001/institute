import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import buildingImg from '../assets/qp.jpg';

const timelineData = [
  {
    year: '2025',
    title: 'Enrollment Procedures',
    desc: 'Our enrollment process is being streamlined. Stay tuned for the updated procedures.',
  },
  {
    year: '2025',
    title: 'Dress Code Guidelines',
    desc: "We're working on a revised dress code to ensure a comfortable and appropriate learning environment.",
  },
  {
    year: '2025',
    title: 'Child Care and Protection Policy',
    desc: "Your child's safety is our top priority. We're finalizing our comprehensive child care and protection policy.",
  },
  {
    year: '2025',
    title: 'Digital Integration',
    desc: 'Integration of smart classrooms and digital tools into the core curriculum for modern learning.',
  },
  ...Array.from({ length: 8 }, (_, i) => ({
    year: '2026',
    title: `Policy Update ${i + 1}`,
    desc: `Description for policy update ${i + 1}.`,
  })),
];

export default function QualityTimelineSection() {
  const timelineRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (timeline) {
        const cards = timeline.querySelectorAll('.timeline-card');
        const timelineRect = timeline.getBoundingClientRect();
        const center = timelineRect.left + timelineRect.width / 2;

        cards.forEach(card => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distanceFromCenter = Math.abs(cardCenter - center);
          const scale = Math.max(0.9, 1 - distanceFromCenter / 1000);
          const opacity = Math.max(0.7, 1 - distanceFromCenter / 500);

          card.style.transform = `scale(${scale})`;
          card.style.opacity = opacity;
        });
      }
    };

    const timeline = timelineRef.current;
    if (timeline) {
      timeline.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (timeline) {
        timeline.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="hidden md:block md:w-1/4 h-auto">
        <img src={buildingImg} alt="Building" className="w-full h-full object-cover" />
      </div>

      {/* Right Timeline */}
      <section className="w-full md:w-3/4 bg-white py-20 px-4 md:px-12 overflow-hidden">
        <div data-aos="fade-up" className="text-left mb-16">
          <h2 className="text-green-600 text-4xl font-extrabold uppercase">QUALITY POLICIES</h2>
        </div>

        {/* Timeline */}
        <div className="relative w-full">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[4px] bg-black z-0" />

          {/* Cards */}
          <div
            ref={timelineRef}
            className="flex flex-nowrap gap-16 overflow-x-auto overflow-y-hidden scrollbar-hide relative z-10 h-[420px] px-4"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="timeline-card relative flex flex-col items-center flex-shrink-0 w-[340px]"
                >
                  {/* Dot */}
                  <div className="w-[31px] h-[31px] bg-black rounded-full z-20 border-4 border-white absolute top-1/2 -translate-y-1/2" />

                  {/* Card */}
                  <div
                    className={`relative bg-[#f5f5ef] border border-gray-300 rounded-lg shadow-md px-5 py-4 text-left w-[340px] h-[170px] mt-16 ${isEven ? '-translate-y-[40px]' : 'translate-y-[160px]'}`}
                  >
                    {/* Year */}
                    {isEven ? (
                      <div className="absolute -bottom-3 left-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                        {item.year}
                      </div>
                    ) : (
                      <div className="absolute -top-3 left-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-[12px] z-10">
                        {item.year}
                      </div>
                    )}

                    <h4 className="text-green-700 font-bold text-base mb-2 mt-2 text-left">{item.title}</h4>
                    <p className="text-gray-700 text-sm text-left">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
