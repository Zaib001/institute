import { motion } from "framer-motion";
import canteenImg from "../assets/canteen.jpg"; // Replace with your actual image path

export default function SchoolCanteenSection() {
  return (
    <section className="bg-white">
      {/* Top Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={canteenImg}
          alt="School Canteen"
          className="w-full h-[400px] md:h-[300px] object-cover px-16"
        />
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 md:px-16 py-12 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-green-600 uppercase mb-6">
          School Canteen
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto md:mx-0">
          We will have a School Canteen that provides
          <strong> nutritious and balanced meals</strong> for our students.
          Watch this space to view our Canteen menu and learn about our commitment
          to promoting healthy eating habits.
        </p>
      </motion.div>
    </section>
  );
}
