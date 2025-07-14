import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import video from '../assets/about.mp4'
import arrowImg from '../assets/arrow.svg'

export default function WhyShaheen() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView]);

    // Animation for image
    const imageVariant = {
        hidden: { opacity: 0, x: -80, scale: 1.1 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    // Animation for text wrapper
    const textParentVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    // Animation for each text line
    const textChildVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: -100,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <>
            <section
                ref={ref}
                className="relative w-full flex flex-col md:flex-row items-center justify-between bg-[#E7E5DC] min-h-screen overflow-hidden"
            >

                {/* Left: Image */}
                <motion.div
                    className="w-full md:w-1/2"
                    variants={imageVariant}
                    initial="hidden"
                    animate={controls}
                >
                    <video
                        className=" w-full h-screen object-cover"
                        src={video} // replace with your video file path
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    className="w-full md:w-1/2 px-6 md:px-16 py-20"
                    variants={textParentVariant}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.h2
                        variants={textChildVariant}
                        className="text-3xl md:text-5xl font-extrabold leading-tight mb-4"
                    >
                        NATIONAL <span className="text-[#77C152]">EDUCATION POLICY</span> (NEP 2020)
                    </motion.h2>

                    <motion.p
                        variants={textChildVariant}
                        className="text-base md:text-lg leading-relaxed text-gray-700 mb-4 font-poppins"
                    >
                        Shaheen adopts the <strong>New Education Policy 2020 (NEP)</strong>, It’s a comprehensive framework designed to revolutionize the Indian education system. It aims to create an inclusive and holistic learning environment that fosters critical thinking, creativity, and problem-solving skills.
                    </motion.p>
                </motion.div>
                <div className="absolute bottom-20 right-6 md:right-12 z-40">
                    <div className="w-10 h-10 md:w-28 md:h-28 animate-bounce">
                        <img src={arrowImg} alt="Scroll down" className="w-full h-full object-contain" />
                    </div>
                </div>

            </section>
            <section
                ref={ref}
                className="relative w-full flex flex-col md:flex-row items-center justify-between bg-[#E7E5DC] min-h-screen overflow-hidden"
            >

                {/* Left: Image */}
                <motion.div
                    className="w-full md:w-1/2"
                    variants={imageVariant}
                    initial="hidden"
                    animate={controls}
                >
                    <video
                        className=" w-full h-screen object-cover"
                        src={video} // replace with your video file path
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </motion.div>

                {/* Right: Text */}
                <motion.div
                    className="w-full md:w-1/2 px-6 md:px-16 py-20"
                    variants={textParentVariant}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.h2
                        variants={textChildVariant}
                        className="text-3xl md:text-5xl font-extrabold leading-tight mb-4"
                    >
                      
                        AICU - <span className="text-[#77C152]">ACADEMIC</span> INTENSIVE CARE UNIT
                    </motion.h2>

                    <motion.p
                        variants={textChildVariant}
                        className="text-base md:text-lg leading-relaxed text-gray-700 mb-4 font-poppins"
                    >
                        AICU, or the Academic Intensive Care Unit, is an innovative program by Shaheen Educational Society. It's designed to provide high-quality education for dropout and potential dropout students between grades 1 and 12.
                        Through a comprehensive curriculum and a supportive environment, AICU aims to bring these students back into the mainstream education system and prepare them for success.
                        AICU is also utilized for Students who have been lacking behind in understanding concepts and show poor results in regular academics.
                        AICU is 6:1 Teacher: Student Ratio environment                </motion.p>
                </motion.div>


            </section>
        </>
    );
}
