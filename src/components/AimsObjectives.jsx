import { motion } from "framer-motion";
import aimsBg from "../assets/aims-bg.jpg"; // Replace with your image

export default function AimsObjectives() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${aimsBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-7xl font-bold text-[#77C152] mb-6">
          AIMS & OBJECTIVES
        </h2>
        <p className="text-lg md:text-xl leading-relaxed font-poppins">
          The aim of our curriculum is to develop the understanding, knowledge
          and skills of each student so that they are able to meet the
          challenges that lie ahead of them in a rapidly changing and
          competitive world.
        </p>
      </motion.div>
    </section>
  );
}
