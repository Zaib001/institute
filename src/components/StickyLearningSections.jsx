import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StickyLearningSections = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth background color transition
  const bgColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#f0fdf4", "#ecfdf5"]
  );

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://assets.website-files.com/5f6bc60e665f54545a1e52a5/5f6bc60e665f5473c31e52d7_noise-pattern.png')]" />
      </motion.div>

      {/* Floating particles */}
      <ParticlesBackground activeColor={data[activeIndex]?.iconColor} />

      <div className="relative flex flex-col lg:flex-row w-full max-w-8xl mx-auto">
        {/* Text Side (Scrollable) */}
        <div className="w-full py-16 space-y-12 px-6 md:px-12 lg:px-16 z-10">
          {data.map((section, index) => (
            <SectionBlock
              key={index}
              index={index}
              title={section.title}
              description={section.description}
              image={section.image}
              setActiveIndex={setActiveIndex}
              iconColor={section.iconColor}
              isActive={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Modern Section Block Component with Image Card
const SectionBlock = ({ title, description, image, index, setActiveIndex, iconColor, isActive }) => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) setActiveIndex(index);
  }, [inView, index, setActiveIndex]);

  return (
    <div ref={ref} className="min-h-[90vh] md:min-h-[75vh] flex items-center justify-center relative group">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: inView ? 1 : 0.2, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative z-10 w-full max-w-5xl p-8 rounded-3xl transition-all duration-300 ${
          isActive
            ? "bg-white/80 backdrop-blur-md shadow-xl border border-white/20"
            : "bg-white/0 hover:bg-white/20 hover:backdrop-blur-sm"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative bottom-4 w-[70%]"
          >
            <img
              src={image}
              alt={title}
              className="w-full"
            />
            <motion.div 
              className="absolute inset-0 rounded-xl blur-lg opacity-30"
              style={{ backgroundColor: iconColor.replace("text-", "bg-") }}
              animate={{ opacity: inView ? 0.3 : 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: inView ? 0 : -20, opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative"
            >
              <motion.div
                className={`absolute -left-8 top-1/2 w-16 h-0.5 ${iconColor} bg-current`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: inView ? 1 : 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />

              <div className="flex items-center gap-4">
                <motion.div
                  className={`w-5 h-5 rounded-full ${iconColor} bg-current flex items-center justify-center`}
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                    boxShadow: isActive ? `0 0 0 6px ${iconColor.replace("text-", "bg-")}/30` : "none"
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {title}
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-lg text-gray-600 leading-relaxed font-poppins"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: inView ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`h-1 w-full origin-left ${iconColor} bg-current mt-6`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Sophisticated Particles Background
const ParticlesBackground = ({ activeColor }) => {
  const particles = Array.from({ length: 12 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const rotation = Math.random() * 360;
        
        return (
          <motion.div
            key={i}
            className={`absolute ${activeColor} bg-current`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
              opacity: 0.2,
              borderRadius: Math.random() > 0.5 ? "50%" : "20%"
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: rotation + 360
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
              rotate: {
                duration: duration * 2,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        );
      })}
      
      {/* Floating shapes */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full ${activeColor.replace("text-", "bg-")} opacity-10`}
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute bottom-1/3 right-1/4 w-48 h-48 rounded-lg ${activeColor.replace("text-", "bg-")} opacity-10`}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default StickyLearningSections;