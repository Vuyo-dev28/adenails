import { motion } from "motion/react";
import { Heart, Award, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion for Perfection",
    description: "Every nail is a canvas, every design a masterpiece crafted with meticulous attention to detail."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the finest products and techniques to ensure lasting beauty and nail health."
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Each client receives individualized attention and care tailored to their unique style and needs."
  },
  {
    icon: Sparkles,
    title: "Artistic Excellence",
    description: "From classic elegance to bold creativity, we bring your vision to life with artistic flair."
  }
];

export function About() {
  return (
    <motion.section 
      className="py-28 md:py-32 bg-white"
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
          <p className="text-xs uppercase tracking-[0.2em] text-[#8B1A1A]/60 mb-4 font-medium">About</p>
          <h2 className="text-5xl md:text-6xl lg:text-[3.5rem] mb-5 text-[#2a2a2a] tracking-premium">
            Our <span className="text-[#8B1A1A] font-heading italic">Story</span>
          </h2>
          <p className="text-xl text-[#5D5C6C] max-w-3xl mx-auto leading-relaxed">
            Our priority is to make sure you satisfied and happy with your nails.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#8B1A1A]/8 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#8B1A1A]/10">
                  <IconComponent className="w-8 h-8 text-[#8B1A1A]" />
                </div>
                <h3 className="text-xl font-medium text-[#2a2a2a] mb-3">{value.title}</h3>
                <p className="text-[#5D5C6C] leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <img
              src="/images/nail_8.png"
              alt="Nail artistry"
              className="w-full h-full object-cover rounded-2xl shadow-premium"
            />
            {/* Additional Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="/images/nail_9.png"
                alt="Nail design"
                className="w-full aspect-square object-cover rounded-xl shadow-md"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                src="/images/nail_10.png"
                alt="Nail design"
                className="w-full aspect-square object-cover rounded-xl shadow-md"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-heading text-[#2a2a2a] tracking-premium">
              Crafting Beauty, One Nail at a Time
            </h3>
            <p className="text-[#5D5C6C] leading-relaxed">
              Located at 6 Kikuyu Road, Sunninghill, Adenails is dedicated to providing exceptional nail artistry services.
              Our team of skilled artists combines traditional techniques with innovative designs to create stunning results.
            </p>
            <p className="text-[#5D5C6C] leading-relaxed">
              We understand that your nails are an extension of your personal style. That's why we take
              the time to understand your preferences, lifestyle, and aesthetic goals, ensuring every
              visit is a personalized experience that exceeds expectations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#8B1A1A] text-white rounded-xl hover:bg-[#7A1515] transition-all duration-300 uppercase tracking-[0.14em] text-sm font-medium"
              style={{ boxShadow: "0 2px 12px rgba(139, 26, 26, 0.25)" }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
