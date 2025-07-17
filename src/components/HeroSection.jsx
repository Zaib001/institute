import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import hero from "../assets/hero.mp4";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0 50% 0 0)", "inset(0 0% 0 0)"]);
  const contentY = useTransform(scrollYProgress, [0.4, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const textInView = useInView(textRef, { once: true, margin: "-100px" });
  const btnInView = useInView(btnRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen min-h-[600px] max-h-[1200px] relative overflow-hidden"
    >
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

      {/* Overlay (animated on desktop, full on mobile) */}
      <motion.div
        style={{ clipPath: isMobile ? "inset(0 0% 0 0)" : clipPath }}
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-20 flex items-center px-4 sm:px-6 md:px-10 lg:px-20 py-10"
      >
        <motion.div
          style={!isMobile ? { y: contentY, opacity: contentOpacity } : {}}
          className="max-w-4xl w-full"
        >
          <motion.h1
            ref={headingRef}
            initial={{ y: -100, opacity: 0 }}
            animate={headingInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[110%] font-normal text-white mb-6 sm:mb-10 md:mb-16"
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
            className="font-poppins leading-relaxed text-white text-base sm:text-lg md:text-xl font-normal max-w-xl mb-6 sm:mb-8"
          >
            Shaheen Group of Institutions, a renowned name in the field of education, is thrilled to announce its expansion into the Kingdom of Saudi Arabia and the Middle East.
          </motion.p>

          <motion.button
            ref={btnRef}
            initial={{ y: 20, opacity: 0 }}
            animate={btnInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-white underline text-base sm:text-lg hover:text-green-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded px-2 py-1"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
