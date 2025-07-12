import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function LimitedSeatsSection() {
  const lines = [
    { text: "RESERVE YOUR CHILD'S SEAT NOW!", highlight: true },
    { text: "ADMISSION RESERVATIONS ARE", highlight: false },
    { text: "FREE AND OPEN", highlight: true },
    { text: "SEATS ARE FILLING FAST!", highlight: false },
    { text: "LIMITED SEATS", highlight: true, big: true },
    { text: "Available", highlight: false },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-r from-black via-[#0a0a0a] to-black text-white flex items-center justify-center px-4 py-20 ">
      <div>
        {lines.map((line, i) => (
          <motion.p
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={`${
              line.big
                ? "text-4xl md:text-7xl font-extrabold text-[#80986F]"
                : "text-xl md:text-3xl font-bold"
            } ${line.highlight ? "text-green-500" : "text-white"} mb-4`}
          >
            {line.text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
