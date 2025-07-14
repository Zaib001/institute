import { motion } from "framer-motion";
import holidayImg from "../assets/holiday.jpg"; 

export default function HolidaysLeaveSection() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center bg-white">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/3 h-[400px] md:h-screen"
      >
        <img
          src={holidayImg}
          alt="Holiday & Leave"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 px-6 md:px-20 py-12 md:py-24 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-7xl font-extrabold text-[#77C152] uppercase mb-6 leading-tight">
          Holidays &<br />Leave of Absence
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto md:mx-0 font-poppins">
          We understand the importance of family time and rest. 
          <strong> Watch this space to review our holiday schedule</strong> and the procedure 
          for requesting leave of absence for your child.
        </p>
      </motion.div>
    </section>
  );
}
