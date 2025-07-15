import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LearningSection2({ title, description, image, animation }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 2], [0, 360]);

  return (
    <section ref={ref} className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-24 py-16">
      {/* Text Side */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: animation === "fade-left" ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-7xl font-bold text-[#77C152] mb-6">{title}</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-poppins">
          {description}
        </p>
      </motion.div>

      {/* Image Side */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        style={{ rotate }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img src={image} alt={title} className="rounded-full w-[300px] md:w-[400px] h-[300px] md:h-[400px] object-cover" />
      </motion.div>
    </section>
  );
}
