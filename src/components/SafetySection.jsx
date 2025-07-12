import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/Group 158 (1).svg";

export default function SafetySection() {
  const [showMore, setShowMore] = useState(false);

  const fadeSlide = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4 } },
  };

  return (
    <AnimatePresence mode="wait">
      {showMore ? (
        <motion.section
          key="details"
          variants={fadeSlide}
          initial="initial"
          animate="animate"
          exit="exit"
          className="bg-[#f3f1ea] px-6 md:px-20 py-16"
        >
          <button
            onClick={() => setShowMore(false)}
            className="text-sm text-blue-600 mb-4 flex items-center gap-1"
          >
            ← Go Back
          </button>

          <h2 className="text-xl font-bold mb-4">About Shaheen School Riyadh</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6 text-gray-800">
              <div>
                <h3 className="font-bold text-lg mb-1">Comprehensive Education</h3>
                <p>
                  Shaheen Group of Institutions is now into the Kingdom of Saudi Arabia and the Middle East.
                  This ambitious project is set to redefine educational excellence in the region. Our new
                  school in Riyadh will offer comprehensive education from KG to 12th grade with coaching for
                  NEET, JEE, and CA Foundation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Facility Guidelines</h3>
                <p>
                  At Shaheen School Riyadh, we prioritize the health and safety of our students, staff,
                  and visitors. All individuals on campus are required to wear masks, practice frequent
                  hand washing, and maintain safe distances to ensure a secure and healthy learning environment.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Parental Involvement</h3>
                <p>
                  We encourage active parental involvement in the educational journey of our students.
                  Parents are essential partners in creating a supportive and enriching academic experience.
                  Through open communication and collaboration, we foster a strong school-home relationship
                  for the benefit of each student.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      ) : (
        <motion.section
          key="overview"
          variants={fadeSlide}
          initial="initial"
          animate="animate"
          exit="exit"
          className="bg-white px-6 md:px-20 py-16"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <img src={img1} className="w-[900px] h-auto rounded-lg" />
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-green-600 uppercase">
                Safety and Security
              </h2>

              <p>
                At Shaheen School Riyadh, <strong>safety is our top priority.</strong><br />
                We have implemented strict safety measures to ensure a secure environment for all students.
                Click here to learn more about our safety protocols and how we prioritize the well-being
                of our students.
              </p>

              <div className="w-[80%]">
                <button
                  onClick={() => setShowMore(true)}
                  className="mt-4 text-black font-extrabold text-xl inline-flex items-center gap-2"
                >
                  <span>LEARN MORE</span>
                  <span className="text-2xl">↘</span>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
