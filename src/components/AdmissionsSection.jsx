import { motion } from "framer-motion";

export default function AdmissionsSection() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row">
            {/* Left side - features */}
            <motion.div
                className="w-full md:w-1/2 bg-white text-black px-8 py-16 space-y-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-4xl font-bold text-[#77C152] uppercase">
                    Don't Miss Your Chance to Join Shaheen Group of Institutions, Riyadh
                </h3>

                <div className="space-y-4 text-sm md:text-base font-poppins">
                    <div>
                        <strong>Why Choose Shaheen?</strong><br />
                        A Legacy of Excellence: Shaheen, a renowned educational institution with a 35-year legacy, is expanding its global footprint to Riyadh.
                    </div>
                    <div>
                        <strong>World-Class Education:</strong><br />
                        Experience a world-class education with a focus on academic excellence and holistic development.
                    </div>
                    <div>
                        <strong>Experienced Faculty:</strong><br />
                        Learn from highly qualified and experienced teachers.
                    </div>
                    <div>
                        <strong>State-of-the-Art Facilities:</strong><br />
                        Benefit from modern classrooms, laboratories, and libraries.
                    </div>
                    <div>
                        <strong>Holistic Development:</strong><br />
                        Cultivate your child's intellectual, emotional, and social skills.
                    </div>
                    <div>
                        <strong>Competitive Fees:</strong><br />
                        Affordable fees without compromising on quality.
                    </div>
                </div>
            </motion.div>

            {/* Right side - CTA */}
            <motion.div
                className="w-full md:w-1/2 bg-black text-green-500 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h1 className="text-4xl md:text-8xl font-extrabold uppercase">
                    Admissions:<br />
                    Reserve<br />
                    Your <br />Child's Seat<br />
                    Today!
                </h1>
            </motion.div>
        </section>
    );
}
