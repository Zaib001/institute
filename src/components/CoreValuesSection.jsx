import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import m1 from '../assets/1.jpg';
import m2 from '../assets/2.jpg';
import m3 from '../assets/3.jpg';
import arrowImg from '../assets/arrow.svg'

const CoreValuesSection = () => {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: '-100px' });

    // Background image and overlay animation
    const bgVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: {
            x: '0%',
            opacity: 1,
            transition: { duration: 1, ease: 'easeOut' },
        },
    };

    // Right-side image cluster
    const imageVariants = {
        hidden: { x: '100%', opacity: 0, scale: 0.9 },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: 'easeOut', delay: 0.4 },
        },
    };

    // Text content from bottom
    const textVariants = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: 'easeOut', delay: 0.8 },
        },
    };

    return (
        <section
            ref={sectionRef}
            className="w-full min-h-screen flex flex-col lg:flex-row overflow-hidden relative"
        >
            {/* Left Half with Animated BG and Overlay */}
            <motion.div
                className="relative w-full lg:w-1/2 flex items-center justify-center overflow-hidden"
                variants={bgVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${m1})` }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                {/* Text on top */}
                <motion.div
                    className="relative z-10 px-6 md:px-16 py-20 text-white"
                    variants={textVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <h2 className="text-3xl md:text-7xl font-extrabold mb-6 text-[#77C152]">
                        OUR CORE VALUES
                    </h2>

                    <p className="leading-relaxed mb-6 text-gray-200 font-poppins">
                        At Shaheen School, students will receive a well-rounded education that emphasizes academic excellence,
                        etiquette, and personality development. We want our children to learn about the first man on the moon—
                        but not at the cost of missing out the knowledge of the only Man who had split the moon into two pieces.
                    </p>

                    <p className="mb-6 text-gray-300 font-poppins">
                        We want our children to be excellent doctors—but with empathy. Excellent professionals—but with humbleness
                        to their parents. Exceptional engineers—but while showing respect to elders.
                    </p>

                    <p className="mb-6 text-gray-300 font-poppins">
                        We don’t teach our children to move ahead *with* everyone, we teach them to move ahead *along* everyone.
                        We believe students should excel in education but shouldn’t be socially shy, and should be able to speak
                        in front of 1000 people like a roaring lion.
                    </p>

                    <p className="mb-6 text-gray-300 font-poppins">
                        Their walk and talk should reflect the personality of an upcoming leader, someone who has visions in life
                        and lives for a mission.
                    </p>

                    <p className="mb-6 text-gray-300 font-poppins">
                        In a nutshell, we don’t just educate—we nurture personality. We have a dedicated program tried and tested
                        for the same.
                    </p>
                </motion.div>

            </motion.div>

            {/* Right Half with Image Cluster Animation */}
            <motion.div
                className="w-full lg:w-1/2 relative flex justify-center items-center p-10 z-10"
                variants={imageVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                    {/* Main circle image */}
                    <img
                        src={m1}
                        alt="Graduation"
                        className="rounded-full z-10 w-full h-full object-cover shadow-xl"
                    />

                    {/* Top-right small image */}
                    <img
                        src={m2}
                        alt="Icon"
                        className="absolute -top-12 right-52 w-32 h-32 rounded-full border-[4px] border-white object-cover z-10"
                    />

                    {/* Bottom-left small image */}
                    <img
                        src={m3}
                        alt="Icon"
                        className="absolute bottom-48 -left-10 w-24 h-24 rounded-full border-[4px] border-white object-cover z-10"
                    />

                    {/* Decorative colored circle top-right */}
                    <div className="absolute top-8 right-8 w-6 h-6 rounded-full bg-[#D83A52] z-0" />

                    {/* Decorative colored circle bottom-left */}
                    <div className="absolute bottom-14 left-6 w-9 h-9 rounded-full bg-[#F5C844] z-0" />

                    {/* Decorative green dot mid-right */}
                    <div className="absolute top-1/2 -right-4 w-10 h-10 rounded-full bg-[#3BAE5D] z-[-1]" />
                </div>
            </motion.div>

            {/* Arrows at Bottom Center */}
            <div className="absolute bottom-6 left-1/2 transform -rotate-90 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <div className="w-28 h-28 animate-bounce">
                    <img src={arrowImg} alt="Scroll down" className="w-full h-full object-contain" />

                </div>
            </div>
        </section>
    );
};

export default CoreValuesSection;
