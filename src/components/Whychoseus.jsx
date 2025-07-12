import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import teacher from '../assets/teacher.svg';

const features = [
  { title: 'The Best Teachers', desc: 'They inspire the next innovators in their respective fields.', icon: teacher },
  { title: 'Innovative Curriculum', desc: 'Designed to foster critical thinking and creativity.', icon: teacher },
  { title: 'World-Class Facilities', desc: 'Learning in an inspiring, tech-enabled environment.', icon: teacher },
  { title: 'Character Building', desc: 'Education that nurtures both intellect and values.', icon: teacher },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  "https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  'https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];


// Card variant for staggered left entrance
const cardVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const WhyShaheenSection = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const featureRef = useRef(null);
  const featureControls = useAnimation();
  const featureInView = useInView(featureRef, { once: true });

  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true });

  useEffect(() => {
    if (featureInView) {
      featureControls.start("visible");
    }
  }, [featureInView]);

  return (
    <>
      {/* Features */}
      <section className="bg-black text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center text-3xl md:text-4xl font-bold"
          >
            <span className='text-[21px] font-[400] leading-[112%] text-centers'>WHAT’S THE DIFFERENCE?</span><br />

            <span className="text-white text-[60px] font-[400] leading-[112%] text-center ">WHY CHOOSE </span>
            <span className="text-green-500 text-[60px] font-[400] leading-[112%] text-center">SHAHEEN SCHOOLS?</span>


          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-[16px] text-gray-300 max-w-7xl mx-auto mt-4 font-poppins "
          >
            A beacon of innovation in the realm of learning.<br/> Here, memorization takes a backseat as the academy champions a profound understanding of concepts, paving the way for a vibrant learning atmosphere.
          </motion.p>

          <motion.div
            ref={featureRef}
            variants={containerVariants}
            initial="hidden"
            animate={featureControls}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-white text-black p-6 rounded-lg shadow-md font-poppins"
              >
                <img src={feature.icon} alt="icon" className="w-8 h-8 mb-4" />
                <h3 className="font-bold text-md">{feature.title}</h3>
                <p className="text-sm mt-2">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-black py-16 px-6 md:px-20">
        <div
          ref={galleryRef}
          className="relative max-w-7xl mx-auto grid grid-cols-6 gap-4 auto-rows-[100px]"
        >
          {galleryImages.map((src, i) => {
            const gridStyles = [
              'col-span-2 row-span-2', 'col-span-2 row-span-1',
              'col-span-1 row-span-1', 'col-span-1 row-span-2',
              'col-span-2 row-span-2', 'col-span-2 row-span-1',
              'col-span-1 row-span-1', 'col-span-2 row-span-1',
            ];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-xl overflow-hidden ${gridStyles[i % gridStyles.length]}`}
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white text-center py-16 px-6">
        <motion.p
          ref={ctaRef}
          initial={{ opacity: 0, x: -50 }}
          animate={ctaInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-[40px] font-[400] md:text-xl font-poppins"
        >
          At Shaheen School, students receive a comprehensive education that prioritizes academic excellence, etiquette, and personal development.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 px-6 py-2 border font-poppins border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition duration-300"
        >
          Enroll Today →
        </motion.button>
      </section>
    </>
  );
};

export default WhyShaheenSection;
