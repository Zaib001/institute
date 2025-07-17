import React, { useRef, useEffect } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useAnimation
} from 'framer-motion';

const ChairmanSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const imageControls = useAnimation();
  const textControls = useAnimation();

  const imageInView = useInView(imageRef, { margin: "-100px" });
  const textInView = useInView(textRef, { margin: "-100px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.95]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start({ opacity: 1, y: 0 });
    }
    if (textInView) {
      textControls.start({ opacity: 1, y: 0 });
    }
  }, [imageInView, textInView]);

  return (
    <section
      ref={sectionRef}
      className="relative h-auto md:h-screen w-full overflow-hidden bg-black snap-start py-16 md:py-0"
    >
      {/* Background GIF */}
      <motion.img
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWpnbHMybmJsYmxoMTU0eDFqM2dvM2dqNXZ6NnMzbDBld3FkbWdrNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9bTjZrytydVRK/giphy.gif"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ scale: imageScale }}
      />

      {/* Dark overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Foreground Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-8 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 100 }}
            animate={imageControls}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="w-full md:w-1/2 border-l-4 border-green-400 rounded-lg overflow-hidden"
          >
            <img
              src="https://shaheenfoundation.org/wp-content/uploads/2019/01/ds.jpg"
              alt="Chairman"
              className="md:w-[60%] md:h-[60vh] object-cover rounded"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 100 }}
            animate={textControls}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-2/3 text-white font-poppins"
          >
            <p className="leading-relaxed text-lg sm:text-xl md:text-2xl font-semibold">
              This ambitious project, spearheaded by Dr. Abdul Qadeer, Chairman of Shaheen Group of Institutions,
              is set to redefine educational excellence in the region.
            </p>

            <p className="mt-6 leading-relaxed text-lg sm:text-xl md:text-2xl font-semibold">
              Our upcoming school in Riyadh, set to open in August 2025, will offer a comprehensive curriculum
              from Kindergarten through 12th grade, with integrated coaching for NEET, JEE, and CA Foundation.
            </p>

            <button className="mt-6 px-6 py-2 border border-white rounded-full text-sm sm:text-base hover:bg-white hover:text-black transition duration-300">
              Learn More →
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ChairmanSection;
