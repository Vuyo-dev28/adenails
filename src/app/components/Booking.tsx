import { motion } from "motion/react";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";
import { BookingDialog } from "./BookingDialog";

export function Booking() {
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);

  return (
    <motion.section 
      className="py-28 md:py-32 bg-gradient-to-br from-[#8B1A1A] to-[#6B1414] text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4 font-medium">Booking</p>
          <h2 className="text-5xl md:text-6xl lg:text-[3.5rem] mb-5 tracking-premium">
            Reserve Your <span className="text-[#C4B5D0] font-heading italic">Experience</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Limited appointments available. Book your exclusive session today
            and elevate your nail care to an art form.
          </p>
        </motion.div>

        {/* Booking Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -2 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3">Online Booking</h3>
            <p className="text-gray-300 mb-6">
              View real-time availability and book instantly through our secure
              online system.
            </p>
            <div className="text-white/90 uppercase tracking-wider text-sm flex items-center gap-2">
              Book Now →
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -2 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-10 border border-white/10 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3">Concierge Service</h3>
            <p className="text-gray-300 mb-6">
              Prefer a personal touch? Contact our concierge team for
              personalized booking assistance.
            </p>
            <div className="text-white/90 uppercase tracking-wider text-sm flex items-center gap-2">
              Contact Us →
            </div>
          </motion.div>
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <motion.button
            onClick={() => setIsBookingDialogOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-5 bg-white text-[#8B1A1A] rounded-xl hover:bg-white/90 transition-all duration-300 uppercase tracking-[0.14em] text-sm font-medium mb-6"
            style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }}
          >
            Schedule Your Appointment
          </motion.button>
          <p className="text-sm text-gray-400">
            New clients receive 15% off their first premium or luxury service
          </p>
        </motion.div>

        {/* Booking Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-white/90 mb-2 uppercase tracking-wider text-sm">
                Cancellation
              </h4>
              <p className="text-gray-300 text-sm">
                24-hour notice required for changes or cancellations
              </p>
            </div>
            <div>
              <h4 className="text-white/90 mb-2 uppercase tracking-wider text-sm">
                Deposits
              </h4>
              <p className="text-gray-300 text-sm">
                50% deposit required for luxury tier appointments
              </p>
            </div>
            <div>
              <h4 className="text-white/90 mb-2 uppercase tracking-wider text-sm">
                Gift Cards
              </h4>
              <p className="text-gray-300 text-sm">
                The perfect gift for someone special - available online
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <BookingDialog open={isBookingDialogOpen} onOpenChange={setIsBookingDialogOpen} />
    </motion.section>
  );
}
