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
        desc: 'We\'re working on a revised dress code to ensure a comfortable and appropriate learning environment.',
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
];

export default function QualityTimelineSection() {
    const timelineRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });

        // Add scroll animation effects
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
            // Initial trigger
            handleScroll();
        }

        return () => {
            if (timeline) {
                timeline.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    return (
        <div className='flex flex-col md:flex-row'>
            {/* Image Column - now part of the same row on md screens */}
            <div className="hidden md:block md:w-1/4 h-auto">
                <img src={buildingImg} alt="Building" className="w-full h-full object-cover" />
            </div>

            {/* Timeline Column */}
            <section className="w-full md:w-3/4 bg-white py-20 px-4 md:px-12">
                {/* Header */}
                <div data-aos="fade-up" className="text-left mb-16">
                    <h2 className="text-green-600 text-4xl font-extrabold uppercase">QUALITY POLICIES</h2>
                </div>

                {/* Timeline Line */}
                <div className="relative w-full">
                    <div className="absolute top-[55%] left-0 w-full h-[4px] bg-black z-0" />

                    {/* Timeline Items */}
                    <div
                        ref={timelineRef}
                        style={{
                            scrollbarWidth: 'none', // Firefox
                            msOverflowStyle: 'none', // IE/Edge
                        }}
                        className="flex justify-between flex-wrap gap-2 relative z-10 mt-24 mb-20">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className="relative flex flex-col items-center flex-1 min-w-[240px] max-w-[320px]"
                                >
                                    {/* Dot */}
                                    <div className="w-[31px] h-[31px] bg-black rounded-full z-20 border-4 border-white absolute top-[55%] transform -translate-y-1/2" />

                                    {/* Card */}
                                    <div
                                        className={`relative bg-[#f5f5ef] border border-gray-300 rounded-lg shadow-md px-5 py-4 text-center w-[350px] h-[165px] mt-20 ml-72 ${isEven ? '-translate-y-[83%]' : 'translate-y-[50%]'
                                            }`}
                                    >
                                        {/* BELOW CARD (year at top-left) */}
                                        {!isEven && (
                                            <div className="absolute -top-3 left-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-[12px] z-10 w-[50px] h-[26px]">
                                                {item.year}
                                            </div>
                                        )}

                                        <h4 className="text-green-700 font-bold text-base mb-2 mt-2 text-left">{item.title}</h4>
                                        <p className="text-gray-700 text-sm text-left">{item.desc}</p>

                                        {/* ABOVE CARD (year at bottom-left) */}
                                        {isEven && (
                                            <div className="absolute -bottom-3 left-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                                                {item.year}
                                            </div>
                                        )}
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