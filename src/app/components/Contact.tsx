import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";
import { BookingDialog } from "./BookingDialog";

export function Contact() {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  return (
    <motion.section 
      className="py-28 md:py-32 bg-[#F8F7F5]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#8B1A1A]/60 mb-4 font-medium">Contact</p>
            <h2 className="text-5xl md:text-6xl lg:text-[3.5rem] mb-6 text-[#2a2a2a] tracking-premium">
              Visit Our <span className="text-[#8B1A1A] font-heading italic">Studio</span>
            </h2>
            <p className="text-xl text-[#5D5C6C] mb-12 leading-relaxed">
              Experience luxury in an environment designed for your comfort and
              tranquility. We look forward to welcoming you.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8B1A1A]/8 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#8B1A1A]/10">
                  <MapPin className="w-6 h-6 text-[#8B1A1A]" />
                </div>
                <div>
                  <h3 className="text-[#333333] mb-2">Location</h3>
                  <p className="text-[#6B6B6B]">
                    6 Kikuyu Road<br />
                    Sunninghill<br />
                    South Africa
                  </p>
                  <a
                    href="https://maps.app.goo.gl/gw7hF399j9nXZRxr6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8B1A1A] hover:text-[#7A1515] transition-colors duration-300 text-sm mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8B1A1A]/8 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#8B1A1A]/10">
                  <Phone className="w-6 h-6 text-[#8B1A1A]" />
                </div>
                <div>
                  <h3 className="text-[#333333] mb-2">Phone</h3>
                  <a
                    href="tel:+27613425838"
                    className="text-[#6B6B6B] hover:text-[#8B1A1A] transition-colors duration-300"
                  >
                    +27 61 342 5838
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8B1A1A]/8 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#8B1A1A]/10">
                  <MessageCircle className="w-6 h-6 text-[#8B1A1A]" />
                </div>
                <div>
                  <h3 className="text-[#333333] mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/27613425838"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6B6B] hover:text-[#8B1A1A] transition-colors duration-300"
                  >
                    Message us instantly
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8B1A1A]/8 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#8B1A1A]/10">
                  <Mail className="w-6 h-6 text-[#8B1A1A]" />
                </div>
                <div>
                  <h3 className="text-[#333333] mb-2">Email</h3>
                  <a
                    href="mailto:hello@luxenailstudio.com"
                    className="text-[#6B6B6B] hover:text-[#8B1A1A] transition-colors duration-300"
                  >
                    hello@adenails.com
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8B1A1A]/8 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#8B1A1A]/10">
                  <Instagram className="w-6 h-6 text-[#8B1A1A]" />
                </div>
                <div>
                  <h3 className="text-[#333333] mb-2">Social Media</h3>
                  <a
                    href="https://www.instagram.com/adenails/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B6B6B] hover:text-[#8B1A1A] transition-colors duration-300"
                  >
                    @adenails
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Hours & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-10 shadow-premium border border-[#E8E6E9]/80">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#8B1A1A]/8 rounded-xl flex items-center justify-center border border-[#8B1A1A]/10">
                  <Clock className="w-6 h-6 text-[#8B1A1A]" />
                </div>
                <h3 className="text-2xl text-[#333333]">Studio Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-[#E5E5E5]">
                  <span className="text-[#333333]">Monday - Friday</span>
                  <span className="text-[#6B6B6B]">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[#E5E5E5]">
                  <span className="text-[#333333]">Saturday</span>
                  <span className="text-[#6B6B6B]">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[#E5E5E5]">
                  <span className="text-[#333333]">Sunday</span>
                  <span className="text-[#6B6B6B]">11:00 AM - 5:00 PM</span>
                </div>
                <div className="pt-4">
                  <p className="text-sm text-[#6B6B6B] italic">
                    *Extended hours available by appointment for luxury tier clients
                  </p>
                </div>
              </div>
            </div>

            {/* Studio Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-premium border border-[#E8E6E9]/80 h-80">
              <div className="w-full h-full bg-gradient-to-br from-[#F5F5F5] to-[#E5E5E5] flex items-center justify-center relative">
                <img
                  src="/images/nail_3.png"
                  alt="Nail Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-white text-sm mb-2 uppercase tracking-wider">
                      Our Studio
                    </p>
                    <a
                      href="https://maps.app.goo.gl/gw7hF399j9nXZRxr6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#8B1A1A] transition-colors duration-300 flex items-center gap-2"
                    >
                      <MapPin className="w-5 h-5" />
                      <span>View on Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                onClick={() => setIsBookingDialogOpen(true)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
                className="px-8 py-4 bg-[#8B1A1A] text-white rounded-xl uppercase tracking-[0.14em] text-sm font-medium"
                style={{ boxShadow: "0 2px 12px rgba(139, 26, 26, 0.25)" }}
              >
                Book Now
              </motion.button>
              <motion.a
                href="https://wa.me/27613425838"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#2a2a2a] rounded-xl hover:bg-[#FAFAFA] transition-all duration-300 border border-[#8B1A1A]/25 uppercase tracking-[0.14em] text-sm font-medium text-center shadow-premium"
              >
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <BookingDialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen} />
    </motion.section>
  );
}
