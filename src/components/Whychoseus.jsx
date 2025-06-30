import React from 'react';
import { motion } from 'framer-motion';
import teacher from '../assets/teacher.svg'

const features = [
    { title: 'The Best Teachers', desc: 'They inspire the next innovators in their respective fields.', icon: teacher },
    { title: 'The Best Teachers', desc: 'They inspire the next innovators in their respective fields.', icon: teacher },
    { title: 'The Best Teachers', desc: 'They inspire the next innovators in their respective fields.', icon: teacher },
    { title: 'The Best Teachers', desc: 'They inspire the next innovators in their respective fields.', icon: teacher },
];

const galleryImages = [
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg',
];

const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const WhyShaheenSection = () => {
    return (
        <>
            {/* Section Header + Features */}
            <section className="bg-black text-white py-20 px-6 md:px-20">
                <h2 className="text-center text-3xl md:text-4xl font-bold">
                    WHAT’S THE DIFFERENCE?<br />
                    <span className="text-white">WHY CHOOSE </span>
                    <span className="text-green-500">SHAHEEN SCHOOLS?</span>
                </h2>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mt-4">
                    A beacon of innovation in the realm of learning. Here, memorization takes a backseat as the academy champions a profound understanding of concepts, paving the way for a vibrant learning atmosphere.
                </p>

                {/* Feature Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="bg-white text-black p-6 rounded-lg shadow-md"
                            variants={slideInRight}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 0.5, delay: i * 0.3 }}
                            viewport={{ once: true }}
                        >
                            <img src={feature.icon} alt="icon" className="w-8 h-8 mb-4" />
                            <h3 className="font-bold text-md">{feature.title}</h3>
                            <p className="text-sm mt-2">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="bg-black py-16 px-6 md:px-20">
                <div className="relative max-w-7xl mx-auto grid grid-cols-6 gap-4 auto-rows-[100px]">
                    {galleryImages.map((src, i) => {
                        // Define custom grid positions
                        const gridStyles = [
                            'col-span-2 row-span-2', // large square
                            'col-span-2 row-span-1',
                            'col-span-1 row-span-1',
                            'col-span-1 row-span-2',
                            'col-span-2 row-span-2',
                            'col-span-2 row-span-1',
                            'col-span-1 row-span-1',
                            'col-span-2 row-span-1',
                        ];

                        return (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className={`rounded-xl overflow-hidden ${gridStyles[i % gridStyles.length]}`}
                            >
                                <img
                                    src={src}
                                    alt={`Gallery ${i + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </section>


            {/* CTA Section */}
            <section className="bg-black text-white text-center py-16 px-6">
                <motion.p
                    className="max-w-2xl mx-auto text-lg md:text-xl"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    At Shaheen School, students receive a comprehensive education that prioritizes academic excellence, etiquette, and personal development.
                </motion.p>
                <motion.button
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-6 px-6 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition duration-300"
                >
                    Enroll Today →
                </motion.button>
            </section>
        </>
    );
};

export default WhyShaheenSection;
