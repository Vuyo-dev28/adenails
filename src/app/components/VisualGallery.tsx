import { motion } from "motion/react";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    image: "/images/nail_2.png",
    title: "Stiletto Elegance",
    description: "Bold and beautiful"
  },
  {
    id: 2,
    image: "/images/nail_5.png",
    title: "Coffin Collection",
    description: "Modern sophistication"
  },
  {
    id: 3,
    image: "/images/nail_7.png",
    title: "Butterfly Dreams",
    description: "Delicate details"
  },
  {
    id: 4,
    image: "/images/nail_8.png",
    title: "Leopard Luxury",
    description: "Wild elegance"
  },
  {
    id: 5,
    image: "/images/nail_9.png",
    title: "Chrome Perfection",
    description: "Metallic shine"
  },
  {
    id: 6,
    image: "/images/nail_10.png",
    title: "French Classic",
    description: "Timeless beauty"
  }
];

export function VisualGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <motion.section 
      className="py-28 md:py-32 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B1A1A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B1A1A]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8B1A1A]/60 mb-4 font-medium">
            Visual Showcase
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-[3.5rem] mb-5 text-[#2a2a2a] tracking-premium">
            Our <span className="text-[#8B1A1A] font-heading italic">Gallery</span>
          </h2>
          <p className="text-xl text-[#5D5C6C] max-w-2xl mx-auto leading-relaxed">
            Explore the artistry and craftsmanship behind every design
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item.id)}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-[#F5F5F5] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-[#8B1A1A]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-[#8B1A1A] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Large Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-premium"
        >
          <div className="relative aspect-[16/9]">
            <img
              src="/images/loop_nails.gif"
              alt="Featured Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-heading mb-3">Featured Collection</h3>
              <p className="text-lg text-white/90 max-w-2xl">
                Discover our most requested designs, each crafted with precision and passion
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
