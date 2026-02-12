import { motion } from "motion/react";
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    image: "/images/nail_1.png",
    title: "Black & Leopard Stiletto",
    category: "Bold"
  },
  {
    id: 2,
    image: "/images/nail_7.png",
    title: "Coffin Artistry Collection",
    category: "Premium"
  },
  {
    id: 3,
    image: "/images/nail_3.png",
    title: "Butterfly & Rhinestone",
    category: "Elegant"
  },
  {
    id: 4,
    image: "/images/nail_8.png",
    title: "Leopard & Gold Accents",
    category: "Bold"
  },
  {
    id: 5,
    image: "/images/nail_9.png",
    title: "Silver Chrome & Cross",
    category: "Luxury"
  },
  {
    id: 6,
    image: "/images/nail_10.png",
    title: "French Tip with Charms",
    category: "Elegant"
  }
];

const categories = ["All", "Elegant", "Minimalist", "Bold", "Premium", "Luxury"];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <motion.section 
      className="py-28 md:py-32 bg-[#F8F7F5]"
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
          <p className="text-xs uppercase tracking-[0.2em] text-[#8B1A1A]/60 mb-4 font-medium">Portfolio</p>
          <h2 className="text-5xl md:text-6xl lg:text-[3.5rem] mb-5 text-[#2a2a2a] tracking-premium">
            Our <span className="text-[#8B1A1A] font-heading italic">Artistry</span>
          </h2>
          <p className="text-xl text-[#5D5C6C] max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of bespoke nail designs,
            each crafted with meticulous attention to detail
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 uppercase tracking-wider text-sm ${
                selectedCategory === category
                  ? "bg-[#8B1A1A] text-white shadow-md"
                  : "bg-[#F5F5F5] text-[#5D5C6C] hover:bg-[#E5E5E5]"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-[#F5F5F5] shadow-premium transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                hoveredItem === item.id ? "opacity-100" : "opacity-0"
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8B1A1A] mb-2 font-medium">
                    {item.category}
                  </p>
                  <h3 className="text-2xl">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-white text-[#2a2a2a] rounded-xl hover:bg-[#FAFAFA] transition-all duration-300 border border-[#8B1A1A]/25 uppercase tracking-[0.14em] text-sm font-medium shadow-premium"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
