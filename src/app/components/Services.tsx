import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

const service = {
  id: 1,
  tier: "Nail Services",
  duration: "60-120 min",
  icon: Sparkles,
  description: "Professional nail artistry and care",
  features: [
    "Manicure & pedicure",
    "Gel nails & extensions",
    "Nail art & designs",
    "Nail repair & maintenance",
    "Cuticle care",
    "Nail shaping & buffing"
  ],
  gradient: "from-[#8B1A1A]/10 to-[#F8F7F5]/30"
};

export function Services() {
  return (
    <motion.section 
      className="py-28 md:py-32 bg-gradient-to-b from-[#F8F7F5] to-white/90"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8B1A1A]/60 mb-4 font-medium">Services</p>
          <h2 className="text-5xl md:text-6xl lg:text-[3.5rem] mb-5 text-[#2a2a2a] tracking-premium">
            Our <span className="text-[#8B1A1A] font-heading italic">Nail Services</span>
          </h2>
          <p className="text-xl text-[#5D5C6C] max-w-2xl mx-auto leading-relaxed">
            Professional nail artistry and care tailored to your style
          </p>
        </motion.div>

        {/* Service Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-md w-full"
          >
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`h-full bg-gradient-to-br ${service.gradient} rounded-2xl p-10 border border-[#E8E6E9]/80 transition-all duration-300 shadow-premium shadow-premium-hover relative overflow-hidden`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <img
                  src="/images/nail_2.png"
                  alt={service.tier}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[#8B1A1A]">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-heading font-medium mb-2 text-[#2a2a2a] tracking-premium">{service.tier}</h3>
                  <p className="text-[#5D5C6C] mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#5D5C6C]">Duration: {service.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#8B1A1A]" />
                      <span className="text-[#333333]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 rounded-xl uppercase tracking-[0.14em] text-sm font-medium transition-all duration-300 bg-[#8B1A1A] text-white hover:bg-[#7A1515]"
                  style={{ boxShadow: "0 2px 12px rgba(139, 26, 26, 0.25)" }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-[#5D5C6C] max-w-3xl mx-auto">
            All nail services include a consultation to ensure your vision comes to life.
            Custom nail art designs and special requests are available upon inquiry.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
