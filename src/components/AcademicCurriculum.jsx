import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img4 from '../assets/img4.jpg';
import img2 from '../assets/img3.jpg';
import img3 from '../assets/img2.jpg';
import img1 from '../assets/img1.jpg';

const images = [img1, img2, img3, img4];

export default function AcademicSection() {
    const controls = useAnimation();
    const textControls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            const sequence = async () => {
                for (let i = 0; i < images.length; i++) {
                    await controls.start((index) =>
                        index === i
                            ? { opacity: 1, x: 10, transition: { duration: 0.6 } }
                            : {}
                    );
                }
                await textControls.start({
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.8 },
                });
            };
            sequence();
        }
    }, [inView]);

    return (
        <section
            ref={ref}
            className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 sm:px-6 md:px-10 lg:px-16 py-16 bg-white"
        >
            {/* Image Stack */}
            <div className="relative w-full md:w-1/2 h-[400px] sm:h-[480px] md:h-[500px] flex justify-center mt-10 md:mt-0">
                {images.map((src, index) => (
                    <motion.img
                        custom={index}
                        key={index}
                        initial={{ opacity: 0, x: -600 }}
                        animate={controls}
                        src={src}
                        className="absolute w-40 sm:w-56 md:w-72 h-60 sm:h-80 md:h-96 object-cover rounded shadow-xl"
                        style={{
                            left: `${index * 40}px`,
                            top: `${index * 30}px`,
                            zIndex: index,
                        }}
                    />
                ))}
            </div>

            {/* Text Content */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={textControls}
                className="w-full md:w-1/2"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#77C152] mb-6 leading-tight">
                    ACADEMIC <br /> CURRICULUM
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-poppins">
                    Curriculum development is a continuous and essential part of Shaheen School Riyadh, reflecting our commitment to adapt to the changing needs of society.
                    <strong> We actively promote innovation</strong> in teaching and learning, creating a dynamic environment where students engage with diverse subjects in meaningful and relevant ways.
                </p>
            </motion.div>
        </section>
    );
}
