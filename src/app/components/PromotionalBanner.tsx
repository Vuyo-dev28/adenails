import { motion } from "motion/react";

export function PromotionalBanner() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#8B1A1A] text-white text-sm py-2.5 px-6 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-2 relative z-10 text-center">
        <motion.div
          className="flex items-center gap-4 flex-wrap justify-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <motion.span
            className="font-medium"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Valentine's hands and toes combo
          </motion.span>
        </motion.div>
        <motion.span
          className="text-xs sm:text-sm"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Book your nail artistry session today
        </motion.span>
      </div>
      
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
