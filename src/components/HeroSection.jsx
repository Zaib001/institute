import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import hero from "../assets/hero.mp4";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Clip-path expand animation
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0 50% 0 0)", "inset(0 0% 0 0)"]);

  // Fade-up and opacity for content
  const contentY = useTransform(scrollYProgress, [0.4, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);

  // Video dimming
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  // In-view entrance animation
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  const headingInView = useInView(headingRef, { margin: "-100px" });
  const textInView = useInView(textRef, { margin: "-100px" });
  const btnInView = useInView(btnRef, { margin: "-100px" });

  return (
    <section ref={sectionRef} className="w-full h-[100vh] relative overflow-hidden">
      {/* Background Video */}
      <motion.video
        src={hero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ opacity: videoOpacity }}
      />

      {/* Full dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Scroll-expanding overlay */}
      <motion.div
        style={{ clipPath }}
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-20 flex items-center px-8 py-10 will-change-transform"
      >
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="max-w-2xl"
        >
          <motion.h1
            ref={headingRef}
            initial={{ y: -100, opacity: 0 }}
            animate={headingInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold leading-10 text-white"
          >
            A <span className="text-green-500">WORLD CLASS</span><br />
            EDUCATION,<br />
            RIGHT HERE
          </motion.h1>

          <motion.p
            ref={textRef}
            initial={{ x: 80, opacity: 0 }}
            animate={textInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-md md:text-lg mt-6 text-white"
          >
            Shaheen Group of Institutions, a renowned name in the field of education, is thrilled to announce its expansion into the Kingdom of Saudi Arabia and the Middle East.
          </motion.p>

          <motion.button
            ref={btnRef}
            initial={{ y: 20, opacity: 0 }}
            animate={btnInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-white underline text-sm hover:text-green-400 transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
