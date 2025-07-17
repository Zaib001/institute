import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../assets/img1.jpg";

export default function LearningSection() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center font-poppins gap-8 bg-white py-12 px-4 sm:px-6 md:px-10 lg:px-16"
    >
      {/* Left: Image */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <img
          src={img1}
          alt="Classroom"
          className="w-full max-h-[500px] object-cover rounded shadow-lg"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
          Learning goes beyond simply acquiring knowledge; it involves real-life
          application and nurtures reflective, independent, and responsible
          learners. Our curriculum emphasizes creativity, critical thinking,
          physical engagement, and social responsibility. We encourage students
          to take ownership of their growth through purposeful projects,
          collaborative activities, and service-oriented initiatives.
        </p>
        <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
          Structured opportunities, such as student-led conferences, provide platforms for{" "}
          <strong>
            reflection, goal-setting, and self-expression, which help to build confidence and
            essential life skills.
          </strong>{" "}
          Co-curricular activities, including seminars, symposiums, discussions, dramatics,
          publications, and public speaking, further enhance intellectual and emotional growth.
        </p>
      </motion.div>
    </section>
  );
}
