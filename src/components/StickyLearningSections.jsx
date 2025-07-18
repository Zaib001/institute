import React, { useState, useRef, useEffect } from "react";
import { useInView, motion } from "framer-motion";

const StickyLearningSections = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Different rotation angles for each image
  const rotationAngles = [-10, -18, -26, -42, -34, 26, -38, 15];

  return (
    <section className="relative flex flex-col md:flex-row w-full min-h-screen">
      {/* Text Side (Scrollable) */}
      <div className="md:w-1/2 w-full py-20 space-y-24 px-6 md:px-24">
        {data.map((section, index) => (
          <SectionBlock
            key={index}
            index={index}
            title={section.title}
            description={section.description}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>

      {/* Sticky Image Side */}
      <div className="hidden md:flex md:w-1/2 sticky top-0 h-screen items-center justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          {data.map((section, index) => {
            const rotation = rotationAngles[index % rotationAngles.length];
            return (
              <motion.img
                key={index}
                src={section.image}
                alt={section.title}
                initial={{ opacity: 0, scale: 0.9, rotate: rotation }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1.1 : 0.95,
                  rotate: activeIndex === index ? 0 : rotation,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StickyLearningSections;

// 👇 Section Block Component
const SectionBlock = ({ title, description, index, setActiveIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(index);
    }
  }, [isInView, index, setActiveIndex]);

  return (
    <div ref={ref} className="min-h-[80vh] flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-[#77C152]">{title}</h2>
        <p
          className="text-lg md:text-xl text-gray-700 leading-relaxed font-poppins"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </motion.div>
    </div>
  );
};
