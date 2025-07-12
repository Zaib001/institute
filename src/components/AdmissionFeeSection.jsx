import PricingCard from "./PricingCard"; // Reuse your styled card
import { motion } from "framer-motion";
import img from '../assets/Learning.jpg';

export default function AdmissionFeeSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Left - Card */}
        <PricingCard
          title="INTEGRATED NEET/JEE/CA FOUNDATION"
          price="500"
          image={img}
          index={0}
        />

        {/* Right - Fee Breakdown */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-xl absolute left-[600px]"
        >
          <h3 className="text-3xl font-bold text-[#80986F] uppercase mb-2">One-Time Fees</h3>
          <p className="text-4xl font-bold text-black mb-6">Admission Fee: SAR 1,000.00</p>

          <h4 className="text-sm font-bold text-yellow-700 uppercase mb-1">Discounts:</h4>
          <ul className="text-base space-y-1 mb-4">
            <li>
              <span className="font-bold">Early Registration:</span>{" "}
              <span className="text-green-600 font-bold">10% Discount</span>
            </li>
            <li>
              <span className="font-bold">Sibling Discount:</span>{" "}
              <span className="text-green-600 font-bold">10% Discount</span>
            </li>
          </ul>

          <p className="text-sm text-black mb-1">Sibling no admission fee</p>
          <p className="text-sm text-black">All fees above are excluding VAT</p>
        </motion.div>
      </div>
    </section>
  );
}
