import { motion } from "framer-motion";
import img from '../assets/Group 158.svg';

export default function ParentsPortal() {
  return (
    <section className="bg-[#f3f1ea] px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl md:text-[80px] leading-[40px] my-9  font-extrabold text-green-600 mb-2 uppercase">
            Parents Portal
          </h2>
          <p className="text-gray-700 mb-6 font-poppins">
            Welcome to the Shaheen Group Parent Portal!
          </p>
          <p className="text-gray-800 mb-4 font-poppins">
            Your gateway to your child’s educational journey. Here, you can:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-sm md:text-base font-poppins">
            <li>
              <strong>Monitor Progress:</strong> Keep track of your child’s academic performance, attendance, and behavior.
            </li>
            <li>
              <strong>Communicate with Teachers:</strong> Reach out to your child’s teachers and stay informed about their progress.
            </li>
            <li>
              <strong>Access Important Information:</strong> View school calendars, newsletters, and announcements.
            </li>
            <li>
              <strong>Pay Fees Online:</strong> Conveniently make fee payments through secure online systems.
            </li>
          </ul>
        </motion.div>

        {/* Right: Image Section with custom sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={img}
            alt="Parent Portal Visual"
            className="w-[600px] h-auto md:w-[800px] md:h-[600px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
