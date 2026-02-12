import { motion } from "motion/react";
import { MessageCircle, Calendar, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const handleWhatsApp = () => {
    window.open("https://wa.me/27613425838", "_blank");
    onOpenChange(false);
  };

  const handleCalendar = () => {
    // Scroll to booking section or open calendar booking
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-[#E8E6E9]/80">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-[#2a2a2a] text-center">
            Choose Booking Method
          </DialogTitle>
          <DialogDescription className="text-center text-[#5D5C6C] pt-2">
            Select how you'd like to book your appointment
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-4 mt-6">
          {/* WhatsApp Option */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="flex items-center gap-4 p-6 rounded-xl bg-[#2a2a2a] text-white hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg group"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-lg mb-1">WhatsApp Booking</h3>
              <p className="text-sm text-white/90">Message us directly on WhatsApp</p>
            </div>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>

          {/* Calendar Option */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCalendar}
            className="flex items-center gap-4 p-6 rounded-xl bg-[#8B1A1A] text-white hover:bg-[#7A1515] transition-all duration-300 shadow-lg group"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-lg mb-1">Calendar Booking</h3>
              <p className="text-sm text-white/90">View available time slots</p>
            </div>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </div>

        <p className="text-xs text-[#5D5C6C] text-center mt-6">
          Need help? Contact us at{" "}
          <a href="tel:+27613425838" className="text-[#8B1A1A] hover:underline">
            +27 61 342 5838
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
}
