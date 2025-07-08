import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import libraryVideo from '../assets/hero.mp4';

export default function WhyShaheenSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, threshold: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    const wordFadeVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, type: 'spring', stiffness: 70 },
        }),
    };

    const containerVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeOut' },
        },
    };

    const videoVariant = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: 'easeInOut', delay: 0.3 },
        },
    };

    const headingWords = ['Why', 'Shaheen?'];

    return (
        <section
            ref={ref}
            className="w-full bg-[#f5f5ef] flex flex-col md:flex-row items-center justify-between overflow-hidden relative"
        >
            {/* Text Section */}
            <div className='bg-white w-full h-screen md:w-1/2 z-10 ml-20'>
                <motion.div
                    className="space-y-4 text-left py-24 px-6 md:px-16 mt-16"
                    variants={containerVariant}
                    initial="hidden"
                    animate={controls}
                >
                    <h4 className="text-sm text-gray-400 font-bold uppercase ">
                        What’s the difference?
                    </h4>

                    <div className="flex flex-wrap gap-x-3">
                        {headingWords.map((word, i) => (
                            <motion.h2
                                key={i}
                                custom={i}
                                variants={wordFadeVariant}
                                initial="hidden"
                                animate={controls}
                                className="text-3xl md:text-4xl font-extrabold text-[#7a9462]"
                            >
                                {word}
                            </motion.h2>
                        ))}
                    </div>

                    <motion.h3
                        variants={containerVariant}
                        initial="hidden"
                        animate={controls}
                        className="text-xl md:text-2xl font-extrabold"
                    >
                        <span className="text-green-600">Meaningful</span>{' '}
                        <span className="text-black">Education</span>
                    </motion.h3>

                    <motion.p
                        variants={containerVariant}
                        initial="hidden"
                        animate={controls}
                        className="text-gray-700 text-base md:text-lg max-w-xl leading-relaxed"
                    >
                        At Shaheen School, students will receive a well-rounded education
                        that emphasizes academic excellence, etiquettes, and personality development.
                    </motion.p>
                </motion.div>
            </div>
            {/* Video Section */}
            <motion.div
                className="w-full md:w-1/2 mt-10 md:mt-0"
                variants={videoVariant}
                initial="hidden"
                animate={controls}
            >
                <video
                    src={libraryVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-screen object-cover"
                />
            </motion.div>

            {/* Background Blob */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-200 rounded-full opacity-10 blur-3xl z-0" />
        </section>
    );
}
