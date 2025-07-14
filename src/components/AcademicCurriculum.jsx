import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img4 from '../assets/img4.jpg'
import img2 from '../assets/img3.jpg'
import img3 from '../assets/img2.jpg'
import img1 from '../assets/img1.jpg'
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
        <section ref={ref} className="flex items-center ">
            <div className="relative w-1/2 h-[500px] flex mt-10 ">
                {images.map((src, index) => (
                    <motion.img
                        custom={index}
                        key={index}
                        initial={{ opacity: 0, x: -600 }}
                        animate={controls}
                        src={src}
                        className="absolute w-72 h-96 object-cover rounded shadow-xl"
                        style={{ left: `${index * 65}px`, top: `${index * 40}px`, zIndex: index }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={textControls}
                className="w-1/2 absolute left-[600px]"
            >
                <h2 className="text-7xl font-bold text-[#77C152] mb-4">
                    ACADEMIC <br /> CURRICULUM
                </h2>
                <p className="text-gray-700 leading-relaxed font-poppins">
                    Curriculum development is a continuous and essential part of Shaheen School Riyadh, reflecting our commitment to adapt to the changing needs of society. <strong>We actively promote innovation</strong> in teaching and learning, creating a dynamic environment where students engage with diverse subjects in meaningful and relevant ways.
                </p>
            </motion.div>
        </section>
    );
}
