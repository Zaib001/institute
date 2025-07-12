import { motion } from "framer-motion";

export default function PricingCard({ title, price, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="w-[395px] h-[651px] rounded-[40px] overflow-hidden shadow-md bg-white flex flex-col"
    >
      {/* Top: Background Image with dark overlay */}
      <div className="relative h-[70%]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
          <h3 className="text-white text-2xl md:text-4xl font-extrabold leading-tight uppercase">
            {title}
          </h3>
        </div>
      </div>

      {/* Bottom: Price */}
      <div className="h-[30%] bg-black text-center flex flex-col justify-center rounded-b-[40px]">
        <p className="text-white text-md mb-1">SAR</p>
        <p className="text-green-500 text-7xl font-extrabold">{price}</p>
      </div>
    </motion.div>
  );
}
