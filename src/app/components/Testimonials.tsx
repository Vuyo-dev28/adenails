import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Fashion Executive",
    image: "https://images.unsplash.com/photo-1762341124796-530c0085f7d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhbmRzJTIwZWxlZ2FudCUyMGpld2Vscnl8ZW58MXx8fHwxNzcwODc5Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Absolutely exquisite. The attention to detail is unmatched. Every visit feels like a luxurious escape, and my nails have never looked better.",
    rating: 5
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBlbGVnYW50fGVufDF8fHx8MTc3MDg3OTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "The premium service is worth every penny. The ambiance, the technique, the results - everything exceeds expectations. I'm a client for life.",
    rating: 5
  },
  {
    id: 3,
    name: "Isabella Laurent",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1762373349045-c2decd4ec3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMG5haWxzJTIwYmVhdXR5JTIwaGFuZHN8ZW58MXx8fHwxNzcwODc5MjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "I've tried countless nail studios, but this is in a league of its own. The artistry is impeccable, and the experience is pure indulgence.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-28 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#6F4F7B]/60 mb-4 font-medium">Testimonials</p>
          <h2 className="text-5xl md:text-6xl lg:text-[3.5rem] mb-5 text-[#2a2a2a] tracking-premium">
            Client <span className="text-[#6F4F7B] font-heading italic">Stories</span>
          </h2>
          <p className="text-xl text-[#5D5C6C] max-w-2xl mx-auto leading-relaxed">
            Hear from our distinguished clientele who trust us with their beauty
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full bg-white rounded-2xl p-10 border border-[#E8E6E9]/80 shadow-premium shadow-premium-hover transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#6F4F7B]/8 flex items-center justify-center mb-6 border border-[#6F4F7B]/10">
                  <Quote className="w-6 h-6 text-[#6F4F7B]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#6F4F7B] text-[#6F4F7B]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#2a2a2a] mb-8 leading-[1.75] italic font-heading text-lg">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#E8E6E9]/80">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-[#F5F5F5]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#333333] mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-[#6B6B6B]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center items-center gap-16 text-center"
        >
          <div>
            <div className="text-4xl font-heading font-medium text-[#6F4F7B] mb-2 tracking-premium">500+</div>
            <div className="text-[#6B6B6B] uppercase tracking-wider text-sm">
              Happy Clients
            </div>
          </div>
          <div className="w-px h-12 bg-[#E5E5E5]" />
          <div>
            <div className="text-4xl text-[#6F4F7B] mb-2">5.0</div>
            <div className="text-[#6B6B6B] uppercase tracking-wider text-sm">
              Average Rating
            </div>
          </div>
          <div className="w-px h-12 bg-[#E5E5E5]" />
          <div>
            <div className="text-4xl font-heading font-medium text-[#6F4F7B] mb-2 tracking-premium">8+</div>
            <div className="text-[#6B6B6B] uppercase tracking-wider text-sm">
              Years Experience
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
