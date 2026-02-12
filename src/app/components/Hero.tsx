import { motion } from "motion/react";
import { X, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <motion.section 
      className="relative pt-24 pb-20 bg-[#F8F7F5]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-8xl lg:text-9xl font-serif text-[#8B1A1A] mb-12 md:mb-16 leading-[0.95] tracking-tight"
          style={{ fontFamily: 'serif' }}
        >
          For your nails
        </motion.h1>

        {/* Product Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {/* Manicure Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src="/images/nail_6.png"
                alt="Manicure services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
            </div>
            <div className="absolute top-4 right-4">
              <span className="text-white text-base md:text-lg font-medium uppercase tracking-wider">Manicure</span>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors">
                <X className="w-4 h-4 text-white" />
              </button>
              <span className="text-white/90 text-sm font-medium">Get with the</span>
            </div>
          </motion.div>

          {/* Nail Art Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src="/images/nail_5.png"
                alt="Nail Art"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <span className="text-white text-base md:text-lg font-medium uppercase tracking-wider">Nail Art</span>
              <span className="text-white text-xl md:text-2xl font-medium">24</span>
            </div>
          </motion.div>

          {/* Gel & Extensions Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src="/images/nail_4.png"
                alt="Gel & Extensions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B1A1A]/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-4 right-4">
              <button className="w-10 h-10 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Animated GIF Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 mb-12"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-premium border border-[#E8E6E9]/50 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <p className="text-[#8B1A1A] font-serif text-base md:text-lg mb-2">Get with the</p>
                <a 
                  href="#portfolio" 
                  className="text-xs md:text-sm text-[#666] hover:text-[#8B1A1A] transition-colors"
                >
                  View our nail artistry portfolio
                </a>
              </div>
              <div className="w-full md:w-96 rounded-lg overflow-hidden">
                <img
                  src="/images/loop_nails.gif"
                  alt="Nail art animation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
