import { motion } from "framer-motion";
import busImg from "../assets/school.jpg"; // Replace with your image path

export default function SchoolTransport() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center bg-white">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-[400px] md:h-screen"
      >
        <img
          src={busImg}
          alt="School Transport"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 px-6 md:px-20 py-12 md:py-24 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-7xl font-extrabold text-[#77C152] uppercase mb-6 leading-tight">
          School<br />Transport
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto md:mx-0 font-poppins">
          We have <strong>well-organized arrival procedures</strong> to streamline the process
          and ensure the safety of our students. Watch this space to find out more about
          our arrival guidelines and how we manage student drop-offs and pickups.
        </p>
      </motion.div>
    </section>
  );
}
