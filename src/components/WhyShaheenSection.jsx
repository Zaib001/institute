import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import libraryVideo from '../assets/hero.mp4';
import arrowImg from '../assets/arrow.svg';

const curriculumContent = [
    {
        heading: ['FOCUS', 'ON', 'CURRICULUM'],
        desc: 'The curriculum will be aligned with CBSE standards and will include a strong emphasis on NEET/JEE and CA Foundation from 8th Standard to 12th Class.',
    },
    {
        heading: ['PERSONALISED', 'ATTENTION'],
        desc: 'The school will have a 25:1 student-teacher ratio, ensuring that each student receives personalized attention.',
    },
    {
        heading: ['CO-CURRICULAR', 'ACTIVITIES'],
        desc: 'The school will also offer a variety of extracurricular activities, including sports, arts, and opportunities to learn modern technologies like AI & Robotics.',
    },
];

export default function WhyShaheenSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', `-${(curriculumContent.length) * 100}vh`]
    );

    return (
        <section ref={sectionRef} className="relative w-full bg-[#f5f5ef]" style={{ height: `${(curriculumContent.length) * 100}vh` }}>
            {/* Sticky Layout */}
            <div className="sticky top-0 h-screen flex items-center justify-between">

                {/* Left Side: Scrollable Text */}
                <div className="bg-white w-full h-screen md:w-1/2 z-10 px-6 md:px-16">
                    <motion.div
                        style={{
                            y,
                            height: `${curriculumContent.length * 100}vh`,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                        }}
                    >
                        {/* Why Shaheen Section */}
                        <div className="h-screen flex flex-col justify-start space-y-4 pt-24 px-6 md:px-16">
                            <h4 className="text-sm text-[#80986F] font-bold uppercase">
                                What’s the difference?
                            </h4>
                            <div className="flex flex-wrap gap-x-3 ">
                                {['Why', 'Shaheen?'].map((word, i) => (
                                    <h2
                                        key={i}
                                        className="text-3xl md:text-7xl font-extrabold text-[#7a9462]"
                                    >
                                        {word}
                                    </h2>
                                ))}
                            </div>
                            <h3 className="text-xl md:text-4xl font-extrabold">
                                <span className="text-[#77C152]">Meaningful</span>{' '}
                                <span className="text-black">Education</span>
                            </h3>
                            <p className="text-gray-700 text-base md:text-md font-poppins max-w-xl leading-relaxed">
                                At Shaheen School, students will receive a well-rounded education
                                that emphasizes academic excellence, etiquettes, and personality development.
                            </p>

                        </div>

                        {/* Curriculum Focus Sections */}
                        {curriculumContent.map((item, index) => (
                            <div
                                key={index}
                                className="h-screen flex flex-col justify-start gap-2 pt-10 px-6 md:px-16"
                            >
                                <div className="flex flex-wrap gap-2 items-center">
                                    {item.heading.map((word, i) => (
                                        <motion.h2
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.15 }}
                                            className={`text-3xl md:text-5xl font-extrabold ${['CURRICULUM', 'ATTENTION', 'ACTIVITIES'].includes(word)
                                                ? 'text-[#77C152]'
                                                : 'text-black'
                                                }`}
                                        >
                                            {word}
                                        </motion.h2>
                                    ))}
                                </div>

                                <p className="text-gray-700 text-base md:text-lg max-w-xl leading-relaxed font-poppins">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </motion.div>
                    {/* Floating Arrow with scroll-based fade out */}
                    <motion.div
                        className="absolute bottom-44 left-10 md:left-20 z-30 w-16 h-16"
                        style={{
                            opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]), // fades out between 0%–10% scroll
                        }}
                    >
                        <div className="animate-bounce w-full h-full">
                            <img src={arrowImg} alt="Scroll down" className="w-28 h-28 object-contain" />
                        </div>
                    </motion.div>

                </div>

                {/* Right Side: Sticky Video */}
                <div className="w-full md:w-1/2 h-full sticky top-0">
                    <video
                        src={libraryVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>



            {/* Background Blob */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-200 rounded-full opacity-10 blur-3xl z-0" />
        </section>
    );
}
