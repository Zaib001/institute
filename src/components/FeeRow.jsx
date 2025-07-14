import { motion } from "framer-motion";

export const FeeRow = ({ index, level, grades, notes, fee }) => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-4 items-center py-6 border-b border-gray-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <div className="text-left font-bold uppercase text-sm md:text-[40px] text-black">
        {level}
      </div>
      <div className="text-center text-xs md:text-sm text-black">
<p className="font-semibold text-[40px] leading-[40px] my-4">{grades}</p>
        <p className="text-[#80986F] font-semibold text-2xl">{notes}</p>
      </div>
      <div className="text-right text-xl md:text-7xl font-extrabold text-green-600">
        <span className="text-4xl text-black">SAR</span> {fee}
      </div>
    </motion.div>
  );
};
