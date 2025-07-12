import { motion } from "framer-motion";
import uniformImg from "../assets/uniform.jpg"; // Replace with your actual image

export default function UniformGuidelines() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center bg-white">
      {/* Left: Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 px-6 md:px-20 py-12 md:py-24"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-green-600 uppercase mb-6 leading-tight">
          Uniform<br />Guidelines
        </h2>
        <p className="text-gray-800 text-base md:text-lg max-w-xl">
          Our school maintains a standard uniform policy to instill a 
          <strong> sense of unity and discipline</strong> among students.
          Click here to explore our uniform guidelines and the dress code for 
          different grade levels. We will Soon Publish the dress code.
        </p>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-[400px] md:h-screen"
      >
        <img
          src={uniformImg}
          alt="Uniform Guidelines"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
