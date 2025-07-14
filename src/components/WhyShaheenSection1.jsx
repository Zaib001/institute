import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import libraryVideo from '../assets/hero.mp4';

const WhyShaheenSection1 = () => {
    const sectionRef = useRef(null);
    const textControls = useAnimation();
    const inView = useInView(sectionRef, { once: true, margin: '-100px' });

    useEffect(() => {
        if (inView) {
            textControls.start({ opacity: 1, y: 0 });
        }
    }, [inView]);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* ✅ Video Background */}
            <motion.video
                src={libraryVideo}
                autoPlay
                muted
                loop
                playsInline
                initial={{ opacity: 0, scale: 1.1 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.6 } : {}}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 w-full h-full bg-black z-20"
            />

            {/* Text Content */}
            <div className="relative z-30 h-full flex items-center justify-start px-6 text-left">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={textControls}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="text-white max-w-7xl"
                >
                    <h2 className="text-3xl md:text-6xl font-bold leading-snug">
                        <span className="text-[#77C152]">GUARANTEED </span>EXCELLENCE
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-gray-300 font-poppins">
                        We strive to provide a holistic education that prepares students for success in the 21st century.
                        <br />Join us on a journey of discovery, innovation, and growth.
                    </p><br /><br />
                    <h2 className="text-3xl md:text-6xl font-bold leading-snug max-w-2xl">
                        INTEGRATED <span className="text-[#77C152]">HIFZ UL QURAN</span> FOUNDATION
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-gray-300 font-poppins max-w-xl">
                        Empower your child's future by combining the divine wisdom of the Quran with academic excellence. Our program ensures a seamless integration of Hifz and regular studies, nurturing a well-rounded individual.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyShaheenSection1;
