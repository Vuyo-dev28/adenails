import { motion } from "motion/react";
import { Heart } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image: "/images/insta_1.png",
    likes: 1243
  },
  {
    id: 2,
    image: "/images/insta_2.png",
    likes: 987
  },
  {
    id: 3,
    image: "/images/insta_3.png",
    likes: 2156
  },
  {
    id: 4,
    image: "/images/insta_4.png",
    likes: 1567
  },
  {
    id: 5,
    image: "/images/insta_5.png",
    likes: 892
  }
];

export function InstagramFeed() {
  return (
    <section className="py-28 md:py-32 bg-gradient-to-b from-white to-[#F8F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8B1A1A]/60 mb-4 font-medium">Instagram</p>
          <h2 className="text-5xl md:text-6xl lg:text-[3.5rem] mb-5 text-[#2a2a2a] tracking-premium">
            Follow Our <span className="text-[#8B1A1A] font-heading italic">Journey</span>
          </h2>
          <p className="text-xl text-[#5D5C6C] max-w-2xl mx-auto mb-6 leading-relaxed">
            Join our community and stay inspired with daily nail artistry
          </p>
          <a
            href="https://www.instagram.com/adenails/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#8B1A1A] hover:text-[#7A1515] transition-colors duration-300 uppercase tracking-wider text-sm"
          >
            @adenails
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/adenails/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-[#F5F5F5] shadow-premium transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-6 h-6 fill-white" />
                  <span className="text-lg">{post.likes.toLocaleString()}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.instagram.com/adenails/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 bg-[#8B1A1A] text-white rounded-xl hover:bg-[#7A1515] transition-all duration-300 uppercase tracking-[0.14em] text-sm font-medium"
            style={{ boxShadow: "0 2px 12px rgba(139, 26, 26, 0.25)" }}
          >
            Follow Us on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
